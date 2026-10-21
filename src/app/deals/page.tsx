import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Sparkles, Tag } from "lucide-react";
import { demoBundles, getDeals } from "@/data/products";
import ProductLogo from "@/components/ProductLogo";

export default function DealsPage() {
  const deals = getDeals();

  return (
    <div>
      <section className="page-hero">
        <div className="section-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <span>Deals</span>
          </nav>
          <div className="eyebrow">
            <Tag size={14} />
            FEATURED DEMO OFFERS
          </div>
          <h1>
            Curated deals & <span>value bundles.</span>
          </h1>
          <p className="page-hero-copy">
            Unlock bundled value with our multi-app combinations and promotional
            tier showcases. All discount percentages and demo rates are clearly
            indicated.
          </p>
        </div>
      </section>

      <div className="section-wrap page-content-wrap">
        <div>
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-light">MULTI-APP PACKS</div>
              <h2>
                Curated workflow <span>bundles.</span>
              </h2>
              <p>Pair your everyday essentials together and save simulated time.</p>
            </div>
          </div>

          <div className="bundle-grid">
            {demoBundles.map((bundle) => (
              <article className="bundle-card" key={bundle.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span
                    className="product-badge"
                    style={{ margin: 0, background: "#f0efff", color: "#6654d3" }}
                  >
                    {bundle.badge}
                  </span>
                  <span
                    style={{
                      background: "#e4f9f2",
                      color: "#188d75",
                      fontSize: "10px",
                      fontWeight: 800,
                      padding: "4px 8px",
                      borderRadius: "6px",
                    }}
                  >
                    {bundle.discount}
                  </span>
                </div>

                <h3>{bundle.title}</h3>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#7464d4",
                    marginBottom: "8px",
                  }}
                >
                  {bundle.subtitle}
                </div>
                <p>{bundle.description}</p>

                <div className="bundle-included">
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "#838fa3",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    What&apos;s Included (Demo)
                  </div>
                  {bundle.included.map((item) => (
                    <div className="bundle-item" key={item}>
                      <Check size={14} color="#25a388" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "16px",
                    borderTop: "1px solid #edf0f5",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-manrope)",
                        fontSize: "24px",
                        fontWeight: 800,
                        color: "#111b30",
                      }}
                    >
                      {bundle.demoPrice}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#97a1b1",
                        textDecoration: "line-through",
                      }}
                    >
                      {bundle.originalPrice}
                    </span>
                    <span style={{ fontSize: "10px", color: "#8390a1" }}>
                      / month (demo)
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="button button-primary"
                    style={{ width: "100%", fontSize: "12px", minHeight: "42px" }}
                  >
                    Inquire Demo Bundle <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "74px" }}>
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-light">INDIVIDUAL OFFERS</div>
              <h2>
                Discounted individual <span>plans.</span>
              </h2>
              <p>Special simulated demo rates across single subscriptions.</p>
            </div>
            <Link className="text-link" href="/subscriptions">
              All subscriptions <ArrowRight size={15} />
            </Link>
          </div>

          <div className="product-grid" style={{ marginTop: "24px" }}>
            {deals.map((deal) => (
              <article className="deal-card" key={deal.id}>
                {deal.discount && (
                  <div className="deal-ribbon">{deal.discount}</div>
                )}
                <div className="product-card-top">
                  <div style={{ borderRadius: "12px", overflow: "hidden", display: "grid", placeItems: "center" }}>
                    <ProductLogo slug={deal.slug} name={deal.name} size={42} />
                  </div>
                  {deal.badge && (
                    <span className="product-badge">{deal.badge}</span>
                  )}
                  <Link
                    href={`/products/${deal.slug}`}
                    className="product-arrow"
                    aria-label={`View ${deal.name}`}
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="product-category">{deal.category}</div>
                <Link href={`/products/${deal.slug}`}>
                  <h3>{deal.name}</h3>
                </Link>
                <p className="product-description">{deal.description}</p>
                <div className="product-card-bottom">
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                      <span className="product-price">{deal.price}</span>
                      {deal.originalPrice && (
                        <span
                          style={{
                            fontSize: "10px",
                            color: "#9aa3b2",
                            textDecoration: "line-through",
                          }}
                        >
                          {deal.originalPrice}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: "9px", color: "#9ca6b6" }}>
                      {deal.period} (demo)
                    </div>
                  </div>
                  <Link
                    href={`/products/${deal.slug}`}
                    aria-label={`View ${deal.name} deal`}
                  >
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "64px",
            padding: "36px",
            borderRadius: "15px",
            background: "linear-gradient(110deg, #f0efff, #eef9f7)",
            border: "1px solid #e2e1f7",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div className="eyebrow" style={{ color: "#7965ed" }}>
              <Sparkles size={13} />
              CUSTOM DEMO PACKAGES
            </div>
            <h3
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "22px",
                margin: "8px 0 6px",
                color: "#131d33",
              }}
            >
              Need a personalized multi-seat package?
            </h3>
            <p style={{ margin: 0, fontSize: "12px", color: "#6e7b91" }}>
              We assemble custom subscription combinations for teams, agencies, and
              students.
            </p>
          </div>
          <Link href="/contact" className="button button-primary">
            Request Custom Bundle <ArrowRight size={15} />
          </Link>
        </div>

        <div className="disclaimer-box">
          <strong>Promotional Demo Disclosure:</strong> Strikethrough pricing,
          percentage savings tags, and bundle configurations are demonstrative
          illustrations for the Nivora interface.
        </div>
      </div>
    </div>
  );
}
