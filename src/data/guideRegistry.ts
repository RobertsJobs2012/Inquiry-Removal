import { guidePages } from "./guides";
import { batchGuidePages } from "./batchGuides";
import { reviseGuide } from "./editorial";

export const allGuidePages = [...guidePages, ...batchGuidePages].map(
  reviseGuide,
);

const allSlugs = allGuidePages.map((page) => page.slug);
const allGuideSlugsSet = new Set(allSlugs);

if (allGuideSlugsSet.size !== allSlugs.length) {
  const duplicates = [
    ...new Set(
      allSlugs.filter((slug, index) => allSlugs.indexOf(slug) !== index),
    ),
  ].sort();

  throw new Error(`Duplicate active guide slug(s): ${duplicates.join(", ")}`);
}

export const allGuideSlugs = allGuideSlugsSet;
