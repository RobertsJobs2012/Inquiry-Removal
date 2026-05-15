type FounderPhotoCardProps = {
  priority?: boolean;
};

export function FounderPhotoCard({ priority = false }: FounderPhotoCardProps) {
  return (
    <figure className="ir-founder-card">
      <div className="ir-founder-glow" aria-hidden="true" />
      <div className="ir-founder-image">
        <picture className="ir-founder-picture">
          <source
            type="image/avif"
            srcSet="/inquiry-removal-headshot-420.avif 420w, /inquiry-removal-headshot-655.avif 655w, /inquiry-removal-headshot-800.avif 800w"
            sizes="(min-width: 1024px) 420px, 92vw"
          />
          <source
            type="image/webp"
            srcSet="/inquiry-removal-headshot-420.webp 420w, /inquiry-removal-headshot-655.webp 655w, /inquiry-removal-headshot-800.webp 800w"
            sizes="(min-width: 1024px) 420px, 92vw"
          />
          <img
            src="/inquiry-removal-headshot-655.webp"
            alt="Robert Garcia, founder of Inquiry Removal"
            width="655"
            height="917"
            sizes="(min-width: 1024px) 420px, 92vw"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            className="ir-founder-img"
          />
        </picture>
      </div>
      <figcaption className="ir-founder-caption">
        <span>Founder</span>
        <strong>Robert Garcia</strong>
        <small>Hard inquiry removal specialist since 2015</small>
      </figcaption>
    </figure>
  );
}
