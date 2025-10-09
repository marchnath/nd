This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact form → Telegram setup

The Hero contact form posts to `/api/contact`, which validates input server-side and sends the message to a Telegram chat using a bot. To enable this:

1. Create a bot via @BotFather in Telegram and copy the bot token.
2. Get a chat ID where the messages should go. Options:
   - For a private chat with your bot, start a chat with it and use a service like @userinfobot to get your numeric user ID; or
   - For a group, add your bot to the group and send a message, then fetch updates via the Telegram API or use tools like @RawDataBot to discover the chat ID. Group IDs are usually negative numbers.
3. Create a `.env.local` file in the project root with:

```
TELEGRAM_BOT_TOKEN=123456:abc... # from BotFather
TELEGRAM_CHAT_ID=123456789        # your user or group chat id (negative for groups)
```

4. Restart the dev server after changing env vars. The API will respond with a helpful error if these are missing.

Security note: Do not expose these secrets to the client. They are read only on the server in the API route.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# chat

# nd
