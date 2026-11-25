# Publish Instructions — BF Fence

**Post:** Pool Fence Code in Michigan: What a Compliant Pool Barrier Actually Requires in Oakland County — and Why a Gate That Latches in October Won't in February
**Slug:** `2026-11-25-pool-fence-code-oakland-county-michigan`
**Publish date:** 2026-11-25
**Category:** BF Fence | **Author:** BFFence | **Pillar:** 7 — Pet & Family Solutions

## Files in this package

| File | Purpose |
|---|---|
| `final.md` | Post body with YAML frontmatter (title, date, description, category, author) |
| `schema/schema.json` | JSON-LD `@graph`: Article + FAQPage + LocalBusiness + Service |
| `feature_image.png` | 1280x720 16:9 featured image, deploy as `feature_image.png` |
| `publish_instructions.md` | This file |

## Deployment route

- Live URL: `https://bffence.com/blog/2026-11-25-pool-fence-code-oakland-county-michigan`
- Repo path: `public/blog/2026-11-25-pool-fence-code-oakland-county-michigan/`
- Repo: `AgenticPortfolioX/BFFence`
- Deploy the schema as `schema.json` under that exact filename — the site builder (`sync-blog.ts`) expects it.
- Do **not** use `/updates/<slug>`; that route renders the empty app shell. `/blog/<slug>` is correct and all six internal links use it.

## Pre-publish checks (verified at build time)

- [x] `final.md` starts with `---` as the first three characters (`head -c 3`)
- [x] Exactly 5 frontmatter keys; `date: "2026-11-25"`
- [x] `category: "BF Fence"` (brand name, not pillar name)
- [x] Prose-only word count 4,493 (raw 5,161 includes 582 table words and 86 frontmatter words) — inside the BFFence 3,000–5,000 range and under the 4,900 hard stop
- [x] Zero forbidden terms (cryptographic, blockchain, valuation, digital asset, deepfake — word-boundary check)
- [x] Key phrases present: "Built to last," "Protecting what matters," "Privacy you can see," "Oakland County's trusted choice" (4 of 4)
- [x] FAQ parity: 8 prose H3 questions = 8 schema `mainEntity` entries, identical text and order (`EXACT MATCH: True`)
- [x] JSON-LD parses; graph contains Article, FAQPage, LocalBusiness, Service
- [x] Table integrity: 3 tables, internally consistent (`awk -F'|'` field counts: 20 rows at 6 fields, 8 rows at 5 fields)
- [x] Single H1; 17 H2s; 8 H3s (all FAQ questions); no hashtags; no emoji
- [x] No setext-byline risk — no `*Published: … | By …*` line, so nothing renders as an H2
- [x] Six internal links, all to published slugs with `/blog/` prefix:
  - `/blog/2026-10-10-fence-gates-guide-michigan`
  - `/blog/2026-09-05-child-safe-backyard-fencing-guide-oakland-county`
  - `/blog/2026-10-31-oakland-county-fence-rules-by-city-guide`
  - `/blog/2026-11-21-hoa-condo-common-fence-oakland-county`
  - `/blog/2026-11-18-cedar-species-northern-white-western-red-michigan`
  - `/blog/2026-08-22-commercial-fence-cost-pricing-guide`

## Source citations used in the body (for fact-check)

- Michigan Residential Code (2015) → International Swimming Pool and Spa Code (2015), Section 305 — governing barrier rules
- ISPSC 305.2.1 — barrier height 48 in., measured from the side facing away from the pool, held 3 ft beyond; bottom clearance 2 in. over non-solid grade, 4 in. over solid surface; 4 in. maximum where a barrier mounts on an above-grade pool
- ISPSC 305.2.2 — 4-inch-diameter sphere opening limit
- ISPSC 305.2.3 — solid barrier surfaces may not contain handholds or footholds
- ISPSC 305.2.5 / 305.2.6 — closely spaced (under 45 in.) horizontal members on the pool side with 1.75-in. vertical spacing; widely spaced (45 in. or more) allows 4-in. vertical spacing and either face
- ISPSC 305.2.7 / 305.2.8 — chain link and diagonal member openings capped at 1.75 in.; diagonals no more than 45 degrees from vertical
- ISPSC 305.2.9 — 36-inch clear zone between the barrier exterior and climbable equipment
- ISPSC 305.1 — spa/hot tub lockable safety cover and pool powered safety cover exceptions (ASTM F1346)
- Gate release geometry: release at 54 in. or higher, or pool-side release at least 3 in. below gate top with no opening over 1/2 in. within 18 in. of the release (CPSC Safety Barrier Guidelines; Rochester Hills Building Department pool guidebook, revised September 15, 2026)
- CPSC Publication 362, Safety Barrier Guidelines for Residential Pools — door alarm performance (UL 2017): audible within 7 seconds, 30 seconds minimum, 85 dB at 10 ft, 15-second deactivation, switch at 54 in.; drowning data (about 300 children under 5 annually; 69% not expected to be at the pool; 77% missing from sight 5 minutes or less)
- MCL 125.1508a — single statewide construction code, locally enforced
- 2021 Michigan Residential Code filed May 1, 2025, effective August 29, 2025; Michigan Court of Claims stipulated order July 7, 2025; LARA rules page states the 2015 editions remain in effect; City of Troy "codes currently in effect" page confirms the 2015 residential code applies while the 2021 update is paused
- Mich Admin Code R 408.30522 — exterior footings at least 42 in. below grade
- Mich Admin Code R 325.2128 — public swimming pool enclosure, 4 ft, self-closing/latching/locking, no sliding doors
- Rochester Hills pool guidebook — permit triggers (over 24 in. deep, permanent recirculation, structural), 5 ft side/rear and 10 ft from house setbacks, no front yard, overhead wire clearance 22.5 ft within 10 ft of water's edge, plot plan and fence/gate detail submittal, deed restrictions not enforced by the city
- Waterford Township pool regulations — 200 lb concentrated load on 1 sq ft, rear yard, 5 ft from rear and side lot lines, barrier on top of above-ground pool with 4 in. maximum gap, 4 ft fence around ladders
- White Lake Township pool quick guide — rear yard only, 10 ft from rear and side lot lines, powered safety cover not accepted as the barrier
- Ann Arbor pool requirements — permit at 24 in. depth or 5,000 gallons (cited as an example outside Oakland County)
- 60-inch barrier requirement in Bloomfield Hills, Birmingham, and Beverly Hills — attributed in-text to a local pool builder's published guidance, with a confirm-locally instruction
- 2026 cost ranges: $55–$70/linear ft for 6-ft board-on-board cedar including tear-out (house pricing, consistent with the 2026-11-21 and 2026-11-07 posts); gates $880–$3,830 installed, average $2,340 (2026-10-10 post); permits $0–$150 (2026-10-31 post); staining $1–$3/linear ft plus material (2026-07-22 post); mesh $15–$35, aluminum $30–$60, vinyl $20–$45, glass $90–$500 (national installed ranges, FenceMyPool 2026 review); safety covers $1,800–$3,500 mesh, $2,200–$4,500 solid, $10,000+ automatic (pool builder published ranges, 2026)

## Known site-wide renderer limitations (not defects in this post)

- Markdown tables deploy correctly but render as raw pipe text on BFFence — the renderer does not parse GFM tables (confirmed on prior posts). Do not strip tables from `final.md`; the fix belongs in the post renderer.
- The italic byline line renders with literal asterisks site-wide. This post omits the byline entirely, so neither issue applies here.

## Post-publish verification steps

1. Four files present under `public/blog/2026-11-25-pool-fence-code-oakland-county-michigan/` (Contents API).
2. Registry entry present in `src/data/blog-posts.json` at head — match on the `id` field, not `slug`.
3. Pages deploy for the head commit shows `conclusion: success`.
4. Fetch the four deployed assets over plain HTTP from `https://bffence.com/blog/<slug>/` and compare byte sizes to the local archive; run a prior-slug control (200) and a bogus-slug control (404).
5. Diff the served `final.md` against the local archive to confirm Pages is serving this post and not a cached predecessor.
