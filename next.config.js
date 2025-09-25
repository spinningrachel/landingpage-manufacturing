/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/manufacturing',
  assetPrefix: '/manufacturing',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig