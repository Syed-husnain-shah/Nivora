"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Clock3,
  Headphones,
  MoveUpRight,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "@/data/products";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ProductLogo from "@/components/ProductLogo";

const benefits = [
  {
    icon: ShieldCheck,
    title: "A little more peace of mind",
    text: "Clear product details and reliable help whenever you need it.",
  },
  {
    icon: Clock3,
    title: "Up and running sooner",
    text: "A straightforward order flow, with delivery updates along the way.",
  },
  {
    icon: Headphones,
    title: "Real help, close by",
    text: "Questions are welcome. Our support team is here to help you out.",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Everything");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesQuery =
        `${product.name} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(query.toLowerCase());

      if (!matchesQuery) return false;

      if (activeCategory === "Everything") {
        return true;
      }
      if (activeCategory === "Create") {
        return (
          product.category === "Design" ||
          product.category === "Video & Editing"
        );
      }
      if (activeCategory === "Get things done") {
        return product.category === "AI & Productivity";
      }
      if (activeCategory === "Unwind") {
        return product.category === "Music & Streaming";
      }
      return true;
    });
  }, [query, activeCategory]);

  const displayedProducts =
    query === "" && activeCategory === "Everything"
      ? products.slice(0, 4)
      : filteredProducts;

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={14} />
            A fresh take on digital essentials
          </div>

          <h1>
            Good tools.
            <br />
            <span>More room</span> to do you.
          </h1>

          <p className="hero-copy">
            The subscriptions you love, made easier to find and simpler to get.
            Pick what fits your day and let the good stuff begin.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" href="/subscriptions">
              Find your thing <ArrowRight size={16} />
            </Link>
            <Link className="button button-quiet" href="/how-it-works">
              <span className="play-icon">
                <Play size={12} fill="currentColor" />
              </span>
              See how it works
            </Link>
          </div>

          <div className="hero-proof">
            <div className="proof-avatars" aria-hidden="true">
              <span>R</span>
              <span>A</span>
              <span>M</span>
              <span>+</span>
            </div>
            <div>
              <div className="proof-stars">★★★★★</div>
              <p>Demo community preview • 5.0 simulated rating</p>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-label="Illustration of digital tools">
          <div className="art-glow" />
          <div className="art-label art-label-top">
            <span className="label-icon label-icon-cyan">
              <WandSparkles size={15} />
            </span>
            Your next great idea
          </div>
          <div className="art-window">
            <div className="window-top">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>your creative space</span>
              <div className="window-menu">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="window-canvas">
              <div className="canvas-left">
                <span className="canvas-kicker">A LITTLE INSPIRATION</span>
                <div className="canvas-title">
                  Make space
                  <br />
                  for <em>good things.</em>
                </div>
                <span className="canvas-line" />
                <span className="canvas-note">START SOMETHING TODAY</span>
              </div>
              <div className="canvas-shapes">
                <div className="shape shape-circle" />
                <div className="shape shape-arch" />
                <div className="shape shape-block" />
                <div className="shape shape-dot" />
              </div>
            </div>
            <div className="window-bottom">
              <span>Untitled_ideas</span>
              <span>Made for your next big thing ↗</span>
            </div>
          </div>
          <div className="art-label art-label-bottom">
            <span className="label-icon label-icon-violet">
              <Check size={15} />
            </span>
            Yours in just a few steps
          </div>
          <div className="art-sparkle art-sparkle-one">✳</div>
          <div className="art-sparkle art-sparkle-two">✳</div>
        </div>

        <a className="scroll-note" href="#featured">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={15} />
        </a>
      </section>

      <section className="trust-strip" aria-label="Nivora service highlights">
        <span>GOOD THINGS, MADE SIMPLE</span>
        <i />
        <span>
          <Check size={14} /> Clear, upfront demo rates
        </span>
        <i />
        <span>
          <Check size={14} /> Friendly human support
        </span>
        <i />
        <span>
          <Check size={14} /> A smoother start
        </span>
      </section>

      <section className="products-section section-wrap" id="featured">
        <div className="section-heading">
          <div>
            <div className="eyebrow eyebrow-light">A GOOD PLACE TO START</div>
            <h2>
              Find your new <span>favourite.</span>
            </h2>
            <p>A few everyday picks to help you make, learn, and unwind.</p>
          </div>
          <Link className="text-link" href="/subscriptions">
            See all subscriptions <MoveUpRight size={15} />
          </Link>
        </div>

        <div className="product-toolbar">
          <div className="category-pills">
            {["Everything", "Create", "Get things done", "Unwind"].map((pill) => (
              <button
                key={pill}
                className={`category-pill ${activeCategory === pill ? "active" : ""}`}
                onClick={() => setActiveCategory(pill)}
              >
                {pill}
              </button>
            ))}
          </div>
          <label className="product-search">
            <Search size={15} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find a product"
              aria-label="Find a product"
            />
          </label>
        </div>

        <div className="product-grid">
          {displayedProducts.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-card-top">
                <div style={{ borderRadius: "12px", overflow: "hidden", display: "grid", placeItems: "center" }}>
                  <ProductLogo slug={product.slug} name={product.name} size={42} />
                </div>
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
                <Link
                  href={`/products/${product.slug}`}
                  className="product-arrow"
                  aria-label={`View ${product.name} details`}
                >
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="product-category">{product.category}</div>
              <Link href={`/products/${product.slug}`}>
                <h3>{product.name}</h3>
              </Link>
              <p className="product-description">{product.description}</p>
              <div className="product-card-bottom">
                <div className="product-price">
                  {product.price}
                  <span> {product.period} (demo)</span>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  aria-label={`Explore ${product.name}`}
                >
                  <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}
          {displayedProducts.length === 0 && (
            <div className="empty-search">
              No matches yet. Try another product name.
            </div>
          )}
        </div>

        <p className="demo-note">
          Example products and prices shown for website preview. Demo rates for testing.
        </p>
      </section>

      <section className="why-section" id="why-nivora">
        <div className="why-inner section-wrap">
          <div className="why-copy">
            <div className="eyebrow">THE NIVORA DIFFERENCE</div>
            <h2>
              Less figuring it out.
              <br />
              <span>More getting into it.</span>
            </h2>
            <p>
              Finding the right subscription shouldn’t feel like a project.
              We keep the details clear, the process simple, and support close
              at hand.
            </p>
            <Link className="button button-dark" href="/about">
              Get to know us <ArrowRight size={16} />
            </Link>
          </div>

          <div className="benefit-list">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article className="benefit-item" key={title}>
                <div className="benefit-number">0{index + 1}</div>
                <div className="benefit-icon">
                  <Icon size={19} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <Link
                  href="/about"
                  className="benefit-arrow"
                  aria-label={`Learn more about ${title}`}
                >
                  <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="steps-section section-wrap" id="how-it-works">
        <div className="steps-heading">
          <div className="eyebrow eyebrow-light">THAT’S THE WHOLE IDEA</div>
          <h2>
            Three little steps. <span>Then you’re off.</span>
          </h2>
          <p>We’ve made getting started feel refreshingly straightforward.</p>
        </div>
        <div className="steps-grid">
          <article className="step-card">
            <span className="step-count">01</span>
            <div className="step-icon step-icon-one">
              <Search size={20} />
            </div>
            <h3>Pick what you need</h3>
            <p>Explore the tools and subscriptions that suit your everyday.</p>
            <Link
              href="/subscriptions"
              className="step-connector"
              aria-label="Explore subscriptions"
            >
              ↗
            </Link>
          </article>
          <article className="step-card">
            <span className="step-count">02</span>
            <div className="step-icon step-icon-two">
              <Check size={20} />
            </div>
            <h3>Place your order</h3>
            <p>Review the details and follow the simple checkout steps.</p>
            <Link
              href="/how-it-works"
              className="step-connector"
              aria-label="How ordering works"
            >
              ↗
            </Link>
          </article>
          <article className="step-card">
            <span className="step-count">03</span>
            <div className="step-icon step-icon-three">
              <Sparkles size={20} />
            </div>
            <h3>Get straight to it</h3>
            <p>We’ll share the next steps and help if you need a hand.</p>
          </article>
        </div>
      </section>

      <section className="bottom-cta" id="support">
        <div className="cta-sparkle">✳</div>
        <div>
          <div className="eyebrow">WE’RE JUST A MESSAGE AWAY</div>
          <h2>Need a hand finding your thing?</h2>
          <p>Talk it through with a real person on WhatsApp or email.</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <a
            className="button button-primary"
            href="https://wa.me/923047633041?text=Hello%20Nivora%2C%20I%20want%20to%20inquire%20about%20subscriptions"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "#ffffff",
              boxShadow: "0 8px 20px rgba(37, 211, 102, 0.28)",
            }}
          >
            <WhatsAppIcon size={18} />
            Chat on WhatsApp
          </a>
          <Link className="button button-quiet" href="/contact">
            Contact Form <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}