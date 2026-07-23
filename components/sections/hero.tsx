'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Magnetic } from '../magnetic';
const Hero3D = dynamic(() => import('@/components/hero-3d').then((m) => m.Hero3D), {
  ssr: false,
});

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />

      <div className="pointer-events-none absolute inset-0">
        <Hero3D />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-sm text-muted-foreground">
              Available for freelance work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Aakash Reddy
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="block gradient-text"
              >
                Aduri
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Full-Stack Web Developer
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
          >
            Building scalable, secure, and high-performance web applications
            that deliver exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Magnetic strength={0.3}>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-red-600 px-8 py-4 text-base font-semibold text-white glow-red transition-all hover:shadow-[0_0_50px_-5px_hsl(0_72%_51%/0.6)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-accent/40 bg-accent/10 px-8 py-4 text-base font-semibold text-accent transition-all hover:text-accent-foreground"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
                <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-accent to-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
