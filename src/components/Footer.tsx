"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, CircleHelp } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link className="brand footer-brand" href="/" aria-label="Nivora home">
            <span className="brand-mark">
              <span />
              <span />
              <span />
            </span>
            <span>nivora</span>
          </Link>
          <p>
            Your digital essentials,
            <br />
            made simple.
          </p>
          <div style={{ marginTop: "14px" }}>
            <a
              href="https://wa.me/923047633041?text=Hello%20Nivora%2C%20I%20want%20to%20inquire%20about%20subscriptions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#25D366",
                fontWeight: 700,
                fontSize: "12px",
              }}
            >
              <WhatsAppIcon size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>EXPLORE</h4>
            <Link href="/subscriptions">Subscriptions</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/deals">Deals</Link>
          </div>
          <div>
            <h4>GOOD TO KNOW</h4>
            <Link href="/about">About Nivora</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/contact">Contact & support</Link>
          </div>
          <div className="footer-help">
            <div className="help-icon">
              <CircleHelp size={19} />
            </div>
            <h4>A QUESTION?</h4>
            <p>We’re always glad to help on WhatsApp or email.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <a
                href="https://wa.me/923047633041?text=Hello%20Nivora%2C%20I%20want%20to%20inquire%20about%20subscriptions"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#25D366",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <WhatsAppIcon size={15} />
                WhatsApp Chat <ArrowRight size={13} />
              </a>
              <Link href="/contact">
                hello@nivora.example <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © 2026 Nivora • Demo website preview. All products and prices are for demonstration.
        </span>
        <div>
          <Link href="/about">Why Nivora</Link>
          <Link href="/contact">Support</Link>
        </div>
        <button className="back-top" onClick={scrollToTop}>
          Back to top <ChevronDown size={14} />
        </button>
      </div>
    </footer>
  );
}
