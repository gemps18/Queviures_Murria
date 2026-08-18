import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { nav, footer } from "../data/translations";
import "./Footer.css";

export default function Footer() {
  const { language } = useLanguage();
  const days = [
    footer.days.monday,
    footer.days.tuesday,
    footer.days.wednesday,
    footer.days.thursday,
    footer.days.friday,
    footer.days.saturday,
  ];

  return (
    <footer className="site-footer">
      <div className="footer-col">
        <h4>{footer.menuHeading[language]}</h4>
        <Link to="/">{nav.home[language]}</Link>
        <Link to="/#us">{nav.us[language]}</Link>
        <Link to="/#gallery">{nav.gallery[language]}</Link>
        <Link to="/menu">{nav.menu[language]}</Link>
        <Link to="/reservations">{nav.reservations[language]}</Link>
        <Link to="/contact">{nav.contact[language]}</Link>
        <Link to="/shop">{nav.shop[language]}</Link>
      </div>
      <div className="footer-col">
        <h4>{footer.scheduleHeading[language]}</h4>
        {days.map((day) => (
          <p key={day.en}>{day[language]}: 13:00 – 22:00</p>
        ))}
        <p>{footer.days.saturday[language]}: 13:00 – 22:30</p>
        <p>{footer.days.sunday[language]}: {footer.closed[language]}</p>
      </div>
      <div className="footer-col">
        <h4>{footer.infoHeading[language]}</h4>
        <p>reserva@murria.cat</p>
        <p>C/ de Roger de Llúria, 85, L'Eixample, 08009 Barcelona</p>
        <p>932 15 57 89</p>
      </div>
    </footer>
  );
}