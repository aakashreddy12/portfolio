'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SectionHeading } from '../section-heading';
import { Magnetic } from '../magnetic';
import { cn } from '../../lib/utils';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aakashreddy2004@gmail.com',
    href: 'mailto:aakashreddy2004@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hyderabad, Telangana',
    href: undefined,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8247763428',
    href: 'tel:+918247763428',
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        'service_dpvm3lq',
        'template_cf0ss7h',
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        'bU3HBf2kjJa30mR04'
      );

      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a project in mind or looking for a reliable developer? I'm currently available for freelance work."
          align="center"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur-sm transition-colors hover:border-primary/30"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary transition-transform group-hover:scale-110">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 font-medium text-foreground transition-colors group-hover:text-primary">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur-sm">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-1 font-medium text-foreground">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  disabled={isSending}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  disabled={isSending}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-input bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  disabled={isSending}
                />
              </div>

              <Magnetic strength={0.15}>
                <button
                  type="submit"
                  disabled={isSending || sent}
                  className={cn(
                    'group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-4 text-sm font-semibold text-white transition-all',
                    sent
                      ? 'bg-green-600'
                      : 'bg-gradient-to-r from-primary to-red-600 glow-red hover:shadow-[0_0_50px_-5px_hsl(0_72%_51%/0.6)]',
                    isSending && 'opacity-70 cursor-not-allowed'
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSending ? 'Sending...' : sent ? 'Message sent!' : 'Send message'}
                    {!sent && !isSending && (
                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    )}
                  </span>
                </button>
              </Magnetic>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}