import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  HelpCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import ProductOrderWidget from "./ProductOrderWidget";
import ProductLogo from "@/components/ProductLogo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found — Nivora",
    };
  }

  return {
    title: `${product.name} Subscription Details — Nivora`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div>
      <section className="page-hero">
        <div className="section-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <Link href="/subscriptions">Subscriptions</Link>
            <ChevronRight size={13} />
            <Link
              href={`/subscriptions?category=${encodeURIComponent(product.category)}`}
            >
              {product.category}
            </Link>
            <ChevronRight size={13} />
            <span>{product.name}</span>
          </nav>

          <div className="eyebrow">
            <Sparkles size={14} />
            {product.category.toUpperCase()} ESSENTIAL
          </div>
          <h1>
            {product.name} <span>subscription plan.</span>
          </h1>
          <p className="page-hero-copy">{product.description}</p>
        </div>
      </section>

      <div className="section-wrap page-content-wrap">
        <div className="detail-layout">
          <div className="detail-main">
            <article className="detail-card">
              <div className="detail-header">
                <div style={{ borderRadius: "14px", overflow: "hidden", display: "grid", placeItems: "center" }}>
                  <ProductLogo slug={product.slug} name={product.name} size={48} />
                </div>
                <div className="detail-meta">
                  <span className="detail-category">{product.category}</span>
                  <h2 className="detail-title">{product.name}</h2>
                </div>
                {product.badge && (
                  <span
                    className="product-badge"
                    style={{ marginLeft: "auto", fontSize: "10px" }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              <p className="detail-lead">{product.longDescription}</p>

              <div style={{ marginTop: "28px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: "17px",
                    letterSpacing: "-0.5px",
                    margin: "0 0 14px",
                  }}
                >
                  What is included in this demo subscription:
                </h3>
                <div className="feature-checklist">
                  {product.features.map((feature) => (
                    <div className="feature-item" key={feature}>
                      <span className="feature-icon">
                        <Check size={13} />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  marginTop: "32px",
                  paddingTop: "24px",
                  borderTop: "1px solid #edf0f5",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: "17px",
                    letterSpacing: "-0.5px",
                    margin: "0 0 14px",
                  }}
                >
                  Key Highlights & Capabilities
                </h3>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    color: "#5f6b80",
                    fontSize: "13px",
                    lineHeight: "1.7",
                  }}
                >
                  {product.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  marginTop: "36px",
                  padding: "20px",
                  borderRadius: "12px",
                  background: "#f8f9fd",
                  border: "1px solid #e7ebf4",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: 700,
                    fontSize: "12px",
                    color: "#1a253c",
                    marginBottom: "6px",
                  }}
                >
                  <Clock3 size={16} color="#7965ed" />
                  Estimated Delivery & Activation
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "11px",
                    color: "#727e93",
                    lineHeight: "1.6",
                  }}
                >
                  {product.deliveryTime}. Detailed walkthrough guides and support
                  check-ins are provided for seamless setup.
                </p>
              </div>

              {product.faq.length > 0 && (
                <div style={{ marginTop: "36px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-manrope)",
                      fontSize: "17px",
                      letterSpacing: "-0.5px",
                      margin: "0 0 16px",
                    }}
                  >
                    Frequently Asked Questions
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {product.faq.map((item) => (
                      <div
                        key={item.q}
                        style={{
                          padding: "16px",
                          borderRadius: "10px",
                          border: "1px solid #edf0f5",
                          background: "#fff",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: "12px",
                            color: "#152037",
                            marginBottom: "6px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <HelpCircle size={14} color="#7965ed" />
                          {item.q}
                        </div>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "11px",
                            color: "#717e92",
                            lineHeight: "1.6",
                          }}
                        >
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>

          <ProductOrderWidget product={product} />
        </div>

        <div style={{ marginTop: "72px" }}>
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-light">MORE OPTIONS</div>
              <h2>
                Explore related <span>subscriptions.</span>
              </h2>
              <p>Other essential digital tools that match your creative toolbox.</p>
            </div>
            <Link className="text-link" href="/subscriptions">
              Browse all <ArrowRight size={15} />
            </Link>
          </div>

          <div className="product-grid" style={{ marginTop: "24px" }}>
            {relatedProducts.map((rel) => (
              <article className="product-card" key={rel.id}>
                <div className="product-card-top">
                  <div style={{ borderRadius: "12px", overflow: "hidden", display: "grid", placeItems: "center" }}>
                    <ProductLogo slug={rel.slug} name={rel.name} size={42} />
                  </div>
                  {rel.badge && (
                    <span className="product-badge">{rel.badge}</span>
                  )}
                  <Link
                    href={`/products/${rel.slug}`}
                    className="product-arrow"
                    aria-label={`View ${rel.name}`}
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="product-category">{rel.category}</div>
                <Link href={`/products/${rel.slug}`}>
                  <h3>{rel.name}</h3>
                </Link>
                <p className="product-description">{rel.description}</p>
                <div className="product-card-bottom">
                  <div className="product-price">
                    {rel.price}
                    <span> {rel.period} (demo)</span>
                  </div>
                  <Link
                    href={`/products/${rel.slug}`}
                    aria-label={`Explore ${rel.name}`}
                  >
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="disclaimer-box">
          <strong>Notice:</strong> This page presents demo details for{" "}
          {product.name}. All product logos and trademarks belong to their
          respective holders. Prices and terms are presented for prototype
          demonstration only.
        </div>
      </div>
    </div>
  );
}
