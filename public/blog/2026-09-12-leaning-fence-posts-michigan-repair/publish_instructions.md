# Publishing Instructions — BFFence

**Post:** Leaning Fence Posts in Michigan: Why They Happen, What It Costs to Fix, and How to Get It Right Before Winter
**Slug:** `2026-09-12-leaning-fence-posts-michigan-repair`
**Date:** 2026-09-12
**Live URL:** https://bffence.com/blog/2026-09-12-leaning-fence-posts-michigan-repair
**Pillar:** 6 — Maintenance & Care
**Author:** BFFence ("BF Fence")

## Files in This Package

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body → `public/blog/2026-09-12-leaning-fence-posts-michigan-repair/final.md` |
| `blog_images/feature_image.png` | Featured image (1280x720 PNG, 16:9) → `public/blog/2026-09-12-leaning-fence-posts-michigan-repair/feature_image.png` |
| `schema/schema.json` | JSON-LD `@graph` (Article + LocalBusiness + Service + FAQPage) → `public/blog/2026-09-12-leaning-fence-posts-michigan-repair/schema.json` |
| `publish_instructions/publish_instructions.md` | This file |

## Deployment Steps

1. Run the `github-blog-deployment` skill for brand **BFFence** (repo `AgenticPortfolioX/BFFence`, target path `public/blog/2026-09-12-leaning-fence-posts-michigan-repair/`).
2. Commit message: `Deploy blog: Leaning Fence Posts in Michigan (2026-09-12)`
3. Confirm the post resolves at `https://bffence.com/blog/2026-09-12-leaning-fence-posts-michigan-repair`
4. Confirm the featured image renders on the blog card and that the post appears under the **BF Fence** category.

## ⚠️ Routing Note (correction to prior convention)

The site's client router serves individual posts at **`/blog/<YYYY-MM-DD-slug>`**, NOT `/updates/<slug>`.
`/updates` is the blog *index* only — a direct navigation to `/updates/<slug>` renders the empty app shell.

- ✅ Live post URL: `https://bffence.com/blog/2026-09-12-leaning-fence-posts-michigan-repair`
- ❌ Dead route: `https://bffence.com/updates/2026-09-12-leaning-fence-posts-michigan-repair`

Schema `mainEntityOfPage` and the Article image URL have been set to the live `/blog/` paths accordingly.
**Future BFFence runs should use `/blog/<slug>` for `mainEntityOfPage`, `og:url`, and internal links** — the
prior convention of `/updates/<slug>` in schema files is inaccurate and should be corrected on any post
that is re-touched. (The canonical's "Blog URL" field `https://bffence.com/updates` refers to the index page.)

## Frontmatter Requirements (do not alter)

- `category: "BF Fence"` — brand name, NOT the pillar name. Changing this breaks category filtering.
- `author: "BFFence"`
- `date: "2026-09-12"`
- YAML frontmatter must remain the absolute first characters of the file.

## Schema Notes

- Filename must stay `schema.json` for BFFence (the site builder expects this name; do not rename to `sdira_compliance_schema.json`).
- FAQPage questions on-page must match the 8 questions in the schema exactly (order: why leaning, post depth in Michigan, fix without replacing, cost, repair kit permanence, detecting below-ground rot, fixing before winter, preventing recurrence).
- NAP must remain consistent: (248) 604-6168 · estimate@bffence.com · 2711 Williamsburg Cir, Auburn Hills, MI 48326.
- Article image and LocalBusiness image use the live asset path: `https://bffence.com/blog/2026-09-12-leaning-fence-posts-michigan-repair/feature_image.png`.

## SEO / Social

- **Title tag:** Leaning Fence Posts in Michigan: Why They Happen, What It Costs to Fix, and How to Get It Right Before Winter
- **Meta description:** use the `description` field from `final.md`.
- **Primary keyword:** leaning fence post · **Local modifiers:** fence post repair Oakland County, Auburn Hills, Rochester Hills, Troy
- **Suggested social caption (no hashtags/emojis):** "A leaning fence post isn't usually a fence problem — it's a ground problem. Here's why Michigan posts lean, how to diagnose it in five minutes, and why fall is the last good window to fix it before the ground freezes."

## Internal Linking (add when site supports it — all live under `/blog/<slug>`)

- Materials comparison: `/blog/2026-08-15-fence-material-comparison-guide-oakland-county`
- Installation process: `/blog/2026-08-29-fence-installation-process-guide-michigan`
- Staining and sealing: `/blog/2026-07-22-wood-fence-staining-sealing-michigan-guide`
- Repair vs. replace: `/blog/2026-08-01-fence-replacement-guide-michigan`
- Winter prep: `/blog/2026-08-26-winter-fence-prep-michigan-guide`
- Permits: `/blog/2026-05-20`

## Post-Deploy Verification

- [x] Post renders live at `https://bffence.com/blog/2026-09-12-leaning-fence-posts-michigan-repair` (H1, 12 H2s, FAQ, phone, pricing verified in-browser 2026-09-12)
- [x] Featured image visible (live asset `feature_image.png`)
- [x] Post listed in the blog index under the BF Fence category
- [x] JSON-LD present on page (LocalBusiness block + injected `@graph` block)
- [x] No forbidden brand terms present (cryptographic, blockchain, valuation, digital asset, deepfake)
- [ ] Recommend a follow-up sweep to correct `/updates/<slug>` → `/blog/<slug>` in schema files of previously published posts
