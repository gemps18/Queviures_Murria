import { useState } from "react";
import { useCatalogStore } from "../store/useCatalogStore";
import { useCartStore } from "../store/useCartStore";
import { useLanguage } from "../hooks/useLanguage";
import { filterOptions, type Product } from "../data/product";
import { cartContent } from "../data/cart";
import LazyImage from "./LazyImage";
import "./ProductCatalog.css";

interface FilterGroupProps {
  title: string;
  options: readonly string[];
  activeValue: string | null;
  onSelect: (val: string) => void;
}

function FilterGroup({ title, options, activeValue, onSelect }: FilterGroupProps) {
  return (
    <div className="filter-group">
      <h4>{title}</h4>
      <div className="filter-pills">
        {options.map((opt) => (
          <button
            key={opt}
            className={`pill ${activeValue === opt ? "pill-active" : ""}`}
            onClick={() => onSelect(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const { language } = useLanguage();
  const addItem = useCartStore((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem(
      { id: `product-${product.id}`, name: product.name, price: product.price, type: "product" },
      quantity
    );
    setQuantity(1);
  };

  return (
    <article className="product-card">
      <LazyImage src={product.image} webpSrc={product.webpImage} alt={product.name} />
      <h4>{product.name}</h4>
      <p className="product-meta">{product.origin} · {product.category}</p>
      <p className="product-price">€{product.price.toFixed(2)}</p>
      <div className="product-add-row">
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          className="product-qty-input"
        />
        <button className="product-add-btn" onClick={handleAdd}>
          {cartContent.addToCartButton[language]}
        </button>
      </div>
    </article>
  );
}

export default function ProductCatalog() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const {
    category, origin, dietary,
    setCategory, setOrigin, setDietary,
    clearFilters, getFilteredProducts,
  } = useCatalogStore();

  const filtered = getFilteredProducts();
  const activeCount = [category, origin, dietary].filter(Boolean).length;

  return (
    <section className="catalog">
      <div className="catalog-filters">
        <div className="filter-header">
          <button
            className="filter-toggle"
            onClick={() => setFiltersOpen((v) => !v)}
            aria-expanded={filtersOpen}
          >
            Filters {activeCount > 0 && <span className="filter-badge">{activeCount}</span>}
            <span className={`filter-chevron ${filtersOpen ? "open" : ""}`}>▾</span>
          </button>
          {activeCount > 0 && (
            <button className="clear-btn" onClick={clearFilters}>Clear all</button>
          )}
        </div>

        {filtersOpen && (
          <div className="filter-panel">
            <FilterGroup title="Category" options={filterOptions.category} activeValue={category} onSelect={setCategory} />
            <FilterGroup title="Origin" options={filterOptions.origin} activeValue={origin} onSelect={setOrigin} />
            <FilterGroup title="Dietary" options={filterOptions.dietary} activeValue={dietary} onSelect={setDietary} />
          </div>
        )}
      </div>

      <div className="catalog-grid">
        <p className="result-count">{filtered.length} products</p>
        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}