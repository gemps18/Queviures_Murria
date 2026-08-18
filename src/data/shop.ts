import type { Language } from "../context/language-context";

type T = Record<Language, string>;

export const shopContent: {
  heroTitle: T;
  tabVouchers: T;
  tabProducts: T;
  tabBasket: T;
  voucherHeading: T;
  voucherSubtext: T;
  buyButton: T;
  confirmationPrefix: T;
} = {
  heroTitle: { en: "Shop", es: "Tienda", ca: "Botiga" },
  tabVouchers: { en: "Gift Vouchers", es: "Vales Regalo", ca: "Vals Regal" },
  tabProducts: { en: "Products", es: "Productos", ca: "Productes" },
  tabBasket: { en: "Build a Gift Basket", es: "Crea una Cesta Regalo", ca: "Crea una Cistella Regal" },
  voucherHeading: { en: "Gift Vouchers", es: "Vales Regalo", ca: "Vals Regal" },
  voucherSubtext: {
    en: "Give the gift of Múrria — redeemable for dining or shopping in store.",
    es: "Regala una experiencia Múrria — canjeable en el restaurante o la tienda.",
    ca: "Regala una experiència Múrria — bescanviable al restaurant o a la botiga.",
  },
  buyButton: { en: "Buy", es: "Comprar", ca: "Comprar" },
  confirmationPrefix: {
    en: "Added to cart:",
    es: "Añadido al carrito:",
    ca: "Afegit a la cistella:",
  },
};

export interface GiftVoucher {
  id: string;
  amount: number;
  image: string;
}

export const giftVouchers: GiftVoucher[] = [
  { id: "voucher-50", amount: 50, image: "/images/voucher-table.jpg" },
  { id: "voucher-70", amount: 70, image: "/images/voucher-table.jpg" },
  { id: "voucher-90", amount: 90, image: "/images/voucher-table.jpg" },
];