/** @type {import('next').NextConfig} */
const nextConfig = {
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/,
         use: ['@svgr/webpack'],
      });

      return config;
   },
   images: {
      remotePatterns: [
         { hostname: 'localhost', port: '1337', pathname: '/uploads/**', protocol: 'http' },
         { hostname: 'mrg-web-service.onrender.com', pathname: '/uploads/**', protocol: 'https'},
      ],
   },
   experimental: {
      webpackBuildWorker: true,
   },
};

module.exports = nextConfig;
