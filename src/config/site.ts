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
  name: string;
  role: string;
  tagline: string;
  heroBio: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  avatarUrl: string;
  avatarFallbackInitials: string;
  location: string;
  availableForWork: boolean;
  resumeUrl?: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    dribbble: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  projects: {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    repo?: string;
    image?: string;
    featured?: boolean;
  }[];
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
    highlights?: string[];
  }[];
  accent: "violet" | "rose" | "amber" | "cyan" | "orange";
}

export const siteConfig: SiteConfig = {
  name: "Dale • Yna",
  role: "Minecraft Developer & JavaScript Tinkerer",
  tagline: "Building weird and useful things, one commit at a time",

  heroBio:
    "I'm a developer who spends way too much time building things inside Minecraft — from custom plugins and datapacks to fully-fledged minigame servers that somehow still crash at 3am. What started as a kid tinkering with command blocks turned into a proper obsession with code, and these days I write JavaScript for a living, both in and out of the game. Whether it's a Node.js backend for a server network, a vanilla JS mod menu, or just a silly Discord bot that quotes anime lines on command — if it runs on JS, I'm probably into it. When I'm not shipping code or mining diamonds, you'll find me collecting katanas, rewatching samurai films, and pretending my next refactor is 'almost done'.",

  aboutTitle: "A bit about me",
  aboutParagraphs: [
    "I'm a self-taught developer who fell in love with code through Minecraft. What started as a kid making tiny datapacks for my friends' survival server slowly grew into building full plugin ecosystems, writing Node.js backends for server networks, and shipping JavaScript apps for the web. I love the moment when something you built from scratch actually runs — there's nothing quite like watching your first command-block contraption finally do the thing it was supposed to do.",
    "These days I write a lot of JavaScript — both in Minecraft (yes, you can absolutely do that with the right mods and frameworks) and outside of it. Vanilla JS for quick prototypes, TypeScript for anything I actually want to maintain, and the occasional Node.js backend when a project needs one. I'm not picky about tools — I'm picky about whether the thing I'm building makes me excited to open the editor in the morning.",
    "Outside of code, I'm a katana and sword enthusiast. There's something about the craft — the curve of the blade, the wrapping on the handle, the long tradition behind each piece — that I find endlessly fascinating. I collect replicas, read up on Japanese swordsmithing traditions, and one day I'd love to visit a real forge in Seki. If you're into swords, anime, or weird side projects, we'll get along just fine.",
    "I'm always down to collaborate — Minecraft servers, JS side projects, Discord bots, web apps, or anything that lets me learn something new. If you're building something cool and need an extra pair of hands, hit me up. I reply fast and I'm always excited to help.",
  ],

  avatarUrl: "",
  avatarFallbackInitials: "DY",

  location: "Manila, Philippines",
  availableForWork: true,
  resumeUrl: "/resume.pdf",

  email: "dale.yna.dev@gmail.com",

  socials: {
    github: "https://github.com/Dalexoxoxoxo",
    linkedin: "",
    twitter: "https://twitter.com/",
    instagram: "",
    dribbble: "",
  },

  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vanilla JS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis"],
    },
    {
      category: "Minecraft",
      items: ["Java", "Spigot", "Paper", "Skript", "Datapacks"],
    },
    {
      category: "DevOps",
      items: ["Vercel", "Docker", "GitHub Actions", "Linux", "Nginx"],
    },
  ],

  projects: [
    {
      title: "SurvivalCraft Reloaded",
      description:
        "A Minecraft survival plugin suite with custom enchantments, dynamic economy, anti-grief protection, and a regional land-claim system that scales to 200+ concurrent players without breaking a sweat.",
      tags: ["Java", "Spigot", "MySQL", "Redis"],
      link: "https://example.com",
      repo: "https://github.com/Dalexoxoxoxo",
      featured: true,
    },
    {
      title: "DiscordForge",
      description:
        "A Discord bot framework built for Minecraft communities. Handles server status, player moderation sync, cross-chat bridging, and leaderboard tracking — all in TypeScript, with a plugin system so server owners can extend it.",
      tags: ["TypeScript", "Discord.js", "Node.js"],
      link: "https://example.com",
      repo: "https://github.com/Dalexoxoxoxo",
      featured: true,
    },
    {
      title: "Katana CLI",
      description:
        "A command-line tool for scaffolding JavaScript projects fast. One command spins up a Next.js app, a Node API, or a Discord bot with my preferred defaults — TypeScript, ESLint, Prettier, and commit hooks pre-configured.",
      tags: ["TypeScript", "CLI", "Node.js"],
      link: "https://example.com",
      repo: "https://github.com/Dalexoxoxoxo",
    },
    {
      title: "PixelUI",
      description:
        "A tiny vanilla-JS UI library inspired by Minecraft's HUD aesthetic — health bars, hunger bars, XP counters, and floating combat text components you can drop into any web project.",
      tags: ["JavaScript", "CSS", "Vite"],
      link: "https://example.com",
      repo: "https://github.com/Dalexoxoxoxo",
    },
  ],

  experience: [
    {
      role: "Lead Minecraft Developer",
      company: "MineVerse Network",
      period: "2023 — Present",
      description:
        "Leading the dev team behind a 500+ player Minecraft network. Own the plugin ecosystem, manage releases, and keep the servers alive at 3am when something explodes.",
      highlights: [
        "Built a custom plugin framework that reduced boilerplate by 70%",
        "Migrated the network from Spigot to Paper + Velocity, cutting TPS drops by 40%",
        "Mentor 2 junior devs and review every PR that ships to production",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "BlockForge Studios",
      period: "2021 — 2023",
      description:
        "Built web apps and Discord tools for Minecraft server owners. Owned the frontend (Next.js + Tailwind) and contributed to the Node.js backend powering the SaaS dashboard.",
      highlights: [
        "Shipped the v1 dashboard in 4 months — went from 0 to 3k paying users",
        "Wrote a Discord bot used by 1,200+ servers within the first month",
      ],
    },
    {
      role: "Junior Developer",
      company: "PixelCraft",
      period: "2019 — 2021",
      description:
        "Started as a Minecraft plugin tinkerer, ended up shipping real features. Learned Java, picked up JavaScript, and discovered that the web is basically the same as command blocks — just with more semicolons.",
      highlights: [
        "Maintained 30+ open-source Spigot plugins with 100k+ combined downloads",
        "Wrote my first production Node.js app — a leaderboard service still running today",
      ],
    },
  ],

  accent: "violet",
};

export type { SiteConfig };
