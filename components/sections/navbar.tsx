'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Import the Image component from Next.js
import Image from 'next/image'; 
import { Menu, X } from 'lucide-react';
import { Magnetic } from '../magnetic';
import { cn } from '../../lib/utils';
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-border/50 bg-background/80 backdrop-blur-xl'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#hero" className="group flex items-center gap-2">
            {/* 
                THE CHANGE:
                We replaced the <span>A</span> with the Image component.
                Make sure you save the provided image as 'image_0.png'
                inside your project's 'public/' directory.
            */}
            <Image
              src="/image_0.jpeg" // Path to the image in the public folder
              alt="Aakash Aduri Profile"
              width={36} // Corresponding to w-9 (9*4=36px)
              height={36} // Corresponding to h-9
              // Applied the exact same rounding and dimensions as the original span
              className="h-9 w-9 rounded-lg object-cover border border-border"
            />
            
            <span className="font-display text-lg font-semibold tracking-tight">
              Aakash<span className="text-primary">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Magnetic strength={0.2}>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-primary/30 bg-primary/10 px-6 py-2.5 text-sm font-medium text-primary transition-colors hover:text-white"
              >
                <span className="relative z-10">Hire Me</span>
                <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </Magnetic>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-40 border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-base font-medium text-white"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}