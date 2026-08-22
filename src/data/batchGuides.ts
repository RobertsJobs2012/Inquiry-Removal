import { transunionGuide } from "./modules/transunion";
import { unauthorizedGuide } from "./modules/unauthorized";
import { softPullGuide } from "./modules/softPull";
import { unrecognizedGuide } from "./modules/unrecognized";
import { identityTheftGuide } from "./modules/identityTheft";

export const batchGuidePages = [
  transunionGuide,
  unauthorizedGuide,
  softPullGuide,
  unrecognizedGuide,
  identityTheftGuide,
];

export const batchGuideSlugs = new Set(batchGuidePages.map((page) => page.slug));
