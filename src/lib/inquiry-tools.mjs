export function parseCalendarDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 12));
  if (
    year < 1900 ||
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  )
    return null;
  return date;
}
export function addCalendarMonths(value, count) {
  const date = parseCalendarDate(value);
  if (!date || !Number.isInteger(count))
    throw new Error("Invalid calendar date or month count");
  const target = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + count, 1, 12),
  );
  const last = new Date(
    Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0, 12),
  ).getUTCDate();
  target.setUTCDate(Math.min(date.getUTCDate(), last));
  return target.toISOString().slice(0, 10);
}
export const LETTER_SAMPLE = `[Your full name]
[Your mailing address]
[Date]

To: [Credit bureau or inquiring company; verify its current address]
Subject: Investigation of a specific credit inquiry

I am writing about the inquiry by [exact company name] dated [inquiry date] on my [affected bureau] credit report. My report or confirmation reference, if applicable, is [reference].

I believe the entry is incorrect because [describe only the specific facts that are true and explain the mismatch]. The relevant records show [brief factual explanation].

Please investigate this inquiry and correct or remove it if your records confirm that it should not be reported. If you are the inquiring company, please explain the application or transaction and the basis for the request, and tell me what correction you will request if an error is confirmed.

Enclosed are copies of [relevant report page and supporting records]. I have kept the originals. Please provide the result and any updated report or correction confirmation using [appropriate contact details].

Sincerely,
[Your name]

Attachments: [list only the copies actually included]

Before sending: use the recipient's current secure identity-verification instructions. This sample does not assert fraud, promise deletion, or replace bureau-specific requirements.`;
export const WORKSHEET_SAMPLE = `PRIVATE INQUIRY WORKSHEET — keep on your own device
Do not include SSNs, passwords, full account numbers or identity documents.

Company name exactly as reported:
Inquiry date:
Affected bureau:
Contact shown on the full report:
Application/store/dealership you remember:
Application date and any later application step:
Disclosure or record available:
Company contacted / date / explanation:
Specific mismatch still unresolved:
Request recipient / channel / date:
Delivery or confirmation record:
Response date and explanation:
Updated report date / confirmed change / what remains:

Repeat separately for each affected entry. A repeated company on different bureaus is not automatically an erroneous duplicate.`;
