# Publishing Instructions for BFFence Blog Post

## Post Details
- **Title**: Fence Property Lines, Surveys & Michigan's Fence Viewers Act: What Oakland County Homeowners Need to Know Before Building
- **Date**: 2026-10-03
- **Slug**: 2026-10-03-fence-property-lines-surveys-michigan
- **Author**: BFFence
- **Category**: BFFence

## Prerequisites
Before publishing, ensure all of the following are complete:
1. Final blog post (`blog_final/final.md`) is written and verified
2. Schema JSON (`schema/schema.json`) is generated and valid
3. Feature image (`blog_images/feature_image.png`) is generated and optimized
4. Quality gate review has been completed and passed
5. All files are in their correct locations under the blog post directory

## Publishing Steps
1. **Verify content integrity**:
   - Confirm `final.md` starts with exactly "---" (use `head -c 3`)
   - Verify frontmatter contains: title, date, description, category, author
   - Ensure category is "BFFence" (not a pillar name)
   - Confirm date is 2026-10-03

2. **Check schema validity**:
   - Validate JSON syntax
   - Confirm @context is "https://schema.org"
   - Verify @graph contains exactly 4 schema types: Article, LocalBusiness, Service, FAQPage
   - Check that brand-specific values match BFFence identity:
     * Organization name: "BF Fence"
     * URL: "https://bffence.com/"
     * Phone: "(248)604-6168"
     * LegalName: "Renowned Value Restoration LLC"

3. **Image preparation**:
   - Confirm feature_image.png exists in blog_images/
   - Verify dimensions are 1280x720 (16:9 landscape)
   - Ensure file is optimized for web (under 500KB preferred)
   - Confirm image relates to property lines, surveys, or fence installation in Michigan

4. **Final verification**:
   - Run word count check (prose-only 3000-5000 words for BFFence)
   - Verify no forbidden terms appear (Cryptographic, Blockchain, Valuation, Digital Asset, Deepfake)
   - Confirm at least 3 of 5 brand key phrases appear naturally:
     * "Built to last"
     * "Protecting what matters"
     * "Oakland County's Trusted Choice"
     * "Privacy you can see"

5. **Publish to website**:
   - Copy the entire blog post directory to the website's content repository
   - Ensure the path follows: /content/blog/2026-10-03-fence-property-lines-surveys-michigan/
   - Verify the schema is accessible at the correct path
   - Confirm image loads correctly on the live site

6. **Post-publishing checks**:
   - Verify the page renders correctly in browser
   - Confirm schema appears in page source or via structured data testing tool
   - Check that social sharing cards generate correctly (if applicable)
   - Monitor for any errors in website logs

## Quality Gate Verification
Before considering this post "READY FOR PUBLICATION," ensure the quality gate review has been completed with a score of ≥85% (119/140 points) and no individual criterion below 6/10.

## Troubleshooting
- If schema fails validation, compare against the BFFence schema template and recent posts
- If image issues occur, regenerate with a simpler prompt (1-2 sentences, 15-25 words)
- If frontmatter errors appear, rewrite the file ensuring the first 3 characters are exactly "---"