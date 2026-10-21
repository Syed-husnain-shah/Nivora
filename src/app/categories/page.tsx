import Link from "next/link";
import { ArrowRight, ChevronRight, Layers, Sparkles } from "lucide-react";
import { categories, products } from "@/data/products";
import ProductLogo from "@/components/ProductLogo";

export default function CategoriesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="section-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <span>Categories</span>
          </nav>
          <div className="eyebrow">
            <Layers size={14} />
            CURATED DIRECTORY
          </div>
          <h1>
            Browse tools by <span>category.</span>
          </h1>
          <p className="page-hero-copy">
            Find the right tools faster. Explore our structured library of
            design suites, intelligence models, video editing environments, and
            streaming audio.
          </p>
        </div>
      </section>

      <div className="section-wrap page-content-wrap">
        <div className="category-grid">
          {categories.map((cat) => {
            const catProducts = products.filter(
              (p) => p.category.toLowerCase() === cat.name.toLowerCase(),
            );

            return (
              <article className="category-card" key={cat.slug}>
                <div className="category-card-header">
                  <div style={{ borderRadius: "12px", overflow: "hidden", display: "grid", placeItems: "center" }}>
                    <ProductLogo slug={cat.slug} name={cat.name} size={42} />
                  </div>
                  <span className="category-card-count">
                    {catProducts.length} Demo Subscriptions
                  </span>
                </div>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>

                <div className="category-tools-tags">
                  {cat.featuredTools.map((tool) => (
                    <span className="category-tag" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: "auto", paddingTop: "14px" }}>
                  <Link
                    href={`/subscriptions?category=${encodeURIComponent(cat.name)}`}
                    className="button button-primary"
                    style={{ width: "100%", fontSize: "12px", minHeight: "42px" }}
                  >
                    Explore {cat.name} <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div style={{ marginTop: "64px" }}>
          <div className="section-heading">
            <div>
              <div className="eyebrow eyebrow-light">QUICK DIRECTORY</div>
              <h2>
                All tools by <span>discipline.</span>
              </h2>
              <p>Direct links into every demo subscription in the catalog.</p>
            </div>
            <Link className="text-link" href="/subscriptions">
              View all grid <ArrowRight size={15} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "16px",
              marginTop: "28px",
            }}
          >
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 18px",
                  background: "#fff",
                  border: "1px solid #e9edf3",
                  borderRadius: "12px",
                  transition: "transform 160ms ease, box-shadow 160ms ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ borderRadius: "10px", overflow: "hidden", display: "grid", placeItems: "center" }}>
                    <ProductLogo slug={product.slug} name={product.name} size={36} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "13px", color: "#111b30" }}>
                      {product.name}
                    </div>
                    <div style={{ fontSize: "10px", color: "#8a95a7" }}>
                      {product.category} • {product.price}
                    </div>
                  </div>
                </div>
                <ArrowRight size={16} color="#7965ed" />
              </Link>
            ))}
          </div>
        </div>

        <div className="disclaimer-box">
          <strong>Demonstration Content:</strong> Category collections are
          arranged for preview and exploration. Prices and tool inclusions
          represent demo entries.
        </div>
      </div>
    </div>
  );
}
