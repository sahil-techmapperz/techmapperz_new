import { Poppins } from 'next/font/google';
import CriticalCSS from './_Components/CriticalCSS';
import "./globals.css";
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Conditional layout component that handles Navbar/Footer based on route
const ConditionalLayout = dynamic(() => import('./_Components/ConditionalLayout'));
const PerformanceProvider = dynamic(() => import('./_Components/PerformanceProvider'));
import { Montserrat } from "next/font/google";
import Head from 'next/head';
import SmoothScroll from './_Components/SmoothScroll';



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: 'swap', // Improve font loading performance
  preload: true,
});



// Enhanced SEO metadata for the root layout
export const metadata = {
  metadataBase: new URL('https://www.techmapperz.com'),
  title: {
    default: 'Techmapperz | Leading IT & GIS Solutions Company in India',
    template: '%s | Techmapperz'
  },
  description: 'Techmapperz is a leading IT, GIS, and Drone Solutions provider in India. We offer custom web development, mobile apps, CRM systems, GIS mapping, drone surveys, and data digitization services.',
  keywords: [
    'IT company India',
    'GIS services',
    'drone survey',
    'web development',
    'mobile app development',
    'CRM systems',
    'GIS mapping',
    'data digitization',
    'software development',
    'drone data processing',
    'spatial analysis',
    'geographic information systems',
    'custom software solutions',
    'digital transformation',
    'technology consulting'
  ].join(', '),
  authors: [{ name: 'Techmapperz Team' }],
  creator: 'Techmapperz',
  publisher: 'Techmapperz',
  category: 'Technology Services',
  classification: 'Business',
  icons: {
    icon: [
      { url: 'https://www.techmapperz.com/favicon.ico', sizes: 'any' },
      { url: 'https://www.techmapperz.com/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: 'https://www.techmapperz.com/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: 'https://www.techmapperz.com/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: 'https://www.techmapperz.com/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: 'https://www.techmapperz.com/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome', url: 'https://www.techmapperz.com/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.techmapperz.com',
    title: 'Techmapperz | Leading IT & GIS Solutions Company in India',
    description: 'Techmapperz provides comprehensive IT and GIS solutions including web development, mobile apps, CRM systems, drone surveys, and spatial analysis services.',
    siteName: 'Techmapperz',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Techmapperz - IT & GIS Solutions Company',
      },
      {
        url: '/Photos/company_logo.webp',
        width: 800,
        height: 600,
        alt: 'Techmapperz Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techmapperz | Leading IT & GIS Solutions Company in India',
    description: 'Comprehensive IT and GIS solutions including web development, mobile apps, drone surveys, and spatial analysis services.',
    images: ['/logo.webp'],
    creator: '@techmapperz',
    site: '@techmapperz'
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code'
  },
  alternates: {
    canonical: 'https://www.techmapperz.com',
    languages: {
      'en-US': 'https://www.techmapperz.com',
      'en-IN': 'https://www.techmapperz.com'
    }
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'geo.position': '22.5726;88.3639',
    'ICBM': '22.5726, 88.3639',
    'business:contact_data:street_address': 'Kolkata, West Bengal',
    'business:contact_data:locality': 'Kolkata',
    'business:contact_data:region': 'West Bengal',
    'business:contact_data:postal_code': '700001',
    'business:contact_data:country_name': 'India',
    'theme-color': '#00B0FE',
    'msapplication-TileColor': '#00B0FE',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/Photos/3Drendered_digital_Ear.webp" as="image" />
        <link rel="preload" href="/logo.webp" as="image" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.techmapperz.com/#organization",
                  "name": "Techmapperz",
                  "url": "https://www.techmapperz.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.techmapperz.com/logo.webp",
                    "width": 800,
                    "height": 600
                  },
                  "description": "Leading IT, GIS, and Drone Solutions provider in India offering web development, mobile apps, CRM systems, GIS mapping, and drone surveys.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "India",
                    "addressRegion": "West Bengal",
                    "addressLocality": "Kolkata"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-XXXXXXXXXX",
                    "contactType": "Customer Service",
                    "availableLanguage": "English"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/techmapperz",
                    "https://twitter.com/techmapperz",
                    "https://www.facebook.com/techmapperz"
                  ],
                  "foundingDate": "2020",
                  "numberOfEmployees": "50-100",
                  "slogan": "Transforming ideas into digital reality"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.techmapperz.com/#website",
                  "url": "https://www.techmapperz.com",
                  "name": "Techmapperz",
                  "description": "Leading IT & GIS Solutions Company in India",
                  "publisher": {
                    "@id": "https://www.techmapperz.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://www.techmapperz.com/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.techmapperz.com/#localbusiness",
                  "name": "Techmapperz",
                  "image": "https://www.techmapperz.com/logo.webp",
                  "description": "Professional IT and GIS services including web development, mobile applications, CRM systems, drone surveys, and spatial analysis.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "India",
                    "addressRegion": "West Bengal",
                    "addressLocality": "Kolkata"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 22.5726,
                    "longitude": 88.3639
                  },
                  "url": "https://www.techmapperz.com",
                  "telephone": "+91-XXXXXXXXXX",
                  "priceRange": "$$",
                  "openingHours": "Mo-Fr 09:00-18:00",
                  "serviceArea": {
                    "@type": "Country",
                    "name": "India"
                  }
                }
              ]
            })
          }}
        />
      </head>

      <body className={montserrat.variable}>
        <SmoothScroll>
          <CriticalCSS />
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <ConditionalLayout>{children}</ConditionalLayout>
        </SmoothScroll>


        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '792115005500081'); fbq('track', 'PageView');`
          }}
        />

        {/* Google Ads & Analytics Scripts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-10860570322`}
          strategy="lazyOnload"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SWB2CH4ZWC"
          strategy="lazyOnload"
        />
        <Script
          id="google-ads"
          strategy="lazyOnload"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}           
            gtag('js', new Date());
            gtag('config', 'AW-10860570322');
            gtag('config', 'G-SWB2CH4ZWC');
          `}
        </Script>

        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MFR47W8');
          `}
        </Script>

        {/* Google Tag Manager NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFR47W8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
