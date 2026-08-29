"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/config/site";

export function ProjectsSection() {
  const hasProjects = siteConfig.projects.length > 0;

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description={
            hasProjects
              ? "A few things I've built. Some are products, some are experiments, all taught me something."
              : "Nothing here yet — your projects will appear in this section once you add them."
          }
          align="center"
          className="mb-12"
        />

        {hasProjects ? (
          <div className="grid gap-6 md:grid-cols-2">
            {siteConfig.projects.map((project, idx) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
                className="group relative rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                {/* Featured ribbon */}
                {project.featured ? (
                  <div className="absolute right-4 top-4 z-10">
                    <Badge
                      variant="outline"
                      className="rounded-full gap-1 bg-background/80 backdrop-blur"
                    >
                      <Star className="h-3 w-3 fill-current text-amber-500 text-amber-500" />
                      Featured
                    </Badge>
                  </div>
                ) : null}

                <div className="p-6 space-y-4">
                  <header className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </header>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    {project.link ? (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="rounded-full"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                          Live
                        </a>
                      </Button>
                    ) : null}
                    {project.repo ? (
                      <Button
                        asChild
                        size="sm"
                        variant="ghost"
                        className="rounded-full"
                      >
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-1.5 h-3.5 w-3.5" />
                          Code
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>

                {/* Decorative accent on hover */}
                <div className="h-1 w-full bg-gradient-to-r from-violet-500/0 via-fuchsia-500/50 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.article>
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-xl border border-dashed border-border bg-muted/40 p-10 text-center"
    >
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <FolderOpen className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold mb-2">No projects yet</h3>
      <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
        Add your projects in{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          src/config/site.ts
        </code>{" "}
        — find the{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
          projects: []
        </code>{" "}
        array and drop in a project block. It&apos;ll show up here automatically.
      </p>
    </motion.div>
  );
}
