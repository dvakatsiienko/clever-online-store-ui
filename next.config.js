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
    redirects() {
        return [
            {
                source:      '/',
                destination: '/products',
                permanent:   true,
            },
        ];
    },
};

module.exports = withBundleAnalyzer(nextConfig);
