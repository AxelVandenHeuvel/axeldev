# Setup & Launch Guide

## 🎯 What's New

Your portfolio has been refactored with:
- ✅ **Circular name badge** in the top-left corner (SVG `<textPath>` implementation)
- ✅ **Client-side routing** with react-router-dom (no more scroll anchors)
- ✅ **Separate pages**: Home (`/`), About (`/about`), Projects (`/projects`)
- ✅ **Top-left navigation** (no vertical sidebar)
- ✅ **Accessibility features**: keyboard navigation, focus styles, reduced-motion support
- ✅ **Same minimalist aesthetic**: dark theme, pill-style social links, clean spacing

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── CircleNameBadge.jsx  # SVG circular text badge (top-left, links to /)
│   ├── Nav.jsx              # Navigation: About & Projects links
│   ├── ProfileCard.jsx      # Profile info (name, location, social links)
│   ├── SocialLinks.jsx      # Pill-shaped social buttons
│   └── Footer.jsx           # Footer
├── pages/
│   ├── Home.jsx            # Home page - centered profile card
│   ├── About.jsx           # About page - bio paragraphs
│   └── Projects.jsx        # Projects page - project cards
├── styles/
│   └── [Individual CSS files for each component/page]
├── App.jsx                 # Routes and layout
└── main.jsx               # Entry point with BrowserRouter
```

## 🎨 Customization Quick Reference

### Update Your Name (Circular Badge)
**File:** `src/components/CircleNameBadge.jsx`
```javascript
const text = 'YOUR NAME HERE • '
```

### Update Profile Info
**File:** `src/components/ProfileCard.jsx`
- Change name, subtitle, location
- Replace profile image URL

### Update Social Links
**File:** `src/components/SocialLinks.jsx`
```javascript
const socialLinks = [
  {
    name: 'GitHub',
    icon: '⚡',
    url: 'https://github.com/yourhandle',
    username: 'GitHub'
  },
  // Add more...
]
```

### Add/Edit Projects
**File:** `src/pages/Projects.jsx`
```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Brief description',
    link: 'https://github.com/you/project'
  },
  // Add more...
]
```

### Update About Text
**File:** `src/pages/About.jsx`
- Replace lorem ipsum with your bio

## 🔧 Key Features Explained

### Circular Text Badge
- **Technology**: SVG `<textPath>` element
- **Location**: Fixed top-left corner (24px from edges)
- **Behavior**: Rotates on hover, links to home page
- **Accessibility**: ARIA label, keyboard focusable, respects reduced-motion

### Routing
- **Home** (`/`): Profile card with social links
- **About** (`/about`): Bio paragraphs
- **Projects** (`/projects`): Project showcase
- **Navigation**: Active route gets underline, smooth transitions

### Responsive Design
- **Desktop (>968px)**: Full layout, 120px badge
- **Tablet (640-968px)**: Adjusted spacing
- **Mobile (<640px)**: 96px badge, horizontal nav, stacked content

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Deployment Note
This app uses client-side routing. Configure your host to redirect all routes to `index.html`:

**Netlify:** Create `public/_redirects`
```
/*    /index.html   200
```

**Vercel:** Automatic (no config needed)

## ✅ Acceptance Criteria Met

- ✅ Circular name badge in absolute top-left corner
- ✅ Badge clickable, navigates to "/"
- ✅ About and Projects are discrete pages (react-router-dom)
- ✅ URL changes appropriately (/, /about, /projects)
- ✅ Mobile responsive (no overlaps)
- ✅ Keyboard accessible with focus styles
- ✅ Respects prefers-reduced-motion
- ✅ Same aesthetic (dark theme, minimalist spacing)
- ✅ Ready to run with npm install && npm run dev

---

**Need help?** Check the main README.md for detailed documentation.

