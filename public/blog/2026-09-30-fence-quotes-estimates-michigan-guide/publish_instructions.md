# Publishing Instructions — BFFence

**Post:** How to Read a Fence Quote in Michigan: Estimates vs. Quotes, What Drives the Price, and How to Compare Bids Without Getting Burned
**Slug:** `2026-09-30-fence-quotes-estimates-michigan-guide`
**Date:** 2026-09-30
**Live URL:** https://bffence.com/blog/2026-09-30-fence-quotes-estimates-michigan-guide
**Pillar:** 9 — Cost & Value
**Author:** BFFence ("BF Fence") | **Category:** BF Fence

## Files in This Package

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body → `public/blog/2026-09-30-fence-quotes-estimates-michigan-guide/final.md` |
| `blog_images/feature_image.png` | Featured image (1280x720 PNG, 16:9) → `public/blog/2026-09-30-fence-quotes-estimates-michigan-guide/feature_image.png` |
| `schema/schema.json` | JSON-LD `@graph` (Article + LocalBusiness + Service + FAQPage) → `public/blog/2026-09-30-fence-quotes-estimates-michigan-guide/schema.json` |
| `publish_instructions/publish_instructions.md` | This file |

## Deployment Steps

1. Run the `github-blog-deployment` skill for brand **BFFence** (repo `AgenticPortfolioX/BFFence`, target path `public/blog/2026-09-30-fence-quotes-estimates-michigan-guide/`).
2. Commit message: `Deploy blog: How to Read a Fence Quote in Michigan (2026-09-30)`
3. Confirm the post resolves at `https://bffence.com/blog/2026-09-30-fence-quotes-estimates-michigan-guide`
4. Confirm the featured image renders on the blog card and that the post appears under the **BF Fence** category.

## Routing Note (unchanged from the 2026-09-12 correction)

Individual posts render at **`/blog/<YYYY-MM-DD-slug>`**. `/updates` is the blog *index* only — direct navigation to `/updates/<slug>` renders the empty app shell.

- Live post URL: `https://bffence.com/blog/2026-09-30-fence-quotes-estimates-michigan-guide`
- Schema `mainEntityOfPage`, Article `image`, LocalBusiness `image`, and internal links all use `/blog/<slug>`.

## Frontmatter Requirements (do not alter)

- `category: "BF Fence"` — brand name, NOT the pillar name. Changing this breaks category filtering.
- `author: "BFFence"`
- `date: "2026-09-30"`
- Exactly 5 frontmatter keys: title, date, description, category, author.
- YAML frontmatter must remain the absolute first characters of the file (`head -c 3` returns `---`).
- Word count: 5,226 (~5,000-word BFFence Guardian range; ~4,805 prose excluding frontmatter and the comparison table).

## Schema Notes

- Filename must stay `schema.json` for BFFence (the site builder expects this name; do not rename to `sdira_compliance_schema.json`).
- FAQPage questions on-page must match the 10 questions in the schema exactly, in order: (1) how much should a fence deposit be in Michigan, (2) is a fence quote legally binding, (3) do I need a licensed fence contractor in Michigan, (4) what should a written fence quote include, (5) how many fence quotes should I get, (6) is the cheapest fence quote the best value, (7) how do I know if a fence quote is too low, (8) does the homeowner or the contractor pull the permit, (9) what warranty should a fence quote include, (10) is it cheaper to build a fence in the fall in Michigan.
- NAP must remain consistent: (248) 604-6168 · estimate@bffence.com · 2711 Williamsburg Cir, Auburn Hills, MI 48326.
- Article image and LocalBusiness image use the live asset path: `https://bffence.com/blog/2026-09-30-fence-quotes-estimates-michigan-guide/feature_image.png`.
- `areaServed` uses the standard Oakland County city list, led by **Auburn Hills** (business location).
- Article `@id` is `#article-2026-09-30` — do not reuse a previous date's `@id`.
- Service `@id` is `#service` (residential node, distinct from the commercial `#commercial-fence-service` node used on the 2026-09-26 post).

## SEO / Social

- **Title tag:** How to Read a Fence Quote in Michigan: Estimates vs. Quotes, What Drives the Price, and How to Compare Bids Without Getting Burned
- **Meta description:** use the `description` field from `final.md`.
- **Primary keyword:** fence quote Michigan · how to compare fence bids · fence estimate vs quote · fence contractor quote Oakland County
- **Secondary:** fence cost per linear foot Michigan · fence deposit Michigan · Michigan fence contractor license · fence contract Michigan · fence quote red flags · how to read a fence estimate · fence installation quote checklist
- **Long-tail:** how much should a fence deposit be in Michigan · is a fence quote binding · do I need a licensed fence contractor in Michigan · how many fence quotes should I get · what should a fence quote include
- **Suggested social caption (no hashtags/emojis):** "The number at the bottom of a fence quote is the least reliable thing on it. Two honest bids for the same yard can land $1,500 apart — because they cover different scopes. Here is how to read a Michigan fence quote, what the state's own law requires a contract to contain, what actually drives the price per linear foot, the deposit rule the Attorney General sets, and the red flags that separate a fair bid from one that will cost you twice."

## Internal Linking (all live under `/blog/<slug>`)

- Wood fence cost guide (Pillar 9 companion): `/blog/2026-05-02-wood-fence-cost-guide-michigan`
- Repair vs. replace / cost framework: `/blog/2026-08-01-fence-replacement-guide-michigan`
- Wood fence material specs (Pillar 4): `/blog/2026-09-23-wood-fence-materials-spec-guide-michigan`
- Leaning fence posts / footing failure: `/blog/2026-09-12-leaning-fence-posts-michigan-repair`
- Fence permits and regulations in Oakland County: `/blog/2026-05-20-oakland-county-fence-permits-regulations-guide`

## Post-Deploy Verification

- [ ] Post renders live at the `/blog/2026-09-30-fence-quotes-estimates-michigan-guide` route (H1, 16 H2 sections, the 16-row bid-comparison table, 10-question FAQ, phone number)
- [ ] Featured image visible on the card and in the post header
- [ ] Post listed in the blog index under the BF Fence category
- [ ] JSON-LD present on page (Article + LocalBusiness + Service + FAQPage)
- [ ] Slug present in `src/data/blog-posts.json` at head of `main`, entry count incremented (verify via Contents API base64 payload — not the CDN-cached `download_url`)
- [ ] No forbidden brand terms present (cryptographic, blockchain, valuation, digital asset, deepfake)

## Notes for the Next Run

- This post claimed **Pillar 9 — Cost & Value** (longest idle at 39 days; the 2026-09-26 run deliberately deferred it after noting three prior cost-flavored posts in five months). Angle chosen is the decision-stage "read and compare the quote" territory rather than another price table, to avoid re-treading 2026-05-02 (residential pricing), 2026-08-01 (repair vs. replace cost), and 2026-08-22 (commercial cost).
- Next rotation guidance: **Pillar 1 — Local Durability** (last 2026-08-26, 35 days), **Pillar 5 — Installation Process & Prep** (last 2026-08-29, 32 days), or **Pillar 10 — Local Guides & Community** (last 2026-09-02, 28 days).
- Do not re-run: residential pricing guide (2026-05-02), commercial pricing (2026-08-22), repair-vs-replace cost (2026-08-01), material family comparison (2026-08-15), component material specs (2026-09-23), residential municipal ordinance tour (2026-09-02), residential winter prep how-to (2026-08-26), commercial installation (2026-09-26), and this run's quote-reading angle (2026-09-30).
- Legacy root-level `content_calendar/`/`content_strategy/` directories do NOT exist for BFFence — the `strategy/` subtree is the single source. (Noted for awareness; no dual-location issue.)
- Quality Gate verdict: **READY FOR PUBLICATION — 134/140 (95.7%)**.

## Related
- [[BFFence/strategy/content_strategy/2026-09-30-fence-quotes-estimates-michigan-guide|Content strategy]]
- [[BFFence/research/research_report_fence_quotes_2026-09-30|Research report]]
- [[BFFence/analytics/performance_reports/seo_audit_2026-09-30|GEO/E-E-A-T audit]]
