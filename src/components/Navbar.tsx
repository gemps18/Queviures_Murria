import { NavLink } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { useCartStore } from "../store/useCartStore";
import { nav } from "../data/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Navbar.css";

export default function Navbar() {
  const { language } = useLanguage();
  const { getItemCount, toggleCart } = useCartStore();
  const itemCount = getItemCount();

  return (
    <>
      <div className="topbar">
        <span>reserva@murria.cat</span>
        <span>932 15 57 89</span>
        <span>C/ de Roger de Llúria, 85, L'Eixample, 08009 Barcelona</span>
      </div>
      <nav className="navbar">
        <NavLink to="/" className="brand">QUEVIURES MÚRRIA</NavLink>
        <ul className="nav-links">
          <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>{nav.home[language]}</NavLink></li>
          <li><NavLink to="/#us">{nav.us[language]}</NavLink></li>
          <li><NavLink to="/#gallery">{nav.gallery[language]}</NavLink></li>
          <li><NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "")}>{nav.menu[language]}</NavLink></li>
          <li><NavLink to="/reservations" className={({ isActive }) => (isActive ? "active" : "")}>{nav.reservations[language]}</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>{nav.contact[language]}</NavLink></li>
        </ul>
        <div className="navbar-right">
          <LanguageSwitcher />
          <button className="cart-icon-btn" onClick={toggleCart} aria-label="Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1.5" />
              <circle cx="18" cy="21" r="1.5" />
              <path d="M2 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 7H6" />
            </svg>
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </button>
          <NavLink to="/shop" className="shop-btn">{nav.shop[language]}</NavLink>
        </div>
      </nav>
    </>
  );
}