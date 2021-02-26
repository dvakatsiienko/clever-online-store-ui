/* Core */
const analyze = require('@next/bundle-analyzer');

const withBundleAnalyzer = analyze({
    enabled:      process.env.ANALYZE === 'true',
    defaultSizes: 'gzip',
});

const nextConfig = {
    images: {
        domains: [ 'res.cloudinary.com' ],
    },
    async redirects() {
        return [
            {
                source:      '/',
                destination: '/products/1',
                permanent:   true,
            },
            {
                source:      '/products',
                destination: '/products/1',
                permanent:   true,
            },
        ];
    },
};

module.exports = withBundleAnalyzer(nextConfig);
