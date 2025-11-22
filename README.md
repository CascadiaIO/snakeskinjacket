# snakeskinjacket

A small Next.js app that demonstrates responsive "live" and "offline" views with separate desktop and mobile components. Built with the Next.js App Router and PostCSS; optimized for easy local development and deployment.

**Features:**

- Responsive live/offline UI variants for desktop and mobile (`components/`)
- Background assets under `public/bgs/`
- Built with Next.js App Router and PostCSS (`app/`, `globals.css`)

## Quick Start

Prerequisites: Node.js and npm installed.

Install dependencies:

```powershell
npm install
```

Run the development server:

```powershell
npm run dev
```

Open `http://localhost:3000` in your browser.

Build for production:

```powershell
npm run build
npm start
```

Run the linter:

```powershell
npm run lint
```

## Project Structure

- `app/` — Next.js app routes and global layout (`page.tsx`, `layout.tsx`)
- `components/` — UI pieces for `live` and `offline` (desktop + mobile)
- `public/` — static assets (backgrounds, fonts)
- `globals.css` — global styles

## Deployment

This project can be deployed to Vercel or any Node-compatible hosting. See the Next.js docs for deployment guidance.

## Contributing

If you'd like to contribute, open an issue or submit a PR. Keep changes focused and include a short description of the intent.

## License

No license is specified in `package.json`. Add a `license` field if you wish to make this project open source.

---

If you'd like a more detailed README (installation matrix, tests, CI, or deployment examples), tell me what to include and I'll add it.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
