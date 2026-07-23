'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Database, Wallet } from 'lucide-react';
import { SectionHeading } from '../section-heading';
import { cn } from '../../lib/utils';
interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  accent: 'red' | 'gold';
}

const projects: Project[] = [
  {
    title: 'CRM Application',
    subtitle: 'Axiso Solar Energy',
    description:
      'A custom CRM system with secure relational databases, real-time customer tracking, and role-based access control. Built to streamline operations and manage the full sales pipeline.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'RLS', 'Dashboard'],
    icon: Database,
    accent: 'red',
  },
  {
    title: 'CampusPay',
    subtitle: 'Student Digital Wallet',
    description:
      'A student-focused digital wallet with real-time balance tracking, instant peer transfers, and transaction history. Designed for speed and reliability on campus networks.',
    tags: ['React', 'Supabase', 'Realtime', 'Auth', 'Payments'],
    icon: Wallet,
    accent: 'gold',
  },
];

function TiltCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const isRed = project.accent === 'red';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className={cn(
          'group relative preserve-3d cursor-pointer overflow-hidden rounded-3xl border bg-card/50 p-8 backdrop-blur-sm transition-colors',
          isRed ? 'border-border hover:border-primary/40' : 'border-border hover:border-accent/40'
        )}
      >
        <div
          className={cn(
            'absolute -right-20 -top-20 h-60 w-60 rounded-full blur-3xl transition-opacity duration-500',
            isRed ? 'bg-primary/10' : 'bg-accent/10',
            hovered ? 'opacity-100' : 'opacity-40'
          )}
        />

        <div className="relative" style={{ transform: 'translateZ(40px)' }}>
          <div
            className={cn(
              'flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300',
              isRed
                ? 'bg-gradient-to-br from-primary/20 to-red-900/10 text-primary'
                : 'bg-gradient-to-br from-accent/20 to-amber-900/10 text-accent'
            )}
          >
            <project.icon size={28} />
          </div>

          <div className="mt-6 flex items-center gap-2">
            <span
              className={cn(
                'font-mono text-xs uppercase tracking-[0.2em]',
                isRed ? 'text-primary' : 'text-accent'
              )}
            >
              {project.subtitle}
            </span>
          </div>

          <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A collection of products I've built — from secure enterprise CRMs to real-time fintech apps."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <TiltCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
