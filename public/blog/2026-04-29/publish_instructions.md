# Publishing Instructions — BF Fence Blog Post
## Date: 2026-04-29
## Slug: spring-fence-installation-guide-oakland-county

---

## Files to Deploy

The following files are located in the `blogged/2026-04-29-spring-fence-installation-guide-oakland-county/` folder:

1. **final.md** — The complete blog post with YAML frontmatter. This is the main content file.
2. **feature_image.png** — 1280x720 16:9 featured image.
3. **schema.json** — JSON-LD structured data (Article + FAQPage + LocalBusiness + Service).
4. **publish_instructions.md** — This file.

## Deployment Target

- **Repository**: AgenticPortfolioX/BFFence
- **Branch**: main
- **Path**: `public/blog/YYYY-MM-DD/` → `public/blog/2026-04-29/`
- **Method**: GitHub API (No-Clone). Files pushed directly via Git Data API.

## Pre-Publishing Checklist

- [x] Frontmatter validated (starts with `---`, has 5 required keys: title, date, description, category, author)
- [x] Schema.json contains Article + FAQPage + LocalBusiness + Service schemas
- [x] Quality Gate passed
- [x] All 4 files present in blogged folder

## Post-Deployment

- [ ] Verify blog post renders at https://bffence.com/updates
- [ ] Run `scripts/sync-blog.ts` via GitHub Action (auto-handled by blog-automation.yml)
- [ ] Share blog on Nextdoor, Facebook, and Google Business post
- [ ] Submit URL to Google Search Console for indexing

## SEO Notes

- **Target Keywords**: fence installation Oakland County, privacy fence Auburn Hills, wood fence contractor Michigan
- **Internal Link Opportunities**: Future posts on fence maintenance, material comparisons
- **Social Sharing**: Title is optimized for Facebook/Twitter cards (under 60 chars where visible)

## Contact

Questions about this deployment? Contact the Agentic content team.
