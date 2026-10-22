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
assert.equal(Object.keys(plan).length, 45);
const titles = new Set();
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
  const h1 = [...html.matchAll(/<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/g)];
  assert.equal(h1.length, 1, url + " H1 count");
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
console.log(
  "Editorial audit passed: all 45 research briefs match built titles and H1s; canonicals, indexing intent and four private tool placements preserved.",
);
