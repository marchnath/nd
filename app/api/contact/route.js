import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact";

// Basic in-memory rate limiter (per-instance). For production, prefer Redis or Vercel KV.
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_PER_IP = 10; // per window per IP
const MAX_PER_EMAIL = 5; // per window per email (when provided)

const bucketsByIp = new Map();
const bucketsByEmail = new Map();

function getClientIp(req) {
  const xfwd = req.headers.get("x-forwarded-for");
  if (xfwd) return xfwd.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}

function checkBucket(map, key, limit) {
  const now = Date.now();
  let bucket = map.get(key);
  if (!bucket || now > bucket.resetAt) {
    bucket = { count: 0, resetAt: now + WINDOW_MS };
  }
  bucket.count += 1;
  map.set(key, bucket);
  const remaining = Math.max(0, limit - bucket.count);
  const limited = bucket.count > limit;
  const retryAfter = limited ? Math.ceil((bucket.resetAt - now) / 1000) : 0;
  return {
    limited,
    retryAfter,
    remaining,
    resetAt: Math.ceil(bucket.resetAt / 1000),
  };
}

export async function POST(req) {
  try {
    const payload = await req.json();

    // Rate limit checks
    const ip = getClientIp(req);
    const ipCheck = checkBucket(bucketsByIp, ip, MAX_PER_IP);
    if (ipCheck.limited) {
      return new NextResponse(
        JSON.stringify({
          ok: false,
          error: "Too many requests. Please try again later.",
        }),
        {
          status: 429,
          headers: {
            "Retry-After": String(ipCheck.retryAfter),
            "X-RateLimit-Limit": String(MAX_PER_IP),
            "X-RateLimit-Remaining": String(ipCheck.remaining),
            "X-RateLimit-Reset": String(ipCheck.resetAt),
          },
        }
      );
    }

    // Validate and normalize
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const { zodToErrors } = await import("@/lib/schemas/contact");
      return NextResponse.json(
        { ok: false, errors: zodToErrors(parsed.error) },
        { status: 400 }
      );
    }
    const {
      name: _name,
      email: _email,
      phone: _phone,
      message: _message,
      source = "web",
    } = parsed.data;

    // Rate limit by email after validation (so malformed emails don't create buckets)
    const emailCheck = checkBucket(bucketsByEmail, _email, MAX_PER_EMAIL);
    if (emailCheck.limited) {
      return new NextResponse(
        JSON.stringify({
          ok: false,
          error: "Too many requests for this email. Please try again later.",
        }),
        {
          status: 429,
          headers: {
            "Retry-After": String(emailCheck.retryAfter),
            "X-RateLimit-Limit": String(MAX_PER_EMAIL),
            "X-RateLimit-Remaining": String(emailCheck.remaining),
            "X-RateLimit-Reset": String(emailCheck.resetAt),
          },
        }
      );
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID; // user/channel/group ID (for groups, ensure the bot is added)

    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Server is not configured for Telegram. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.",
        },
        { status: 500 }
      );
    }

    // Compose a readable Telegram message. Telegram message limit is 4096 chars.
    const submittedAt = new Date().toISOString();
    const lines = [
      "New Contact Request ✅",
      `Source: ${source}`,
      `Name: ${_name}`,
      `Email: ${_email}`,
      _phone ? `Phone: ${_phone}` : null,
      `Time: ${submittedAt}`,
      "---",
      _message,
    ].filter(Boolean);
    let text = lines.join("\n");
    if (text.length > 4096) text = text.slice(0, 4090) + "…"; // hard cap for Telegram

    const tgUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const tgRes = await fetch(tgUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
      // If you want Markdown/HTML formatting, set parse_mode, but keep plain text for safety
    });

    const tgJson = await tgRes.json().catch(() => null);
    if (!tgRes.ok || !(tgJson && tgJson.ok)) {
      const detail =
        tgJson && tgJson.description
          ? tgJson.description
          : "Unknown Telegram error";
      return NextResponse.json(
        { ok: false, error: `Failed to send message: ${detail}` },
        { status: 502 }
      );
    }

    const okHeaders = new Headers({
      "X-RateLimit-Limit": String(MAX_PER_IP),
      "X-RateLimit-Remaining": String(ipCheck.remaining),
      "X-RateLimit-Reset": String(ipCheck.resetAt),
    });
    return new NextResponse(
      JSON.stringify({ ok: true, message: "Message sent successfully." }),
      { status: 200, headers: okHeaders }
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}

export function GET() {
  // Optional: quick health check of the route
  return NextResponse.json({ status: "ok" });
}
