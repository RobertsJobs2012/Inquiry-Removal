import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children?: ReactNode;
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

export default function Link({ href, children, ...props }: LinkProps) {
  return (
    <a href={normalizeInternalHref(href)} {...props}>
      {children}
    </a>
  );
}
