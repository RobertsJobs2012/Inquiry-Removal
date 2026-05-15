interface LogoProps {
  size?: "sm" | "md";
  showWordmark?: boolean;
  ariaLabel?: string;
  priority?: boolean;
}

export function Logo({
  size = "md",
  showWordmark = true,
  ariaLabel = "Inquiry Removal",
  priority = false,
}: LogoProps) {
  const logoWidth = size === "sm" ? 150 : 178;
  const logoHeight = size === "sm" ? 41 : 48;
  const iconSize = size === "sm" ? 30 : 36;
  const source = showWordmark
    ? size === "sm"
      ? "/inquiry-removal-logo-150.avif"
      : "/inquiry-removal-logo-178.avif"
    : "/favicon.png";
  const width = showWordmark ? logoWidth : iconSize;
  const height = showWordmark ? logoHeight : iconSize;
  const logoSrcSet = showWordmark
    ? "/inquiry-removal-logo-150.avif 150w, /inquiry-removal-logo-178.avif 178w, /inquiry-removal-logo-249.avif 249w, /inquiry-removal-logo-300.avif 300w, /inquiry-removal-logo-356.avif 356w"
    : undefined;
  const logoSizes = showWordmark
    ? size === "sm"
      ? "(max-width: 640px) 128px, 148px"
      : "(max-width: 380px) 122px, (max-width: 1079px) 142px, 178px"
    : `${iconSize}px`;

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
      <img
        src={source}
        srcSet={logoSrcSet}
        sizes={logoSizes}
        alt=""
        aria-hidden="true"
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        style={{
          width,
          height: "auto",
          maxWidth: "100%",
        }}
      />
    </span>
  );
}
