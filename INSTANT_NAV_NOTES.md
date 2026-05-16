# Instant navigation tuning notes

This build is tuned to feel closer to State48Credit:

- Uses real Next.js App Router and real `next/link`.
- Removes the previous heavy all-route warmup that could flood the browser after load.
- Adds Chrome Speculation Rules after load/idle to prerender the most important routes and prefetch/prerender internal links as the user shows intent.
- Aligns package/runtime versions closer to the State48Credit build for parity.
- Keeps one shared global CSS file so navigation does not wait on page-level CSS chunks.

Test in Chrome after deploy. Speculation Rules are a progressive enhancement, so unsupported browsers fall back to normal Next.js prefetching.
