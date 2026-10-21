# Publishing Instructions — BF Fence

**Post:** Backyard Security Fencing in Oakland County: What Actually Deters a Break-In — and What's Just Marketing
**Slug:** `2026-10-21-backyard-security-fencing-oakland-county-michigan`
**Publish date:** 2026-10-21
**Category:** BF Fence
**Author:** BFFence
**Pillar:** 3 — Home Security & Privacy

---

## 1. Files in This Package

| File | Purpose |
|---|---|
| `blog_final/final.md` | Final post with YAML frontmatter — 5,392 words raw, 4,628 prose-only, 6 tables, 10-question FAQ |
| `blog_images/feature_image.png` | 1280x720 (16:9) featured image |
| `schema/schema.json` | JSON-LD graph: Article + LocalBusiness + Service + FAQPage |
| `publish_instructions/publish_instructions.md` | This file |

## 2. Publish Steps

1. **Create the post** at `https://bffence.com/updates` with slug `2026-10-21-backyard-security-fencing-oakland-county-michigan`.
2. **Paste the body** from `final.md` starting at the `# ` H1. Do **not** paste the YAML block into the editor body — the site reads it from the post metadata fields.
3. **Map the frontmatter:**
   - Title → post title field
   - `date` → publish date (2026-10-21)
   - `description` → meta description / excerpt
   - `category` → **BF Fence** (brand category, not the content pillar — do not enter "Home Security & Privacy")
   - `author` → **BFFence**
4. **Set the featured image** to `feature_image.png`. Suggested alt text: `Wood privacy fence and gate securing a backyard in Oakland County, Michigan, in evening light`.
5. **Inject the schema** from `schema/schema.json` into the page `<head>` as a single `<script type="application/ld+json">` block. Validate at `https://validator.schema.org/` after publishing. Expected: 4 nodes detected (Article, LocalBusiness, Service, FAQPage).
6. **Internal links are already embedded in the body** — 4 of them, as relative markdown:
   - `/blog/2026-10-10-fence-gates-guide-michigan`
   - `/blog/2026-10-03-fence-property-lines-surveys-michigan`
   - `/blog/2026-05-20-oakland-county-fence-permits-regulations-guide`
   - `/blog/2026-09-09-fence-to-block-road-noise-oakland-county`

   If the CMS strips relative links, convert them to absolute (`https://bffence.com/blog/...`). Do not change the anchor wording.
7. **Publish**, then confirm the post renders at `/blog/2026-10-21-backyard-security-fencing-oakland-county-michigan` and appears in the `/updates` index under the BF Fence category.

## 3. Post-Publish Checks

- [ ] Post renders at `https://bffence.com/blog/2026-10-21-backyard-security-fencing-oakland-county-michigan`
- [ ] Post appears in the `/updates` index and under the BF Fence category filter
- [ ] Featured image renders at 16:9 without cropping
- [ ] Exactly one H1 on the page (the article title), 17 H2s intact
- [ ] All 6 tables render as tables, not collapsed paragraphs
- [ ] FAQ section shows all 10 questions
- [ ] JSON-LD validates with 0 errors; all 4 node types detected
- [ ] Meta description populates in page source
- [ ] Submit the URL for indexing in Google Search Console
- [ ] Share to Facebook, Nextdoor, and Google Business Profile (no hashtags)

## 4. Suggested Social Copy

**Facebook / Nextdoor:**
> Two thirds of residential break-ins don't go through the yard at all — they go through a door. So what does a wood fence actually do for security, and where does it do nothing? We wrote the honest version for Oakland County homeowners: the entry-point numbers, why a solid privacy fence can work against you, the gate hinge that fails nine times out of ten, and a ten-minute perimeter walk you can do before the clocks change on November 1. Free written estimates if you want a second set of eyes on your line.

**Google Business Profile:**
> New guide: what a wood fence actually does for home security in Oakland County — burglary entry-point data, the privacy-versus-visibility tradeoff, anti-lift gate hardware, and a perimeter checklist to run before daylight saving time ends November 1. Free written estimates: (248) 604-6168.

## 5. Notes

- Word count 5,392 raw / 4,628 prose-only — inside the BF Fence 3,000–5,000 range. Do not add copy without trimming.
- Six tables and ten FAQ entries are load-bearing for AI citation; keep them formatted as tables and headings.
- **Editorial position to preserve:** the post deliberately states that a fence cannot stop 65% of entries and that a solid privacy fence can reduce natural surveillance. This is the trust differentiator against every competitor page on the topic. Do not let a future edit soften it into a "fences prevent burglary" claim.
- **Do not add** fence spikes, broken glass, barbed wire, or anti-climb paint as product recommendations — the post explicitly warns against them for liability reasons.
- Pricing figures match BF Fence's 2026 reference bands ($33/linear foot state average for six-foot wood; gates $300–$800). If pricing changes, update the cost table.
- Statistics are attributed to FBI UCR 2024, BJS entry-point data, and the UNC Charlotte offender study. If any are revised, update both the body and the corresponding FAQ schema answer.
- Seasonal hook (sunset 6:29 PM Oct 31 → 5:27 PM Nov 1) is computed for Detroit and correct for 2026. If the post is republished in a later year, recompute the table.
