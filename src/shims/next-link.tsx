import type { AnchorHTMLAttributes, ReactNode } from "react";

type AstroPrefetchStrategy = "load" | "viewport" | "hover" | "tap";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children?: ReactNode;
  prefetch?: boolean | null | AstroPrefetchStrategy;
  "data-astro-prefetch"?: AstroPrefetchStrategy | true | "";
};

function normalizeInternalHref(href: string) {
  if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http") || href.startsWith("//")) {
    return href;
  }

  if (!href.startsWith("/")) {
    return href;
  }

  const match = href.match(/^([^?#]*)([?#].*)?$/);
  const pathname = match?.[1] || href;
  const suffix = match?.[2] || "";
  const lastSegment = pathname.split("/").filter(Boolean).pop() || "";
  const looksLikeFile = /\.[a-z0-9]{2,8}$/i.test(lastSegment);

  if (pathname === "/" || looksLikeFile || pathname.endsWith("/")) {
    return `${pathname}${suffix}`;
  }

  return `${pathname}/${suffix}`;
}

function shouldPrefetch(href: string) {
  return (
    href.startsWith("/") &&
    !href.startsWith("//") &&
    !href.startsWith("/#") &&
    !href.includes("#")
  );
}

function getPrefetchStrategy(href: string, prefetch: LinkProps["prefetch"]) {
  if (!shouldPrefetch(href) || prefetch === false || prefetch === null) return undefined;
  if (prefetch === true) return "viewport";
  if (typeof prefetch === "string") return prefetch;
  return "viewport";
}

export default function Link({ href, children, prefetch, "data-astro-prefetch": explicitPrefetch, ...props }: LinkProps) {
  const normalizedHref = normalizeInternalHref(href);
  const prefetchStrategy =
    explicitPrefetch === true || explicitPrefetch === ""
      ? "viewport"
      : explicitPrefetch ?? getPrefetchStrategy(normalizedHref, prefetch);

  return (
    <a
      href={normalizedHref}
      {...(prefetchStrategy ? { "data-astro-prefetch": prefetchStrategy } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
