'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function MarketingScripts() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load scripts when user interacts with the page
    const handleInteraction = () => {
      setShouldLoad(true);
      cleanup();
    };

    const events = ['scroll', 'mousemove', 'touchstart', 'keydown', 'click'];
    
    events.forEach(event => {
      window.addEventListener(event, handleInteraction, { once: true, passive: true });
    });

    // Fallback: load after 5 seconds even if there's no interaction
    const timeoutId = setTimeout(() => {
      setShouldLoad(true);
      cleanup();
    }, 5000);

    const cleanup = () => {
      events.forEach(event => {
        window.removeEventListener(event, handleInteraction);
      });
      clearTimeout(timeoutId);
    };

    return cleanup;
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      {/* Meta Pixel Code */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
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
        src="https://www.googletagmanager.com/gtag/js?id=AW-10860570322"
        strategy="afterInteractive"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SWB2CH4ZWC"
        strategy="afterInteractive"
      />
      <Script
        id="google-ads"
        strategy="afterInteractive"
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
        strategy="afterInteractive"
      >
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MFR47W8');
        `}
      </Script>
    </>
  );
}
