# Publishing Instructions — BFFence

**Post:** Leaning Fence Posts in Michigan: Why They Happen, What It Costs to Fix, and How to Get It Right Before Winter
**Slug:** `leaning-fence-posts-michigan-repair`
**Date:** 2026-09-12
**Pillar:** 6 — Maintenance & Care
**Author:** BFFence ("BF Fence")

## Files in This Package

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body → `public/blog/leaning-fence-posts-michigan-repair.md` |
| `blog_images/feature_image.png` | Featured image (1280x720, 16:9) → `public/blog/images/leaning-fence-posts-michigan-repair-feature.png` (site CDN target: `https://bffence.com/blog/wp-content/uploads/2026/09/leaning-fence-posts-michigan-repair-feature.jpg`) |
| `schema/schema.json` | JSON-LD `@graph` (Article + LocalBusiness + Service + FAQPage) → injected into the post `<head>` |
| `publish_instructions/publish_instructions.md` | This file |

## Deployment Steps

1. Run the `github-blog-deployment` skill for brand **BFFence** (repo `AgenticPortfolioX/BFFence`, target path `public/blog/`).
2. Commit message: `Add blog post: Leaning Fence Posts in Michigan (2026-09-12)`
3. Confirm the post resolves at `https://bffence.com/updates/leaning-fence-posts-michigan-repair`
4. Confirm the featured image renders on the blog card and that the post appears under the **BF Fence** category.

## Frontmatter Requirements (do not alter)

- `category: "BF Fence"` — brand name, NOT the pillar name. Changing this breaks category filtering.
- `author: "BFFence"`
- `date: "2026-09-12"`
- YAML frontmatter must remain the absolute first characters of the file.

## Schema Notes

- Filename must stay `schema.json` for BFFence (the site builder expects this name; do not rename to `sdira_compliance_schema.json`).
- FAQPage questions on-page must match the 8 questions in the schema exactly (written in this order: why leaning, post depth in Michigan, fix without replacing, cost, repair kit permanence, detecting below-ground rot, fixing before winter, preventing recurrence).
- NAP must remain consistent: (248) 604-6168 · estimate@bffence.com · 2711 Williamsburg Cir, Auburn Hills, MI 48326.

## SEO / Social

- **Title tag:** Leaning Fence Posts in Michigan: Why They Happen, What It Costs to Fix, and How to Get It Right Before Winter
- **Meta description:** use the `description` field from `final.md`.
- **Primary keyword:** leaning fence post · **Local modifiers:** fence post repair Oakland County, Auburn Hills, Rochester Hills, Troy
- **Suggested social caption (no hashtags/emojis):** "A leaning fence post isn't usually a fence problem — it's a ground problem. Here's why Michigan posts lean, how to diagnose it in five minutes, and why fall is the last good window to fix it before the ground freezes."

## Internal Linking (add when site supports it)

- Materials comparison: `/updates/fence-material-comparison-guide-oakland-county`
- Installation process: `/updates/fence-installation-process-guide-michigan`
- Staining and sealing: `/updates/wood-fence-staining-sealing-michigan-guide`
- Repair vs. replace: `/updates/fence-replacement-guide-michigan`
- Winter prep: `/updates/winter-fence-prep-michigan-guide`
- Permits: `/updates/oakland-county-fence-permits-regulations-guide`

## Post-Deploy Verification

- [ ] Post URL returns 200 and renders body text (not raw markdown)
- [ ] Featured image visible on the blog index card
- [ ] Post listed under the BF Fence category
- [ ] JSON-LD validates (Google Rich Results Test — expect Article, FAQPage, LocalBusiness, Service)
- [ ] No forbidden brand terms present (cryptographic, blockchain, valuation, digital asset, deepfake)
