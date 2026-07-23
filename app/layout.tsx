import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Aakash Reddy Aduri | Full-Stack Web Developer', //[cite: 4]
  description:
    'Building scalable, secure, and high-performance web applications. Full-Stack Web Developer specializing in Next.js, React, and Supabase.', //[cite: 4]
  keywords: [ //[cite: 4]
    'Full-Stack Developer', //[cite: 4]
    'Web Developer', //[cite: 4]
    'Next.js', //[cite: 4]
    'React', //[cite: 4]
    'Supabase', //[cite: 4]
    'Aakash Reddy Aduri', //[cite: 4]
    'Hyderabad', //[cite: 4]
  ],
  authors: [{ name: 'Aakash Reddy Aduri' }], //[cite: 4]
  
  // ADD THIS BLOCK:
  icons: {
    icon: '/favicon.ico', // Change this to '/icon.png' if you are using a PNG file
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  openGraph: { //[cite: 4]
    title: 'Aakash Reddy Aduri | Full-Stack Web Developer', //[cite: 4]
    description: //[cite: 4]
      'Building scalable, secure, and high-performance web applications.', //[cite: 4]
    type: 'website', //[cite: 4]
  },
  twitter: { //[cite: 4]
    card: 'summary_large_image', //[cite: 4]
    title: 'Aakash Reddy Aduri | Full-Stack Web Developer', //[cite: 4]
    description: //[cite: 4]
      'Building scalable, secure, and high-performance web applications.', //[cite: 4]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}