/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Enables static export
  images: { unoptimized: true }, // Required if using <Image> with static export
  // If deploying as a project page:
  basePath: '/Next.js-Portfolio',
  assetPrefix: '/Next.js-Portfolio/',
  trailingSlash: true        // Often helps with GitHub Pages directory-style links
};

module.exports = nextConfig;
