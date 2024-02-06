/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['staging-api.etonshirts.com'],
        // remotePatterns: [
        //   {
        //     protocol: 'https',
        //     hostname: 'staging-api.etonshirts.com',
        //     port: '',
        //     pathname: '/v1/retail/image/',
        //   },
        // ],
      },
};

export default nextConfig;
