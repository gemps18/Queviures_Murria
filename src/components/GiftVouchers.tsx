import { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { shopContent, giftVouchers } from "../data/shop";
import "./GiftVouchers.css";

export default function GiftVouchers() {
  const { language } = useLanguage();
  const c = shopContent;
  const [confirmation, setConfirmation] = useState("");

  const handleBuy = (amount: number) => {
    setConfirmation(`${c.confirmationPrefix[language]} Gift Voucher ${amount} — €${amount.toFixed(2)}`);
  };

  return (
    <div className="gift-vouchers">
      <h2>{c.voucherHeading[language]}</h2>
      <p className="voucher-subtext">{c.voucherSubtext[language]}</p>

      <div className="voucher-grid">
        {giftVouchers.map((v) => (
          <div key={v.id} className="voucher-card">
            <div className="voucher-image" style={{ backgroundImage: `url(${v.image})` }}>
              <span className="voucher-amount">{v.amount}€</span>
            </div>
            <h3>Gift Voucher {v.amount}</h3>
            <p className="voucher-price">€ {v.amount.toFixed(2)}</p>
            <button className="voucher-buy-btn" onClick={() => handleBuy(v.amount)}>
              {c.buyButton[language]}
            </button>
          </div>
        ))}
      </div>

      {confirmation && <p className="voucher-confirmation">{confirmation}</p>}
    </div>
  );
}