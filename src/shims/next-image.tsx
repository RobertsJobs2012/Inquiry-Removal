import type { CSSProperties, ImgHTMLAttributes } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
};

export default function Image({
  fill = false,
  style,
  sizes,
  alt = "",
  loading,
  decoding,
  ...props
}: ImageProps) {
  const imageStyle: CSSProperties = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...style,
      }
    : style ?? {};

  return <img alt={alt} sizes={sizes} style={imageStyle} loading={loading ?? "lazy"} decoding={decoding ?? "async"} {...props} />;
}
