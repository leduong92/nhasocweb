/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['api.1live.io.vn', '172.18.108.243'],
    },
    env: {
        BASE_URL: 'http://api.1live.io.vn/api',
        //BASE_URL: 'http://localhost:5000/api',
        BASE_IMAGE_URL: 'http://api.1live.io.vn',
    },
};

module.exports = nextConfig;
