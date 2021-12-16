/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com', 'images.unsplash.com', 'images.ctfassets.net'],
    loader: 'custom'
  },
}
