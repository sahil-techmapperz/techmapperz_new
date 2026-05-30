"use client"

import { useEffect } from 'react';
import Script from 'next/script';

const ZohoChat = () => {
  useEffect(() => {
    window.$zoho = window.$zoho || { salesiq: { ready: function() {
      // Place your initialization code here
      console.log("Zoho SalesIQ is ready!");
      // You can add more Zoho SalesIQ configuration settings here
    }}};

    const script = document.createElement('script');
    script.src = "https://salesiq.zohopublic.in/widget";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script to prevent memory leaks
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Script strategy="lazyOnload" id="zsiqscript" src="https://salesiq.zohopublic.in/widget?wc=siq8edc08969e02c825adb09c3efbfa2cc5e3402c21a00a6d8ebc1e3b3351e86010" defer />
  );
};

export default ZohoChat;
