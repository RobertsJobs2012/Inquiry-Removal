import { transunionGuide } from "./modules/transunion";
import { unauthorizedGuide } from "./modules/unauthorized";
import { softPullGuide } from "./modules/softPull";
import { unrecognizedGuide } from "./modules/unrecognized";
import { identityTheftGuide } from "./modules/identityTheft";

import { sitewideBatchGuidePair1 } from "./sitewidePair1";
import { sitewideBatchGuidePair2 } from "./sitewidePair2";
import { sitewideBatchGuidePair3 } from "./sitewidePair3";
import { sitewideBatchGuidePair4 } from "./sitewidePair4";
import { sitewideBatchGuidePair5 } from "./sitewidePair5";
import { sitewideBatchGuidePair6 } from "./sitewidePair6";
import { sitewideBatchGuidePair7 } from "./sitewidePair7";
import { sitewideBatchGuidePair8 } from "./sitewidePair8";
import { sitewideBatchGuidePair9 } from "./sitewidePair9";
import { sitewideBatchGuidePair10 } from "./sitewidePair10";
import { sitewideBatchGuidePair11 } from "./sitewidePair11";
import { sitewideBatchGuidePair12 } from "./sitewidePair12";

export const batchGuidePages = [
  transunionGuide,
  unauthorizedGuide,
  softPullGuide,
  unrecognizedGuide,
  identityTheftGuide,
  ...sitewideBatchGuidePair1,
  ...sitewideBatchGuidePair2,
  ...sitewideBatchGuidePair3,
  ...sitewideBatchGuidePair4,
  ...sitewideBatchGuidePair5,
  ...sitewideBatchGuidePair6,
  ...sitewideBatchGuidePair7,
  ...sitewideBatchGuidePair8,
  ...sitewideBatchGuidePair9,
  ...sitewideBatchGuidePair10,
  ...sitewideBatchGuidePair11,
  ...sitewideBatchGuidePair12,
];

export const batchGuideSlugs = new Set(batchGuidePages.map((page) => page.slug));
