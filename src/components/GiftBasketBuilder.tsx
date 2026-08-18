import { useState, useMemo } from "react";
import { products, type Product } from "../data/product";
import "./GiftBasketBuilder.css";

interface Step {
  key: Product["category"];
  label: string;
  max: number;
}

const STEPS: Step[] = [
  { key: "Cheese", label: "Pick 2 Cheeses", max: 2 },
  { key: "Wine", label: "Pick 1 Wine", max: 1 },
  { key: "Cured Meat", label: "Pick 1 Cured Meat", max: 1 },
];

export default function GiftBasketBuilder() {
  const [stepIndex, setStepIndex] = useState(0);
  const [selections, setSelections] = useState<Record<string, Product[]>>({});

  const step = STEPS[stepIndex];
  const chosenForStep = selections[step.key] || [];

  const toggleItem = (product: Product) => {
    setSelections((prev) => {
      const current = prev[step.key] || [];
      const exists = current.find((p) => p.id === product.id);
      let next: Product[];
      if (exists) {
        next = current.filter((p) => p.id !== product.id);
      } else if (current.length < step.max) {
        next = [...current, product];
      } else if (step.max === 1) {
        next = [product];
      } else {
        return prev;
      }
      return { ...prev, [step.key]: next };
    });
  };

  const total = useMemo(() => {
    return Object.values(selections)
      .flat()
      .reduce((sum, p) => sum + p.price, 0);
  }, [selections]);

  const canAdvance = chosenForStep.length === step.max;
  const isLastStep = stepIndex === STEPS.length - 1;

  return (
    <section className="basket-builder">
      <div className="basket-intro">
        <h2>Build Your Own Gift Basket</h2>
        <p className="basket-subheader">
          Pick your cheeses, wine, and cured meats step by step — add it to your cart once it's ready.
        </p>
      </div>

      <div className="basket-steps-indicator">
        {STEPS.map((s, i) => (
          <div key={s.key} className={`step-dot ${i === stepIndex ? "active" : ""} ${i < stepIndex ? "done" : ""}`}>
            {i + 1}
          </div>
        ))}
      </div>

      <h3>{step.label}</h3>
      <div className="basket-options">
        {products.filter((p) => p.category === step.key).map((p) => {
          const selected = chosenForStep.some((c) => c.id === p.id);
          return (
            <button
              key={p.id}
              className={`basket-option ${selected ? "selected" : ""}`}
              onClick={() => toggleItem(p)}
            >
              <span>{p.name}</span>
              <span className="basket-option-price">€{p.price.toFixed(2)}</span>
            </button>
          );
        })}
      </div>

      <div className="basket-nav">
        <button disabled={stepIndex === 0} onClick={() => setStepIndex((i) => i - 1)}>Back</button>
        {!isLastStep ? (
          <button disabled={!canAdvance} onClick={() => setStepIndex((i) => i + 1)}>Next</button>
        ) : (
          <button disabled={!canAdvance} className="checkout-btn">Add gift basket to cart — €{total.toFixed(2)}</button>
        )}
      </div>

      <div className="basket-summary">
        <h4>Your gift basket</h4>
        <ul>
          {Object.values(selections).flat().map((p) => (
            <li key={p.id}>{p.name} <span>€{p.price.toFixed(2)}</span></li>
          ))}
        </ul>
        <p className="basket-total">Total: €{total.toFixed(2)}</p>
      </div>
    </section>
  );
}