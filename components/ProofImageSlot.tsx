import Image from "next/image";

type ProofImageSlotProps = {
  badge: string;
  score: string;
  label: string;
  detail: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function ProofImageSlot({
  badge,
  score,
  label,
  detail,
  imageSrc,
  imageAlt,
}: ProofImageSlotProps) {
  return (
    <figure className="ir-proof-image-slot">
      <div className="ir-proof-image-frame">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? label}
            fill
            sizes="(min-width: 1024px) 360px, 92vw"
            className="ir-proof-real-image"
          />
        ) : (
          <div className="ir-proof-placeholder" aria-hidden="true">
            <span className="ir-proof-placeholder-top" />
            <span className="ir-proof-placeholder-score">{score}</span>
            <span className="ir-proof-placeholder-meter" />
            <span className="ir-proof-placeholder-grid">
              <i />
              <i />
              <i />
            </span>
          </div>
        )}
      </div>
      <figcaption>
        <span className="ir-proof-badge">{badge}</span>
        <strong>{score}</strong>
        <span>{label}</span>
        <p>{detail}</p>
      </figcaption>
    </figure>
  );
}
