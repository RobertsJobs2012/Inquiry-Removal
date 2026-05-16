import NextLink, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type InstantLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "href"> & {
    children: ReactNode;
  };

function hrefToString(href: LinkProps["href"]) {
  if (typeof href === "string") return href;
  const pathname = href.pathname ?? "";
  const query = href.query
    ? `?${new URLSearchParams(href.query as Record<string, string>).toString()}`
    : "";
  const hash = href.hash ? `#${href.hash}` : "";
  return `${pathname}${query}${hash}`;
}

function isInternalRoute(href: LinkProps["href"]) {
  const value = hrefToString(href);
  return value.startsWith("/") && !value.startsWith("//") && !value.startsWith("/#") && !value.includes(".");
}

export default function InstantLink({
  href,
  prefetch = true,
  children,
  ...props
}: InstantLinkProps) {
  const hrefString = hrefToString(href);
  const shouldWarm = prefetch !== false && isInternalRoute(href);

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      data-instant-route={shouldWarm ? hrefString : undefined}
      {...props}
    >
      {children}
    </NextLink>
  );
}
