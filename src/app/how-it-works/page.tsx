import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  HelpCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Discover & Compare",
      subtitle: "Find the tools that match your creative and productivity needs.",
      details: [
        "Search through curated categories including Design, AI, Video, and Music.",
        "Compare upfront monthly rates with zero hidden charges.",
        "Inspect full feature breakdowns and compatibility requirements.",
      ],
      icon: Search,
      tone: "step-icon-one",
    },
    {
      num: "02",
      title: "Place Your Simulated Order",
      subtitle: "Quick, frictionless checkout designed for maximum simplicity.",
      details: [
        "Pick between flexible 1-month, 3-month, or 12-month demo duration tiers.",
        "Provide your preferred contact email address for setup credentials.",
        "Review your simulated order details with transparent pricing.",
      ],
      icon: Zap,
      tone: "step-icon-two",
    },
    {
      num: "03",
      title: "Receive Fast Activation",
      subtitle: "Instant or near-instant delivery straight to your email inbox.",
      details: [
        "Receive direct invitation links, licenses, or activation credentials.",
        "Follow easy step-by-step visual onboarding guides.",
        "Enjoy full premium capabilities immediately on your personal devices.",
      ],
      icon: Sparkles,
      tone: "step-icon-three",
    },
    {
      num: "04",
      title: "Enjoy Continuous Support",
      subtitle: "We remain by your side for the entire duration of your plan.",
      details: [
        "Reach out to real human support agents for any technical troubleshooting.",
        "Timely advance notices ahead of any scheduled renewal date.",
        "Effortless upgrades or transitions to other software subscriptions.",
      ],
      icon: ShieldCheck,
      tone: "step-icon-one",
    },
  ];

  const faqs = [
    {
      q: "How long does activation typically take?",
      a: "For digital subscriptions in this preview, simulated dispatch occurs within minutes. Live setups utilize automated webhook invitations to ensure minimal waiting.",
    },
    {
      q: "Do I have to share sensitive personal passwords?",
      a: "Never. Subscriptions are delivered either via direct workspace invitation or through dedicated private demo profiles. We never request private account passwords.",
    },
    {
      q: "What happens when a monthly period ends?",
      a: "In a real setup, friendly reminder notices are sent 3 days before renewal. You retain full control over whether to extend, pause, or switch your plan.",
    },
    {
      q: "Is there human assistance if I run into an error?",
      a: "Yes! Our support team is reachable via email and direct chat channels to guide you through setup steps.",
    },
  ];

  return (
    <div>
      <section className="page-hero">
        <div className="section-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <span>How it works</span>
          </nav>
          <div className="eyebrow">
            <Clock3 size={14} />
            TRANSPARENT WORKFLOW
          </div>
          <h1>
            Simple steps from <span>start to finish.</span>
          </h1>
          <p className="page-hero-copy">
            Getting digital tools shouldn’t be complicated or stressful. Here is
            how Nivora streamlines discovery, simulated ordering, and activation
            for everyday users.
          </p>
        </div>
      </section>

      <div className="section-wrap page-content-wrap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {steps.map(({ num, title, subtitle, details, icon: Icon, tone }) => (
            <article
              key={num}
              style={{
                position: "relative",
                padding: "28px",
                border: "1px solid #e9edf3",
                borderRadius: "14px",
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px",
                }}
              >
                <div className={`step-icon ${tone}`}>
                  <Icon size={20} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "#cad0dc",
                  }}
                >
                  {num}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: "17px",
                  fontWeight: 700,
                  margin: "0 0 8px",
                  letterSpacing: "-0.4px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  color: "#778396",
                  lineHeight: "1.6",
                  margin: "0 0 18px",
                }}
              >
                {subtitle}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid #f1f3f8",
                }}
              >
                {details.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      fontSize: "11px",
                      color: "#46536b",
                      lineHeight: "1.5",
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      color="#21967d"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "74px" }}>
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-light">COMMON QUESTIONS</div>
              <h2>
                Everything you <span>need to know.</span>
              </h2>
              <p>Clear answers to frequent questions about ordering and delivery.</p>
            </div>
            <Link className="text-link" href="/contact">
              Have another question? <ArrowRight size={15} />
            </Link>
          </div>

          <div className="faq-grid">
            {faqs.map(({ q, a }) => (
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

        <div
          style={{
            marginTop: "64px",
            padding: "36px",
            borderRadius: "15px",
            background: "linear-gradient(110deg, #151e34, #1b2641)",
            color: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div className="eyebrow" style={{ color: "#a597ff" }}>
              <Sparkles size={13} />
              READY TO BEGIN
            </div>
            <h3
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "24px",
                margin: "8px 0 6px",
              }}
            >
              Explore our full collection of subscriptions.
            </h3>
            <p style={{ margin: 0, fontSize: "12px", color: "#a2aebb" }}>
              Find your ideal tools in seconds and test out the interactive catalog.
            </p>
          </div>
          <Link
            href="/subscriptions"
            className="button"
            style={{ background: "#ffffff", color: "#151e34" }}
          >
            Browse Subscriptions <ArrowRight size={15} />
          </Link>
        </div>

        <div className="disclaimer-box">
          <strong>Process Disclaimer:</strong> Steps detailed above describe the
          workflow structure modeled by this web application. The platform is
          currently operating as a demonstration showcase.
        </div>
      </div>
    </div>
  );
}
