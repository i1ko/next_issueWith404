/** @type {import("next").NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        //todo: make note that hardcode here. Maybe need to move inside middleware.ts
        // destination: `/${languageE.defaultLanguage}/home`,
        destination: '/uk/home',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/en/home',
        permanent: true,
      },
      {
        source: '/uk',
        destination: '/uk/home',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'wallpapercave.com',
      //   port: '',
      //   pathname: '**',
      // },
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   port: '1337',
      //   pathname: '/uploads/**',
      // },
      {
        hostname: '*',
      },
    ],
  },
  // experimental: {
  //   /*reCAPTCHA starts*/
  //   serverActions: true,
  //   /*reCAPTCHA ends*/
  // },
};

module.exports = nextConfig;
