"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, FileText, Package, FileCode, FileArchive, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/section-heading";
import { siteConfig } from "@/config/site";

/** Map file extensions → lucide icon */
function getFileIcon(fileType: string) {
  const t = fileType.toUpperCase();
  if (["JAR", "ZIP", "RAR", "7Z", "TAR", "GZ"].includes(t)) return FileArchive;
  if (["SK", "JS", "TS", "PY", "JAVA", "JSON", "YAML", "YML", "XML"].includes(t)) return FileCode;
  if (["PDF", "DOC", "DOCX", "TXT", "MD"].includes(t)) return FileText;
  if (["PKG", "DEB", "DMG", "EXE", "APP"].includes(t)) return Package;
  return File;
}

export function DownloadsSection() {
  const hasDownloads = siteConfig.downloads.length > 0;

  return (
    <section
      id="downloads"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Downloads"
          title="Files & downloads"
          description={
            hasDownloads
              ? "Plugins, scripts, and other files I've made. Free to download and use."
              : "Nothing here yet — your downloadable files will appear in this section once you add them."
          }
          align="center"
          className="mb-12"
        />

        {hasDownloads ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.downloads.map((file, idx) => {
              const Icon = getFileIcon(file.fileType);
              return (
                <motion.article
                  key={file.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
                  className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    {/* File type badge + icon */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/15 via-fuchsia-500/15 to-pink-500/15 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge
                        variant="outline"
                        className="rounded-md font-mono text-xs tracking-wider"
                      >
                        {file.fileType}
                      </Badge>
                    </div>

                    {/* Name + version */}
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold tracking-tight flex items-baseline gap-2 flex-wrap">
                        <span className="group-hover:text-primary transition-colors">
                          {file.name}
                        </span>
                        {file.version ? (
                          <span className="text-xs font-normal text-muted-foreground">
                            v{file.version}
                          </span>
                        ) : null}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {file.description}
                    </p>

                    {/* Tags */}
                    {file.tags && file.tags.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5">
                        {file.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="rounded-full font-normal text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    ) : null}

                    {/* Download button */}
                    <div className="pt-2 mt-auto">
                      <Button
                        asChild
                        className="w-full rounded-full"
                      >
                        <a
                          href={file.filePath}
                          download
                          aria-label={`Download ${file.name}`}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Decorative accent on hover */}
                  <div className="h-1 w-full bg-gradient-to-r from-violet-500/0 via-fuchsia-500/50 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.article>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-xl border border-dashed border-border bg-muted/40 p-10 text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Download className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No files yet</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Add files in{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                src/config/site.ts
              </code>{" "}
              — drop the file in the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                /public
              </code>{" "}
              folder, then add an entry to the{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
                downloads
              </code>{" "}
              array.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
