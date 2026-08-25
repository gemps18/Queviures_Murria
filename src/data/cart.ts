import type { Language } from "../context/language-context";

type T = Record<Language, string>;

export const cartContent: {
  title: T;
  emptyMessage: T;
  quantityLabel: T;
  removeButton: T;
  totalLabel: T;
  checkoutButton: T;
  closeButton: T;
  addToCartButton: T;
} = {
  title: { en: "Your Cart", es: "Tu Carrito", ca: "La Teva Cistella" },
  emptyMessage: { en: "Your cart is empty.", es: "Tu carrito está vacío.", ca: "La teva cistella és buida." },
  quantityLabel: { en: "Qty", es: "Cant.", ca: "Quant." },
  removeButton: { en: "Remove", es: "Eliminar", ca: "Eliminar" },
  totalLabel: { en: "Total", es: "Total", ca: "Total" },
  checkoutButton: { en: "Checkout", es: "Finalizar compra", ca: "Finalitzar compra" },
  closeButton: { en: "Close", es: "Cerrar", ca: "Tancar" },
  addToCartButton: { en: "Add to Cart", es: "Añadir al Carrito", ca: "Afegir a la Cistella" },
};