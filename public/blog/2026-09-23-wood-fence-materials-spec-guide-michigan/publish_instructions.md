# Publishing Instructions — BFFence

**Post:** Inside a Michigan Wood Fence: The Material Specs That Decide Whether It Lasts 15 Years or 30
**Slug:** `2026-09-23-wood-fence-materials-spec-guide-michigan`
**Date:** 2026-09-23
**Live URL:** https://bffence.com/blog/2026-09-23-wood-fence-materials-spec-guide-michigan
**Pillar:** 4 — Materials & Selection Guides
**Author:** BFFence ("BF Fence")

## Files in This Package

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body → `public/blog/2026-09-23-wood-fence-materials-spec-guide-michigan/final.md` |
| `blog_images/feature_image.png` | Featured image (1280x720 PNG, 16:9) → `public/blog/2026-09-23-wood-fence-materials-spec-guide-michigan/feature_image.png` |
| `schema/schema.json` | JSON-LD `@graph` (Article + LocalBusiness + Service + FAQPage) → `public/blog/2026-09-23-wood-fence-materials-spec-guide-michigan/schema.json` |
| `publish_instructions/publish_instructions.md` | This file |

## Deployment Steps

1. Run the `github-blog-deployment` skill for brand **BFFence** (repo `AgenticPortfolioX/BFFence`, target path `public/blog/2026-09-23-wood-fence-materials-spec-guide-michigan/`).
2. Commit message: `Deploy blog: Wood Fence Material Specs Guide (2026-09-23)`
3. Confirm the post resolves at `https://bffence.com/blog/2026-09-23-wood-fence-materials-spec-guide-michigan`
4. Confirm the featured image renders on the blog card and that the post appears under the **BF Fence** category.

## Routing Note (unchanged from the 2026-09-12 correction)

Individual posts render at **`/blog/<YYYY-MM-DD-slug>`**. `/updates` is the blog *index* only — direct
navigation to `/updates/<slug>` renders the empty app shell.

- Live post URL: `https://bffence.com/blog/2026-09-23-wood-fence-materials-spec-guide-michigan`
- Schema `mainEntityOfPage`, Article `image`, LocalBusiness `image`, and internal links all use `/blog/<slug>`.

## Frontmatter Requirements (do not alter)

- `category: "BF Fence"` — brand name, NOT the pillar name. Changing this breaks category filtering.
- `author: "BFFence"`
- `date: "2026-09-23"`
- Exactly 5 frontmatter keys: title, date, description, category, author.
- YAML frontmatter must remain the absolute first characters of the file (`head -c 3` returns `---`).

## Schema Notes

- Filename must stay `schema.json` for BFFence (the site builder expects this name; do not rename to `sdira_compliance_schema.json`).
- FAQPage questions on-page must match the 8 questions in the schema exactly, in order: (1) how long a wood fence lasts in Michigan, (2) what grade of cedar to buy, (3) what "ground contact" means on a treated post, (4) whether stainless fasteners are needed for cedar, (5) how many rails a 6-foot privacy fence needs, (6) how far apart fence posts should be in Michigan, (7) why fence boards shrink and leave gaps, (8) why one quote costs less than another for the "same" fence.
- NAP must remain consistent: (248) 604-6168 · estimate@bffence.com · 2711 Williamsburg Cir, Auburn Hills, MI 48326.
- Article image and LocalBusiness image use the live asset path: `https://bffence.com/blog/2026-09-23-wood-fence-materials-spec-guide-michigan/feature_image.png`.
- `areaServed` uses the standard Oakland County city list, led by **Auburn Hills** (business location). No single-community lead city for this post — it is a county-wide materials guide.
- Article `@id` is `#article-2026-09-23` — do not reuse a previous date's `@id`.

## SEO / Social

- **Title tag:** Inside a Michigan Wood Fence: The Material Specs That Decide Whether It Lasts 15 Years or 30
- **Meta description:** use the `description` field from `final.md`.
- **Primary keyword:** wood fence materials Michigan · how long does a wood fence last in Michigan · cedar fence grades · pressure treated fence post ground contact
- **Secondary:** UC4A ground contact post, fence post spacing Michigan, hot dip galvanized vs stainless fence fasteners, how many rails on a 6 foot privacy fence, fence wind load Michigan
- **Suggested social caption (no hashtags/emojis):** "Two quotes, both saying '6-foot cedar privacy fence,' four thousand dollars apart. Here is the spec sheet we hand homeowners so they can see exactly what each quote is buying — post use categories, cedar grades, board thickness, fasteners, rail counts, post spacing, and footings below Michigan's frost line, with the honest 2026 cost of every upgrade."

## Internal Linking (all live under `/blog/<slug>`)

- Material comparison (Oakland County): `/blog/2026-08-15-fence-material-comparison-guide-oakland-county`
- Cedar vs. pressure-treated pine: `/blog/2026-06-10-cedar-vs-pressure-treated-pine-michigan-fence`
- Leaning fence posts / footings: `/blog/2026-09-12-leaning-fence-posts-michigan-repair`
- Fence permits and regulations in Oakland County: `/blog/2026-05-20-oakland-county-fence-permits-regulations-guide`
- Staining and sealing in Michigan: `/blog/2026-07-22-wood-fence-staining-sealing-michigan-guide`

## Post-Deploy Verification

- [ ] Post renders live at the `/blog/2026-09-23-wood-fence-materials-spec-guide-michigan` route (H1, H2 sections, all tables, FAQ, phone number)
- [ ] Featured image visible on the card and in the post header
- [ ] Post listed in the blog index under the BF Fence category
- [ ] JSON-LD present on page (Article + LocalBusiness + Service + FAQPage)
- [ ] Slug present in `src/data/blog-posts.json` at head of `main`, entry count incremented
- [ ] No forbidden brand terms present (cryptographic, blockchain, valuation, digital asset, deepfake)
