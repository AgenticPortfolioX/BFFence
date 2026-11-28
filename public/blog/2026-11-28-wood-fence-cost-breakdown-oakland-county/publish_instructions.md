# Publishing Instructions — BFFence — 2026-11-28

**Post:** What a Wood Fence Actually Costs in Oakland County: A 2026–27 Line-by-Line Breakdown, From the Post Holes to the Permit
**Slug:** `2026-11-28-wood-fence-cost-breakdown-oakland-county`
**Publish date:** 2026-11-28
**Category:** BF Fence
**Author:** BFFence

---

## 1. Files in this package

| File | Destination |
|---|---|
| `blog_final/final.md` | Post body. Contains YAML frontmatter — do not strip it. |
| `blog_images/feature_image.png` | Featured image, 1280x720, 16:9 |
| `schema/schema.json` | JSON-LD `@graph`: Article + FAQPage + LocalBusiness + Service |

## 2. URL and metadata

- **URL:** `https://bffence.com/updates/2026-11-28-wood-fence-cost-breakdown-oakland-county`
- **Title tag:** What a Wood Fence Actually Costs in Oakland County: A 2026–27 Line-by-Line Breakdown
- **Meta description:** use the frontmatter `description` field verbatim (243 characters — if the CMS truncates at 160, cut at "…the seven site conditions that add 10–40%.")
- **Canonical:** the URL above
- **OG image:** `feature_image.png`

## 3. Upload steps

1. Paste `final.md` into the post editor in **Markdown** mode, including frontmatter. If the editor strips frontmatter, set title/date/description/category/author manually from the frontmatter values.
2. Confirm the category selector reads **BF Fence**. If the CMS offers pillar names as categories, do not use them — the site's category filter is organized by brand.
3. Upload `feature_image.png` as the featured image and set alt text to: *Cedar privacy fence along a Michigan backyard property line in late fall.*
4. Paste `schema/schema.json` into the JSON-LD field (or the head-injection block). Paste the entire file including `@context`.
5. Set the publish date to **2026-11-28**, not a scheduled future date.

## 4. Pre-publish checks

- [ ] First character of the rendered body is the H1, not a stray `---`
- [ ] Byline line is absent (it was intentionally omitted to avoid a setext H2)
- [ ] Six tables render as tables, not pipe-delimited text (renderer fixed 2026-11-28 — verified live: 6 `<table>` elements, 0 raw pipe lines)
- [ ] All seven internal links resolve (2026-11-18, 2026-10-28, 2026-10-31, 2026-10-10, 2026-09-30 candidate links)
- [ ] FAQ questions visible on page match schema count (8)
- [ ] Rich Results Test passes for Article and FAQPage
- [ ] Phone `(248) 604-6168` and email `estimate@bffence.com` render as links

## 5. Post-publish

1. Submit URL in Google Search Console → URL Inspection → Request Indexing.
2. Add the post to the `/updates` index if the CMS does not auto-list.
3. Share to Facebook and Nextdoor with a first line built on the strongest hook: *"Three quotes for the same fence, four thousand dollars apart. Here's the line-by-line reason."* No hashtags.
4. Google Business Profile: post the link as an Update with the same opening line.

## 6. Notes

- The post publishes BF Fence's own installed price ranges. If pricing changes materially before the next cost post, add a dated note at the top rather than silently editing the tables — dated transparency is the E-E-A-T asset here.
- Do not add a byline line above the first `---` separator. It renders as an H2.
