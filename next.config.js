/** @type {import('next').NextConfig} */
const nextConfig = {
  // Webflow Cloud injects the base path automatically based on your mount path.
  // We pick up that path from an env var if set, otherwise default to root.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};

module.exports = nextConfig;
