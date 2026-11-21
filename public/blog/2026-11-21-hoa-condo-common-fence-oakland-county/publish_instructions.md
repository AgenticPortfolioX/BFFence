# Publish Instructions — BF Fence

**Post:** Who Owns the Fence in an Oakland County Subdivision? The HOA and Condo Association Guide to Common Fencing, Reserve Funding, and a Spring Replacement
**Slug:** `2026-11-21-hoa-condo-common-fence-oakland-county`
**Publish date:** 2026-11-21
**Category:** BF Fence | **Author:** BFFence | **Pillar:** 8 — Commercial & Property Solutions

## Files in this package

| File | Purpose |
|---|---|
| `final.md` | Post body with YAML frontmatter (title, date, description, category, author) |
| `schema/schema.json` | JSON-LD `@graph`: Article + FAQPage + LocalBusiness + Service |
| `feature_image.png` | 1280x720 16:9 featured image, deploy as `feature_image.png` |
| `publish_instructions.md` | This file |

## Deployment route

- Live URL: `https://bffence.com/blog/2026-11-21-hoa-condo-common-fence-oakland-county`
- Repo path: `public/blog/2026-11-21-hoa-condo-common-fence-oakland-county/`
- Repo: `AgenticPortfolioX/BFFence`
- Deploy `schema.json` under that exact filename — the site builder (`sync-blog.ts`) expects it.
- Do **not** use `/updates/<slug>` — that route renders the empty app shell. `/blog/<slug>` is correct. All six internal links in the body use `/blog/`.

## Pre-publish checks (verified at build time)

- [x] `final.md` starts with `---` as the first three characters (`head -c 3`)
- [x] Exactly 5 frontmatter keys; `date: "2026-11-21"`
- [x] `category: "BF Fence"` (brand name, not pillar name)
- [x] Prose-only word count 4,369 (BFFence range 3,000–5,000; raw 4,632 includes 175 table words and 88 frontmatter words); under the 4,900 hard stop
- [x] Zero forbidden terms (cryptographic, blockchain, valuation, digital asset, deepfake — word-boundary check)
- [x] Key phrases present: "Built to last," "Protecting what matters," "Privacy you can see" (3 of 4; "Oakland County's Trusted Choice" intentionally omitted to keep the board-facing tone plain)
- [x] FAQ parity: 8 prose H3 questions = 8 schema `mainEntity` entries, identical text and order (programmatically compared, `EXACT MATCH: True`)
- [x] JSON-LD parses; graph contains Article, FAQPage, LocalBusiness, Service
- [x] Table integrity: 2 tables, internally consistent (`awk -F'|'` field count check: 5 rows at 7 fields, 6 rows at 6 fields)
- [x] Single H1; 16 H2s; 8 H3s (all FAQ questions); no hashtags; no emoji
- [x] No setext-byline risk — no `*Published: … | By …*` line, so nothing renders as an H2
- [x] Six internal links, all to published slugs with `/blog/` prefix:
  - `/blog/2026-09-26-commercial-fence-installation-oakland-county-guide`
  - `/blog/2026-08-22-commercial-fence-cost-pricing-guide`
  - `/blog/2026-11-07-troy-pine-fence-rebuild-cedar-project-spotlight`
  - `/blog/2026-10-31-oakland-county-fence-rules-by-city-guide`
  - `/blog/2026-10-03-fence-property-lines-surveys-michigan`
  - `/blog/2026-11-18-cedar-species-northern-white-western-red-michigan`

## Source citations used in the body (for fact-check)

- Michigan Condominium Act, 1978 PA 59, MCL 559.101 et seq. — governing statute
- MCL 559.103(7) — "common elements" definition
- MCL 559.106(5) — "general common elements" definition
- MCL 559.107(2) — "limited common elements" definition
- MCL 559.169 — assessment of common expenses; limited common element special assessment
- MCL 559.205 — reserve fund for major repairs and replacement of common elements
- Mich Admin Code R 559.511 — reserve fund restricted to major repair/replacement; minimum 10% of current annual budget, noncumulative
- MCL 559.157 — annual CPA audit or review for associations over $20,000 in annual revenue, subject to annual majority opt-out
- MCL 559.154 — annual financial statement to each co-owner
- Fence Viewers Act, MCL 43.51–43.55; MCL 43.53(1) and (2); MCL 43.55 — boundary fence construction, use, and proportional compensation
- Michigan Nonprofit Corporation Act — director standard of care for incorporated associations
- Michigan frost line 42–48 inches plus margin (consistent with the 2026-09-26 commercial post)
- 2026 Oakland County pricing: $55–$70 per linear foot installed for 6-ft board-on-board cedar including tear-out and disposal; anchored to the real 176-ft Troy rebuild at $56.69 per linear foot ($9,977 all-in, published 2026-11-07)

## Suggested metadata

- **Title tag:** Who Owns the Fence in an Oakland County Subdivision? HOA & Condo Guide
- **Meta description:** use the frontmatter `description` verbatim (under 160 characters of lead text, full sentence to the first period)
- **OG image:** `feature_image.png`
- **Canonical:** `https://bffence.com/blog/2026-11-21-hoa-condo-common-fence-oakland-county`

## Post-publish verification

1. Load the live URL; confirm the H1 matches the frontmatter title and the feature image renders.
2. Confirm the page appears under the BF Fence category on `/updates`.
3. Confirm all six internal links resolve (no 404s).
4. Confirm the FAQ block renders as visible text — the schema questions must be on-page, not schema-only.
5. Validate the JSON-LD in Google's Rich Results Test — expect Article, FAQPage, LocalBusiness, and Service with no errors.
