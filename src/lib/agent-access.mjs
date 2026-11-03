// Browser tools expose public information only, never the lead-delivery API.
export function publicToolDefinitions(loadPublicInformation) {
  return [
    {
      name: "get_inquiry_removal_public_information",
      description:
        "Read published Inquiry Removal company details, current one-time plan prices and service limitations.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false,
      },
      execute: async (input = {}) => {
        if (
          !input ||
          typeof input !== "object" ||
          Array.isArray(input) ||
          Object.keys(input).length
        )
          throw new Error(
            "This public information tool accepts no parameters.",
          );
        const data = await loadPublicInformation();
        return {
          company: data.company,
          pricing: data.pricing,
          limitations: data.limitations,
        };
      },
      annotations: { readOnlyHint: true },
    },
    {
      name: "find_inquiry_removal_guides",
      description:
        "Find published Inquiry Removal educational guides by topic and return their direct website links.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            minLength: 2,
            maxLength: 120,
            description:
              "A public educational topic, such as TransUnion or inquiry dispute. Do not include personal identifiers.",
          },
        },
        required: ["query"],
        additionalProperties: false,
      },
      execute: async (input) => {
        if (
          !input ||
          typeof input !== "object" ||
          Array.isArray(input) ||
          Object.keys(input).some((key) => key !== "query") ||
          typeof input.query !== "string" ||
          input.query.trim().length < 2 ||
          input.query.length > 120
        )
          throw new Error(
            "Provide a public guide topic between 2 and 120 characters.",
          );
        const data = await loadPublicInformation();
        const terms = input.query.toLowerCase().trim().split(/\s+/);
        const guides = data.guides
          .filter((guide) =>
            terms.every((term) =>
              `${guide.title} ${guide.description}`
                .toLowerCase()
                .includes(term),
            ),
          )
          .slice(0, 8);
        return {
          guides,
          resourceCenter: "https://www.inquiryremoval.com/resources/",
          limitations: data.limitations,
        };
      },
      annotations: { readOnlyHint: true },
    },
  ];
}

export async function registerPublicTools(
  context,
  loadPublicInformation,
  signal,
) {
  if (!context || typeof context.registerTool !== "function" || signal.aborted)
    return;
  for (const tool of publicToolDefinitions(loadPublicInformation)) {
    await context.registerTool(tool, { signal });
  }
}

export function interceptAgentDraft(event, onDraft) {
  if (!event.agentInvoked) return false;
  event.preventDefault();
  onDraft();
  // Deliberately return no contact details or other form field values.
  event.respondWith?.(
    Promise.resolve({
      status: "requires_visitor_review",
      submitted: false,
      message:
        "Draft only. The visitor must review the form, give contact consent and submit manually.",
    }),
  );
  return true;
}
