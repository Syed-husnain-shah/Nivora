import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Heart,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { benefits } from "@/data/products";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Radical Transparency",
      desc: "Every plan detail, renewal term, and price is stated openly with zero hidden surprises or fine-print traps.",
    },
    {
      icon: Sparkles,
      title: "Curated Excellence",
      desc: "We do not list thousands of obscure tools. We focus solely on the digital essentials that genuinely improve your day.",
    },
    {
      icon: Users,
      title: "Human Support",
      desc: "No endless bot loops. If you have questions or need guidance, friendly human assistance is always available.",
    },
  ];

  return (
    <div>
      <section className="page-hero">
        <div className="section-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <span>About</span>
          </nav>
          <div className="eyebrow">
            <Heart size={14} />
            OUR STORY & VALUES
          </div>
          <h1>
            Good tools. <span>Less figuring it out.</span>
          </h1>
          <p className="page-hero-copy">
            We believe access to top-tier creative and productivity tools should
            be straightforward, affordable, and supported by people who care.
          </p>
        </div>
      </section>

      <div className="section-wrap page-content-wrap">
        <div className="story-section">
          <div>
            <div className="eyebrow eyebrow-light">WHY WE STARTED</div>
            <h2
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "30px",
                letterSpacing: "-1.2px",
                margin: "12px 0 16px",
              }}
            >
              Making software subscriptions <span>feel human again.</span>
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "#6a778c",
                lineHeight: "1.8",
                marginBottom: "14px",
              }}
            >
              Finding and managing modern digital tools has become surprisingly
              cumbersome. Confusing multi-tier pricing, unexpected conversion
              fees, and buried cancellation buttons leave people feeling
              exhausted before they even start creating.
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#6a778c",
                lineHeight: "1.8",
                margin: 0,
              }}
            >
              Nivora was conceived to change that dynamic. By assembling the most
              essential digital subscriptions under one clean roof, we make it
              simple to discover, activate, and enjoy the software you need.
            </p>
          </div>

          <div
            style={{
              padding: "36px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #f0efff, #e8f7f4)",
              border: "1px solid #e1e1f7",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "20px",
                fontWeight: 700,
                color: "#182239",
                marginBottom: "12px",
              }}
            >
              Our Mission
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "#576479",
                lineHeight: "1.75",
                margin: 0,
              }}
            >
              To eliminate digital friction so creators, students, and
              professionals have more room to focus on what they do best:
              building, learning, and doing their thing.
            </p>

            <div
              style={{
                marginTop: "24px",
                paddingTop: "18px",
                borderTop: "1px solid rgba(121, 101, 237, 0.15)",
                display: "flex",
                gap: "24px",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#7565df",
                  }}
                >
                  100%
                </div>
                <div style={{ fontSize: "11px", color: "#6a778c" }}>
                  Upfront demo rates
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#21967d",
                  }}
                >
                  24/7
                </div>
                <div style={{ fontSize: "11px", color: "#6a778c" }}>
                  Demo inquiry support
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-light">CORE PILLARS</div>
              <h2>
                What we <span>stand for.</span>
              </h2>
              <p>The operating principles that guide every feature we build.</p>
            </div>
          </div>

          <div className="values-grid">
            {values.map(({ icon: Icon, title, desc }) => (
              <div className="value-card" key={title}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "10px",
                    background: "#f0efff",
                    color: "#7565df",
                  }}
                >
                  <Icon size={18} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "64px",
            padding: "44px",
            borderRadius: "16px",
            background: "#151e34",
            color: "#ffffff",
          }}
        >
          <div className="eyebrow" style={{ color: "#a597ff" }}>
            THE NIVORA DIFFERENCE
          </div>
          <h2
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "28px",
              margin: "12px 0 24px",
            }}
          >
            Why users love getting tools with us.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {benefits.map((b, i) => (
              <div
                key={b.title}
                style={{
                  padding: "20px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div
                  style={{
                    color: "#a597ff",
                    fontWeight: 800,
                    fontSize: "12px",
                    marginBottom: "8px",
                  }}
                >
                  0{i + 1}
                </div>
                <h4 style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 700 }}>
                  {b.title}
                </h4>
                <p style={{ margin: 0, fontSize: "11px", color: "#a5b0c2", lineHeight: "1.6" }}>
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "64px",
            textAlign: "center",
            padding: "40px 20px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "24px",
              margin: "0 0 10px",
            }}
          >
            Ready to find your favorite subscription?
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "#778396",
              maxWidth: "480px",
              margin: "0 auto 24px",
            }}
          >
            Explore our curated catalog of design, productivity, video, and audio
            platforms.
          </p>
          <Link href="/subscriptions" className="button button-primary">
            Explore All Subscriptions <ArrowRight size={15} />
          </Link>
        </div>

        <div className="disclaimer-box">
          <strong>Transparency & Demo Disclosure:</strong> Nivora is presented
          here as a portfolio and product design demonstration. All metrics,
          pricing displays, brand emblems, and review indicators represent
          simulated prototype content.
        </div>
      </div>
    </div>
  );
}
