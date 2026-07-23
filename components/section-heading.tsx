'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
