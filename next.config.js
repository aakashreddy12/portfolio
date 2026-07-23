/** @type {import('next').NextType} */
const nextConfig = {
  output: 'export', // Tells Next.js to generate static files in the 'out' folder
  images: {
    unoptimized: true, // Required for static export when using next/image
  },
};

module.exports = nextConfig;