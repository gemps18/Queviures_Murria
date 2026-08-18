import PageHero from "../components/PageHero";
import { useLanguage } from "../hooks/useLanguage";
import { menu, menuNotes } from "../data/menu";
import "./Menu.css";

export default function Menu() {
  const { language } = useLanguage();

  return (
    <div>
      <PageHero title="Menu" image="/images/menu-hero.jpg" />

      <div className="menu-page">
        {menu.map((category) => (
          <section key={category.title.en} className="menu-category">
            <h2>{category.title[language]}</h2>
            <ul className="menu-items">
              {category.items.map((item) => (
                <li key={item.name.en} className="menu-item">
                  <span className="menu-item-name">{item.name[language]}</span>
                  <span className="menu-item-dots" />
                  <span className="menu-item-price">{item.price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <div className="menu-notes">
          <p>{menuNotes.minimumConsumption[language]}</p>
          <p>{menuNotes.allergens[language]}</p>
        </div>
      </div>
    </div>
  );
}