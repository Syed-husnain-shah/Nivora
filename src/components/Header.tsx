"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/subscriptions", label: "Subscriptions" },
    { href: "/categories", label: "Categories" },
    { href: "/deals", label: "Deals" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" />
        <span>A simpler way to get your digital essentials • Demo showcase</span>
        <a
          href="https://wa.me/923047633041?text=Hello%20Nivora%2C%20I%20want%20to%20inquire%20about%20subscriptions"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            color: "#80ddd1",
            marginLeft: "6px",
          }}
        >
          <WhatsAppIcon size={14} />
          <ArrowRight size={13} />
        </a>
      </div>

      <header className="site-header">
        <Link className="brand" href="/" aria-label="Nivora home">
          <span className="brand-mark">
            <span />
            <span />
            <span />
          </span>
          <span>nivora</span>
        </Link>

        <button
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`main-nav ${menuOpen ? "main-nav-open" : ""}`}>
          {navLinks.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={isActive ? "nav-link-active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/923047633041?text=Hello%20Nivora%2C%20I%20want%20to%20inquire%20about%20subscriptions"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
            style={{
              color: "#25D366",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px 8px",
              borderRadius: "8px",
            }}
            onClick={() => setMenuOpen(false)}
          >
            <WhatsAppIcon size={20} />
          </a>
        </nav>

        <Link className="header-cta" href="/subscriptions">
          Explore products <ArrowRight size={15} />
        </Link>
      </header>
    </>
  );
}
