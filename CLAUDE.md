# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Nova Walseth's professional portfolio website - a pure static HTML site with CSS. It's a GitHub Pages site with no build system or dependencies required.

## Project Structure

### Files

- **`index.html`**: Complete HTML portfolio with inline JavaScript for dynamic year
- **`index.css`**: Stylesheet (422 lines) with responsive design
- **`assets/`**: Static assets including:
  - `profile-pic.jpg` - Hero section profile image
  - `msoe_logo.png` - Education section logo
  - `Resume.pdf` - Resume link target
  - `background.jpg` - Unused asset

## Deployment

Files are in the repository root and ready to serve directly:
- All files are already at the root level for GitHub Pages
- No build step required
- For local testing, use any simple HTTP server:

```bash
python3 -m http.server 8000
# or
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Structure & Styling

### HTML Structure
- Semantic HTML with proper meta tags for SEO and social sharing
- Single-page portfolio with sections: hero, about, experience, projects, skills, education, footer
- Sticky navigation header with anchor links
- Inline script (5 lines) updates copyright year dynamically

### CSS Architecture
- Mobile-first responsive design with `768px` breakpoint
- CSS Grid for projects and skills (auto-fit, minmax)
- Flexbox for layouts
- Dark theme with slate color palette
- Smooth scrolling and transitions
- Accessible color contrast (WCAG compliant)
- Reduced motion media query support

### Color Scheme
- Background: `rgb(15, 23, 42)` to `rgb(30, 41, 59)` gradient
- Text: `rgb(226, 232, 240)` (light slate)
- Accents: `rgb(96, 165, 250)` (blue for links)
- Cards: `rgba(30, 41, 59, 0.5)` (transparent dark)

## Content Sections

1. **Navigation**: Fixed header with links to major sections
2. **Hero**: Profile photo, introduction, CTA buttons (Resume, GitHub, LinkedIn)
3. **About**: Professional background and pronouns
4. **Experience**: 3 job positions (Microsoft, Google, Brady)
5. **Projects**: 3 projects (Smart Console, Testing API, FriendBot)
6. **Skills**: 3 categories (Languages, Technologies, Interests)
7. **Education**: MSOE degree with logo
8. **Footer**: Social links and copyright with dynamic year

## Development Notes

- No dependencies or build tooling required
- CSS is in a separate file for maintainability and caching
- All SVG icons are inline in HTML (GitHub, LinkedIn)
- File size: 14 KB HTML + 6 KB CSS = 20 KB total (gzipped ~6 KB)
- The main branch is `master` (not `main`)
- Currently on `v2` branch for latest version
