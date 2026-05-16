/// <reference types="astro/client" />

declare module "next" {
  export type Metadata = Record<string, unknown>;
  export type Viewport = Record<string, unknown>;
  export type MetadataRoute = Record<string, unknown>;
}

declare module "next/link" {
  import type { ComponentType, ReactNode, AnchorHTMLAttributes } from "react";

  type AstroPrefetchStrategy = "load" | "viewport" | "hover" | "tap";

  type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children?: ReactNode;
    prefetch?: boolean | null | AstroPrefetchStrategy;
    "data-astro-prefetch"?: AstroPrefetchStrategy | "false" | true | "";
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
