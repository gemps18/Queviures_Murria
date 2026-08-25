import { useCartStore } from "../store/useCartStore";
import { useLanguage } from "../hooks/useLanguage";
import { cartContent } from "../data/cart";
import "./CartDrawer.css";

export default function CartDrawer() {
  const { language } = useLanguage();
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();
  const c = cartContent;

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={closeCart}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>{c.title[language]}</h3>
          <button className="cart-close-btn" onClick={closeCart} aria-label={c.closeButton[language]}>×</button>
        </div>

        {items.length === 0 ? (
          <p className="cart-empty">{c.emptyMessage[language]}</p>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    {item.details && <span className="cart-item-details">{item.details}</span>}
                    <span className="cart-item-price">€{item.price.toFixed(2)}</span>
                  </div>
                  <div className="cart-item-controls">
                    <label className="cart-qty-label">
                      {c.quantityLabel[language]}
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      />
                    </label>
                    <button className="cart-remove-btn" onClick={() => removeItem(item.id)}>
                      {c.removeButton[language]}
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>{c.totalLabel[language]}</span>
                <span>€{getTotal().toFixed(2)}</span>
              </div>
              <button className="cart-checkout-btn" onClick={clearCart}>
                {c.checkoutButton[language]}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}