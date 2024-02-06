/** @type {import('next').NextConfig} */

const nextConfig = {
  
  // flags: {
  //   DEV_SSR: false,
  // },
  
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  env: {
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID
  },
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
      if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.tls = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.child_process = false;
      }

      return config;
  },
}

module.exports = nextConfig
