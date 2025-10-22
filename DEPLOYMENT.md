# GitHub Pages Deployment Guide

Your portfolio is now configured for GitHub Pages! Here's what I've set up and what you need to do:

## What I've Configured

### 1. **Vite Configuration** (`vite.config.js`)
- Added `base: '/axeldev/'` for GitHub Pages routing
- **⚠️ IMPORTANT**: If your GitHub repository name is different from "axeldev", update this to match your repo name

### 2. **Package.json**
- Added `gh-pages` package for deployment
- Added deploy scripts:
  - `npm run deploy` - builds and deploys to GitHub Pages
  - `predeploy` automatically runs before deploy

### 3. **Router Configuration** (`src/main.jsx`)
- Added `basename="/axeldev"` to BrowserRouter
- **⚠️ IMPORTANT**: If your repo name is different, update this too

### 4. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- Automatically deploys your site when you push to the `main` branch
- Uses the official GitHub Pages deployment action

## How to Deploy

### Option 1: Using GitHub Actions (Recommended)

1. **Create a GitHub repository** named "axeldev" (or whatever you prefer)

2. **If your repo name is different**, update these files:
   - `vite.config.js`: Change `base: '/your-repo-name/'`
   - `src/main.jsx`: Change `basename="/your-repo-name"`

3. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/axeldev.git
   git push -u origin main
   ```

4. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"

5. **That's it!** The workflow will automatically build and deploy your site when you push changes.

Your site will be available at: `https://YOUR-USERNAME.github.io/axeldev/`

### Option 2: Manual Deployment with gh-pages

1. **Install dependencies** (if you haven't):
   ```bash
   npm install
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

This will build your site and push it to the `gh-pages` branch.

## Custom Domain (Optional)

If you want to use a custom domain like `axelvandenheuvel.com`:

1. Update `vite.config.js`:
   ```javascript
   base: '/',  // Change from '/axeldev/' to '/'
   ```

2. Update `src/main.jsx`:
   ```javascript
   basename=""  // Remove the basename or set to empty string
   ```

3. Add a `CNAME` file in the `public` folder with your domain:
   ```
   yourdomain.com
   ```

4. Configure your domain's DNS settings to point to GitHub Pages

## Testing Locally

Before deploying, you can test the production build locally:

```bash
npm run build
npm run preview
```

## Troubleshooting

- **404 errors**: Make sure the `base` in `vite.config.js` and `basename` in `main.jsx` match your repository name
- **Blank page**: Check the browser console for errors - usually related to incorrect base path
- **Images not loading**: Ensure you're importing images (not using relative paths) as shown in ProfileCard.jsx
- **Workflow not running**: Check that GitHub Actions is enabled in your repository settings

## Notes

- The `.github/workflows/deploy.yml` file will automatically deploy on every push to `main`
- If you want to deploy from a different branch, update the workflow file
- The deployment uses Node 20 - if you need a different version, update the workflow

Good luck with your deployment! 🚀

