import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md";
  showWordmark?: boolean;
  ariaLabel?: string;
}

export function Logo({
  size = "md",
  showWordmark = true,
  ariaLabel = "Inquiry Removal",
}: LogoProps) {
  const logoWidth = size === "sm" ? 150 : 178;
  const logoHeight = size === "sm" ? 41 : 48;
  const iconSize = size === "sm" ? 30 : 36;
  const source = showWordmark ? "/inquiry-removal-logo.avif" : "/favicon.png";
  const width = showWordmark ? logoWidth : iconSize;
  const height = showWordmark ? logoHeight : iconSize;

  return (
    <span
      role="img"
      aria-label={ariaLabel}
      style={{
        display: "inline-block",
        textDecoration: "none",
        lineHeight: 0,
      }}
    >
      <Image
        src={source}
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        sizes={showWordmark ? "(max-width: 767px) 150px, 178px" : `${iconSize}px`}
        loading="eager"
        decoding="async"
        style={{
          width,
          height: "auto",
          maxWidth: "100%",
        }}
      />
    </span>
  );
}
