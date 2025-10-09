import { z } from "zod";

// Shared contact form schema used on client and server
export const contactSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, "Name must be 2-80 characters.")
    .max(80, "Name must be 2-80 characters."),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Enter a valid email.")
    .max(120, "Enter a valid email.")
    .transform((v) => v.toLowerCase()),
  phone: z
    .string()
    .trim()
    .max(40, "Phone is too long.")
    .optional()
    .transform((v) => (typeof v === "string" ? v : "")),
  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, "Message must be 10-3000 characters.")
    .max(3000, "Message must be 10-3000 characters."),
  source: z.string().optional().default("web"),
});

export const clientContactSchema = contactSchema.pick({
  name: true,
  email: true,
  phone: true,
  message: true,
});

export function zodToErrors(err) {
  const out = {};
  if (!err || !err.issues) return out;
  for (const issue of err.issues) {
    const key =
      Array.isArray(issue.path) && issue.path.length ? issue.path[0] : "form";
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
