/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'staging-api.etonshirts.com',
            port: '',
            pathname: '/v1/retail/image/1080/bynder',
          },
          {
            protocol: 'https',
            hostname: 'pixabay.com',
            port: '',
            pathname: '',
          },
        ],
      },
};

export default nextConfig;
