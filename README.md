# Personal Website Template

A modern, fully customizable personal website built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, and **shadcn/ui**. Designed to deploy to **Vercel** in minutes.

## ✨ Features

- **Config-driven** — Edit ONE file (`src/config/site.ts`) to customize everything
- **Light / Dark mode** with system preference detection
- **Fully responsive** — Mobile-first design that looks great on any device
- **Animated** — Smooth scroll, fade-in-on-scroll, hover effects via Framer Motion
- **Sections included**:
  - Hero with animated intro, avatar, social links
  - About with bio, quick facts, resume link
  - Skills grouped by category
  - Projects with featured highlights
  - Experience timeline
  - Contact form (opens email client)
- **Accessible** — Semantic HTML, ARIA labels, keyboard-friendly
- **SEO-ready** — Open Graph + Twitter cards out of the box

## 🚀 Quick Start (Local)

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build
```

Visit `http://localhost:3000` in your browser.

## 🛠️ Customize Your Site

**Open `src/config/site.ts`** — this is the ONLY file you need to edit.

Update these fields:

| Field | What it controls |
|-------|-----------------|
| `name` | Your name (navbar, hero, footer) |
| `role` | Your job title / tagline |
| `heroBio` | Short intro on hero section |
| `aboutParagraphs` | About section text (array of paragraphs) |
| `avatarUrl` | Path to your profile pic (e.g. `/profile.jpg`) |
| `avatarFallbackInitials` | Initials shown if no avatar (e.g. `"AR"`) |
| `location` | Where you're based |
| `availableForWork` | `true` shows a green "Available" badge |
| `resumeUrl` | Path to your resume PDF |
| `email` | Your contact email |
| `socials` | GitHub, LinkedIn, Twitter, Instagram, Dribbble (leave `""` to hide) |
| `skills` | Array of `{ category, items[] }` |
| `projects` | Array of project objects |
| `experience` | Array of work experience entries |

### Add your profile picture

Drop an image into the `/public` folder (e.g. `public/profile.jpg`), then set:

```ts
avatarUrl: "/profile.jpg",
```

### Add your resume

Drop a PDF into `/public` (e.g. `public/resume.pdf`), then set:

```ts
resumeUrl: "/resume.pdf",
```

## ☁️ Deploy to Vercel

### Option A: One-click deploy (recommended)

1. **Push this project to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/my-website.git
   git push -u origin main
   ```

2. **Go to [vercel.com/new](https://vercel.com/new)** and sign in with GitHub.

3. **Import your repository** — Vercel auto-detects Next.js, so you don't need to configure anything.

4. Click **Deploy**. Your site will be live at `https://<your-project>.vercel.app` in ~1 minute.

### Option B: Use the Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

After deploying, go to **Settings → Domains** in your Vercel dashboard to add a custom domain (e.g. `yourname.com`). Vercel will handle SSL automatically.

## 🎨 Customizing the Look

### Change accent color

In `src/app/globals.css`, modify the `--primary` CSS variable under `:root` and `.dark`:

```css
:root {
  /* Change from default black to e.g. emerald */
  --primary: oklch(0.55 0.15 150);
  --primary-foreground: oklch(0.985 0 0);
}
```

Or swap the entire palette by replacing the oklch values.

### Change fonts

In `src/app/layout.tsx`, swap `Geist` for any [Google Font](https://fonts.google.com/):

```ts
import { Inter } from "next/font/google";
const sans = Inter({ variable: "--font-geist-sans", subsets: ["latin"] });
```

### Add or remove sections

Edit `src/app/page.tsx` — comment out or remove any section component you don't want.

## 📁 Project Structure

```
.
├── public/                      # Static assets (images, resume, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind + theme variables
│   │   ├── layout.tsx           # Root layout + metadata
│   │   └── page.tsx             # Main page (composes all sections)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx       # Sticky nav with smooth scroll
│   │   │   ├── footer.tsx       # Footer with links + socials
│   │   │   └── theme-toggle.tsx # Dark/light toggle
│   │   ├── sections/
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   └── section-heading.tsx
│   │   └── ui/                  # shadcn/ui primitives
│   ├── config/
│   │   └── site.ts              # ⭐ EDIT THIS to customize everything
│   ├── providers/
│   │   └── theme-provider.tsx   # next-themes wrapper
│   └── lib/
│       └── utils.ts             # cn() helper
├── prisma/                      # Database schema (unused by default)
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## 📧 Wiring up the contact form

By default, the contact form opens the visitor's email client pre-filled to your address (using `mailto:`). To collect submissions programmatically:

1. Create an API route at `src/app/api/contact/route.ts`
2. Use a service like [Resend](https://resend.com), [EmailJS](https://emailjs.com), or [Formspree](https://formspree.io)
3. Update `src/components/sections/contact-section.tsx` to POST to your API

## 📝 Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui (New York style) |
| Icons | lucide-react |
| Animation | Framer Motion |
| Theme | next-themes |

## 📄 License

MIT — free to use, modify, and distribute.
