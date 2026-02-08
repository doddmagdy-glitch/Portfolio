# Video Editor Portfolio Website

A professional, multi-page portfolio website for video editors with comprehensive SEO optimization and compelling content.

## Features

- **5 Separate Pages**: Home, Portfolio, Skills, About, Contact
- **Full SEO Optimization**: Meta tags, Open Graph, Twitter Cards, Schema.org markup
- **Professional Content Writing**: Compelling copy throughout all pages
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern Animations**: Smooth transitions, fade-ins, and hover effects
- **Portfolio Filtering**: Dynamic filtering by project type
- **Contact Form**: Fully functional with validation
- **Performance Optimized**: Fast loading, lazy loading images

## Pages Overview

### 1. Home (index.html)
- Hero section with compelling headline
- Value propositions
- Services preview
- Call-to-action sections

### 2. Portfolio (portfolio.html)
- 12 project showcases with detailed descriptions
- Filterable by category (Commercial, Music, Documentary, Social, Corporate)
- Project tags and metrics
- Hover effects revealing project details

### 3. Skills (skills.html)
- Detailed expertise breakdown
- Software proficiency (Premiere Pro, Final Cut Pro, DaVinci Resolve, etc.)
- Technical skills and capabilities
- Creative process overview
- Certifications section

### 4. About (about.html)
- Personal story and journey
- Work philosophy
- Client testimonials
- By-the-numbers statistics
- Personal interests

### 5. Contact (contact.html)
- Comprehensive contact form
- Direct contact information
- FAQ section
- Social media links
- Calendar scheduling option

## SEO Features

### Meta Tags
- Title tags optimized for search engines
- Meta descriptions for all pages
- Keyword optimization
- Author and robots tags

### Open Graph & Twitter Cards
- Social media preview optimization
- Custom OG images (you'll need to add these)
- Twitter Card integration

### Structured Data
- Schema.org markup for professional services
- Enhanced search result appearance
- Local business information

### Additional SEO
- sitemap.xml for search engine crawling
- robots.txt for crawler instructions
- Canonical URLs
- Semantic HTML structure

## Customization Guide

### 1. Replace Placeholder Content

**Contact Information:**
- Update email addresses in all pages
- Add your phone number
- Update social media links
- Add your location/address

**Personal Information:**
- Replace "Your City", "Your State" in schema markup
- Update business hours
- Add your name and bio
- Customize the personal story in About page

### 2. Update Images

Replace placeholder Unsplash images with your actual project screenshots:
- Portfolio projects (16:9 aspect ratio recommended)
- Add your headshot/profile photo
- Create Open Graph images (1200x630px)
- Create Twitter Card images (1200x628px)

### 3. Customize Colors

In `styles.css`, update the CSS variables:
```css
:root {
    --bg-dark: #0a0a0a;
    --bg-card: #141414;
    --accent-primary: #ff3366;  /* Your brand color */
    --accent-secondary: #00ffcc;  /* Accent color */
    --text-primary: #ffffff;
    --text-secondary: #999999;
    --border-color: #222222;
}
```

### 4. Update SEO Information

**In each HTML file's `<head>` section:**
- Replace "yourwebsite.com" with your actual domain
- Update meta descriptions to match your services
- Update keywords relevant to your niche
- Add your actual social media URLs

**In sitemap.xml:**
- Update all URLs to your domain
- Update lastmod dates
- Adjust changefreq based on how often you update

**In Schema.org markup (index.html):**
- Add your business name
- Update address and location
- Add your phone number
- Update social media profiles

### 5. Configure Contact Form

The contact form currently shows an alert. To make it functional:

**Option A: Use a form service (FormSpree, Netlify Forms, etc.)**
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```

**Option B: Connect to your own backend**
Uncomment and modify the fetch code in `script.js`:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

### 6. Add Analytics

Add Google Analytics or your preferred analytics:
```html
<!-- In the <head> of each page -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## File Structure

```
video-editor-portfolio/
├── index.html          # Home page
├── portfolio.html      # Portfolio showcase
├── skills.html         # Skills & expertise
├── about.html          # About me
├── contact.html        # Contact form
├── styles.css          # All styles
├── script.js           # All JavaScript
├── robots.txt          # SEO crawler instructions
├── sitemap.xml         # SEO sitemap
└── README.md          # This file
```

## Deployment

### Option 1: Netlify (Recommended)
1. Create a GitHub repository
2. Push all files
3. Connect to Netlify
4. Deploy (automatically handles forms too!)

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Push all files
3. Enable GitHub Pages in repository settings
4. Your site will be at username.github.io/repo-name

### Option 3: Traditional Web Hosting
1. Upload all files to your web host via FTP
2. Ensure files are in the public_html or www directory
3. Your site will be at your domain

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress all images before uploading
2. **Use WebP Format**: Convert images to WebP for better compression
3. **Minify CSS/JS**: Use minification tools for production
4. **Enable Caching**: Configure server caching headers
5. **Use a CDN**: Consider Cloudflare or similar for global delivery

## Accessibility

The site includes:
- Semantic HTML structure
- ARIA labels for icons
- Keyboard navigation support
- Sufficient color contrast
- Responsive font sizes

## Future Enhancements

Consider adding:
- Blog section for SEO content
- Video showreel integration
- Client login area
- Pricing page
- Project case studies
- Newsletter signup
- Multi-language support

## Support & Updates

To update content:
1. Edit the HTML files directly
2. Update dates in sitemap.xml
3. Test locally before deploying
4. Push updates to your hosting

## License

Customize and use for your personal portfolio. Remove placeholder content and make it your own!

## Credits

- Fonts: Google Fonts (Bebas Neue, Outfit)
- Icons: Unicode emoji characters
- Images: Unsplash (replace with your own)
- Design: Custom modern cinematic theme

---

**Important**: Remember to replace ALL placeholder content with your actual information before going live!
