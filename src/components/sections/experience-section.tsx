"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Briefcase } from "lucide-react";
import { Katana } from "@/components/icons/katana";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/config/site";

export function ExperienceSection() {
  const hasExperience = siteConfig.experience.length > 0;

  return (
    <section
      id="experience"
      className="py-20 sm:py-28 border-y border-border/60 bg-muted/30"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description={
            hasExperience
              ? "A timeline of roles where I shipped things, learned lessons, and grew."
              : "Nothing here yet — your work history will appear in this section once you add it."
          }
          align="center"
          className="mb-12"
        />

        {hasExperience ? (
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
                  <span className="absolute left-4 sm:left-1/2 top-1 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background border border-border">
                    <Katana className="w-5 h-5" />
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
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-xl border border-dashed border-border bg-background/50 p-10 text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No experience listed yet</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Add your work history in{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                src/config/site.ts
              </code>{" "}
              — find the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                experience: []
              </code>{" "}
              array and drop in an entry. It&apos;ll show up here automatically.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
