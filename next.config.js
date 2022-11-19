const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REST_API: isProd
      ? 'https://frontend-challenge-roan.vercel.app'
      : 'http://localhost:3000'
  },
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
