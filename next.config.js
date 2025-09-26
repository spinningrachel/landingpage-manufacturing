/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/admin' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/admin' : '',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig