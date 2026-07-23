'use client';

import { motion } from 'framer-motion';
import { Briefcase, Zap, Shield, Gauge } from 'lucide-react';
import { SectionHeading } from '../section-heading';
const highlights = [
  {
    icon: Zap,
    title: 'React App Development',
    desc: 'Built modern, responsive React applications with component-driven architecture.',
  },
  {
    icon: Shield,
    title: 'Supabase Auth + RLS',
    desc: 'Implemented secure authentication and Row Level Security policies for data isolation.',
  },
  {
    icon: Gauge,
    title: 'AI-Assisted Development',
    desc: 'Leveraged GitHub Copilot to reduce development time by 30% without sacrificing quality.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
          description="Hands-on experience building production-grade web applications in a fast-paced environment."
        />

        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative mb-12 md:ml-[50%] md:pl-12"
            >
              <div className="absolute left-0 top-2 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-primary md:left-0">
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-primary opacity-40" />
              </div>

              <div className="group overflow-hidden rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-colors hover:border-primary/30">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        Web Development Intern
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Azorix Technologies
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    Mar — May 2025
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Contributed to the development of modern web applications
                  using React, focusing on performance, security, and rapid
                  delivery. Gained hands-on experience with Supabase
                  authentication and database-level security.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {highlights.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      className="rounded-xl border border-border bg-secondary/30 p-4"
                    >
                      <item.icon size={18} className="text-primary" />
                      <p className="mt-2 text-sm font-medium text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
