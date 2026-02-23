"use client";

import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    // Dynamically load the Calendly widget script
    const script = document.createElement("script");
    script.src = "https://calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Render the Calendly inline widget */}
      <div
        className="calendly-container"
        style={{
          height: "100vh", // Make it fill the full height of the viewport
          overflow: "hidden", // Prevent any scrollbars
          display: "flex", // Center the widget
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="calendly-inline-widget"
          style={{
            objectFit: "contain", // Ensure widget size remains consistent
            height: "100%", // Ensure widget height remains consistent
            width: "100%", // Use full width
          }}
          data-url="https://calendly.com/techmapperz-projects/description-about-your-queries"
        ></div>
      </div>
    </>
  );
};

export default CalendlyWidget;
