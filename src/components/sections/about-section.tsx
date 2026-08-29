"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title={siteConfig.aboutTitle}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Long-form bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            {siteConfig.aboutParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}

            {siteConfig.resumeUrl ? (
              <div className="pt-4">
                <Button asChild variant="outline" className="rounded-full">
                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download resume
                  </a>
                </Button>
              </div>
            ) : null}
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="space-y-4"
          >
            <div className="rounded-xl border border-border bg-card/50 p-5 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Quick facts
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium text-right">
                    {siteConfig.location}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground">Role</dt>
                  <dd className="font-medium text-right">
                    {siteConfig.role}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground">Availability</dt>
                  <dd className="font-medium text-right">
                    {siteConfig.availableForWork ? "Open to offers" : "Currently busy"}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium text-primary hover:underline break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-border bg-card/50 p-5 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <FileText className="h-4 w-4" />
                Currently
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building things and learning out loud. Always exploring new
                ideas at the intersection of design and engineering.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
