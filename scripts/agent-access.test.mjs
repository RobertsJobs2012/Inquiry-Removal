import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  publicToolDefinitions,
  registerPublicTools,
  interceptAgentDraft,
} from "../src/lib/agent-access.mjs";

const fixture = {
  company: { name: "Inquiry Removal" },
  pricing: { plans: [] },
  guides: [
    {
      title: "TransUnion inquiry guide",
      description: "Inquiry-specific process",
      url: "https://www.inquiryremoval.com/transunion-hard-inquiry-removal/",
    },
  ],
  limitations: ["No guaranteed outcome"],
};

test("public tools are read-only, constrained and do not expose client data", async () => {
  let reads = 0;
  const tools = publicToolDefinitions(async () => {
    reads++;
    return fixture;
  });
  assert.equal(tools.length, 2);
  for (const tool of tools) {
    assert.equal(tool.annotations.readOnlyHint, true);
    assert.equal(tool.inputSchema.type, "object");
    assert.equal(tool.inputSchema.additionalProperties, false);
  }
  assert.deepEqual(await tools[0].execute({}), {
    company: fixture.company,
    pricing: fixture.pricing,
    limitations: fixture.limitations,
  });
  assert.equal(
    (await tools[1].execute({ query: "TransUnion" })).guides.length,
    1,
  );
  for (const input of [
    null,
    [],
    {},
    { query: "" },
    { query: "x" },
    { query: "a".repeat(121) },
    { query: "valid", privateRecord: "no" },
  ])
    await assert.rejects(tools[1].execute(input));
  await assert.rejects(
    tools[0].execute({ email: "never-read@example.invalid" }),
  );
  assert.equal(reads, 2);
});

test("registration is capability-gated and uses abortable lifecycle", async () => {
  const controller = new AbortController(),
    registered = [];
  await registerPublicTools(undefined, () => fixture, controller.signal);
  await registerPublicTools(
    {
      registerTool: async (tool, options) => registered.push({ tool, options }),
    },
    () => fixture,
    controller.signal,
  );
  assert.equal(registered.length, 2);
  assert.ok(
    registered.every((item) => item.options.signal === controller.signal),
  );
  controller.abort();
  await registerPublicTools(
    {
      registerTool: () => {
        throw new Error("must not register");
      },
    },
    () => fixture,
    controller.signal,
  );
});

test("agent form preparation cannot deliver a lead or return its private fields", async () => {
  let prevented = false,
    staged = false,
    response;
  assert.equal(
    interceptAgentDraft({ agentInvoked: false }, () => {
      throw new Error("ordinary visitor flow must remain unchanged");
    }),
    false,
  );
  assert.equal(
    interceptAgentDraft(
      {
        agentInvoked: true,
        preventDefault: () => {
          prevented = true;
        },
        respondWith: (promise) => {
          response = promise;
        },
      },
      () => {
        staged = true;
      },
    ),
    true,
  );
  assert.ok(prevented && staged);
  const result = await response;
  assert.equal(result.submitted, false);
  assert.equal(result.status, "requires_visitor_review");
  assert.doesNotMatch(
    JSON.stringify(result),
    /entry\.|@|phone|email|consent.*true/,
  );
  const source = readFileSync(
    "src/components/FreeReviewForm.astro",
    "utf8",
  ).split("<script>")[1];
  assert.ok(
    source.indexOf("interceptAgentDraft(event") <
      source.indexOf("fetch(reviewForm.action"),
  );
  assert.match(source, /consent.checked = false/);
  assert.doesNotMatch(source, /setAttribute\("toolautosubmit"/);
  assert.ok(
    source.indexOf('"tooldescription",') <
      source.indexOf('setAttribute("toolname",'),
    "description must be installed before tool registration to avoid transient schema issues",
  );
  assert.ok(
    source.indexOf("reviewForm.replaceWith(registrationAnchor)") <
      source.indexOf('"tooldescription",'),
  );
  assert.ok(
    source.indexOf("registrationAnchor.replaceWith(reviewForm)") >
      source.indexOf('setAttribute("toolname",'),
  );
});

test("grouped form parameters and anti-spam field have agent descriptions", () => {
  const source = readFileSync("src/components/FreeReviewForm.astro", "utf8");
  const groups = [
    ...source.matchAll(
      /<fieldset\b[^>]*toolparamdescription="([^"]+)"[^>]*>([\s\S]*?)<\/fieldset>/g,
    ),
  ];
  assert.equal(groups.length, 6);
  for (const field of [
    "goal",
    "situation",
    "count",
    "bureau",
    "reports",
    "contactMethod",
  ]) {
    assert.ok(
      groups.some((group) =>
        group[2].includes(`name={REVIEW_FIELDS.${field}}`),
      ),
      `${field} requires its own described fieldset, not an individual choice description`,
    );
  }
  assert.match(
    source,
    /name="website"\s+toolparamdescription="Anti-spam field\. Always leave empty\."/,
  );
});

test("discovery advertises real read-only resources, not invented services", () => {
  const ard = JSON.parse(readFileSync("public/.well-known/ard.json")),
    api = JSON.parse(readFileSync("public/agent-openapi.json"));
  assert.equal(ard.entries.length, 1);
  assert.equal(ard.entries[0].type, "application/vnd.oai.openapi+json");
  assert.ok(ard.entries[0].representativeQueries.length >= 2);
  assert.deepEqual(Object.keys(api.paths["/agent-info.json"]), ["get"]);
  const client = readFileSync("src/components/AgentAccess.astro", "utf8");
  assert.match(client, /fetch\("\/agent-info.json"/);
  assert.doesNotMatch(
    client,
    /FormData|data-tool-text|localStorage|sessionStorage|free-review|JSON.stringify\(input/,
  );
});
