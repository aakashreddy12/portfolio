'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code2, Database } from 'lucide-react';
import { SectionHeading } from '../section-heading';
import { TextReveal } from '../text-reveal';

const coursework = [
  { label: 'Web Development', icon: Code2 },
  { label: 'DBMS', icon: Database },
  { label: 'Data Structures', icon: BookOpen },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="About"
          title="The developer behind the code"
          description="A passionate full-stack developer focused on building products that are not just functional, but fast, secure, and delightful to use."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <TextReveal
              as="p"
              className="text-lg leading-relaxed text-muted-foreground"
            >
              I&aposm a Full-Stack Web Developer with a strong foundation in modern
              JavaScript frameworks and secure backend architecture. I
              specialize in turning complex problems into clean, scalable
              solutions using Next.js, React, and Supabase.
            </TextReveal>
            <TextReveal
              as="p"
              className="mt-4 text-lg leading-relaxed text-muted-foreground"
              delay={0.1}
            >
              From real-time dashboards to secure authentication systems, I
              bring ideas to life with a focus on performance, accessibility,
              and developer experience. I&aposm currently pursuing my B.Tech in
              Computer Science and actively seeking freelance opportunities to
              build impactful products.
            </TextReveal>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Next.js', 'React', 'Supabase', 'TypeScript', 'Tailwind CSS'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-colors hover:border-primary/30">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:opacity-50" />

              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    Education
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold">
                    B.Tech in Computer Science Engineering
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Gokaraju Rangaraju Institute of Engineering and Technology
                  </p>
                  <p className="mt-1 text-sm font-medium text-accent">
                    2022 — 2026
                  </p>
                </div>
              </div>

              <div className="relative mt-6 border-t border-border pt-6">
                <p className="mb-4 text-sm font-medium text-foreground">
                  Key Coursework
                </p>
                <div className="flex flex-col gap-3">
                  {coursework.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                        <item.icon size={16} />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
