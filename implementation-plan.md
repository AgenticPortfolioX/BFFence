# SEO Implementation Plan for BFFence

## User Review Required
This plan implements the SEO optimizations listed in the README checklist. Please review these additions carefully!

## Proposed Changes

### `index.html`
- **[MODIFY]** Update `<title>` from generic generic text to "BFFence | Premier Wood Fences in Southeast Michigan".
- **[MODIFY]** Add `<meta name="description">` detailing the business.
- **[MODIFY]** Add Open Graph (OG) tags and Twitter card configurations.
- **[MODIFY]** Inject JSON-LD local business schema to help map-pack ranking!

### `public/robots.txt`
- **[NEW]** Add an explicit `robots.txt` that allows all bots to crawl but blocks irrelevant files if any. 

### `public/sitemap.xml`
- **[NEW]** Add a static XML sitemap defining endpoints: `/`, `/service-area`, `/our-team`, `/reviews`, `/free-estimate`.

### `src/components/CTA_Footer.tsx`
- **[MODIFY]** Add a link to the XML Sitemap at the bottom next to the Terms of Service for standard "bot discovery" practices! (Also add an internal link structure for site linking).

### Image `alt` tags
- The files `/Hero.tsx`, `/Sections.tsx`, & `/FenceGrid.tsx` were previously reviewed and already have good descriptive `alt` tags like `Wood vs Steel Posts Comparison`, `Beautiful Wood Fence in Michigan`, etc. so we do not need to clutter them with unnecessary changes.

## Open Questions
- Do you have a distinct domain in mind that we should hardcode for the `sitemap.xml` structure (`https://www.yourdomain.com/`)? Currently, I will use a generic placeholder like `https://www.bffence.com/` unless specified!
- Should the sitemap link in the footer simply point directly to the `/sitemap.xml` index?

## Verification Plan
After completion, I will audit the `index.html` head to verify proper OG injections and run local validation checks on the `robots.txt` structures.
