"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/config/site";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 border-y border-border/60 bg-muted/30"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="A timeline of roles where I shipped things, learned lessons, and grew as an engineer and designer."
          align="center"
          className="mb-12"
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-px bg-border -translate-x-1/2"
          />

          <ol className="space-y-10">
            {siteConfig.experience.map((exp, idx) => (
              <motion.li
                key={`${exp.role}-${exp.company}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
                className={`relative pl-12 sm:pl-0 ${
                  idx % 2 === 0
                    ? "sm:pr-1/2 sm:text-right"
                    : "sm:pl-1/2"
                }`}
                style={
                  idx % 2 === 0
                    ? { paddingRight: "calc(50% + 2rem)" }
                    : { paddingLeft: "calc(50% + 2rem)" }
                }
              >
                {/* Dot */}
                <span className="absolute left-4 sm:left-1/2 top-1 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-background border border-border">
                  <Briefcase className="h-4 w-4 text-primary" />
                </span>

                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <p className="text-sm font-medium text-primary">
                      {exp.company}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {exp.period}
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.highlights && exp.highlights.length > 0 ? (
                    <ul className="mt-4 space-y-2 text-left">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-500 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
