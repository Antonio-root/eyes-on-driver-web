/** @type {import('next').NextConfig} */
const nextConfig = {

    devIndicators: false,
    reactStrictMode: true,
    experimental: {
        allowedDevOrigins: [
            'https://w1t8dca2gr7g.share.zrok.io'
        ],
    },
    images: {
        domains: [
            '8zgc93ih0knh.share.zrok.io' // <-- tu dominio zrok que sirve las imágenes
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://8zgc93ih0knh.share.zrok.io/:path*',
            },
        ];
    },
};

module.exports = nextConfig;
