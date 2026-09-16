# Publishing Instructions — BFFence

**Post:** Clarkston Backyard Transformation: A Custom Cedar Privacy Fence and Driveway Gate on a Wooded Independence Township Lot
**Slug:** `2026-09-16-clarkston-cedar-privacy-fence-wooded-lot-transformation`
**Date:** 2026-09-16
**Live URL:** https://bffence.com/blog/2026-09-16-clarkston-cedar-privacy-fence-wooded-lot-transformation
**Pillar:** 2 — Project Spotlights
**Author:** BFFence ("BF Fence")

## Files in This Package

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body → `public/blog/2026-09-16-clarkston-cedar-privacy-fence-wooded-lot-transformation/final.md` |
| `blog_images/feature_image.png` | Featured image (1280x720 PNG, 16:9) → `public/blog/2026-09-16-clarkston-cedar-privacy-fence-wooded-lot-transformation/feature_image.png` |
| `schema/schema.json` | JSON-LD `@graph` (Article + LocalBusiness + Service + FAQPage) → `public/blog/2026-09-16-clarkston-cedar-privacy-fence-wooded-lot-transformation/schema.json` |
| `publish_instructions/publish_instructions.md` | This file |

## Deployment Steps

1. Run the `github-blog-deployment` skill for brand **BFFence** (repo `AgenticPortfolioX/BFFence`, target path `public/blog/2026-09-16-clarkston-cedar-privacy-fence-wooded-lot-transformation/`).
2. Commit message: `Deploy blog: Clarkston Wooded-Lot Cedar Privacy Fence and Driveway Gate (2026-09-16)`
3. Confirm the post resolves at `https://bffence.com/blog/2026-09-16-clarkston-cedar-privacy-fence-wooded-lot-transformation`
4. Confirm the featured image renders on the blog card and that the post appears under the **BF Fence** category.

## Routing Note (unchanged from 2026-09-12 correction)

Individual posts render at **`/blog/<YYYY-MM-DD-slug>`**. `/updates` is the blog *index* only — a direct
navigation to `/updates/<slug>` renders the empty app shell.

- Live post URL: `https://bffence.com/blog/2026-09-16-clarkston-cedar-privacy-fence-wooded-lot-transformation`
- Schema `mainEntityOfPage`, Article `image`, and all internal links in the post use `/blog/<slug>`.

## Frontmatter Requirements (do not alter)

- `category: "BF Fence"` — brand name, NOT the pillar name. Changing this breaks category filtering.
- `author: "BFFence"`
- `date: "2026-09-16"`
- Exactly 5 frontmatter keys: title, date, description, category, author.
- YAML frontmatter must remain the absolute first characters of the file (`head -c 3` returns `---`).

## Schema Notes

- Filename must stay `schema.json` for BFFence (the site builder expects this name; do not rename to `sdira_compliance_schema.json`).
- FAQPage questions on-page must match the 8 questions in the schema exactly, in order: (1) cedar privacy fence cost in Clarkston, (2) permit in Village of Clarkston vs. Independence Township, (3) how deep fence posts are set in Michigan, (4) best fence material for a wooded lot, (5) installing a fence around trees, (6) double driveway gate cost in Michigan, (7) installation timeline on an acreage lot, (8) whether a fence keeps deer out of a Clarkston garden.
- NAP must remain consistent: (248) 604-6168 · estimate@bffence.com · 2711 Williamsburg Cir, Auburn Hills, MI 48326.
- Article image and LocalBusiness image use the live asset path: `https://bffence.com/blog/2026-09-16-clarkston-cedar-privacy-fence-wooded-lot-transformation/feature_image.png`.
- `areaServed` leads with **Clarkston** for this post (matching the target community), then the standard city list.

## SEO / Social

- **Title tag:** Clarkston Backyard Transformation: A Custom Cedar Privacy Fence and Driveway Gate on a Wooded Independence Township Lot
- **Meta description:** use the `description` field from `final.md`.
- **Primary keyword:** cedar privacy fence Clarkston MI · **Secondary:** privacy fence Independence Township, fence company Clarkston, custom wood fence Clarkston, driveway gate Michigan, fence contractor Oakland County
- **Suggested social caption (no hashtags/emojis):** "Wooded lot in Clarkston, no real boundaries, deer on one side and a road on the other. Here's how we set the line off a survey, stepped 340 feet of cedar board-on-board to the grade, built a 14-foot double driveway gate on oversized posts, and put every footing 48 inches down below Michigan's 42-inch frost line."

## Internal Linking (all live under `/blog/<slug>`)

- Fence installation process: `/blog/2026-08-29-fence-installation-process-guide-michigan`
- Material comparison (Oakland County): `/blog/2026-08-15-fence-material-comparison-guide-oakland-county`
- Oakland County neighborhood guide (Clarkston profile): `/blog/2026-09-02-oakland-county-neighborhood-fence-guide`
- Leaning fence posts / footings: `/blog/2026-09-12-leaning-fence-posts-michigan-repair`
- Staining and sealing: `/blog/2026-07-22-wood-fence-staining-sealing-michigan-guide`
- Lake Orion spotlight: `/blog/2026-07-29-lake-orion-cedar-privacy-fence-transformation`

## Post-Deploy Verification

- [ ] Post renders live at the `/blog/2026-09-16-clarkston-cedar-privacy-fence-wooded-lot-transformation` route (H1, 12 H2s, FAQ, phone, pricing)
- [ ] Featured image visible on the card and in the post header
- [ ] Post listed in the blog index under the BF Fence category
- [ ] JSON-LD present on page (LocalBusiness block + injected `@graph` block)
- [ ] No forbidden brand terms present (cryptographic, blockchain, valuation, digital asset, deepfake)
- [ ] Follow-up sweep still recommended: correct `/updates/<slug>` → `/blog/<slug>` in schema files of previously published posts
