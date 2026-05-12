import {
  packageAddOns,
  packages,
  type PackageAddOnId,
  type PackageId,
} from "./site";

export type SelectionSummaryInput = {
  aspiration?: string;
  problem?: string;
  timeline?: string;
  bestWayToContact?: string;
  selectedPackage?: PackageId | "";
  selectedAddOns?: PackageAddOnId[];
};

export const quizPackageOptions: Array<{
  id: PackageId;
  eyebrow: string;
  description: string;
  featured?: boolean;
}> = [
  {
    id: "one-done",
    eyebrow: "Single-bureau targeted removal",
    description: "Best when one report is clearly holding you back and you need a focused fix.",
  },
  {
    id: "full-sweep",
    eyebrow: "Complete 3-bureau restoration",
    description: "The best fit for most Arizona clients. All three bureaus cleaned together.",
    featured: true,
  },
  {
    id: "total-freedom",
    eyebrow: "The complete restoration",
    description: "Adds inquiries, ChexSystems, InnoVis, and LexisNexis for complex files.",
  },
];

export const quizAddOnOptions = packageAddOns;

export function getPackageById(id: PackageId | "" | undefined) {
  if (!id) return null;
  return packages.find((pkg) => pkg.id === id) ?? null;
}

export function getAddOnById(id: PackageAddOnId) {
  return packageAddOns.find((addOn) => addOn.id === id) ?? null;
}

export function getEstimatedTotal(
  selectedPackage: PackageId | "" | undefined,
  selectedAddOns: PackageAddOnId[] = []
) {
  const packagePrice = getPackageById(selectedPackage)?.price ?? 0;
  const addOnTotal = selectedAddOns.reduce((total, addOnId) => {
    return total + (getAddOnById(addOnId)?.price ?? 0);
  }, 0);

  return packagePrice + addOnTotal;
}

export function buildSelectionSummary({
  aspiration,
  problem,
  timeline,
  bestWayToContact,
  selectedPackage,
  selectedAddOns = [],
}: SelectionSummaryInput) {
  const chosenPackage = getPackageById(selectedPackage);
  const chosenAddOns = selectedAddOns
    .map((addOnId) => getAddOnById(addOnId))
    .filter((addOn): addOn is NonNullable<typeof addOn> => Boolean(addOn));

  const lines = [
    `Selected package: ${chosenPackage ? `${chosenPackage.name} ($${chosenPackage.price})` : "Not selected"}`,
    `Add-ons: ${chosenAddOns.length > 0 ? chosenAddOns.map((addOn) => `${addOn.name} ($${addOn.price})`).join(", ") : "None selected"}`,
  ];

  if (chosenPackage) {
    lines.push(`Estimated total: $${getEstimatedTotal(selectedPackage, selectedAddOns)}`);
  }
  if (aspiration) {
    lines.push(`Goal: ${aspiration}`);
  }
  if (problem) {
    lines.push(`Problem: ${problem}`);
  }
  if (timeline) {
    lines.push(`Timeline: ${timeline}`);
  }
  if (bestWayToContact) {
    lines.push(`Preferred contact: ${bestWayToContact}`);
  }

  return lines.join("\n");
}
