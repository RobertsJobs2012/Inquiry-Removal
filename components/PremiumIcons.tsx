import type { SVGProps } from "react";

export type PremiumIconName =
  | "autoInquiry"
  | "bureauShield"
  | "calendarCheck"
  | "chatConsult"
  | "checkBadge"
  | "chevronDown"
  | "cleanCredit"
  | "close"
  | "disputeEngine"
  | "flatFee"
  | "guaranteeLoop"
  | "guaranteeSeal"
  | "homeGoal"
  | "identityShield"
  | "lawShield"
  | "mail"
  | "menu"
  | "phone"
  | "protectionPlan"
  | "scoreRise"
  | "specialist"
  | "specialistFocus"
  | "star"
  | "tailoredDispute"
  | "trophy"
  | "warningDiamond"
  | "xBadge";

interface PremiumIconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: PremiumIconName;
  size?: number;
  title?: string;
  strokeWidth?: number;
}

export function PremiumIcon({
  name,
  size = 22,
  title,
  strokeWidth = 1.65,
  className,
  ...props
}: PremiumIconProps) {
  const classes = ["premium-icon", className].filter(Boolean).join(" ");
  const stroke = {
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={classes}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title && <title>{title}</title>}
      {renderIcon(name, stroke)}
    </svg>
  );
}

function renderIcon(
  name: PremiumIconName,
  stroke: {
    stroke: string;
    strokeWidth: number;
    strokeLinecap: "round";
    strokeLinejoin: "round";
  },
) {
  switch (name) {
    case "homeGoal":
      return (
        <>
          <path d="M3.5 10.2 12 3.7l8.5 6.5" {...stroke} />
          <path d="M6.2 9.8V20h11.6V9.8" {...stroke} />
          <path d="M9.4 20v-5.1a2.6 2.6 0 0 1 5.2 0V20" {...stroke} />
          <path d="M8.4 12.3h1.9M13.7 12.3h1.9" {...stroke} />
          <circle cx="18.5" cy="5.5" r="1.7" fill="currentColor" opacity="0.18" />
        </>
      );
    case "autoInquiry":
      return (
        <>
          <path d="M5 14.2 6.5 10c.35-1 1.28-1.65 2.35-1.65h6.3c1.07 0 2 .65 2.35 1.65l1.5 4.2" {...stroke} />
          <path d="M4.2 14.2h15.6v4.5c0 .72-.58 1.3-1.3 1.3h-1.1c-.72 0-1.3-.58-1.3-1.3H7.9c0 .72-.58 1.3-1.3 1.3H5.5c-.72 0-1.3-.58-1.3-1.3v-4.5Z" {...stroke} />
          <path d="M8 16.7h.01M16 16.7h.01" {...stroke} />
          <path d="M8.3 5.1h7.4M12 5.1V2.9M9.7 2.9h4.6" {...stroke} />
        </>
      );
    case "identityShield":
      return (
        <>
          <path d="M12 3.1 19 6v5.3c0 4.15-2.72 7.68-7 9.45-4.28-1.77-7-5.3-7-9.45V6l7-2.9Z" {...stroke} />
          <path d="M8.6 11.5a3.4 3.4 0 0 1 6.8 0" {...stroke} />
          <path d="M7.6 9.2a5.3 5.3 0 0 1 8.8 0" {...stroke} />
          <path d="M12 11.5v4.4" {...stroke} />
          <path d="M10.2 15.4c.58.55 1.18.82 1.8.82s1.22-.27 1.8-.82" {...stroke} />
        </>
      );
    case "cleanCredit":
      return (
        <>
          <path d="M20 12a8 8 0 1 1-2.35-5.66" {...stroke} />
          <path d="M12 12 17.7 6.3" {...stroke} />
          <path d="M7.5 14.2 10.2 17l6.4-7" {...stroke} />
          <path d="M18.6 4.4V8h-3.6" {...stroke} />
        </>
      );
    case "bureauShield":
      return (
        <>
          <path d="M12 2.8 20 6.3v5.5c0 4.25-3.2 7.68-8 9.4-4.8-1.72-8-5.15-8-9.4V6.3l8-3.5Z" {...stroke} />
          <path d="M8.1 9.2h7.8M8.1 12h7.8M8.1 14.8h3.4" {...stroke} />
          <path d="M13.1 15.1 15 17l3.1-3.5" {...stroke} />
        </>
      );
    case "tailoredDispute":
      return (
        <>
          <path d="M6.2 3.2h8.1l3.5 3.5v13.1H6.2V3.2Z" {...stroke} />
          <path d="M14.1 3.4v3.5h3.5M8.7 9.5h4.8M8.7 12.2h3.6" {...stroke} />
          <path d="m10.5 17.4 5.6-5.6 1.7 1.7-5.6 5.6-2.4.7.7-2.4Z" {...stroke} />
        </>
      );
    case "flatFee":
      return (
        <>
          <path d="M4.4 5.2h8.2l7 7-7.1 7.1-8.1-8.1v-6Z" {...stroke} />
          <circle cx="8" cy="8.7" r="1" fill="currentColor" />
          <path d="M11.4 9.6c.55-.48 1.25-.72 2.08-.72 1.22 0 2.15.6 2.15 1.55 0 2.1-4.25 1.1-4.25 3.2 0 .95.93 1.55 2.15 1.55.9 0 1.66-.27 2.22-.82M13.55 7.8v1.1M13.55 15.2v1.05" {...stroke} />
        </>
      );
    case "lawShield":
      return (
        <>
          <path d="M12 3.1 19.2 6v5.45c0 4.1-2.82 7.5-7.2 9.3-4.38-1.8-7.2-5.2-7.2-9.3V6L12 3.1Z" {...stroke} />
          <path d="M8 9.4h8M9.2 9.4v5.4M12 9.4v5.4M14.8 9.4v5.4M8.4 15h7.2" {...stroke} />
          <path d="m8.2 8.2 3.8-2 3.8 2" {...stroke} />
        </>
      );
    case "specialist":
      return (
        <>
          <path d="M6.5 13.2v-1.6a5.5 5.5 0 0 1 11 0v1.6" {...stroke} />
          <path d="M6.5 13.2H5.3A1.3 1.3 0 0 1 4 11.9v-1A1.3 1.3 0 0 1 5.3 9.6h1.2v3.6ZM17.5 13.2h1.2a1.3 1.3 0 0 0 1.3-1.3v-1a1.3 1.3 0 0 0-1.3-1.3h-1.2v3.6Z" {...stroke} />
          <path d="M9 16.7c.88.7 1.88 1.05 3 1.05s2.12-.35 3-1.05M15.1 13.4c0 1.05-.75 1.8-1.8 1.8H12" {...stroke} />
        </>
      );
    case "guaranteeLoop":
      return (
        <>
          <path d="M20.3 11.5A8.3 8.3 0 0 0 5.8 6.1M3.7 12.5A8.3 8.3 0 0 0 18.2 17.9" {...stroke} />
          <path d="M5.8 3.5v2.6H3.2M18.2 20.5v-2.6h2.6" {...stroke} />
          <path d="m8.4 12.1 2.45 2.45 4.9-5.1" {...stroke} />
        </>
      );
    case "protectionPlan":
      return (
        <>
          <path d="M12 3 20 6.6v5.15c0 4.4-3.55 7.7-8 9.25-4.45-1.55-8-4.85-8-9.25V6.6L12 3Z" {...stroke} />
          <path d="M8 14.4 10.2 12l2.2 1.8 3.8-4.6" {...stroke} />
          <path d="M16.2 9.2h-3M16.2 9.2v3" {...stroke} />
        </>
      );
    case "chatConsult":
      return (
        <>
          <path d="M4 6.6c0-1.55 1.25-2.8 2.8-2.8h10.4c1.55 0 2.8 1.25 2.8 2.8v6.2c0 1.55-1.25 2.8-2.8 2.8H10l-4.7 4.1.9-4.1A2.8 2.8 0 0 1 4 12.8V6.6Z" {...stroke} />
          <path d="M8 8.2h8M8 11.2h4.8" {...stroke} />
          <circle cx="16.5" cy="11.2" r="1.2" fill="currentColor" opacity="0.28" />
        </>
      );
    case "specialistFocus":
      return (
        <>
          <path d="M12 4.2a7.8 7.8 0 1 0 7.8 7.8M12 7.6a4.4 4.4 0 1 0 4.4 4.4" {...stroke} />
          <circle cx="12" cy="12" r="1.8" fill="currentColor" opacity="0.22" />
          <path d="M16.6 4.2h3.2v3.2M19.5 4.5 13.3 10.7" {...stroke} />
        </>
      );
    case "calendarCheck":
      return (
        <>
          <rect x="4" y="4.7" width="16" height="15" rx="2.2" {...stroke} />
          <path d="M4 9h16M8 3v3.2M16 3v3.2" {...stroke} />
          <path d="m8.4 14 2.15 2.15 4.9-5" {...stroke} />
        </>
      );
    case "disputeEngine":
      return (
        <>
          <path d="M7 3.4h8.2l3.2 3.2v13H7V3.4Z" {...stroke} />
          <path d="M15 3.6v3.2h3.2M9.4 9.8h5.2M9.4 12.6h4.1" {...stroke} />
          <path d="M5 7.2H3.8v13h9.8v-1.1" {...stroke} />
          <path d="m10.2 16.5 1.55 1.55 3.55-3.75" {...stroke} />
        </>
      );
    case "scoreRise":
      return (
        <>
          <path d="M4 18.5h16" {...stroke} />
          <path d="M5 15.5 9 11l3.4 2.9L19 6.5" {...stroke} />
          <path d="M19 6.5h-4M19 6.5v4" {...stroke} />
          <path d="M6.8 18.5v-2.8M12 18.5v-3.2M17.2 18.5v-6.1" {...stroke} />
        </>
      );
    case "warningDiamond":
      return (
        <>
          <path d="M12 3.1 20.9 12 12 20.9 3.1 12 12 3.1Z" {...stroke} />
          <path d="M12 7.8v5M12 16.2h.01" {...stroke} />
        </>
      );
    case "trophy":
      return (
        <>
          <path d="M8 4h8v3.8c0 2.45-1.7 4.58-4 5.15-2.3-.57-4-2.7-4-5.15V4Z" {...stroke} />
          <path d="M8 6H5.3v1.4c0 1.82 1.25 3.35 3 3.78M16 6h2.7v1.4c0 1.82-1.25 3.35-3 3.78M12 13v3.4M8.8 20h6.4M10 16.4h4" {...stroke} />
        </>
      );
    case "checkBadge":
      return (
        <>
          <circle cx="12" cy="12" r="8.5" {...stroke} />
          <path d="m8.2 12.2 2.5 2.5 5.2-5.5" {...stroke} />
        </>
      );
    case "xBadge":
      return (
        <>
          <circle cx="12" cy="12" r="8.5" {...stroke} />
          <path d="m9 9 6 6M15 9l-6 6" {...stroke} />
        </>
      );
    case "phone":
      return (
        <path d="M19.4 15.6v2.2c0 1.08-.93 1.92-2 1.78a16.4 16.4 0 0 1-7.15-2.54 15.9 15.9 0 0 1-4.9-4.9A16.2 16.2 0 0 1 2.8 4.95C2.67 3.88 3.5 3 4.58 3h2.2c.88 0 1.63.62 1.8 1.48.12.72.32 1.43.58 2.1.25.65.1 1.4-.4 1.88l-.92.92a12.55 12.55 0 0 0 4.9 4.9l.92-.92c.5-.5 1.23-.65 1.88-.4.68.26 1.38.46 2.1.58.88.17 1.76.92 1.76 2.06Z" {...stroke} />
      );
    case "mail":
      return (
        <>
          <rect x="3.4" y="5.2" width="17.2" height="13.6" rx="2.2" {...stroke} />
          <path d="m4.2 7 7.8 6.1L19.8 7" {...stroke} />
        </>
      );
    case "menu":
      return (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" {...stroke} />
          <circle cx="18.6" cy="7" r="0.9" fill="currentColor" />
        </>
      );
    case "close":
      return <path d="M6.2 6.2 17.8 17.8M17.8 6.2 6.2 17.8" {...stroke} />;
    case "chevronDown":
      return <path d="m7 9.2 5 5 5-5" {...stroke} />;
    case "star":
      return (
        <path
          d="M12 3.25 14.55 8.7l5.95.9-4.3 4.18 1.02 5.92L12 16.9 6.78 19.7l1.02-5.92L3.5 9.6l5.95-.9L12 3.25Z"
          fill="currentColor"
        />
      );
    case "guaranteeSeal":
      return (
        <>
          <path d="M12 2.8 19.4 6v5.65c0 4.4-3.05 8-7.4 9.55-4.35-1.55-7.4-5.15-7.4-9.55V6L12 2.8Z" {...stroke} />
          <path d="M8.1 12.2 10.8 15l5.3-5.8" {...stroke} />
          <path d="M7.6 6.4 12 4.6l4.4 1.8" {...stroke} opacity="0.7" />
          <circle cx="12" cy="12" r="8.7" stroke="currentColor" strokeWidth="0.9" opacity="0.18" />
        </>
      );
  }
}
