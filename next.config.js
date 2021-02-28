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
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/unknown',
    //             permanent: true,
    //         },
    //         {
    //             source: '/products',
    //             destination: '/unknown',
    //             permanent: true,
    //         },
    //     ];
    // },
};

module.exports = withBundleAnalyzer(nextConfig);
