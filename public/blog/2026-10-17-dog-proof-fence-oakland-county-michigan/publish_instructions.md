# Publishing Instructions — BF Fence

**Post:** The Dog-Proof Fence: What Actually Keeps a Dog in the Yard in Oakland County, Michigan
**Slug:** `2026-10-17-dog-proof-fence-oakland-county-michigan`
**Publish date:** 2026-10-17
**Category:** BF Fence
**Author:** BFFence

---

## 1. Files in This Package

| File | Purpose |
|---|---|
| `blog_final/final.md` | Final post with YAML frontmatter, 5,000 words, 5 comparison tables, 10-question FAQ |
| `blog_images/feature_image.png` | 1280x720 (16:9) featured image |
| `schema/schema.json` | JSON-LD graph: Article + LocalBusiness + Service + FAQPage |

## 2. Publish Steps

1. **Create the post** at `https://bffence.com/updates` with slug `2026-10-17-dog-proof-fence-oakland-county-michigan`.
2. **Paste the body** from `final.md` starting at the `# ` H1. Do **not** paste the YAML block into the editor body — the site reads it from the post metadata fields.
3. **Map the frontmatter:**
   - Title → post title field
   - `date` → publish date (2026-10-17)
   - `description` → meta description / excerpt (155 characters shown in SERPs, full string used for social previews)
   - `category` → **BF Fence** (brand category, not the content pillar)
   - `author` → **BFFence**
4. **Set the featured image** to `feature_image.png`, alt text: `Cedar privacy fence enclosing a green backyard in Oakland County, Michigan, with a dog running safely inside`.
5. **Inject the schema** from `schema/schema.json` into the page `<head>` as a single `<script type="application/ld+json">` block. Validate at `https://validator.schema.org/` after publishing.
6. **Internal links** (add in the editor, 3 total): link "fence material comparison" to the 2026-08-15 material guide, "how to read a fence quote" to the 2026-09-30 quote guide, and "leaning fence posts" to the 2026-09-12 repair post. Anchor text is already in the body copy where relevant — add the links without changing the wording.
7. **Publish**, then confirm the post renders at `/updates` with the BF Fence category filter.

## 3. Post-Publish Checks

- [ ] Post appears at `https://bffence.com/updates` and under the BF Fence category
- [ ] Featured image renders at 16:9 without cropping the fence line
- [ ] FAQ accordion (if enabled) shows all 10 questions
- [ ] JSON-LD validates with 0 errors (Article, LocalBusiness, Service, FAQPage all detected)
- [ ] Meta description populates correctly in page source
- [ ] Submit the URL for indexing in Google Search Console
- [ ] Share to Facebook, Nextdoor, and Google Business Profile with a short local note (no hashtags)

## 4. Suggested Social Copy

**Facebook / Nextdoor:**
> If your dog has ever gotten out, the fence usually isn't too short — the gate didn't latch, or the ground moved. We wrote up what actually keeps a dog in an Oakland County yard: height by breed, dig barriers that work, gate hardware that holds, and the frost heave gap that opens under almost every fence by March. Free estimate if you want us to look at your line.

**Google Business Profile:**
> New guide: what actually keeps a dog contained in an Oakland County yard — fence height by breed, dig barriers, gate hardware, frost heave gaps, and coyote-season fencing. Free written estimates: (248) 604-6168.

## 5. Notes

- Word count 5,000 total (4,129 prose) — at the top of the BF Fence 3,000–5,000 range. Do not add copy without trimming.
- Five tables and ten FAQ entries are load-bearing for AI citation; keep them formatted as tables/headings, not collapsed into paragraphs.
- Pricing bands match BF Fence's 2026 quote and material guides. If pricing changes, update the cost table and the two FAQ answers that quote per-foot ranges.
