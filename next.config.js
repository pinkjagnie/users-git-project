/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
  },
};

// module.exports = nextConfig

module.exports = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};
