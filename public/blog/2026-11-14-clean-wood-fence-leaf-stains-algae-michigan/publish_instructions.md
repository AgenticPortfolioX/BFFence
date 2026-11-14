# Publish Instructions — BF Fence

**Post:** How to Clean a Wood Fence in Michigan: Leaf Stains, Green Algae, Mildew, and the Gray That Isn't Dirt
**Slug:** `2026-11-14-clean-wood-fence-leaf-stains-algae-michigan`
**Publish date:** 2026-11-14
**Category:** BF Fence | **Author:** BFFence | **Pillar:** 6 — Maintenance & Care

## Files in this package

| File | Purpose |
|---|---|
| `final.md` | Post body with YAML frontmatter (title, date, description, category, author) |
| `schema/schema.json` | JSON-LD `@graph`: Article + FAQPage + LocalBusiness + Service |
| `feature_image.png` | 1280x720 16:9 featured image, deploy as `feature_image.png` |
| `publish_instructions.md` | This file |

## Deployment route

- Live URL: `https://bffence.com/blog/2026-11-14-clean-wood-fence-leaf-stains-algae-michigan`
- Repo path: `public/blog/2026-11-14-clean-wood-fence-leaf-stains-algae-michigan/`
- Repo: `AgenticPortfolioX/BFFence`
- Deploy `schema.json` under that exact filename — the site builder (`sync-blog.ts`) expects it.
- Do **not** use `/updates/<slug>` — that route renders the empty app shell. `/blog/<slug>` is correct. All six internal links in the body use `/blog/`.

## Pre-publish checks (verified at build time)

- [x] `final.md` starts with `---` as the first three characters (`head -c 3`)
- [x] Exactly 5 frontmatter keys; `date: "2026-11-14"`
- [x] `category: "BF Fence"` (brand name, not pillar name)
- [x] Prose-only word count 3,961 (BFFence range 3,000–5,000; raw 4,638 includes 584 table words and 93 frontmatter words)
- [x] Zero forbidden terms (cryptographic, blockchain, valuation, digital asset, deepfake)
- [x] Key phrases present: "Built to last," "Oakland County's Trusted Choice," "Protecting what matters" (3 of 5 minimum; "Privacy you can see" intentionally unused — the topic is maintenance, not privacy)
- [x] FAQ parity: 8 prose H3 questions = 8 schema `mainEntity` entries, identical text and order (programmatically compared)
- [x] JSON-LD parses; graph contains Article, FAQPage, LocalBusiness, Service
- [x] Table integrity: 37 table rows across 5 tables (4-col, 5-col, and 3-col shapes), each table internally consistent
- [x] Single H1; no hashtags; no emoji; no setext-byline risk (no `*Published: … | By …*` line, so nothing renders as an H2)
- [x] Six internal links, all to published slugs with `/blog/` prefix:
  - `/blog/2026-07-22-wood-fence-staining-sealing-michigan-guide`
  - `/blog/2026-08-01-fence-replacement-guide-michigan`
  - `/blog/2026-08-26-winter-fence-prep-michigan-guide`
  - `/blog/2026-09-12-leaning-fence-posts-michigan-repair`
  - `/blog/2026-09-23-wood-fence-materials-spec-guide-michigan`
  - `/blog/2026-11-11-storm-damaged-fence-who-pays-insurance-michigan`

## Source citations used in the body (for fact-check)

| Claim | Source |
|---|---|
| Oxygen bleach preferred over chlorine for cedar; chlorine attacks lignin | Western Red Cedar Lumber Association guidance, as summarized by contractor technical guides (2026) |
| 500–800 PSI working range on cedar; up to 1,200–1,500 PSI on sounder wood; 25°/40° tips; 12–18 in standoff | Gorilla Works Exteriors, DH Fence Pros, ABC Bins, Jacobson's Power Washing technical guides (2026) |
| Gray = UV-degraded lignin plus fungal growth; not removable by washing | Build-Construct cedar restoration guide; Preferred Fencing "Why Cedar Fences Turn Gray" (2026) |
| Tannins are water-soluble extractives that bleed and stain | Wilson Timbers technical data sheet #38 (Timber and Stains) |
| Oxalic acid 2% solution for tannin and iron stains, ~15 min dwell | Wilson Timbers TDS #38; DeckWise wood brightener product data |
| 24–48 hour mold window for damp materials | EPA mold-and-moisture guidance, as cited in deck-care technical writing (2026) |
| Stain temperature floors 35°F (Behr 5077, SW SuperDeck solid) to 55°F (water-based) | Woodworking Advisor brand-by-brand temperature table; Family Handyman cold-weather staining guidance |
| 12% moisture content before finish; 48-hour dry time | Ready Seal FAQ, as compiled by ABC Bins (2026) |
| National wood-surface pressure-washing rate $0.30–$0.55/sq ft | Angi wood-surface rates, verified September 2026 via WashQuote |
| Professional fence washing $1.50–$4.00/linear ft, minimum job charges $100–$300 | Fence power-washing cost guide 2026; Housefly, Fixr cost pages |
| Local cost bands (cleaning, brightening, picket replacement, staining) | BF Fence 2026 job data and prior published posts |

The cost tables are labeled as Oakland County 2026 bands scoped to the stated job size, not national averages — the national sources disagree by nearly 10x for similar descriptions, which is why local framing is used.

## Registry / auto-sync

Push to `main`; the `Blog Auto-Sync` workflow regenerates `src/data/blog-posts.json`. Verify the new entry by reading `src/data/blog-posts.json` via the Contents API (base64 payload, not the CDN-cached `download_url`). The identifier key is `id`, not `slug`.

Expect the entry count to go from 47 to 48.

## Known site-wide rendering limitations (not defects in this post)

1. **Markdown tables render as raw pipe text.** The BFFence post renderer does not parse GFM tables — confirmed on prior posts. Tables are retained in `final.md` because the markdown source is the archive of record and stays machine-readable for AI extraction. This post carries five tables; the renderer fix would improve the whole corpus at once.
2. **No byline line is present** in this post, so the historical literal-asterisk byline issue does not apply here.

## Post-publish verification

1. Contents API: all four files present at the repo path.
2. Registry: new `id` present in `blog-posts.json`, entry count incremented to 48.
3. Static assets over HTTP: `final.md`, `schema.json`, `feature_image.png`, `publish_instructions.md` all return 200 with byte sizes matching the archive; a known-good prior slug returns 200 and a nonexistent slug returns 404 as controls.
4. Pages workflow for the head commit shows `conclusion: success`.
5. Rich-results check: paste the live URL into the Schema Markup Validator and confirm 8 FAQ entries with no errors.
6. Internal links: all six `/blog/2026-…` targets return 200.

## CTA

Phone `(248) 604-6168`, email `estimate@bffence.com`. Offer: a free on-site walk of the fence line that separates maintenance from repair — every post pushed, bottom boards probed, and an honest answer on whether the fence needs cleaning, a few boards, or replacement.
