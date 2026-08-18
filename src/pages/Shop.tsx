import { useState } from "react";
import PageHero from "../components/PageHero";
import GiftVouchers from "../components/GiftVouchers";
import ProductCatalog from "../components/ProductCatalog";
import GiftBasketBuilder from "../components/GiftBasketBuilder";
import { useLanguage } from "../hooks/useLanguage";
import { shopContent } from "../data/shop";
import "./Shop.css";

type ShopTab = "vouchers" | "products" | "basket";

export default function Shop() {
  const { language } = useLanguage();
  const c = shopContent;
  const [tab, setTab] = useState<ShopTab>("vouchers");

  return (
    <div>
      <PageHero title={c.heroTitle[language]} image="/images/shop-hero.jpg" />

      <div className="shop-tabs">
        <button className={tab === "vouchers" ? "shop-tab-active" : ""} onClick={() => setTab("vouchers")}>
          {c.tabVouchers[language]}
        </button>
        <button className={tab === "products" ? "shop-tab-active" : ""} onClick={() => setTab("products")}>
          {c.tabProducts[language]}
        </button>
        <button className={tab === "basket" ? "shop-tab-active" : ""} onClick={() => setTab("basket")}>
          {c.tabBasket[language]}
        </button>
      </div>

      <div className="shop-tab-content">
        {tab === "vouchers" && <GiftVouchers />}
        {tab === "products" && <ProductCatalog />}
        {tab === "basket" && <GiftBasketBuilder />}
      </div>
    </div>
  );
}