/// <reference types="astro/client" />

declare module "next" {
  export type Metadata = Record<string, unknown>;
  export type Viewport = Record<string, unknown>;
  export type MetadataRoute = Record<string, unknown>;
}

declare module "next/link" {
  import type { ComponentType, ReactNode, AnchorHTMLAttributes } from "react";

  type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children?: ReactNode;
  };

  const Link: ComponentType<LinkProps>;
  export default Link;
}

declare module "next/image" {
  import type { ComponentType, ImgHTMLAttributes } from "react";

  type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    fill?: boolean;
  };

  const Image: ComponentType<ImageProps>;
  export default Image;
}

declare module "next/navigation" {
  export function notFound(): never;
}
