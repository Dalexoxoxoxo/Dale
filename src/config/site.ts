/**
 * ============================================================
 *  SITE CONFIG - EDIT THIS FILE TO CUSTOMIZE YOUR WEBSITE
 * ============================================================
 *
 *  This is the ONLY file you need to edit to make this site
 *  your own. Update the values below with your information,
 *  and the entire site will update automatically.
 *
 *  After editing, commit & push to GitHub — Vercel will
 *  redeploy automatically.
 * ============================================================
 */

export interface SiteConfig {
  // Your name and tagline (shown in navbar, hero, footer)
  name: string;
  role: string;
  tagline: string;

  // Your short bio shown in the hero section
  heroBio: string;

  // About section (supports multiple paragraphs)
  aboutTitle: string;
  aboutParagraphs: string[];

  // Profile picture URL — drop an image into /public/ and reference it here
  // e.g. "/profile.jpg" — or use an external URL
  avatarUrl: string;
  avatarFallbackInitials: string;

  // Location and availability status
  location: string;
  availableForWork: boolean;
  resumeUrl?: string;

  // Contact email
  email: string;

  // Social links (leave empty string "" to hide)
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    dribbble: string;
  };

  // Skills grouped by category
  skills: {
    category: string;
    items: string[];
  }[];

  // Featured projects
  projects: {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    repo?: string;
    image?: string;
    featured?: boolean;
  }[];

  // Work experience timeline
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
    highlights?: string[];
  }[];

  // Theme accent color — pick from: emerald, rose, amber, violet, cyan, orange
  accent: "emerald" | "rose" | "amber" | "violet" | "cyan" | "orange";
}

export const siteConfig: SiteConfig = {
  name: "Alex Rivera",
  role: "Full-Stack Developer & Designer",
  tagline: "Building delightful digital experiences",

  heroBio:
    "I'm a full-stack developer who loves turning complex problems into elegant, user-friendly products. Currently focused on building tools that help people work smarter.",

  aboutTitle: "A bit about me",
  aboutParagraphs: [
    "I'm a developer with 6+ years of experience crafting products end-to-end — from database schema design to pixel-perfect UI. I've worked at early-stage startups where I wore many hats and at larger companies where I learned the value of focus and craft.",
    "When I'm not coding, you'll find me sketching UI ideas in a notebook, contributing to open source, or chasing the perfect cup of coffee. I believe great software is built at the intersection of empathy, curiosity, and rigorous attention to detail.",
    "I'm always excited to collaborate on projects that have a real impact on people's lives. If you're building something meaningful, let's talk.",
  ],

  avatarUrl: "",
  avatarFallbackInitials: "AR",

  location: "San Francisco, CA",
  availableForWork: true,
  resumeUrl: "/resume.pdf",

  email: "hello@alexrivera.dev",

  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    instagram: "",
    dribbble: "",
  },

  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "PostgreSQL", "Prisma", "Redis", "GraphQL"],
    },
    {
      category: "Design",
      items: ["Figma", "Design Systems", "Prototyping", "User Research"],
    },
    {
      category: "DevOps",
      items: ["Vercel", "Docker", "AWS", "GitHub Actions"],
    },
  ],

  projects: [
    {
      title: "TaskFlow",
      description:
        "A collaborative task manager with real-time sync, keyboard-first navigation, and a beautiful command palette. Built for teams that move fast.",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "https://example.com",
      repo: "https://github.com/",
      featured: true,
    },
    {
      title: "PixelPilot",
      description:
        "An AI-powered image editor that lets you describe edits in plain English and watches them happen. Powered by diffusion models.",
      tags: ["React", "Python", "AI"],
      link: "https://example.com",
      repo: "https://github.com/",
      featured: true,
    },
    {
      title: "DevNotes",
      description:
        "A markdown-first note-taking app for developers, with code highlighting, snippet management, and Git-backed version history.",
      tags: ["Next.js", "Prisma", "Tailwind"],
      link: "https://example.com",
      repo: "https://github.com/",
    },
    {
      title: "Weatherly",
      description:
        "A minimal weather dashboard with hyper-local forecasts, radar maps, and beautiful data visualizations.",
      tags: ["React", "Recharts", "API"],
      link: "https://example.com",
      repo: "https://github.com/",
    },
  ],

  experience: [
    {
      role: "Senior Full-Stack Engineer",
      company: "Acme Corp",
      period: "2023 — Present",
      description:
        "Leading the design and implementation of the company's flagship product, serving 100k+ daily active users.",
      highlights: [
        "Reduced page load times by 60% through code splitting and caching",
        "Built a design system adopted across 5 product teams",
        "Mentored 3 junior engineers",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "StartupX",
      period: "2021 — 2023",
      description:
        "Built the product from MVP to Series A. Owned the entire frontend stack and contributed to backend architecture.",
      highlights: [
        "Shipped the v1 product in 3 months",
        "Grew the user base from 0 to 50k",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Studio Y",
      period: "2019 — 2021",
      description:
        "Crafted websites and web apps for clients ranging from indie startups to Fortune 500 brands.",
      highlights: [
        "Delivered 20+ client projects with 100% on-time completion",
      ],
    },
  ],

  accent: "emerald",
};

export type { SiteConfig };
