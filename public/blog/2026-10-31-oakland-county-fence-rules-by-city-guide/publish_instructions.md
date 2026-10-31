# Publishing Instructions — BF Fence

**Post:** Fence Rules by City in Oakland County: What Your City Actually Requires Before You Build
**Slug:** `2026-10-31-oakland-county-fence-rules-by-city-guide`
**Publish date:** 2026-10-31
**Category:** BF Fence
**Author:** BFFence

---

## 1. Files in this folder

| File | Destination |
|---|---|
| `blog_final/final.md` | Blog post body — paste into the post editor (frontmatter first, then markdown) |
| `blog_images/feature_image.png` | Featured image, 1280×720, 16:9 |
| `schema/schema.json` | JSON-LD block — paste into the page `<head>` via the site's custom-code field |

## 2. Site placement

- URL: `https://bffence.com/blog/2026-10-31-oakland-county-fence-rules-by-city-guide`
- Blog index: `https://bffence.com/updates`
- Category assignment: **BF Fence** (must match frontmatter `category`, not the content pillar)
- Featured image alt text: `Cedar privacy fence between two Oakland County, Michigan homes with a corner lot sight line kept clear`

## 3. Frontmatter check (do this first)

The file must begin with `---` as the very first three characters. Confirm five keys only:

```
title, date, description, category, author
```

If the editor strips the YAML block, re-paste the raw markdown — do not retype the body.

## 4. Schema installation

1. Open `schema/schema.json`.
2. Paste the entire contents into the site's JSON-LD / custom code field for this post (header injection).
3. Validate at `https://validator.schema.org/` and Google's Rich Results Test after publishing.
4. Expected graph: `Article`, `FAQPage` (8 questions), `LocalBusiness`, `Service`.

The FAQ block in the body has exactly 8 H3 questions, matched one-for-one to the 8 `mainEntity` entries. Do not add or remove an FAQ question on the page without updating the schema.

## 5. Internal links to verify after publish

The body links to five internal posts. Confirm each resolves:

- `/blog/2026-10-28-rochester-hills-sloped-lot-cedar-fence-grade-change`
- `/blog/2026-10-17-dog-proof-fence-oakland-county-michigan`
- `/blog/2026-10-03-fence-property-lines-surveys-michigan`
- `/blog/2026-09-23-wood-fence-materials-spec-guide-michigan`

If the site uses a different permalink structure, rewrite those four anchors to match before publishing — do not ship broken links.

## 5b. Known renderer limitation — markdown tables

This post leads with a six-jurisdiction comparison table. The current BFFence post renderer does **not**
parse GFM tables: the deployed `final.md` is byte-correct, but the rendered page shows the pipe syntax as
plain text (verified live 2026-10-31 — `document.querySelectorAll('table').length === 0`, same on the
2026-10-24 post). This is site-wide, not specific to this post.

Do not strip or rewrite the table in the markdown — the source of truth stays as-is. Two fixes, either is
sufficient:

1. **Recommended:** enable GFM table parsing in the post renderer (one change repairs all posts, including
   the 2026-09-23, 2026-10-10 and 2026-10-28 posts that already carry tables).
2. If the renderer cannot be changed before this post goes out, the same information is restated in prose
   in the per-city sections, so nothing is lost — but the scan-friendly version is the table.

## 6. SEO fields

- **Title tag:** Fence Rules by City in Oakland County, MI | BF Fence
- **Meta description:** Six feet side and rear almost everywhere. Front yards from 30 inches to none. A city-by-city guide to fence height, permits, corner lots and HOA approval in Oakland County.
- **Primary keyword:** fence height limit Oakland County
- **Canonical:** `https://bffence.com/blog/2026-10-31-oakland-county-fence-rules-by-city-guide`
- **OG image:** `feature_image.png`

## 7. Post-publish checklist

- [ ] Frontmatter rendered (title, date, description, category, author all visible in the theme)
- [ ] Category shows **BF Fence** on the blog card and in the category filter
- [ ] Comparison table renders with all 6 rows and 6 columns (mobile: horizontal scroll acceptable)
- [ ] FAQ accordion (if used) shows 8 questions
- [ ] Schema validates with 0 errors, 0 warnings
- [ ] All 4 internal links resolve
- [ ] Featured image displays at 16:9 without cropping the fence line
- [ ] Phone `(248) 604-6168` and email `estimate@bffence.com` are clickable

## 8. Distribution (optional, same day)

- Facebook + Nextdoor: post the comparison table graphic angle — "Six feet almost everywhere. The front yard is where cities differ."
- Google Business Profile: add as an update post with the city-by-city hook.
- Do not syndicate the full text elsewhere; link to the post to preserve canonical authority.
