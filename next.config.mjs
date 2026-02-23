/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build configuration for better error handling
  typescript: {
    ignoreBuildErrors: false,
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://snap.licdn.com https://googleads.g.doubleclick.net https://www.googleadservices.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' https://fonts.gstatic.com data:",
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net https://calendly.com https://www.google.com https://px.ads.linkedin.com",
              "frame-src 'self' https://www.googletagmanager.com https://calendly.com https://www.google.com https://maps.google.com https://*.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              ...(process.env.NODE_ENV === 'production' ? ["upgrade-insecure-requests"] : [])
            ].join('; ')
          }
        ],
      },
    ];
  },

  // Experimental features for Next.js 16
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion', 'lucide-react'],
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Environment variable validation
  env: {
    NEXT_PUBLIC_BACKEND_BASE_URL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    NEXT_PUBLIC_Site_URL: process.env.NEXT_PUBLIC_Site_URL,
  },

  // Build fallback for missing environment variables
  generateBuildId: async () => {
    // Warn about missing environment variables during build
    if (!process.env.NEXT_PUBLIC_BACKEND_BASE_URL) {
      console.warn('⚠️  NEXT_PUBLIC_BACKEND_BASE_URL is not set. API calls will use fallback data.');
    }
    return 'build-' + Date.now();
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: process.env.NODE_ENV === 'development', // Disable optimization in development to avoid localhost issues
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',  // Allows any path after the domain
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',  // Allow all paths from localhost:3000
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/**',  // Allow all paths from localhost:3001
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '3000',
        pathname: '/**',  // Allow all paths from 127.0.0.1:3000
      },
      {
        protocol: 'https',
        hostname: 'newadmin.techmapperz.com',
        pathname: '/**',  // Allow all paths from admin domain
      },
    ],
  },

  // Redirects configuration (replaces deprecated middleware)
  async redirects() {
    const redirects = [];

    // Redirect non-www to www (only in production)
    if (process.env.NODE_ENV === 'production') {
      redirects.push({
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'techmapperz.com',
          },
        ],
        destination: 'https://www.techmapperz.com/:path*',
        permanent: true,
      });
    }

    return redirects;
  },
};

export default nextConfig;