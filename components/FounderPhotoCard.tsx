import Image from "next/image";

export function FounderPhotoCard() {
  return (
    <figure className="ir-founder-card">
      <div className="ir-founder-glow" aria-hidden="true" />
      <div className="ir-founder-image">
        <Image
          src="/robert-garcia-founder.avif"
          alt="Robert Garcia, founder of Inquiry Removal"
          fill
          sizes="(min-width: 1024px) 420px, 92vw"
          className="ir-founder-img"
        />
      </div>
      <figcaption className="ir-founder-caption">
        <span>Founder</span>
        <strong>Robert Garcia</strong>
        <small>Hard inquiry removal specialist since 2015</small>
      </figcaption>
    </figure>
  );
}
