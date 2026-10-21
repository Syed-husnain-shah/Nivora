"use client";

import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/923047633041?text=Hello%20Nivora%2C%20I%20want%20to%20inquire%20about%20subscriptions"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "26px",
        right: "26px",
        zIndex: 999,
        display: "grid",
        placeItems: "center",
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "#25D366",
        color: "#ffffff",
        boxShadow: "0 10px 24px rgba(37, 211, 102, 0.42)",
        textDecoration: "none",
        transition: "transform 180ms ease, box-shadow 180ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.boxShadow = "0 14px 30px rgba(37, 211, 102, 0.52)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 10px 24px rgba(37, 211, 102, 0.42)";
      }}
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
