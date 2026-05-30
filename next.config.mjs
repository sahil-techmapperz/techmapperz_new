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
              "frame-ancestors 'self'"
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
    qualities: [25, 50, 75, 80, 85, 90, 100],
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

    // Redirect IT Services from old URLs to new hyphenated URLs to preserve SEO
    redirects.push(
      { source: '/service/it', destination: '/service/it-services', permanent: true },
      { source: '/service/it/itconsultingservice', destination: '/service/it-services/it-consulting', permanent: true },
      { source: '/service/it/it-consulting-services', destination: '/service/it-services/it-consulting', permanent: true },
      { source: '/service/it/crmservice', destination: '/service/it-services/crm', permanent: true },
      { source: '/service/it/crm-services', destination: '/service/it-services/crm', permanent: true },
      { source: '/service/it/mobiledevelopment', destination: '/service/it-services/mobile-development', permanent: true },
      { source: '/service/it/mobile-development', destination: '/service/it-services/mobile-development', permanent: true },
      { source: '/service/it/webdevelopment', destination: '/service/it-services/web-development', permanent: true },
      { source: '/service/it/web-development', destination: '/service/it-services/web-development', permanent: true },

      // Drone Services
      { source: '/service/gis/droneservice', destination: '/service/drone-services', permanent: true },
      { source: '/service/droneservice', destination: '/service/drone-services', permanent: true },
      { source: '/service/gis/droneservice/dronesurveyandmapping', destination: '/service/drone-services/drone-survey-and-mapping', permanent: true },
      { source: '/service/droneservice/dronesurveyandmapping', destination: '/service/drone-services/drone-survey-and-mapping', permanent: true },
      { source: '/service/gis/droneservice/inspectionandanalysis', destination: '/service/drone-services/inspection-and-analysis', permanent: true },
      { source: '/service/droneservice/inspectionandanalysis', destination: '/service/drone-services/inspection-and-analysis', permanent: true },
      { source: '/service/gis/droneservice/dronedataprocessing', destination: '/service/drone-services/drone-data-processing', permanent: true },
      { source: '/service/droneservice/dronedataprocessing', destination: '/service/drone-services/drone-data-processing', permanent: true },

      // GIS Services
      { source: '/service/gis/gisservice', destination: '/service/gis-services', permanent: true },
      { source: '/service/gisservice', destination: '/service/gis-services', permanent: true },
      { source: '/service/gis/gisservice/gismapping', destination: '/service/gis-services/gis-mapping', permanent: true },
      { source: '/service/gisservice/gismapping', destination: '/service/gis-services/gis-mapping', permanent: true },
      { source: '/service/gis/gisservice/datadigitization', destination: '/service/gis-services/data-digitization', permanent: true },
      { source: '/service/gisservice/datadigitization', destination: '/service/gis-services/data-digitization', permanent: true },
      { source: '/service/gis/gisservice/gisconsulting', destination: '/service/gis-services/gis-consulting', permanent: true },
      { source: '/service/gisservice/gisconsulting', destination: '/service/gis-services/gis-consulting', permanent: true },
      { source: '/service/gis/gisservice/webgisdevelopment', destination: '/service/gis-services/web-gis-development', permanent: true },
      { source: '/service/gisservice/webgisdevelopment', destination: '/service/gis-services/web-gis-development', permanent: true },
      { source: '/service/gis/gisservice/gissurveying', destination: '/service/gis-services/gis-surveying', permanent: true },
      { source: '/service/gisservice/gissurveying', destination: '/service/gis-services/gis-surveying', permanent: true },
    );

    return redirects;
  },
};

export default nextConfig;