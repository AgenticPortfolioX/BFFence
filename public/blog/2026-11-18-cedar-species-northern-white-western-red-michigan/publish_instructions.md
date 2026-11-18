# Publish Instructions — BF Fence

**Post:** Northern White Cedar vs. Western Red Cedar vs. Eastern Red Cedar: Which Cedar Actually Belongs on Your Michigan Fence
**Slug:** `2026-11-18-cedar-species-northern-white-western-red-michigan`
**Publish date:** 2026-11-18
**Category:** BF Fence | **Author:** BFFence | **Pillar:** 4 — Materials & Selection Guides

## Files in this package

| File | Purpose |
|---|---|
| `final.md` | Post body with YAML frontmatter (title, date, description, category, author) |
| `schema/schema.json` | JSON-LD `@graph`: Article + FAQPage + LocalBusiness + Service |
| `feature_image.png` | 1280x720 16:9 featured image, deploy as `feature_image.png` |
| `publish_instructions.md` | This file |

## Deployment route

- Live URL: `https://bffence.com/blog/2026-11-18-cedar-species-northern-white-western-red-michigan`
- Repo path: `public/blog/2026-11-18-cedar-species-northern-white-western-red-michigan/`
- Repo: `AgenticPortfolioX/BFFence`
- Deploy `schema.json` under that exact filename — the site builder (`sync-blog.ts`) expects it.
- Do **not** use `/updates/<slug>` — that route renders the empty app shell. `/blog/<slug>` is correct. All five internal links in the body use `/blog/`.

## Pre-publish checks (verified at build time)

- [x] `final.md` starts with `---` as the first three characters (`head -c 3`)
- [x] Exactly 5 frontmatter keys; `date: "2026-11-18"`
- [x] `category: "BF Fence"` (brand name, not pillar name)
- [x] Prose-only word count 4,635 (BFFence range 3,000–5,000; raw 5,221 includes 495 table words and 91 frontmatter words); under the 4,900 hard stop
- [x] Zero forbidden terms (cryptographic, blockchain, valuation, digital asset, deepfake — word-boundary check)
- [x] Key phrases present: "Built to last," "Oakland County's Trusted Choice," "Protecting what matters," "Privacy you can see" (4 of 4)
- [x] FAQ parity: 8 prose H3 questions = 8 schema `mainEntity` entries, identical text and order (programmatically compared, `PARITY: True`)
- [x] JSON-LD parses; graph contains Article, FAQPage, LocalBusiness, Service
- [x] Table integrity: 28 table rows across 3 tables (4-column comparison, 5-column component matrix, 3-column cost table); each table internally consistent (`awk -F'|'` field count check)
- [x] Single H1; 15 H2s; 16 H3s (8 section subheads + 8 FAQ questions); no hashtags; no emoji
- [x] No setext-byline risk — no `*Published: … | By …*` line, so nothing renders as an H2
- [x] Five internal links, all to published slugs with `/blog/` prefix:
  - `/blog/2026-06-10-cedar-vs-pressure-treated-pine-michigan-fence`
  - `/blog/2026-09-23-wood-fence-materials-spec-guide-michigan`
  - `/blog/2026-08-15-fence-material-comparison-guide-oakland-county`
  - `/blog/2026-11-14-clean-wood-fence-leaf-stains-algae-michigan`
  - `/blog/2026-09-12-leaning-fence-posts-michigan-repair`

## Source citations used in the body (for fact-check)

| Claim | Source |
|---|---|
| Western red cedar: Janka 350 lbf, 23.0 lb/ft³, MOR 7,500 psi, MOE 1,110,000 psi, crushing 4,560 psi, shrinkage 2.4%/5.0%, tree size, mixed insect resistance | The Wood Database, *Thuja plicata* species page |
| Northern white cedar: Janka 320 lbf, 22.0 lb/ft³, MOR 6,500 psi, MOE 800,000 psi, crushing 3,960 psi, shrinkage 2.2%/4.9%, termite and powderpost resistance, poor screw holding, tree size | The Wood Database, *Thuja occidentalis* species page |
| Eastern red cedar: Janka 900 lbf, 33 lb/ft³, MOR 8,800 psi, MOE 880,000 psi, crushing 6,020 psi, shrinkage 3.1%/4.7%, excellent decay and insect resistance, posts in direct soil contact, high silica | The Wood Database, *Juniperus virginiana* species page |
| Northern white cedar as one of two Michigan-native "cedars"; wood used for fence posts and shingles; white-tailed deer browse pressure; wild abundance decline | Michigan DNR species profile; USDA Forest Service, *Silvics of North America* — *Thuja occidentalis* |
| Red and white cedar heartwood treated as roughly equivalent in durability by Forest Products Laboratory wood scientists | Fine Homebuilding, "What's the Difference: Cedar Shingles" (citing FPL guidance); WoodWeb species comparison |
| Cedar-tone = MCA-treated southern yellow pine with iron-oxide pigment infused through the piece | UFPI product representative answers on Home Depot product Q&A pages (cedar-tone 4x4, 4x6, SYP timber listings) |
| Retail 1x6x6 cedar fence picket pricing ($4–$10, ~$6.50 midrange) | 2026 retail price guides (1x6x6 cedar fence board cost guides); Home Depot / Lowe's western red cedar picket listings |
| Installed cedar fence national range ($35–$80/linear ft); western red materials typically $2–$5/linear ft above white cedar | RemodelingExpense 2026 cedar fence cost calculator; PicketUSA cedar fence cost calculator |
| Alaskan yellow cedar botanical identity (*Callitropsis nootkatensis*) and premium positioning | Fine Homebuilding cedar-shingle comparison; wood species references |
| Michigan white cedar commercial supply to builders (round rail, tenoned rails, drilled posts) | Mid Michigan Cedar (Freeland, MI), KJP Sales, Chisholm Lumber product listings |
| Local installed cost bands ($42–$68/linear ft cedar; $30–$45 treated pine) and material bands | BF Fence 2026 job data and prior published posts; labeled as Oakland County bands, not national averages |

## Registry / auto-sync

Push to `main`; the `Blog Auto-Sync` workflow regenerates `src/data/blog-posts.json`. Verify the new entry by reading `src/data/blog-posts.json` via the Contents API (base64 payload, not the CDN-cached `download_url`). The identifier key is `id`, not `slug`.

Expect the entry count to increment by one from the pre-deploy count (47 after the 2026-11-14 post).

## Known site-wide rendering limitations (not defects in this post)

1. **Markdown tables render as raw pipe text.** The BFFence post renderer does not parse GFM tables — confirmed on prior posts. Tables are retained in `final.md` because the markdown source is the archive of record and stays machine-readable for AI extraction. This post carries three tables (the species comparison is the most valuable block for answer engines); the renderer fix would improve the whole corpus at once.
2. **No byline line is present**, so the historical literal-asterisk byline issue does not apply.

## Post-publish verification

1. Contents API: all four files present at the repo path.
2. Registry: new `id` present in `blog-posts.json`, entry count incremented.
3. Static assets over HTTP: `final.md`, `schema.json`, `feature_image.png`, `publish_instructions.md` all return 200 with byte sizes matching the archive; a known-good prior slug returns 200 and a nonexistent slug returns 404 as controls.
4. Pages workflow for the head commit shows `conclusion: success`.
5. Rich-results check: paste the live URL into the Schema Markup Validator and confirm 8 FAQ entries with no errors.
6. Internal links: all five `/blog/2026-…` targets return 200.

## CTA

Phone `(248) 604-6168`, email `estimate@bffence.com`. Offer: bring your competing bids to a free on-site walk — we read each one line by line and tell you which species, grade, and thickness it actually specifies, including the bid we wrote.
