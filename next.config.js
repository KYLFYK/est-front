/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,

  images: {
    domains: [
      "cdn.pixabay.com",
      "images.unsplash.com",
      "images.ctfassets.net",
      "http://s3.dtln.ru",
    ],
  },

  env: {
    // Reference a variable that was defined in the .env.* file and make it available at Build Time
    HOST: process.env.HOST,
  },

  build: {
    extend(config, { loaders }) {
      loaders.scss.additionalData = '@use "sass:math";';
    },
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  /*exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },*/
};
