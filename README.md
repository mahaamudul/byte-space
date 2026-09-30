ByteSpace

![ByteSpace landing page](https://i.ibb.co.com/fGnmPKDc/image.png)

ByteSpace is a responsive online learning platform interface for discovering courses, exploring learning paths, joining as a creator, and hearing from the community.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Next Image and optimized static assets

## Requirements

- Node.js 20.9 or newer
- npm

## Installation

```bash
git clone <repository-url>
cd byte-space-frontend
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Routes

- `/` - ByteSpace landing page
- `/login` - Login page
- `/register` - Registration page

## Project Structure

```text
src/app/                  App Router pages and global styles
src/componets/home/       Landing page sections
src/componets/shared/     Navigation and footer
src/componets/ui/         Reusable cards, buttons, and form controls
public/assets/            Local illustrations and interface assets
public/data/data.json     Course card data
```

## Development Notes

Course and testimonial content is rendered from local data or component configuration. Images are served through `next/image`; external Unsplash sources are configured in `next.config.ts`.

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
