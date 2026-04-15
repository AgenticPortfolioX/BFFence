# Publishing Instructions — BFFence Blog
## Post: Spring Fence Prep: Getting Your Michigan Wood Fence Ready After Winter
## Date: 2026-04-15

### Deployment
- **Method:** Automated GitHub No-Clone API deployment to AgenticPortfolioX/BFFence
- **Target Path:** `public/blog/2026-04-15/`
- **Blog URL:** https://bffence.com/updates

### Files to Deploy
1. `final.md` → Blog post with YAML frontmatter
2. `feature_image.png` → 1280x720 featured image
3. `schema.json` → JSON-LD structured data (Article + FAQ + LocalBusiness + Service)
4. `publish_instructions.md` → This file

### Post-Publish Verification
- [ ] Confirm post appears at https://bffence.com/updates
- [ ] Verify YAML frontmatter renders correctly (title, date, description, category, author)
- [ ] Check schema markup validates (Google Rich Results Test)
- [ ] Confirm featured image displays at correct aspect ratio

### Notes
- Blog registry (`src/data/blog-posts.json`) auto-updates via GitHub Action (`blog-automation.yml`)
- Schema filename is `schema.json` (BFFence standard, not `sdira_compliance_schema.json`)
- Category: "BF Fence"
- Author: "BFFence"
