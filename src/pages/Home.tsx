import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { heroContent } from "../data/home";
import UsSection from "../components/UsSection";
import GallerySection from "../components/GallerySection";
import "./Home.css";

export default function Home() {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <section className="home-hero">
        <div className="home-hero-overlay">
          <h1>QUEVIURES MÚRRIA</h1>
          <p>{heroContent.subtitle[language]}</p>
          <div className="home-hero-buttons">
            <a href="/contact" className="btn btn-outline">{heroContent.contact[language]}</a>
            <a href="/reservations" className="btn btn-filled">{heroContent.reservation[language]}</a>
          </div>
        </div>
      </section>

      <UsSection />
      <GallerySection />
    </div>
  );
}