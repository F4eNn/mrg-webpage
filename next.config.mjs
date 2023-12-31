import withPlaiceholder from '@plaiceholder/next';

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
         { hostname: 'res.cloudinary.com', pathname: `/${process.env.NEXT_CLOUDINARY_NAME}/**`, protocol: 'https' },
      ],
   },
};

export default withPlaiceholder(nextConfig);
