export type OrbFieldVariant = "hero" | "section" | "soft";

type OrbFieldProps = {
  variant?: OrbFieldVariant;
  className?: string;
};

export function OrbField({ variant = "section", className = "" }: OrbFieldProps) {
  const classes = ["ir-orb-field", `ir-orb-field-${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} aria-hidden="true" />;
}
