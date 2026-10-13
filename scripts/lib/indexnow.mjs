export const SITE_ORIGIN = "https://www.inquiryremoval.com";
export const KEY = "9db1eb516e99ccbf93962d2ee991beb3";
export const KEY_LOCATION = `${SITE_ORIGIN}/${KEY}.txt`;
export function canonicalUrl(value) {
  const url = new URL(value, SITE_ORIGIN);
  if (
    url.origin !== SITE_ORIGIN ||
    url.search ||
    url.hash ||
    !url.pathname.endsWith("/")
  )
    throw new Error(
      "IndexNow URL must be a clean canonical URL on the production origin.",
    );
  return url.href;
}
export function chooseUrls(current, previous, { all = false, urls = [] } = {}) {
  if (all && urls.length)
    throw new Error("Use either --all or --url, not both.");
  if (urls.length)
    return [
      ...new Set(
        urls.map((value) => {
          const url = canonicalUrl(value);
          if (!(url in current) && !(url in previous))
            throw new Error(
              "Target is not an indexable or previously submitted URL.",
            );
          return url;
        }),
      ),
    ];
  if (all) return Object.keys(current);
  return [
    ...new Set([
      ...Object.keys(current).filter((url) => current[url] !== previous[url]),
      ...Object.keys(previous).filter((url) => !(url in current)),
    ]),
  ];
}
export async function notify(
  urlList,
  {
    fetcher = fetch,
    sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    now = Date.now,
    attempts = 3,
  } = {},
) {
  if (!urlList.length) return { statuses: [], submitted: 0 };
  const statuses = [];
  for (let offset = 0; offset < urlList.length; offset += 10_000) {
    const batch = urlList.slice(offset, offset + 10_000).map(canonicalUrl);
    for (let attempt = 0; attempt < attempts; attempt++) {
      let response;
      try {
        response = await fetcher("https://api.indexnow.org/indexnow", {
          method: "POST",
          headers: { "content-type": "application/json; charset=utf-8" },
          body: JSON.stringify({
            host: new URL(SITE_ORIGIN).host,
            key: KEY,
            keyLocation: KEY_LOCATION,
            urlList: batch,
          }),
          signal: AbortSignal.timeout(15_000),
        });
      } catch (error) {
        if (attempt + 1 === attempts)
          throw new Error(
            "IndexNow network delivery failed; queue remains pending.",
            { cause: error },
          );
        await sleep(1000 * 2 ** attempt);
        continue;
      }
      const status = response.status,
        retryAfter = response.headers.get("retry-after");
      await response.body?.cancel();
      if (status === 200 || status === 202) {
        statuses.push(status);
        break;
      }
      if (status !== 429 && status < 500)
        throw new Error(
          `IndexNow rejected notification (HTTP ${status}); queue remains pending.`,
        );
      if (attempt + 1 === attempts)
        throw new Error(
          `IndexNow unavailable (HTTP ${status}); queue remains pending.`,
        );
      let wait = 1000 * 2 ** attempt;
      if (retryAfter) {
        const seconds = Number(retryAfter);
        wait = Number.isFinite(seconds)
          ? seconds * 1000
          : Date.parse(retryAfter) - now();
        if (!Number.isFinite(wait) || wait < 0) wait = 1000 * 2 ** attempt;
      }
      if (wait > 30_000)
        throw new Error(
          "IndexNow requested a longer cooldown; retry in a later run.",
        );
      await sleep(wait);
    }
  }
  return { statuses, submitted: urlList.length };
}
export function acknowledgedState(current, previous, urlList) {
  const next = { ...previous };
  for (const url of urlList) {
    if (url in current) next[url] = current[url];
    else delete next[url];
  }
  return next;
}
