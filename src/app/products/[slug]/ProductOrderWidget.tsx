"use client";

import Link from "next/link";
import { ArrowRight, Check, Clock3, Headphones, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Product } from "@/data/products";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ProductOrderWidget({ product }: { product: Product }) {
  const [selectedMonths, setSelectedMonths] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const basePriceNum = parseInt(product.price.replace(/[^\d]/g, ""), 10) || 499;

  const calculatePrice = (months: number) => {
    if (months === 1) return `₨ ${basePriceNum.toLocaleString()}`;
    if (months === 3)
      return `₨ ${Math.round(basePriceNum * 3 * 0.9).toLocaleString()}`;
    return `₨ ${Math.round(basePriceNum * 12 * 0.8).toLocaleString()}`;
  };

  return (
    <aside className="detail-sidebar-card">
      <div className="demo-pill-badge">
        <ShieldCheck size={13} />
        DEMO SHOWCASE PRICING
      </div>

      <div className="sidebar-price-tag">
        <span className="sidebar-price-current">
          {calculatePrice(selectedMonths)}
        </span>
        {product.originalPrice && (
          <span className="sidebar-price-original">
            {product.originalPrice}
          </span>
        )}
        <span className="sidebar-price-period">
          {selectedMonths === 1 ? "/ month" : `/ ${selectedMonths} months`}
        </span>
      </div>

      <p style={{ margin: "4px 0 16px", fontSize: "11px", color: "#8793a5" }}>
        Simulated rate for website presentation. No real payment charged.
      </p>

      <div className="plan-options">
        <button
          type="button"
          className={`plan-option-btn ${selectedMonths === 1 ? "selected" : ""}`}
          onClick={() => setSelectedMonths(1)}
        >
          <div>
            <div className="plan-option-title">1 Month Demo</div>
            <div className="plan-option-sub">Standard monthly preview</div>
          </div>
          <span style={{ fontWeight: 700, fontSize: "12px", color: "#7965ed" }}>
            {product.price}
          </span>
        </button>

        <button
          type="button"
          className={`plan-option-btn ${selectedMonths === 3 ? "selected" : ""}`}
          onClick={() => setSelectedMonths(3)}
        >
          <div>
            <div className="plan-option-title">3 Months Demo (Save 10%)</div>
            <div className="plan-option-sub">Quarterly preview tier</div>
          </div>
          <span style={{ fontWeight: 700, fontSize: "12px", color: "#7965ed" }}>
            {calculatePrice(3)}
          </span>
        </button>

        <button
          type="button"
          className={`plan-option-btn ${selectedMonths === 12 ? "selected" : ""}`}
          onClick={() => setSelectedMonths(12)}
        >
          <div>
            <div className="plan-option-title">12 Months Demo (Save 20%)</div>
            <div className="plan-option-sub">Annual prototype tier</div>
          </div>
          <span style={{ fontWeight: 700, fontSize: "12px", color: "#7965ed" }}>
            {calculatePrice(12)}
          </span>
        </button>
      </div>

      {submitted ? (
        <div className="form-success-banner" style={{ margin: "16px 0" }}>
          <Check size={18} />
          <div>
            <strong>Simulated Order Received!</strong>
            <div style={{ fontSize: "11px", marginTop: "2px" }}>
              In a live environment, setup credentials for {product.name} would be
              dispatched immediately.
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="button button-primary sidebar-action-btn"
          onClick={() => setSubmitted(true)}
        >
          Order Demo Plan ({selectedMonths} Mo) <ArrowRight size={16} />
        </button>
      )}

      <div className="guarantee-badges">
        <div className="guarantee-badge-item">
          <Clock3 size={15} />
          <span>{product.deliveryTime}</span>
        </div>
        <div className="guarantee-badge-item">
          <ShieldCheck size={15} />
          <span>100% Safe Demo — Zero real credit card required</span>
        </div>
        <div className="guarantee-badge-item">
          <Headphones size={15} />
          <span>Need help? Fast human response on standby</span>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          paddingTop: "14px",
          borderTop: "1px solid #edf0f5",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          textAlign: "center",
        }}
      >
        <a
          href={`https://wa.me/923047633041?text=Hello%20Nivora%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}%20(${selectedMonths}%20month%20plan)`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "7px",
            fontSize: "12px",
            color: "#25D366",
            fontWeight: 700,
          }}
        >
          <WhatsAppIcon size={16} />
          Inquire via WhatsApp
        </a>
        <Link
          href="/contact"
          style={{ fontSize: "11px", color: "#7965ed", fontWeight: 600 }}
        >
          Have questions before ordering? Contact Support →
        </Link>
      </div>
    </aside>
  );
}
