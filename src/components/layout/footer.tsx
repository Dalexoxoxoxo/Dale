"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { Katana } from "@/components/icons/katana";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { href: siteConfig.socials.github, icon: Github, label: "GitHub" },
    { href: siteConfig.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: siteConfig.socials.twitter, icon: Twitter, label: "Twitter" },
  ].filter((s) => s.href);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand + bio */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 text-white">
                <Katana className="w-5 h-5" />
              </span>
              <span className="font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {siteConfig.tagline}. Built with Next.js, Tailwind CSS, and
              shadcn/ui — deployable to Vercel in minutes.
            </p>
          </div>

          {/* Nav links */}
          <nav className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Navigate
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block text-sm text-primary hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with
            <Heart className="h-3 w-3 fill-current text-rose-500" />
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
