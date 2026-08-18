import { useState } from "react";
import { useCatalogStore } from "../store/useCatalogStore";
import { filterOptions } from "../data/product";
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
            <article key={p.id} className="product-card">
              <LazyImage src={p.image} webpSrc={p.webpImage} alt={p.name} />
              <h4>{p.name}</h4>
              <p className="product-meta">{p.origin} · {p.category}</p>
              <p className="product-price">€{p.price.toFixed(2)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}