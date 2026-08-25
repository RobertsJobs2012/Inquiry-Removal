import {
  BUREAUS,
  CONTACT_CONSENT,
  CONTACT_METHODS,
  GOOGLE_REVIEW_FORM_ACTION,
  GOALS,
  INQUIRY_COUNTS,
  REPORT_COPIES,
  REVIEW_FIELDS,
  SITUATIONS,
} from "../src/data/reviewForm.js";

const noStoreHeaders = {
  "Cache-Control": "no-store, max-age=0",
  "Content-Type": "application/json; charset=utf-8",
  "X-Content-Type-Options": "nosniff",
};

const asString = (data: FormData, name: string) => {
  const value = data.get(name);
  return typeof value === "string" ? value.trim() : "";
};

const includes = <T extends readonly string[]>(values: T, value: string): value is T[number] =>
  values.includes(value as T[number]);

const wantsJson = (request: Request) =>
  request.headers.get("accept")?.includes("application/json") ?? false;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: noStoreHeaders });

const fallbackHtml = (title: string, message: string, status: number) =>
  new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${title} | Inquiry Removal</title><style>body{margin:0;background:#081b2c;color:#fff;font-family:Arial,sans-serif}.wrap{max-width:720px;margin:0 auto;padding:12vh 24px}h1{font-size:clamp(2rem,7vw,4rem);line-height:1.05}p{color:#c6d5e2;line-height:1.7}.actions{display:flex;gap:16px;flex-wrap:wrap;margin-top:28px}a{color:#fff;background:#0f70d7;border-radius:10px;padding:14px 18px;text-decoration:none;font-weight:700}.secondary{background:transparent;border:1px solid #79c7ff}</style></head><body><main class="wrap"><p>Inquiry Removal</p><h1>${title}</h1><p>${message}</p><div class="actions"><a href="/free-inquiry-review/#online-review">Return to the review</a><a class="secondary" href="tel:+16023776626">Call Inquiry Removal</a></div></main></body></html>`,
    {
      status,
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "Content-Type": "text/html; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    },
  );

const fail = (request: Request, message: string, status = 400) =>
  wantsJson(request)
    ? json({ ok: false, error: message }, status)
    : fallbackHtml("We couldn't send your review yet.", message, status);

const succeed = (request: Request, receipt: string) => {
  if (wantsJson(request)) return json({ ok: true, receipt });
  return Response.redirect(new URL("/review-received/", request.url), 303);
};

export function GET() {
  return new Response("Method Not Allowed", {
    status: 405,
    headers: { Allow: "POST", "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite === "cross-site") return fail(request, "This submission was blocked.", 403);

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return fail(request, "The form submission could not be read. Please try again.");
  }

  const receipt = crypto.randomUUID();
  const honeypot = asString(data, "website");
  if (honeypot) return succeed(request, receipt);

  const name = asString(data, REVIEW_FIELDS.name);
  const email = asString(data, REVIEW_FIELDS.email);
  const phone = asString(data, REVIEW_FIELDS.phone);
  const goal = asString(data, REVIEW_FIELDS.goal);
  const situation = asString(data, REVIEW_FIELDS.situation);
  const count = asString(data, REVIEW_FIELDS.count);
  const reports = asString(data, REVIEW_FIELDS.reports);
  const contactMethod = asString(data, REVIEW_FIELDS.contactMethod);
  const note = asString(data, REVIEW_FIELDS.note);
  const consent = asString(data, REVIEW_FIELDS.consent);
  const bureaus = data
    .getAll(REVIEW_FIELDS.bureau)
    .filter((value): value is string => typeof value === "string")
    .map((value) => value.trim());

  if (name.length < 2 || name.length > 120)
    return fail(request, "Enter your full name and try again.");
  if (email.length > 180 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return fail(request, "Enter a valid email address and try again.");
  const phoneDigits = phone.replace(/\D/g, "");
  if (phone.length > 40 || phoneDigits.length < 7 || phoneDigits.length > 15)
    return fail(request, "Enter a valid phone number and try again.");
  if (!includes(GOALS, goal)) return fail(request, "Choose what you are preparing for.");
  if (!includes(SITUATIONS, situation))
    return fail(request, "Choose the situation that best describes what happened.");
  if (!includes(INQUIRY_COUNTS, count))
    return fail(request, "Choose an approximate inquiry count.");
  if (!bureaus.length || bureaus.some((bureau) => !includes(BUREAUS, bureau)))
    return fail(request, "Choose at least one affected credit report.");
  if (!includes(REPORT_COPIES, reports))
    return fail(request, "Tell us whether you have current copies of the affected reports.");
  if (!includes(CONTACT_METHODS, contactMethod))
    return fail(request, "Choose how you would prefer to be contacted.");
  if (consent !== CONTACT_CONSENT)
    return fail(request, "Please confirm the contact consent before submitting.");
  if (note.length > 2500)
    return fail(request, "Please shorten the optional note and try again.");

  const requestedSource = asString(data, "source_page");
  const sourcePage = /^\/[a-z0-9\-/]*\/$/i.test(requestedSource)
    ? requestedSource
    : "direct";
  const requestedContext = asString(data, "source_context").toLowerCase();
  const sourceContext = /^[a-z0-9|\-]{1,300}$/.test(requestedContext)
    ? requestedContext
    : "general";
  const contextLine = `[Website context: source=${sourcePage}; context=${sourceContext}; receipt=${receipt}]`;
  const combinedNote = note ? `${note}\n\n${contextLine}` : contextLine;

  const payload = new URLSearchParams();
  payload.set("fvv", "1");
  payload.set("pageHistory", "0");
  payload.set(REVIEW_FIELDS.name, name);
  payload.set(REVIEW_FIELDS.email, email);
  payload.set(REVIEW_FIELDS.phone, phone);
  payload.set(REVIEW_FIELDS.goal, goal);
  payload.set(REVIEW_FIELDS.situation, situation);
  payload.set(REVIEW_FIELDS.count, count);
  bureaus.forEach((bureau) => payload.append(REVIEW_FIELDS.bureau, bureau));
  payload.set(REVIEW_FIELDS.reports, reports);
  payload.set(REVIEW_FIELDS.contactMethod, contactMethod);
  payload.set(REVIEW_FIELDS.note, combinedNote);
  payload.set(REVIEW_FIELDS.consent, CONTACT_CONSENT);
  payload.set("submit", "Submit");

  let upstream: Response;
  try {
    upstream = await fetch(GOOGLE_REVIEW_FORM_ACTION, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: payload.toString(),
      redirect: "manual",
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    });
  } catch (error) {
    console.error("free-review upstream request failed", {
      receipt,
      sourcePage,
      sourceContext,
      error: error instanceof Error ? error.message : "unknown",
    });
    return fail(
      request,
      "We could not confirm delivery of your review request. Please try again or call Inquiry Removal.",
      502,
    );
  }

  if (upstream.status < 200 || upstream.status >= 400) {
    console.error("free-review upstream rejected request", {
      receipt,
      status: upstream.status,
      sourcePage,
      sourceContext,
    });
    return fail(
      request,
      "We could not confirm delivery of your review request. Please try again or call Inquiry Removal.",
      502,
    );
  }

  console.info("free-review accepted", {
    receipt,
    sourcePage,
    sourceContext,
    situation,
    count,
    bureaus,
  });
  return succeed(request, receipt);
}
