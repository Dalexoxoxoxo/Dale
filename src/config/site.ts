/**
 * ============================================================
 *  🛠️  EDIT THIS FILE TO MAKE THE SITE YOURS
 * ============================================================
 *
 *  ⬇️  HOW TO ADD YOUR PROFILE PICTURE  ⬇️
 *  ----------------------------------------
 *  1. Rename your image to `profile.jpg` (or .png)
 *  2. Drop it into the `/public` folder (next to this repo's README)
 *  3. Set `avatarUrl: "/profile.jpg"` below
 *
 *  ⬇️  HOW TO ADD YOUR NAME  ⬇️
 *  ----------------------------------------
 *  Edit the `name` field below — that's it. Your name will
 *  appear in the navbar, hero, footer, and browser tab.
 *
 *  ⬇️  HOW TO ADD PROJECTS / EXPERIENCE  ⬇️
 *  ----------------------------------------
 *  Scroll down to the `projects` and `experience` arrays.
 *  They're empty by default. Copy one of the example blocks
 *  (in the comment above each array) and fill in your own info.
 *
 *  After saving, commit & push to GitHub — Vercel auto-redeploys.
 * ============================================================
 */

export interface SiteConfig {
  /** Your name — shown in navbar, hero, footer, and browser tab */
  name: string;
  /** Your role / title — shown under your name in the hero */
  role: string;
  /** One-line tagline — shown in the footer */
  tagline: string;
  /** Short bio — shown in the hero section (1-3 sentences) */
  heroBio: string;
  /** About section heading */
  aboutTitle: string;
  /** About section paragraphs — add as many as you want */
  aboutParagraphs: string[];

  /**
   * Profile picture path.
   * Drop your image into the /public folder, then set this to "/your-image.jpg".
   * Leave it as "" to show your initials in a gradient circle instead.
   */
  avatarUrl: string;
  /** Initials shown if no avatar is set (e.g. "DY" for Dale Yna) */
  avatarFallbackInitials: string;

  location: string;
  availableForWork: boolean;
  /** Path to your resume PDF in /public, or "" to hide the download button */
  resumeUrl?: string;
  email: string;

  /** Social links — leave as "" to hide a platform */
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    instagram: string;
    dribbble: string;
  };

  /** Skills grouped by category — add/remove categories freely */
  skills: {
    category: string;
    items: string[];
  }[];

  /** Your projects — EMPTY by default. Add your own below. */
  projects: {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    repo?: string;
    image?: string;
    featured?: boolean;
  }[];

  /** Your work experience — EMPTY by default. Add your own below. */
  experience: {
    role: string;
    company: string;
    period: string;
    description: string;
    highlights?: string[];
  }[];

  /**
   * Files visitors can download — EMPTY by default. Add your own!
   * Drop the actual file into the /public folder, then add an entry here.
   */
  downloads: {
    /** Display name shown on the card — e.g. "Sonic Boom Mace v1.2.0" */
    name: string;
    /** Short description of what the file is / does */
    description: string;
    /** Path to the file in /public — e.g. "/SonicBoomMace-1.2.0.jar" */
    filePath: string;
    /** File type badge shown on the card — e.g. "JAR", "SK", "ZIP", "PDF" */
    fileType: string;
    /** Optional tags */
    tags?: string[];
    /** Optional: version string shown next to the name */
    version?: string;
  }[];

  accent: "violet" | "rose" | "amber" | "cyan" | "orange";
}

export const siteConfig: SiteConfig = {
  // ════════════════════════════════════════════════════════════
  //  👤  YOUR IDENTITY  —  edit these four lines
  // ════════════════════════════════════════════════════════════
  name: "Dale • Yna",
  role: "Minecraft Developer & JavaScript Tinkerer",
  tagline: "Building weird and useful things, one commit at a time",

  heroBio:
    "I'm a developer who spends way too much time building things inside Minecraft — from custom plugins and datapacks to fully-fledged minigame servers. These days I write JavaScript for a living, both in and out of the game. When I'm not shipping code or mining diamonds, you'll find me collecting katanas and rewatching samurai films.",

  aboutTitle: "A bit about me",
  aboutParagraphs: [
    "I'm a self-taught developer who fell in love with code through Minecraft. What started as a kid making tiny datapacks for my friends' survival server slowly grew into building plugins, writing JavaScript, and shipping web apps. I love the moment when something you built from scratch actually runs — there's nothing quite like it.",
    "These days I write a lot of JavaScript — both in Minecraft (yes, you can absolutely do that with the right mods and frameworks) and outside of it. Vanilla JS for quick prototypes, TypeScript for anything I actually want to maintain, and the occasional Node.js backend when a project needs one.",
    "Outside of code, I'm a katana and sword enthusiast. There's something about the craft — the curve of the blade, the wrapping on the handle, the long tradition behind each piece — that I find endlessly fascinating. If you're into swords, anime, or weird side projects, we'll get along just fine.",
    "I'm always down to collaborate — Minecraft servers, JS side projects, Discord bots, web apps, or anything that lets me learn something new. If you're building something cool, hit me up.",
  ],

  // ════════════════════════════════════════════════════════════
  //  📸  PROFILE PICTURE
  //
  //  Option A — use your own image:
  //    1. Drop a file named `profile.jpg` into the /public folder
  //    2. Set: avatarUrl: "/profile.jpg",
  //
  //  Option B — use initials instead (no file needed):
  //    Leave avatarUrl as "" and set avatarFallbackInitials below
  // ════════════════════════════════════════════════════════════
  avatarUrl: "",
  avatarFallbackInitials: "DY",

  // ════════════════════════════════════════════════════════════
  //  📇  CONTACT INFO
  // ════════════════════════════════════════════════════════════
  location: "Manila, Philippines",
  availableForWork: true,
  resumeUrl: "", // ← drop resume.pdf into /public and set "/resume.pdf"

  email: "dale.yna.dev@gmail.com",

  socials: {
    github: "https://github.com/Dalexoxoxoxo",
    linkedin: "",
    twitter: "",
    instagram: "",
    dribbble: "",
  },

  // ════════════════════════════════════════════════════════════
  //  🧰  SKILLS  —  add/remove categories freely
  // ════════════════════════════════════════════════════════════
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vanilla JS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    },
    {
      category: "Minecraft",
      items: ["Java", "Spigot", "Paper", "Skript", "Datapacks"],
    },
    {
      category: "DevOps",
      items: ["Vercel", "Docker", "GitHub Actions", "Linux"],
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  💼  PROJECTS  —  EMPTY by default. Add your own!
  //
  //  Copy this template and paste it inside the [] below:
  //
  //    {
  //      title: "Your Project Name",
  //      description: "What it does and why it's cool.",
  //      tags: ["Tag1", "Tag2", "Tag3"],
  //      link: "https://your-project.com",    // optional
  //      repo: "https://github.com/you/repo", // optional
  //      featured: true,                       // optional — adds a star badge
  //    },
  //
  // ════════════════════════════════════════════════════════════
  projects: [
    // 👆 Add your projects here — see the template in the comment above
  ],

  // ════════════════════════════════════════════════════════════
  //  💼  EXPERIENCE  —  EMPTY by default. Add your own!
  //
  //  Copy this template and paste it inside the [] below:
  //
  //    {
  //      role: "Your Job Title",
  //      company: "Company Name",
  //      period: "2023 — Present",
  //      description: "What you did there in 1-2 sentences.",
  //      highlights: [
  //        "Achievement or impact #1",
  //        "Achievement or impact #2",
  //      ],
  //    },
  //
  // ════════════════════════════════════════════════════════════
  experience: [
    // 👆 Add your experience here — see the template in the comment above
  ],

  // ════════════════════════════════════════════════════════════
  //  📦  DOWNLOADS  —  files visitors can download from your site
  //
  //  HOW TO ADD A FILE:
  //  1. Upload your file to the /public folder (next to this repo's README)
  //     — e.g. /public/MyPlugin.jar
  //  2. Add an entry below using the template
  //
  //  Copy this template and paste it inside the [] below:
  //
  //    {
  //      name: "My Cool Plugin",
  //      description: "What it does, in one or two sentences.",
  //      filePath: "/MyPlugin.jar",
  //      fileType: "JAR",
  //      version: "1.0.0",
  //      tags: ["Minecraft", "Plugin"],
  //    },
  //
  // ════════════════════════════════════════════════════════════
  downloads: [
    {
      name: "Sonic Boom Mace",
      description:
        "A custom Minecraft plugin that adds a powerful sonic boom mace weapon. Drop the JAR into your server's plugins folder and restart.",
      filePath: "/SonicBoomMace-1.2.0.jar",
      fileType: "JAR",
      version: "1.2.0",
      tags: ["Minecraft", "Plugin", "Weapon"],
    },
    {
      name: "Trashcan",
      description:
        "A Skript plugin that adds a simple trashcan to your Minecraft server. Players can drop items into it to dispose of them safely.",
      filePath: "/Trashcan.sk",
      fileType: "SK",
      tags: ["Minecraft", "Skript", "Utility"],
    },
  ],

  // ════════════════════════════════════════════════════════════
  //  🎨  ACCENT COLOR  —  currently purple/pink (matches the katana theme)
  // ════════════════════════════════════════════════════════════
  accent: "violet",
};

export type { SiteConfig };
