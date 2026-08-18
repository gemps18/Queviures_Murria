import { useState, useRef, useEffect } from "react";

interface LazyImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function LazyImage({ src, webpSrc, alt, width = 400, height = 300 }: LazyImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="lazy-image-wrapper" style={{ aspectRatio: `${width}/${height}` }}>
      {isVisible && (
        <picture>
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            width={width}
            height={height}
            onLoad={() => setLoaded(true)}
            className={loaded ? "img-loaded" : "img-loading"}
          />
        </picture>
      )}
    </div>
  );
}