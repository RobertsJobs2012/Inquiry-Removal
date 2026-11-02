// Shared by rendering and navigation, so links cannot advertise an absent tool.
export function guideToolMode(slug: string) {
  if (slug === "how-long-do-hard-inquiries-stay") return "age";
  if (slug === "hard-inquiry-removal-letter") return "letter";
  if (["who-pulled-my-credit", "how-to-remove-hard-inquiries"].includes(slug))
    return "worksheet";
  return undefined;
}
