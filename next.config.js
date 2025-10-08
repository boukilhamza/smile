/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  i18n: {
    locales: ['fr', 'en', 'ar'],
    defaultLocale: 'fr',
  },
}

module.exports = nextConfig
