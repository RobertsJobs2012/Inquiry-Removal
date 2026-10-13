import { mkdtemp, mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";
import path from "node:path";

const version = "8.30.1";
// Pinned official release digests, verified against GitHub release metadata.
const releases = {
  darwin_arm64:
    "b40ab0ae55c505963e365f271a8d3846efbc170aa17f2607f13df610a9aeb6a5",
  linux_x64: "551f6fc83ea457d62a0d98237cbad105af8d557003051f41f3e7ca7b3f2470eb",
};
const target = `${process.platform}_${process.arch}`;
if (!releases[target])
  throw new Error(`Unsupported scanner platform ${target}`);
const temporary = await mkdtemp(path.join(tmpdir(), "inquiry-gitleaks-"));
const report = ".artifacts/security/gitleaks.json";
try {
  const response = await fetch(
    `https://github.com/gitleaks/gitleaks/releases/download/v${version}/gitleaks_${version}_${target}.tar.gz`,
    { signal: AbortSignal.timeout(60_000) },
  );
  if (!response.ok)
    throw new Error(`Scanner download returned HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (createHash("sha256").update(bytes).digest("hex") !== releases[target])
    throw new Error("Scanner checksum mismatch");
  const archive = path.join(temporary, "scanner.tar.gz");
  await writeFile(archive, bytes);
  const extracted = spawnSync("tar", ["-xzf", archive, "-C", temporary], {
    stdio: "inherit",
  });
  if (extracted.status !== 0) throw new Error("Cannot unpack verified scanner");
  await mkdir(path.dirname(report), { recursive: true });
  const result = spawnSync(
    path.join(temporary, "gitleaks"),
    [
      "git",
      ".",
      "--log-opts=--all",
      "--config=.gitleaks.toml",
      "--redact=100",
      "--no-banner",
      "--report-format=json",
      `--report-path=${report}`,
    ],
    { stdio: "inherit" },
  );
  // Reports uploaded by CI never contain matched values, author contact data,
  // commit messages, or even redacted secret snippets: only finding locations.
  let findings = [];
  try {
    findings = JSON.parse(await readFile(report, "utf8"));
  } catch {}
  await writeFile(
    report,
    JSON.stringify(
      findings.map(
        ({ RuleID, File, StartLine, EndLine, Commit, Fingerprint }) => ({
          RuleID,
          File,
          StartLine,
          EndLine,
          Commit,
          Fingerprint,
        }),
      ),
      null,
      2,
    ),
  );
  if (result.error || result.status !== 0)
    throw new Error(
      `Credential scan failed (${findings.length} finding locations; inspect sanitized report).`,
    );
  console.log(
    `Gitleaks ${version}: tracked Git history passed; report contains no secret values.`,
  );
} finally {
  // Only this invocation's mkdtemp directory; never repository or user data.
  await rm(temporary, { recursive: true, force: true });
}
