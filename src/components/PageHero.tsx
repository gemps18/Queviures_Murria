import "./PageHero.css";

interface PageHeroProps {
  title: string;
  image: string;
}

export default function PageHero({ title, image }: PageHeroProps) {
  return (
    <div className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <h1>{title}</h1>
    </div>
  );
}