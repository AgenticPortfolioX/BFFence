# Publishing Instructions — BF Fence

**Post:** Rochester Hills Sloped Backyard: Stepping a Cedar Privacy Fence Down a Two-Foot Grade Change
**Slug:** `2026-10-28-rochester-hills-sloped-lot-cedar-fence-grade-change`
**Publish date:** 2026-10-28
**Category:** BF Fence
**Author:** BFFence
**Pillar:** 2 — Project Spotlights

---

## 1. Files in This Package

| File | Purpose |
|---|---|
| `blog_final/final.md` | Final post with YAML frontmatter — 5,479 words raw, 4,534 prose-only, 7 tables, 10-question FAQ |
| `blog_images/feature_image.png` | 1280x720 (16:9) featured image |
| `schema/schema.json` | JSON-LD graph: Article + LocalBusiness + Service + FAQPage |
| `publish_instructions/publish_instructions.md` | This file |

## 2. Publish Steps

1. **Create the post** at `https://bffence.com/updates` with slug `2026-10-28-rochester-hills-sloped-lot-cedar-fence-grade-change`.
2. **Paste the body** from `final.md` starting at the `# ` H1. Do **not** paste the YAML block into the editor body — the site reads it from the post metadata fields.
3. **Map the frontmatter:**
   - Title → post title field
   - `date` → publish date (2026-10-28)
   - `description` → meta description / excerpt
   - `category` → **BF Fence** (brand category, not the pillar — do not enter "Project Spotlights")
   - `author` → **BFFence**
4. **Insert the JSON-LD** from `schema/schema.json` into the page `<head>` as a single `<script type="application/ld+json">` block. It is one `@graph` with four nodes: Article, LocalBusiness, Service, FAQPage.
5. **Upload the featured image** as `feature_image.png` and set it as the post's featured/hero image. Alt text: *"Cedar board-on-board privacy fence stepping down a sloped green backyard in autumn."*
6. **Verify** the post renders at the live URL, the featured image loads, and the FAQ section displays.

## 3. Post-Publish Checks

- [ ] URL resolves: `/blog/2026-10-28-rochester-hills-sloped-lot-cedar-fence-grade-change`
- [ ] Post appears under the **BF Fence** category on `/updates`
- [ ] All seven tables render with correct column counts (3 four-column tables, 2 three-column tables, 2 two-column tables)
- [ ] FAQ headings (`###`) render as a visible Q&A block
- [ ] JSON-LD validates (Rich Results Test — expect Article, FAQ, LocalBusiness)
- [ ] Internal links resolve to the seven posts listed below
- [ ] Phone link is tappable: `tel:+12486046168`
- [ ] Frontmatter did not leak into the body (no stray `title:` or `category:` text above the H1)

## 4. Internal Links to Confirm

- `/blog/2026-10-24-storm-proof-wood-fence-michigan-wind-snow-load`
- `/blog/2026-10-14-fall-fence-installation-michigan-guide`
- `/blog/2026-10-10-fence-gates-guide-michigan`
- `/blog/2026-09-23-wood-fence-materials-spec-guide-michigan`
- `/blog/2026-10-03-fence-property-lines-surveys-michigan`
- `/blog/2026-09-16-clarkston-cedar-privacy-fence-wooded-lot-transformation`
- `/blog/2026-08-26-winter-fence-prep-michigan-guide`

## 5. Promotion Notes

- **Nextdoor and Facebook:** lead with the decision rule, not the project — *"the number that decides whether your fence gets racked or stepped is the fall across one panel, not the slope of your yard."* Then the $766 slope premium as the proof that we price the grade. Link the article.
- **Google Business Profile:** short update on late-fall sloped-lot builds before the ground freezes; link the article.
- **Neighborhood targeting:** Rochester Hills, Rochester, and Auburn Hills posts first — the project is Rochester Hills and the ordinance section is city-specific.
- **Follow-up content:** the "measure the fall across one panel" method is the most extractable asset in the post. Consider a printable one-page slope worksheet later.
- **Photo follow-up:** if the crew has real photos from a sloped-lot build, swap them into the body and add `image` entries to the Article schema. None are claimed in the current draft.

## 6. Known Site-Wide Rendering Limitations (observed 2026-10-28)

Two issues verified live on this post are **renderer limitations affecting the whole corpus**, not defects in this post. Do not "fix" this post's markdown to work around them.

1. **Markdown tables render as raw pipe text.** The deployed page contains 0 `<table>` elements; the seven tables display as `| Run section | Fall across one 8-ft panel | ... |` followed by `|---|---|---|---|`. The 2026-10-24 post behaves identically (0 tables), so this is pre-existing. The real fix is GFM table parsing in the site's markdown renderer (or a `<table>` component), which would repair all 40+ posts at once.
2. **The italic byline shows literal asterisks.** `*Published: October 28, 2026 | By BF Fence*` renders with visible asterisks and no `<em>` element. Same on every prior post. Fix in the template, not per post.

Recommended site-side fix (one change, corpus-wide benefit): enable GFM tables in the markdown renderer used by the blog post component, and wrap the byline in a styled component instead of italic markdown.

