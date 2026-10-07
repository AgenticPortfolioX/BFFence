# Publish Instructions — 2026-10-07

**Brand:** BF Fence (BFFence)
**Title:** What's Eating Your Michigan Wood Fence? Termites, Carpenter Ants, and Rot — and How to Stop Them
**Slug:** `2026-10-07-what-eats-michigan-wood-fence-termites-ants-rot`
**Publish date:** 2026-10-07
**Category (site filter):** BF Fence
**Author display:** BFFence
**Pillar:** 1 — Local Durability (Guardian archetype)

---

## 1. Files in this package

| File | Purpose |
|---|---|
| `final.md` | Post body with YAML frontmatter — paste as the article body |
| `feature_image.png` | 1280x720 (16:9) hero/feature image |
| `schema.json` | Combined JSON-LD `@graph` (Article + LocalBusiness + Service + FAQPage) |
| `publish_instructions.md` | This file |

## 2. Blog location

- **Blog index:** https://bffence.com/updates
- **Expected post URL:** https://bffence.com/blog/2026-10-07-what-eats-michigan-wood-fence-termites-ants-rot
- **Image URL:** https://bffence.com/blog/2026-10-07-what-eats-michigan-wood-fence-termites-ants-rot/feature_image.png

Place `feature_image.png` at the image URL path above, and set the article's canonical/OG path to the post URL. The `schema.json` Article node already references both.

## 3. Frontmatter (already embedded in `final.md`)

```
---
title: "What's Eating Your Michigan Wood Fence? Termites, Carpenter Ants, and Rot — and How to Stop Them"
date: "2026-10-07"
description: "A Guardian's field guide for Michigan homeowners: how subterranean termites, carpenter ants, and moisture-driven rot actually attack a wood fence, the warning signs to catch before damage spreads, and the build and maintenance choices — ground-contact lumber, dry footings, treated cut ends — that make a fence last decades instead of years."
category: "BF Fence"
author: "BFFence"
---
```

- The file **must** begin with `---` as its first three characters (verified).
- Exactly five frontmatter keys: title, date, description, category, author.
- `category` is the **brand name** ("BF Fence") so the site's category filter files it correctly.

## 4. SEO fields

- **Meta title:** What's Eating Your Michigan Wood Fence? Termites, Carpenter Ants, and Rot
- **Meta description:** use the frontmatter `description` (≈300 chars; trim to ≤160 for the meta tag if the CMS enforces a limit — suggested short form: "Termites, carpenter ants, and rot: how they attack a Michigan wood fence, the warning signs, and the build choices that stop them.")
- **Primary keyword:** wood fence rot Michigan
- **Secondary keywords:** termites wood fence; carpenter ants fence; protect wood fence from rot; ground contact fence post; cedar fence rot resistance
- **H1:** the title (already the `#` heading in `final.md`)
- **Internal links (add where natural):** property lines & surveys (2026-10-03), leaning-post repair (2026-09-12), winter fence prep (2026-08-26), wood fence material specs (2026-09-23), how to read a fence quote (2026-09-30), and the wood/vinyl/aluminum/composite comparison (2026-08-15).
- **CTA:** free written on-site estimate — (248) 604-6168 | estimate@bffence.com

## 5. Schema

Inject `schema.json` into the page `<head>` inside a `<script type="application/ld+json">` block. The `@graph` contains:
- **Article** — headline, description, dates (2026-10-07), author/publisher BF Fence, image, `about`, keywords.
- **LocalBusiness** — BF Fence / Renowned Value Restoration LLC, Auburn Hills address, (248)604-6168, areaServed cities, hours, sameAs.
- **Service** — decay-resistant wood fence installation + rot/insect repair, audience, offer catalog.
- **FAQPage** — the eight on-page FAQs.

## 6. Social / distribution

- **Social caption (no hashtags, no emojis):** "A Michigan wood fence almost never fails all at once. It starts with one wet post at the ground line — and that's exactly where termites, carpenter ants, and rot do their work. Our new field guide covers what's actually eating your fence and the build choices that stop it. Read it at bffence.com/updates."
- **Platforms:** Nextdoor, Facebook, Google Business (per brand identity).
- Feature image as the OG/social card.

## 7. Assets checklist

- [x] `final.md` with valid 5-key frontmatter
- [x] `feature_image.png` (1280x720)
- [x] `schema.json` (Article + LocalBusiness + Service + FAQPage)
- [ ] Deploy to site + submit URL for indexing (via `github-blog-deployment` / CMS)

## Related
- [[BFFence/strategy/content_strategy/2026-10-07-what-eats-michigan-wood-fence-termites-ants-rot|Content strategy]]
