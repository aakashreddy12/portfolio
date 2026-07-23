'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '../lib/utils';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function TextReveal({
  children,
  className,
  delay = 0,
  as: Tag = 'p',
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const words = children.split(' ');

  const MotionTag = motion[Tag];

  return (
    <div ref={ref}>
      <MotionTag
        className={cn('flex flex-wrap gap-x-[0.25em] gap-y-1', className)}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.06, delayChildren: delay }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '110%', opacity: 0 },
                visible: { y: '0%', opacity: 1 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </MotionTag>
    </div>
  );
}
