"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/sections/section-heading";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    if (!name || !email || !message) {
      toast({
        title: "Missing fields",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    // Simulate a brief delay; in a real deploy, hook this up to your email
    // service (Resend, EmailJS, etc.) or an API route.
    await new Promise((r) => setTimeout(r, 600));

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email client…",
      description: "Thanks for reaching out — I'll get back to you soon!",
    });
    form.reset();
    setSubmitting(false);
  };

  const socialLinks = [
    { href: siteConfig.socials.github, icon: Github, label: "GitHub" },
    { href: siteConfig.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: siteConfig.socials.twitter, icon: Twitter, label: "Twitter" },
  ].filter((s) => s.href);

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a project in mind, a question, or just want to say hi? Drop me a line."
          align="center"
          className="mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-2 space-y-6"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="block rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium break-all">{siteConfig.email}</p>
                </div>
              </div>
            </a>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            {socialLinks.length > 0 ? (
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-sm text-muted-foreground mb-3">
                  Find me on
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={onSubmit}
              className="rounded-xl border border-border bg-card p-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jane Doe"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or just say hi…"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full"
              >
                <Send className="mr-2 h-4 w-4" />
                {submitting ? "Sending…" : "Send message"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Your message will open in your email client pre-filled to{" "}
                {siteConfig.email}.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
