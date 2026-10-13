# Reviewed visual baselines

Eight Chromium screenshots cover the homepage, pricing, review entry, and a guide at desktop 1440×1000 and mobile 390×844. They are QA fixtures, not website graphics and are never served by Astro.

`scripts/visual-regression.mjs` compares current screenshots against these PNGs, with self-hosted fonts, fixed scale, light OS theme, reduced motion, and disabled screenshot animations. More than 0.5% changed pixels fails the comparison. Interaction/fallback/contrast tests run separately with normal motion.

For an intentional design or copy change, capture a new `VISUAL_MODE=record` run, inspect the actual UI at both widths, review the screenshots, then replace only the accepted fixture files. Never bypass a failing comparison by automatically accepting every new screenshot. Missing fixtures or changed dimensions fail closed in compare mode.

The initial fixture commit records the reviewed production release in `baseline.json`. A later browser-version update requires another intentional review. These samples do not replace whole-page, physical-device, screen-reader, or real-user performance testing.
