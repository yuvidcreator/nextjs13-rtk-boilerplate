/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.SITE_URL,
    API_URL: process.env.BACKEND_API,
    BACKEND_BASE_URL: process.env.BACKEND_URL,
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false, // disable powered by header.
  trailingSlash: true,
  images: {
    domains: [
      'images.unsplash.com',
      'dummyimage.com',
      'cdn.tailgrids.com', 
      'fancytailwind.com',
      'cdn.cnbj0.fds.api.mi-img.com'
    ],
  },
  output: 'standalone',
}

module.exports = nextConfig
