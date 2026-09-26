# Publishing Instructions — BFFence

**Post:** Commercial Fence Installation in Oakland County: The Business Owner's Guide to Perimeter Fencing, Screening, and Property Demarcation
**Slug:** `2026-09-26-commercial-fence-installation-oakland-county-guide`
**Date:** 2026-09-26
**Live URL:** https://bffence.com/blog/2026-09-26-commercial-fence-installation-oakland-county-guide
**Pillar:** 8 — Commercial & Property Solutions
**Author:** BFFence ("BF Fence") | **Category:** BF Fence

## Files in This Package

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body → `public/blog/2026-09-26-commercial-fence-installation-oakland-county-guide/final.md` |
| `blog_images/feature_image.png` | Featured image (1280x720 PNG, 16:9) → `public/blog/2026-09-26-commercial-fence-installation-oakland-county-guide/feature_image.png` |
| `schema/schema.json` | JSON-LD `@graph` (Article + LocalBusiness + Service + FAQPage) → `public/blog/2026-09-26-commercial-fence-installation-oakland-county-guide/schema.json` |
| `publish_instructions/publish_instructions.md` | This file |

## Deployment Steps

1. Run the `github-blog-deployment` skill for brand **BFFence** (repo `AgenticPortfolioX/BFFence`, target path `public/blog/2026-09-26-commercial-fence-installation-oakland-county-guide/`).
2. Commit message: `Deploy blog: Commercial Fence Installation Oakland County (2026-09-26)`
3. Confirm the post resolves at `https://bffence.com/blog/2026-09-26-commercial-fence-installation-oakland-county-guide`
4. Confirm the featured image renders on the blog card and that the post appears under the **BF Fence** category.

## Routing Note (unchanged from the 2026-09-12 correction)

Individual posts render at **`/blog/<YYYY-MM-DD-slug>`**. `/updates` is the blog *index* only — direct navigation to `/updates/<slug>` renders the empty app shell.

- Live post URL: `https://bffence.com/blog/2026-09-26-commercial-fence-installation-oakland-county-guide`
- Schema `mainEntityOfPage`, Article `image`, LocalBusiness `image`, and internal links all use `/blog/<slug>`.

## Frontmatter Requirements (do not alter)

- `category: "BF Fence"` — brand name, NOT the pillar name. Changing this breaks category filtering.
- `author: "BFFence"`
- `date: "2026-09-26"`
- Exactly 5 frontmatter keys: title, date, description, category, author.
- YAML frontmatter must remain the absolute first characters of the file (`head -c 3` returns `---`).
- Word count: 5,038 (~5,000-word BFFence Guardian range).

## Schema Notes

- Filename must stay `schema.json` for BFFence (the site builder expects this name; do not rename to `sdira_compliance_schema.json`).
- FAQPage questions on-page must match the 10 questions in the schema exactly, in order: (1) does a business need a permit in Oakland County, (2) how tall can a commercial fence be, (3) are dumpster enclosures required by ordinance, (4) can a fence go in a utility easement, (5) demarcation vs. security fencing, (6) how long does a commercial installation take, (7) do commercial fences have to be screened from residential property, (8) best material for a commercial fence in Michigan, (9) can a fence be installed after the ground freezes, (10) commercial fencing cost per linear foot.
- NAP must remain consistent: (248) 604-6168 · estimate@bffence.com · 2711 Williamsburg Cir, Auburn Hills, MI 48326.
- Article image and LocalBusiness image use the live asset path: `https://bffence.com/blog/2026-09-26-commercial-fence-installation-oakland-county-guide/feature_image.png`.
- `areaServed` uses the standard Oakland County city list, led by **Auburn Hills** (business location). County-wide commercial guide — no single-community lead city.
- Article `@id` is `#article-2026-09-26` — do not reuse a previous date's `@id`.
- Service `@id` is `#commercial-fence-service` (distinct from the residential `#service` node used on earlier posts).

## SEO / Social

- **Title tag:** Commercial Fence Installation in Oakland County: The Business Owner's Guide to Perimeter Fencing, Screening, and Property Demarcation
- **Meta description:** use the `description` field from `final.md`.
- **Primary keyword:** commercial fence installation Oakland County · commercial fencing Michigan · commercial fence contractor Oakland County
- **Secondary:** dumpster enclosure fence requirements Michigan · commercial property screening ordinance Michigan · commercial fence height limit Michigan · business perimeter fencing · property demarcation fencing · commercial fence permits Oakland County · multi-family fencing Michigan
- **Suggested social caption (no hashtags/emojis):** "Most commercial fence projects do not start with a business owner wanting a fence. They start with a letter from the city about open storage visible from the road, a dumpster complaint, or a lease clause. Here is what Oakland County actually requires — the eight commercial fence jobs businesses order, what Auburn Hills, Rochester Hills, and Troy enforce by ordinance, the three things that get fences torn out, and why late September through first freeze is the window to build."

## Internal Linking (all live under `/blog/<slug>`)

- Commercial fence cost guide (Pillar 9 companion): `/blog/2026-08-22-commercial-fence-cost-pricing-guide`
- Wood fence material specs (Pillar 4): `/blog/2026-09-23-wood-fence-materials-spec-guide-michigan`
- Leaning fence posts / footing failure: `/blog/2026-09-12-leaning-fence-posts-michigan-repair`
- Fence permits and regulations in Oakland County: `/blog/2026-05-20-oakland-county-fence-permits-regulations-guide`
- Winter fence prep in Michigan: `/blog/2026-08-26-winter-fence-prep-michigan-guide`

## Post-Deploy Verification

- [ ] Post renders live at the `/blog/2026-09-26-commercial-fence-installation-oakland-county-guide` route (H1, 15 H2 sections, all lists, 10-question FAQ, phone number)
- [ ] Featured image visible on the card and in the post header
- [ ] Post listed in the blog index under the BF Fence category
- [ ] JSON-LD present on page (Article + LocalBusiness + Service + FAQPage)
- [ ] Slug present in `src/data/blog-posts.json` at head of `main`, entry count incremented (verify via Contents API base64 payload — not the CDN-cached `download_url`)
- [ ] No forbidden brand terms present (cryptographic, blockchain, valuation, digital asset, deepfake)

## Notes for the Next Run

- This post claimed **Pillar 8 — Commercial & Property Solutions** (35 days idle; its only prior post, 2026-08-22, was cost-focused and shared with Pillar 9).
- Next rotation guidance: **Pillar 9 — Cost & Value** (homeowner-facing cost angle, last dedicated 2026-08-01), or **Pillar 1 — Local Durability** (last 2026-08-26) if a freeze-up angle is preferred, or **Pillar 2 — Project Spotlights** (last 2026-09-16) if a project photo set is ready.
- Do not re-run: commercial pricing tables (2026-08-22), component spec deep-dive (2026-09-23), material family comparison (2026-08-15), residential municipal ordinance tour (2026-09-02), residential winter prep how-to (2026-08-26).
