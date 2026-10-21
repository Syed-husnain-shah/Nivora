"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Headphones,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Subscription Question",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const supportFaqs = [
    {
      q: "What is the typical response turnaround?",
      a: "For general inquiries, our team responds within 2 hours during operational windows (9 AM to 8 PM).",
    },
    {
      q: "Can I suggest a subscription tool not currently listed?",
      a: "Yes! Use the contact form below with the subject 'Custom Bundle Request' and let us know which tool you need.",
    },
    {
      q: "How does support handle activation queries?",
      a: "Our agents provide direct, screenshot-supported onboarding guidance to ensure your tools work smoothly.",
    },
  ];

  return (
    <div>
      <section className="page-hero">
        <div className="section-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <span>Contact & support</span>
          </nav>
          <div className="eyebrow">
            <Headphones size={14} />
            DIRECT HUMAN HELP
          </div>
          <h1>
            We’re just a <span>message away.</span>
          </h1>
          <p className="page-hero-copy">
            Have a question about a tool, an order inquiry, or a custom team
            request? Our team is always ready to guide you through it.
          </p>
        </div>
      </section>

      <div className="section-wrap page-content-wrap">
        <div className="contact-layout">
          <div className="contact-info-card">
            <div className="eyebrow eyebrow-light">DEMO CONTACT CHANNELS</div>
            <h2
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "24px",
                letterSpacing: "-0.8px",
                margin: "10px 0 14px",
              }}
            >
              Get in touch with <span>our team.</span>
            </h2>
            <p
              style={{
                fontSize: "12px",
                color: "#6e7b91",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              Whether you are curious about tool compatibility or need help
              navigating the catalog, we are happy to chat.
            </p>

            <div className="contact-channel-list">
              <div className="contact-channel-item">
                <div className="channel-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="channel-title">Email Inbox (Demo)</div>
                  <div className="channel-detail">hello@nivora.example</div>
                  <div style={{ fontSize: "10px", color: "#929ead", marginTop: "2px" }}>
                    Sample contact address for showcase
                  </div>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon">
                  <Clock3 size={18} />
                </div>
                <div>
                  <div className="channel-title">Support Hours</div>
                  <div className="channel-detail">
                    Monday — Saturday: 9:00 AM – 8:00 PM PKT
                  </div>
                  <div style={{ fontSize: "10px", color: "#929ead", marginTop: "2px" }}>
                    Standard inquiry response within 2 hours
                  </div>
                </div>
              </div>

              <div className="contact-channel-item">
                <div
                  className="channel-icon"
                  style={{ background: "#e1f7ec", color: "#25D366" }}
                >
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <div className="channel-title">WhatsApp Support</div>
                  <div className="channel-detail">
                    <a
                      href="https://wa.me/923047633041?text=Hello%20Nivora%2C%20I%20have%20an%20inquiry%20regarding%20subscriptions"
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
                      Chat on WhatsApp <ArrowRight size={13} />
                    </a>
                  </div>
                  <div style={{ fontSize: "10px", color: "#929ead", marginTop: "2px" }}>
                    Available on WhatsApp for instant assistance
                  </div>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="channel-title">Digital Distribution</div>
                  <div className="channel-detail">
                    Cloud-native instant email dispatch
                  </div>
                  <div style={{ fontSize: "10px", color: "#929ead", marginTop: "2px" }}>
                    Zero physical shipping delay
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h3
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "20px",
                letterSpacing: "-0.6px",
                margin: "0 0 6px",
              }}
            >
              Send a simulated inquiry
            </h3>
            <p
              style={{
                fontSize: "12px",
                color: "#7a879c",
                lineHeight: "1.6",
                margin: "0 0 24px",
              }}
            >
              Fill out this form to test our contact flow. No real emails are sent
              during this preview.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: "24px",
                  borderRadius: "12px",
                  background: "#eef9f5",
                  border: "1px solid #c8ede1",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#167a63",
                    marginBottom: "8px",
                  }}
                >
                  <CheckCircle2 size={20} />
                  Simulated Message Sent!
                </div>
                <p
                  style={{
                    margin: "0 0 16px",
                    fontSize: "12px",
                    color: "#356559",
                    lineHeight: "1.6",
                  }}
                >
                  Thank you, <strong>{formState.name || "friend"}</strong>. In a live
                  implementation, our support team would send a response to{" "}
                  <strong>{formState.email || "your email"}</strong> within 2 hours.
                </p>
                <button
                  type="button"
                  className="button button-quiet"
                  style={{ fontSize: "12px", color: "#167a63", fontWeight: 700 }}
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: "",
                      email: "",
                      subject: "Subscription Question",
                      message: "",
                    });
                  }}
                >
                  Send another inquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    required
                    className="form-input"
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="alex@example.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">
                    Inquiry Topic
                  </label>
                  <select
                    id="subject"
                    className="form-select"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                  >
                    <option value="Subscription Question">
                      Subscription Question
                    </option>
                    <option value="Order & Activation Help">
                      Order & Activation Help
                    </option>
                    <option value="Custom Bundle Request">
                      Custom Bundle Request
                    </option>
                    <option value="Feedback & Suggestions">
                      Feedback & Suggestions
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    className="form-textarea"
                    placeholder="How can we help you today?"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="button button-primary"
                  style={{ width: "100%", minHeight: "46px" }}
                >
                  Send Message (Demo) <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div style={{ marginTop: "72px" }}>
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-light">FREQUENT INQUIRIES</div>
              <h2>
                Support <span>knowledge base.</span>
              </h2>
              <p>Quick answers to common questions about our support policies.</p>
            </div>
          </div>

          <div className="faq-grid">
            {supportFaqs.map(({ q, a }) => (
              <div className="faq-card" key={q}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <HelpCircle size={15} color="#7965ed" />
                  <h4>{q}</h4>
                </div>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="disclaimer-box">
          <strong>Demo Notice & Contact Details:</strong> Email addresses and
          hours displayed are for project showcase purposes. No real transactional
          customer service queue is connected to this demonstration site.
        </div>
      </div>
    </div>
  );
}
