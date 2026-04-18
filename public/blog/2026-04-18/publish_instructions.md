# Publishing Instructions — BFFence Blog Post
**Date:** 2026-04-18
**Slug:** 2026-04-18-choosing-wood-fence-michigan
**Title:** How to Choose the Right Wood Fence for Your Michigan Home

## Files to Deploy
1. `blog_final/final.md` → Blog post content (with YAML frontmatter)
2. `schema/schema.json` → JSON-LD structured data (Article + FAQ + LocalBusiness + Service)
3. `blog_images/feature_image.png` → 1280x720 featured image
4. `publish_instructions/publish_instructions.md` → This file

## GitHub Deployment
- **Repository:** AgenticPortfolioX/BFFence
- **Branch:** main
- **Target Path:** `public/blog/2026-04-18/`
- **Method:** No-clone API deployment (GitHub App token via JWT)
- **Auto-sync:** GitHub Action `blog-automation.yml` runs `scripts/sync-blog.ts` to update registry

## Pre-Deployment Checklist
- [x] YAML frontmatter present at top of final.md
- [x] Frontmatter has exactly 5 keys: title, date, description, category, author
- [x] Category: "BF Fence"
- [x] Author: "BFFence"
- [x] Schema includes Article, FAQPage, LocalBusiness, and Service types
- [x] Feature image is 16:9 landscape (1280x720)

## Post-Deployment
- Cron system auto-delivers full blog post to deliverables channel C0AQF7AQFA6
- GitHub Action auto-commits registry sync