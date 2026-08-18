import { useLanguage } from "../hooks/useLanguage";
import { galleryHeading } from "../data/home";
import "./GallerySection.css";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpg",
];

export default function GallerySection() {
  const { language } = useLanguage();

  return (
    <section id="gallery" className="gallery-section">
      <h2>{galleryHeading[language]}</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Múrria gallery photo ${i + 1}`} loading="lazy" />
        ))}
      </div>
    </section>
  );
}