/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['api.1live.io.vn'],
    },
    env: {
        BASE_URL: 'http://api.1live.io.vn/api',
        BASE_IMAGE_URL: 'http://api.1live.io.vn',
    },
};

module.exports = nextConfig;
