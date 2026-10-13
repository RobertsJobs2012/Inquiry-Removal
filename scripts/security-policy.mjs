import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

export function policyProblems(html, policy) {
  const problems = [];
  const scripts =
    policy
      .split(";")
      .map((s) => s.trim())
      .find((s) => s.startsWith("script-src ")) ?? "";
  if (
    !scripts.includes("'self'") ||
    /'unsafe-inline'|'unsafe-eval'|(?:^|\s)\*(?:\s|$)/.test(scripts)
  )
    problems.push(
      "script-src must be explicit and must not permit unsafe inline/eval code",
    );
  if (!policy.includes("script-src-attr 'none'"))
    problems.push("inline event handlers must be prohibited");
  for (const [, attrs, body] of html.matchAll(
    /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
  )) {
    const type =
      attrs.match(/\btype=["']([^"']*)["']/i)?.[1]?.toLowerCase() ?? "";
    if (
      ["application/ld+json", "application/json", "text/plain"].includes(type)
    )
      continue;
    if (!/\bsrc=["'][^"']+["']/i.test(attrs) && body.trim())
      problems.push("executable inline script would be blocked by CSP");
  }
  for (const [tag] of html.matchAll(/<[a-z][^>]*>/gi)) {
    if (/\son[a-z]+\s*=/i.test(tag))
      problems.push("inline event-handler attribute");
    if (/\b(?:href|src)=["']\s*javascript:/i.test(tag))
      problems.push("javascript URL");
  }
  return problems;
}

export async function checkSecurityPolicy(root = path.resolve("dist")) {
  const config = JSON.parse(await readFile("vercel.json", "utf8"));
  const policy = config.headers
    .find((h) => h.source === "/(.*)")
    .headers.find((h) => h.key === "Content-Security-Policy").value;
  let count = 0;
  const errors = [];
  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(file);
      else if (file.endsWith(".html")) {
        count++;
        for (const problem of policyProblems(
          await readFile(file, "utf8"),
          policy,
        ))
          errors.push(`${path.relative(root, file)}: ${problem}`);
      }
    }
  }
  await walk(root);
  if (errors.length) throw new Error(errors.join("\n"));
  console.log(
    `Security policy check passed: ${count} HTML files; no executable inline scripts or handlers.`,
  );
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
)
  await checkSecurityPolicy();
