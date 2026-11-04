# Publishing Instructions — BF Fence
**Post:** When the Leaves Come Down, So Does Your Privacy: Winter Sightlines and Year-Round Screening for Oakland County Yards
**Date:** 2026-11-04
**Slug:** 2026-11-04-winter-privacy-leaves-fall-fence-screening-oakland-county
**Quality Gate:** 134/140 (95.7%) — READY FOR PUBLICATION

---

## 1. Files in This Package

| File | Purpose | Destination |
|---|---|---|
| `final.md` | Full article with YAML frontmatter | `public/blog/2026-11-04-winter-privacy-leaves-fall-fence-screening-oakland-county/final.md` |
| `feature_image.png` | 1280x720 16:9 feature image | same folder |
| `schema.json` | JSON-LD @graph (Article + FAQPage + LocalBusiness + Service) | same folder |
| `publish_instructions.md` | This document | same folder |

## 2. Frontmatter Verification (already confirmed)
```
title:       "When the Leaves Come Down, So Does Your Privacy: Winter Sightlines and Year-Round Screening for Oakland County Yards"
date:        "2026-11-04"
description: "Every November the canopy bares out and half of Oakland County finds out its backyard was never private..."
category:    "BF Fence"
author:      "BFFence"
```
- First three characters of `final.md` are `---` (verified with `head -c 3`).
- `category` is the brand name `BF Fence`, not the pillar name — required for site filtering.
- Exactly five frontmatter keys.

## 3. Body Specifications
- **Prose-only word count:** 4,434 (brand range 3,000–5,000; sweet spot 3,500–4,500).
- **Raw word count:** 4,953 including tables and frontmatter.
- **H2 sections:** 11. **FAQ H3s:** 8, matching schema `mainEntity` one-for-one.
- **Tables:** 3 (sightline geometry, fence layout comparison, 12-point inspection). All rows pass
  field-count integrity.
- **Internal links to add at publish time:**
  - `/blog/2026-10-31-oakland-county-fence-rules-by-city-guide` — height limits and front-yard rules
  - `/blog/2026-10-24-storm-proof-wood-fence-michigan-wind-snow-load` — snow and wind load
  - `/blog/2026-10-21-backyard-security-fencing-oakland-county-michigan` — deterrence and lighting
  - `/blog/2026-10-14-fall-fence-installation-michigan-guide` — frost deadline timing
  - `/blog/2026-06-10-cedar-vs-pressure-treated-pine-michigan-fence` — material shrinkage comparison
  - `/blog/2026-07-22-wood-fence-staining-sealing-michigan-guide` — spring staining

## 4. Schema Deployment Notes
- File name must be `schema.json` (BFFence convention; the site merges the `@graph` into the page head).
- BFFence **does** render per-post JSON-LD — after deploy, expect two `ld+json` blocks in the DOM
  (site-wide business block + this post's graph). A zero count is a real failure signal on this brand.
- FAQ questions in the schema are byte-identical to the eight H3s in the body. Do not edit one without
  the other.

## 5. Image
- `feature_image.png` — 1280x720, 16:9, cedar privacy fence in late-autumn Michigan light.
- Alt text: `Cedar privacy fence screening a Michigan backyard after the leaves have fallen`

## 6. Deployment Sequence
1. Commit the four files to `public/blog/2026-11-04-winter-privacy-leaves-fall-fence-screening-oakland-county/` in `AgenticPortfolioX/BFFence`.
2. The `Blog Auto-Sync` workflow regenerates `src/data/blog-posts.json` (entry keyed on slug); verify the
   entry appears via the contents API (base64 `content`), not the raw download URL — raw.githubusercontent
   serves a cached revision immediately after commit.
3. Confirm `Deploy static content to Pages` succeeds on the resulting head commit.
4. Live checks: `/blog/2026-11-04-...` returns H1 and FAQ text, `/updates` lists the post first,
   and two `ld+json` blocks parse with types `Article`, `FAQPage`, `LocalBusiness`, `Service`.

## 7. Post-Publish Actions
- Google Business Profile: add the post as an Update (seasonal privacy angle performs well in November).
- Nextdoor: share as a local tip post, not a sales post.
- Internal link from the 2026-10-21 security post back to this one (winter follow-up).
- LinkedIn crosspost handled by the separate `linkedin-blog-crosspost` job.

## 8. Quality Gate Summary
- Archetype fidelity (Guardian): 48/50
- E-E-A-T: 38/40
- Content quality: 48/50
- Technical checklist: PASS
- **Total: 134/140 (95.7%) — READY FOR PUBLICATION**

## 9. Site Renderer Limitations (known, site-wide)
- Markdown tables deploy byte-identically but render as raw pipe text on BFFence — the post
  renderer does not parse GFM tables (confirmed on prior posts, 0 `<table>` elements). This is a
  template gap, not a deploy defect. Fix belongs in the renderer, not in `final.md`.
- The italic byline line under the H1 renders with literal asterisks on every post. Same class of
  template limitation; do not strip the asterisks from this post alone.

## 10. Registry Sync Note (2026-11-04)
- The first `Blog Auto-Sync` run was rejected by GitHub with a transient `remote: Internal Server
  Error` on `git push` (the registry commit was built locally but never landed). The source fix is
  a re-trigger of the push-based workflow via a real change under `public/blog/**` — this file.
- `actions:write` is not granted to the deployment GitHub App, so `rerun-failed-jobs` and
  `workflow_dispatch` both return 403. Re-touching a `public/blog/**` file is the working recovery.
- No article content changed in that retry.
