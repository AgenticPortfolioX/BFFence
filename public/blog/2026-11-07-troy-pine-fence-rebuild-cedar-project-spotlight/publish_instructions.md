# Publish Instructions — BF Fence

**Post:** Troy Fence Rebuild: Pulling a 22-Year-Old Treated Pine Fence and Rebuilding in Cedar Without Losing the Garden
**Slug:** `2026-11-07-troy-pine-fence-rebuild-cedar-project-spotlight`
**Publish date:** 2026-11-07
**Category:** BF Fence | **Author:** BFFence

## Files in this package

| File | Purpose |
|---|---|
| `final.md` | Post body with YAML frontmatter (title, date, description, category, author) |
| `schema/schema.json` | JSON-LD `@graph`: Article + FAQPage + LocalBusiness + Service |
| `feature_image.png` | 1280x720 16:9 featured image, deploy as `feature_image.png` |
| `publish_instructions.md` | This file |

## Deployment route

- Live URL: `https://bffence.com/blog/2026-11-07-troy-pine-fence-rebuild-cedar-project-spotlight`
- Repo path: `public/blog/2026-11-07-troy-pine-fence-rebuild-cedar-project-spotlight/`
- Repo: `AgenticPortfolioX/BFFence`
- Deploy `schema.json` under that exact filename — the site builder (`sync-blog.ts`) expects it.
- Do **not** use `/updates/<slug>` — that route renders the empty app shell. `/blog/<slug>` is correct.

## Pre-publish checks (already verified at build time)

- [x] `final.md` starts with `---` as the first three characters
- [x] Exactly 5 frontmatter keys; `date: "2026-11-07"`
- [x] `category: "BF Fence"` (brand name, not pillar name)
- [x] Prose word count 4,772 (BFFence range 3,000–5,000)
- [x] Zero forbidden terms (cryptographic, blockchain, valuation, digital asset, deepfake)
- [x] All 4 key phrases present: "Built to last", "Oakland County's Trusted Choice", "Protecting what matters", "Privacy you can see"
- [x] FAQ parity: 8 prose H3 questions = 8 schema `mainEntity` entries, identical text and order
- [x] JSON-LD validates; graph contains Article, FAQPage, LocalBusiness, Service
- [x] Table integrity: all 22 table rows have the same field count

## Registry / auto-sync

Push to `main`; the `Blog Auto-Sync` workflow regenerates `src/data/blog-posts.json`. Verify the new entry by reading `src/data/blog-posts.json` via the Contents API (base64 payload, not the CDN-cached `download_url`). The identifier key is `id`, not `slug`.

## Known site-wide rendering limitations (not defects in this post)

1. **Markdown tables render as raw pipe text.** The BFFence post renderer does not parse GFM tables — confirmed on prior posts as well. The tables are retained in `final.md` because the markdown source is the archive of record and the content is still machine-readable for AI extraction. Recommended fix: enable GFM table parsing in the post renderer; one change repairs the whole corpus.
2. **The italic byline under the H1 renders with literal asterisks.** Template-wide, affects every post. Fix in the renderer, not in individual posts.

## Post-publish verification

1. Contents API: all four files present at the repo path.
2. Registry: new `id` present in `blog-posts.json`, entry count incremented.
3. Static assets over HTTP: `final.md`, `schema.json`, `feature_image.png`, `publish_instructions.md` all return 200 with byte sizes matching the archive; a known-good prior slug returns 200 and a nonexistent slug returns 404 as controls.
4. Pages workflow for the head commit shows `conclusion: success` (a cancelled sibling Pages run triggered by the Auto-Sync commit is benign).

## CTA

Phone `(248) 604-6168`, email `estimate@bffence.com`. Offer: free on-site probe and a repair-versus-replace call before any spend.
