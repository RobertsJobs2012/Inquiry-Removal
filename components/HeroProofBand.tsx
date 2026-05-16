import Link from "next/link";
import { PremiumIcon } from "./PremiumIcons";

const DEFAULT_ITEMS = [
  {
    icon: "bureauShield" as const,
    label: "Experian",
    href: "/remove-hard-inquiry-experian",
  },
  {
    icon: "bureauShield" as const,
    label: "Equifax",
    href: "/remove-hard-inquiry-equifax",
  },
  {
    icon: "bureauShield" as const,
    label: "TransUnion",
    href: "/remove-hard-inquiry-transunion",
  },
  {
    icon: "guaranteeSeal" as const,
    label: "Free Analysis",
    href: "/get-started",
  },
];

type HeroProofBandProps = {
  className?: string;
};

export function HeroProofBand({ className = "" }: HeroProofBandProps) {
  const classes = ["hero-proof-band", className].filter(Boolean).join(" ");

  return (
    <div className={classes} aria-label="Inquiry Removal trust signals">
      {DEFAULT_ITEMS.map((item) => (
        <Link href={item.href} className="hero-proof-pill" key={item.href}>
          <span className="hero-proof-icon" aria-hidden="true">
            <PremiumIcon name={item.icon} size={15} strokeWidth={1.8} />
          </span>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
