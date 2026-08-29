"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail, MapPin, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Katana } from "@/components/icons/katana";
import { siteConfig } from "@/config/site";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroSection() {
  const { socials } = siteConfig;

  const socialLinks = [
    { href: socials.github, icon: Github, label: "GitHub" },
    { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: socials.twitter, icon: Twitter, label: "Twitter" },
  ].filter((s) => s.href);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Decorative background — purple & pink blobs */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-pink-500/15 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-[280px] w-[280px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Text content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div variants={item}>
              {siteConfig.availableForWork ? (
                <Badge
                  variant="outline"
                  className="rounded-full py-1.5 pl-2 pr-3 gap-1.5 bg-violet-500/10 border-violet-500/30 text-violet-600 dark:text-violet-300"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
                  </span>
                  Available for work
                </Badge>
              ) : (
                <Badge variant="outline" className="rounded-full py-1.5 pl-2 pr-3 gap-1.5">
                  <Sparkles className="h-3 w-3" />
                  Open to chat
                </Badge>
              )}
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                {siteConfig.role}
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              {siteConfig.heroBio}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="rounded-full">
                <a href="#projects">
                  View my work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact me
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </span>
            </motion.div>
          </div>

          {/* Avatar + katana composition */}
          <motion.div
            variants={item}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Glow backdrop */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/20 to-pink-500/30 rounded-full blur-2xl" />

              {/* Katana — floating diagonally behind the avatar */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="origin-center"
                >
                  <Katana className="w-72 sm:w-96 h-auto drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]" />
                </motion.div>
              </motion.div>

              {/* Avatar circle on top */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Avatar className="relative h-36 w-36 sm:h-44 sm:w-44 rounded-full border-4 border-background shadow-2xl">
                  {siteConfig.avatarUrl ? (
                    <AvatarImage
                      src={siteConfig.avatarUrl}
                      alt={siteConfig.name}
                    />
                  ) : null}
                  <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 text-white">
                    {siteConfig.avatarFallbackInitials}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block text-muted-foreground/60 hover:text-foreground transition-colors"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
