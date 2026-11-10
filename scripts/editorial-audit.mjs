import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
const plan = JSON.parse(readFileSync("src/data/editorialPlan.json", "utf8"));
const decode = (value) =>
  value
    .replace(/&#(x[0-9a-f]+|\d+);/gi, (_, n) =>
      String.fromCodePoint(
        n[0].toLowerCase() === "x" ? parseInt(n.slice(1), 16) : Number(n),
      ),
    )
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
const noindex = new Set([
  "/free-inquiry-review/",
  "/privacy/",
  "/results/",
  "/terms/",
]);
assert.equal(Object.keys(plan).length, 48);
const titles = new Set();
const conversionRoutes = new Set([
  "/",
  "/pricing/",
  "/how-it-works/",
  "/free-inquiry-review/",
  "/eligibility/",
  "/situations-we-handle/",
  "/dealership-inquiries/",
]);
const coreSearchLanguage = {
  "/": [/hard inquiry removal service/i, /we remove hard inquiries/i],
  "/pricing/": [/hard inquiry removal pricing/i, /hard inquiry removal pricing/i],
  "/how-it-works/": [/how hard inquiry removal works/i, /how hard inquiry removal works/i],
  "/dealership-inquiries/": [/dealership hard inquiry removal/i, /dealership hard inquiry removal/i],
  "/eligibility/": [/which hard inquiries can be removed/i, /which hard inquiries can be removed/i],
  "/how-to-remove-hard-inquiries/": [/how to remove hard inquiries from your credit report/i, /how to remove hard inquiries from your credit report/i],
  "/how-long-do-hard-inquiries-stay/": [/how long do hard inquiries stay on your credit report/i, /how long do hard inquiries stay on your credit report/i],
  "/transunion-hard-inquiry-removal/": [/transunion hard inquiry removal/i, /how to remove hard inquiries from transunion/i],
};
for (const [url, revision] of Object.entries(plan)) {
  const html = readFileSync(path.join("dist", url, "index.html"), "utf8");
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
  assert.equal(title, revision.seoTitle, url + " title");
  assert.equal(
    decode(html.match(/name="description" content="([^"]*)"/)?.[1] ?? ""),
    revision.description,
    url + " description",
  );
  assert.ok(!titles.has(title), url + " duplicate title");
  titles.add(title);
  if (conversionRoutes.has(url)) {
    assert.ok([...title].length <= 60, url + " title character ceiling");
    assert.ok(
      [...revision.description].length <= 155,
      url + " description character ceiling",
    );
  }
  const h1 = [...html.matchAll(/<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/g)];
  assert.equal(h1.length, 1, url + " H1 count");
  if (url in coreSearchLanguage) {
    const [titlePhrase, headlinePhrase] = coreSearchLanguage[url];
    assert.match(title, titlePhrase, url + " search title topic");
    assert.match(decode(h1[0][1]), headlinePhrase, url + " headline topic");
  }
  if (url === "/") {
    const opening = html.match(/<p class="hero-summary">([\s\S]*?)<\/p>/)?.[1] ?? "";
    assert.match(decode(opening), /^Our hard inquiry removal service/i);
    assert.match(decode(opening), /from your credit reports/i);
  }
  assert.equal(
    decode(h1[0][1].replace(/<[^>]*>/g, "").trim()),
    revision.title,
    url + " H1",
  );
  assert.ok(
    html.includes('href="https://www.inquiryremoval.com' + url + '"'),
    url + " canonical",
  );
  const robots = html.match(/name="robots" content="([^"]+)"/)?.[1] ?? "";
  assert.equal(robots.includes("noindex"), noindex.has(url), url + " robots");
  for (const href of revision.related)
    assert.ok(href in plan, url + " related " + href);
}
const sitemap = readFileSync("dist/sitemap-0.xml", "utf8");
const dealership = readFileSync("dist/dealership-inquiries/index.html", "utf8");
assert.match(dealership, /href="\/free-inquiry-review\/\?situation=dealership#online-review"/);
assert.match(dealership, /id="dealership-overview"/);
const situations = readFileSync("dist/situations-we-handle/index.html", "utf8");
assert.match(situations, /href="#find-situation"[^>]*>\s*Find My Situation/);
for (const slug of [
  "hard-inquiry-dispute-denied",
  "denied-credit-too-many-inquiries",
]) {
  const html = readFileSync(path.join("dist", slug, "index.html"), "utf8");
  const schema = JSON.parse(
    html.match(
      /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/,
    )[1],
  );
  const article = schema.find((item) => item["@type"] === "Article");
  assert.equal(
    article?.dateModified,
    "2026-11-02",
    slug + " actual review date",
  );
  assert.ok(
    html.includes('datetime="2026-11-02"'),
    slug + " visible review date",
  );
  assert.ok(
    html.includes('id="practical-next-steps"'),
    slug + " checklist target",
  );
  assert.ok(
    sitemap.includes(`https://www.inquiryremoval.com/${slug}/`),
    slug + " sitemap",
  );
  assert.ok(
    readFileSync("dist/resources/index.html", "utf8").includes(
      `href="/${slug}/"`,
    ),
    slug + " discoverable from hub",
  );
}
assert.ok(sitemap.includes("https://www.inquiryremoval.com/editorial-policy/"));
const agePage = readFileSync(
  "dist/how-long-do-hard-inquiries-stay/index.html",
  "utf8",
);
assert.match(agePage, /data-tool-bureau/);
assert.match(agePage, /25 months/);
const untouchedGuide = readFileSync(
  "dist/what-is-a-hard-inquiry/index.html",
  "utf8",
);
assert.ok(
  untouchedGuide.includes('datetime="2026-10-21"'),
  "unchanged guide keeps its actual review date",
);
for (const url of [
  "/how-long-do-hard-inquiries-stay/",
  "/hard-inquiry-removal-letter/",
  "/who-pulled-my-credit/",
  "/how-to-remove-hard-inquiries/",
]) {
  assert.match(
    readFileSync(path.join("dist", url, "index.html"), "utf8"),
    /data-private-tool=/,
    url,
  );
}
// Template improvements must preserve the approved answer and provide real,
// unique targets for every advertised shortcut (including service guides).
for (const url of Object.keys(plan)) {
  const html = readFileSync(path.join("dist", url, "index.html"), "utf8");
  if (!html.includes('class="guide-page')) continue;
  for (const id of ["quick-answer", "guide-sources"])
    assert.equal(
      [...html.matchAll(new RegExp(`id="${id}"`, "g"))].length,
      1,
      url + " unique " + id,
    );
  if (html.includes("guide-page--article")) {
    assert.ok(
      html.indexOf('id="quick-answer"') <
        html.indexOf('aria-label="Company proof"'),
      url + " answer before promotional proof",
    );
    assert.ok(
      !html.includes('class="guide-visual__signal"'),
      url + " no decorative data bars in article hero",
    );
  }
  if (html.includes('href="#practical-tools"'))
    assert.ok(
      html.includes('id="practical-tools"'),
      url + " valid tool shortcut",
    );
  if (html.includes('href="#practical-next-steps"'))
    assert.ok(
      html.includes('id="practical-next-steps"'),
      url + " valid practical shortcut",
    );
}
const worksheetPage = readFileSync(
  "dist/how-to-remove-hard-inquiries/index.html",
  "utf8",
);
assert.match(worksheetPage, /data-inquiry-helper/);
assert.match(worksheetPage, /data-tool-clear/);
assert.match(worksheetPage, /data-helper-print/);
assert.match(
  worksheetPage,
  /href="\/best-hard-inquiry-removal-services\/"[^>]*>\s*Compare hard inquiry removal services if you prefer paid help/,
);
for (const slug of [
  "how-to-remove-hard-inquiries",
  "how-to-dispute-a-hard-inquiry",
  "how-long-do-hard-inquiries-stay",
  "best-hard-inquiry-removal-services",
  "hard-inquiry-removal-letter",
  "transunion-hard-inquiry-removal",
  "soft-pull-became-hard-inquiry",
  "authorized-inquiry-removal",
]) {
  const html = readFileSync(path.join("dist", slug, "index.html"), "utf8");
  const links = [
    ...html.matchAll(
      /<a\b([^>]*\bdata-contextual-link\b[^>]*)>([\s\S]*?)<\/a>/g,
    ),
  ];
  assert.ok(
    links.length > 0 && links.length <= 4,
    slug + " curated link count",
  );
  const destinations = new Set();
  for (const [, attrs, text] of links) {
    const href = attrs.match(/href="([^"]+)"/)?.[1];
    assert.ok(href in plan, slug + " contextual destination exists");
    assert.notEqual(href, `/${slug}/`, slug + " must not link to itself");
    assert.ok(
      !destinations.has(href),
      slug + " repeated contextual destination",
    );
    assert.ok(text.trim(), slug + " contextual link must have a visible name");
    destinations.add(href);
  }
  if (slug === "how-to-dispute-a-hard-inquiry")
    assert.ok(destinations.has("/transunion-hard-inquiry-removal/"));
}
console.log(
  `Editorial audit passed: all ${Object.keys(plan).length} editorial entries match built titles and H1s; canonicals, indexing intent and four private tool placements preserved.`,
);
