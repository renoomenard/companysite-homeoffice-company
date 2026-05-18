# Home Office Company - Static Site

## Upload Instructions

### GitHub Pages
1. Create a new repository on GitHub (e.g. `homeoffice-company`)
2. Go to Settings > Pages > Source: Deploy from a branch > Branch: main / root
3. Upload all files from this folder to the repository root
4. Your site will be live at https://homeoffice.company (once DNS is pointed)

### Cloudflare Pages
1. Log in to Cloudflare Dashboard > Pages > Create a project
2. Upload this folder or connect your GitHub repository
3. No build command needed (static site)
4. Set your custom domain to homeoffice.company

### Vercel
1. Install Vercel CLI: npm i -g vercel
2. Run: vercel --prod from inside this folder
3. Connect your domain in the Vercel dashboard

## DNS Setup
Point your domain homeoffice.company to your hosting provider:
- GitHub Pages: CNAME record pointing to your-username.github.io
- Cloudflare Pages: Managed automatically
- Vercel: CNAME or A records as shown in dashboard

## Google Analytics
Find the placeholder comment in index.html and each page head:
  <!-- GOOGLE ANALYTICS PLACEHOLDER - Replace G-XXXXXXXXXX -->
Uncomment the code and replace G-XXXXXXXXXX with your Measurement ID.

## File Structure
  /index.html                - Homepage
  /style.css                 - Homepage-specific CSS
  /assets/style.css          - Shared CSS (all pages)
  /assets/site.js            - Shared JavaScript
  /assets/hero.jpg           - Hero image
  /blog/index.html           - Blog archive (214 posts)
  /[post-slug]/index.html    - Individual blog posts (214 total)
  /privacy-policy/index.html - Privacy Policy
  /terms-conditions/index.html - Terms & Conditions
  /shipping-returns/index.html - Shipping & Returns
  /sitemap.xml               - Sitemap (219 URLs)
  /robots.txt                - Robots file
  /CNAME                     - Custom domain for GitHub Pages

## Post Count
Total published blog posts converted: 214

## URL Structure
Blog posts use clean URLs: /post-slug/ (no .html, no /blog/ prefix)
Blog archive: /blog/

## Sitemap
219 URLs included: homepage + blog archive + 214 posts + 3 legal pages

All pages confirmed. Good luck!
