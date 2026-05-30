
"use client"

import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__ow = window.__ow || {};
      window.__ow.organizationId = "57d35a0c-ce29-4b52-8317-50294d855063";
      window.__ow.template_id = "eaee6cee-4926-4fd2-bbe8-9e0b768c6c7d";
      window.__ow.integration_name = "manual_settings";
      window.__ow.product_name = "chatbot";   

      (function (n, t, c) {
        function i(n) {
          return e._h ? e._h.apply(null, n) : e._q.push(n);
        }

        var e = {
          _q: [],
          _h: null,
          _v: "2.0",
          on: function () { i(["on", c.call(arguments)]); },
          once: function () { i(["once", c.call(arguments)]); },
          off: function () { i(["off", c.call(arguments)]); },
          get: function () {
            if (!e._h) throw new Error("[OpenWidget] You can't use getters before load.");
            return i(["get", c.call(arguments)]);
          },
          call: function () { i(["call", c.call(arguments)]); },
          init: function () {
            const script = t.createElement("script");
            script.async = true;
            script.type = "text/javascript";
            script.src = "https://cdn.openwidget.com/openwidget.js";
            t.head.appendChild(script);
          }
        };

        if (!n.__ow.asyncInit) e.init();
        n.OpenWidget = n.OpenWidget || e;
      })(window, document, [].slice);
    }
  }, []);

  return (
    <>
      <noscript>
        You need to{' '}
        <a
          href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/"
          rel="noopener nofollow"
        >
          enable JavaScript
        </a>{' '}
        in order to use the AI chatbot tool powered by{' '}
        <a
          href="https://www.chatbot.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          ChatBot
        </a>
        .
      </noscript>
    </>
  );
};

export default ChatBot;
