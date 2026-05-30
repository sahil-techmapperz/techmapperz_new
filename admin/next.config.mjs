/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['ik.imagekit.io', 'localhost','newadmin.techmapperz.com'],  // Add your ImageKit domain and localhost here
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'ik.imagekit.io',
            pathname: '/**',  // Allows any path after the domain
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3001',
            pathname: '/uploads/**',  // Allow uploads from localhost:3001
          },
          {
            protocol: 'https',
            hostname: 'newadmin.techmapperz.com',
            pathname: '/**',  // Allows any path after the domain
          },
        ],
      },

           // Configure static file serving
    async rewrites() {
        return [
          {
            source: '/uploads/:path*',
            destination: '/api/static-files/:path*', // Route to API handler for static files
          },
        ];
    },
    experimental: {
        serverComponentsExternalPackages: ['formidable']
    },
};

export default nextConfig;
