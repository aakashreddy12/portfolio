'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '../section-heading';
const skills = [
  'Next.js',
  'React.js',
  'Tailwind CSS',
  'JavaScript (ES6+)',
  'Supabase',
  'PostgreSQL',
  'Git',
  'GitHub Copilot',
];

export function Skills() {
  const row = [...skills, ...skills];

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          description="A modern toolkit focused on rapid development, type safety, and secure data."
          align="center"
        />
      </div>

      <div className="relative mt-16 flex overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex shrink-0 gap-4 pr-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {row.map((skill, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card/40 px-8 py-5 backdrop-blur-sm transition-colors hover:border-primary/30"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" />
              <span className="whitespace-nowrap font-display text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                {skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative mt-4 flex overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex shrink-0 gap-4 pr-4"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {row.map((skill, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card/40 px-8 py-5 backdrop-blur-sm transition-colors hover:border-accent/30"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-accent to-primary" />
              <span className="whitespace-nowrap font-display text-xl font-medium text-muted-foreground transition-colors group-hover:text-accent">
                {skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
