'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';

export default function DelayedScripts() {
  const [loadScripts, setLoadScripts] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleInteraction = () => {
      if (!loadScripts) {
        setLoadScripts(true);
        // Clean up event listeners once scripts are scheduled to load
        window.removeEventListener('scroll', handleInteraction);
        window.removeEventListener('mousemove', handleInteraction);
        window.removeEventListener('touchstart', handleInteraction);
        window.removeEventListener('keydown', handleInteraction);
        if (timeoutId) clearTimeout(timeoutId);
      }
    };

    // Listen for any user interaction
    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('mousemove', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('keydown', handleInteraction, { passive: true });

    // Fallback: load scripts after 4 seconds even if no interaction occurs
    timeoutId = setTimeout(() => {
      handleInteraction();
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [loadScripts]);

  if (!loadScripts) return null;

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
