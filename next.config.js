/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['rickandmortyapi.com']
  }
}

module.exports = nextConfig
