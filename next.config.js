/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  projectId: 'cucl3rl7',
  experimental: {
    appDir: true,
  },
  images: {
      remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io/**',
        port: '',

      },
    ],
    // domains: ["https://cdn.sanity.io/", "cdn.sanity.io", ],
  }
}

module.exports = nextConfig;
