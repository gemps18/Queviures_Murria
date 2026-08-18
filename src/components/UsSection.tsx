import { useLanguage } from "../hooks/useLanguage";
import { usContent } from "../data/home";
import "./UsSection.css";

export default function UsSection() {
  const { language } = useLanguage();

  return (
    <section id="us" className="us-section">
      <div className="us-images">
        <img src="/images/facade.jpg" alt="Múrria storefront" className="us-image-main" />
        <img src="/images/table.jpg" alt="Table setting at Múrria" className="us-image-overlap" />
      </div>
      <div className="us-content">
        <span className="us-year-watermark">1898</span>
        <h2>{usContent.heading[language]}</h2>
        <p>{usContent.body[language]}</p>
      </div>
    </section>
  );
}