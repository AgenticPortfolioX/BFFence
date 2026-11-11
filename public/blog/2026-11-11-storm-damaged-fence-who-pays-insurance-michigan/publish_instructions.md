# Publish Instructions — BF Fence

**Post:** A Tree Fell on Your Fence: Who Pays, What Insurance Covers, and What the Repair Actually Costs in Oakland County
**Slug:** `2026-11-11-storm-damaged-fence-who-pays-insurance-michigan`
**Publish date:** 2026-11-11
**Category:** BF Fence | **Author:** BFFence | **Pillar:** 9 — Cost & Value

## Files in this package

| File | Purpose |
|---|---|
| `final.md` | Post body with YAML frontmatter (title, date, description, category, author) |
| `schema/schema.json` | JSON-LD `@graph`: Article + FAQPage + LocalBusiness + Service |
| `feature_image.png` | 1280x720 16:9 featured image, deploy as `feature_image.png` |
| `publish_instructions.md` | This file |

## Deployment route

- Live URL: `https://bffence.com/blog/2026-11-11-storm-damaged-fence-who-pays-insurance-michigan`
- Repo path: `public/blog/2026-11-11-storm-damaged-fence-who-pays-insurance-michigan/`
- Repo: `AgenticPortfolioX/BFFence`
- Deploy `schema.json` under that exact filename — the site builder (`sync-blog.ts`) expects it.
- Do **not** use `/updates/<slug>` — that route renders the empty app shell. `/blog/<slug>` is correct. All internal links in the body already use `/blog/`.

## Pre-publish checks (already verified at build time)

- [x] `final.md` starts with `---` as the first three characters (`head -c 3`)
- [x] Exactly 5 frontmatter keys; `date: "2026-11-11"`
- [x] `category: "BF Fence"` (brand name, not pillar name)
- [x] Prose-only word count 4,223 (BFFence range 3,000–5,000; raw 5,258 includes 939 table words and 96 frontmatter words)
- [x] Zero forbidden terms (cryptographic, blockchain, valuation, digital asset, deepfake)
- [x] All 4 key phrases present: "Built to last", "Oakland County's Trusted Choice", "Protecting what matters", "Privacy you can see"
- [x] FAQ parity: 9 prose H3 questions = 9 schema `mainEntity` entries, identical text and order (programmatically compared)
- [x] JSON-LD parses; graph contains Article, FAQPage, LocalBusiness, Service
- [x] Table integrity: 54 table rows across 6 tables, each table internally consistent (3-, 4-, and 5-column shapes)
- [x] Single H1; no hashtags; no emoji
- [x] Internal links target published slugs with `/blog/` prefix

## Source citations used in the body (for fact-check)

| Claim | Source |
|---|---|
| Healthy tree failing in a storm creates no automatic liability | *Stevens v. Drekich*, 178 Mich. App. 273 (1989) |
| Boundary tree jointly owned; neither owner may cut without consent | *Lennon v. Terrall*, 250 Mich. 100 (1932) |
| Treble damages for cutting a neighbor's tree | MCL 600.2919 |
| Criminal exposure for willful tree destruction | MCL 750.382 |
| Partition-fence cost sharing; fence-viewer apportionment of cost | Act 34 of 1978, MCL 43.51–43.60, incl. MCL 43.55 |
| Small claims ceiling $7,000 since 2024-01-01 | MCL 600.8401 |
| 30-day written proof-of-loss specification; 60-day payment; 12% simple interest | MCL 500.2006(3)–(4); Michigan DIFS FIS-PUB 0216 |
| Prompt notice requirement; one-year suit floor with tolling | MCL 500.2833(1)(l), (1)(q) |
| 60-day sworn proof of loss and 180-day notice of intent to repair | ISO HO-3 form conditions |
| Coverage B ≈10% of dwelling; ACV vs RCV; covered and excluded perils; debris sublimits | Progressive, Travelers, Allstate, American Family consumer guidance (2026) |
| $500/tree, $1,000/incident debris sublimit structure | Insurance Information Institute guidance as compiled by StatesLaws (2026) |
| Median $4,500 wood-fence replacement value in adjuster databases (n=90) | ClaimsPages depreciation database, 2026 |
| 42-inch frost depth; R403.1.4 | 2015 Michigan Residential Code, as used in prior BF Fence posts |
| Arborist written risk assessment $75–$500 | StatesLaws Michigan fallen-tree analysis, 2026 |
| Repair cost bands; $56.69/linear foot 2026 Troy benchmark | BF Fence 2026 job data; prior published post 2026-11-07 |

The body carries one explicit "general information, not legal or insurance advice" framing so the citations are not read as counsel.

## Registry / auto-sync

Push to `main`; the `Blog Auto-Sync` workflow regenerates `src/data/blog-posts.json`. Verify the new entry by reading `src/data/blog-posts.json` via the Contents API (base64 payload, not the CDN-cached `download_url`). The identifier key is `id`, not `slug`.

Expect the entry count to go from 46 to 47.

## Known site-wide rendering limitations (not defects in this post)

1. **Markdown tables render as raw pipe text.** The BFFence post renderer does not parse GFM tables — confirmed on prior posts. The tables are retained in `final.md` because the markdown source is the archive of record and remains machine-readable for AI extraction. This post leans on tables more than usual (six of them, including the depreciation arithmetic and the claims timeline), so the renderer fix matters more here: enable GFM table parsing and the whole corpus improves at once.
2. **The italic byline under the H1 renders with literal asterisks.** Template-wide, affects every post. Fix in the renderer, not in individual posts.

## Post-publish verification

1. Contents API: all four files present at the repo path.
2. Registry: new `id` present in `blog-posts.json`, entry count incremented to 47.
3. Static assets over HTTP: `final.md`, `schema.json`, `feature_image.png`, `publish_instructions.md` all return 200 with byte sizes matching the archive; a known-good prior slug returns 200 and a nonexistent slug returns 404 as controls.
4. Pages workflow for the head commit shows `conclusion: success` (a cancelled sibling Pages run triggered by the Auto-Sync commit is benign).
5. Rich-results check: paste the live URL into the Schema Markup Validator and confirm 9 FAQ entries with no errors.

## CTA

Phone `(248) 604-6168`, email `estimate@bffence.com`. Offer: free on-site walk of the full fence line, every post probed, written repair-versus-replace call, and damage documentation in a format an adjuster can scope from.
