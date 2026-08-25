import { guidePages, type GuidePage } from "./guides";
import { batchGuidePages } from "./batchGuides";

const batchSlugs = batchGuidePages.map((page) => page.slug);
const uniqueBatchSlugs = new Set(batchSlugs);

if (uniqueBatchSlugs.size !== batchSlugs.length) {
  throw new Error("Duplicate slug detected inside active batch guide modules.");
}

// Older guide definitions still exist in guides.ts while the content system is
// being migrated. The active registry is the single routing source of truth:
// newer modular guides intentionally replace an older definition with the same slug.
const activeGuideBySlug = new Map<string, GuidePage>();

for (const page of guidePages) activeGuideBySlug.set(page.slug, page);
for (const page of batchGuidePages) activeGuideBySlug.set(page.slug, page);

export const allGuidePages = [...activeGuideBySlug.values()];
export const allGuideSlugs = new Set(allGuidePages.map((page) => page.slug));
