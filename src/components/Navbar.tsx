import { NavLink } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { nav } from "../data/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Navbar.css";

export default function Navbar() {
  const { language } = useLanguage();

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
          <NavLink to="/shop" className="shop-btn">{nav.shop[language]}</NavLink>
        </div>
      </nav>
    </>
  );
}