"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, ChevronRight, Search, Sparkles } from "lucide-react";
import { Suspense, useMemo, useState } from "react";
import { products } from "@/data/products";
import ProductLogo from "@/components/ProductLogo";

function SubscriptionsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const categories = [
    "All",
    "Design",
    "AI & Productivity",
    "Video & Editing",
    "Music & Streaming",
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        `${product.name} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <>
      <div className="filter-bar">
        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <label className="product-search">
          <Search size={15} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search subscriptions..."
            aria-label="Search subscriptions"
          />
        </label>
      </div>

      <div className="filter-stats" style={{ marginBottom: "20px" }}>
        Showing <strong>{filteredProducts.length}</strong> of{" "}
        <strong>{products.length}</strong> available subscriptions
        {selectedCategory !== "All" && ` in ${selectedCategory}`}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
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
                aria-label={`View ${product.name}`}
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
                aria-label={`View details for ${product.name}`}
              >
                <ArrowRight size={17} />
              </Link>
            </div>
          </article>
        ))}

        {filteredProducts.length === 0 && (
          <div className="empty-search">
            No subscriptions found matching &ldquo;{search}&rdquo;. Try another
            query or reset the category filter.
          </div>
        )}
      </div>
    </>
  );
}

export default function SubscriptionsPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="section-wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <span>Subscriptions</span>
          </nav>
          <div className="eyebrow">
            <Sparkles size={14} />
            ALL SUBSCRIPTIONS
          </div>
          <h1>
            Digital tools for <span>every workflow.</span>
          </h1>
          <p className="page-hero-copy">
            Browse our complete collection of creative suites, AI power tools,
            video editors, and music platforms. All items display clearly labeled
            demo rates for preview and testing.
          </p>
        </div>
      </section>

      <div className="section-wrap page-content-wrap">
        <Suspense
          fallback={
            <div className="empty-search">Loading subscriptions...</div>
          }
        >
          <SubscriptionsContent />
        </Suspense>

        <div className="disclaimer-box">
          <strong>Demo Notice:</strong> Products and pricing listed here are
          demonstration values designed for web showcase and testing. No
          payment or real subscription transaction is performed.
        </div>
      </div>
    </div>
  );
}
