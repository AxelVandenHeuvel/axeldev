# Minimalist Portfolio Website

A clean, modern personal portfolio website built with React and Vite, inspired by the minimalist design aesthetic of wongmjane.com. Features a unique circular name badge and client-side routing.

## ✨ Features

- **Circular Name Badge**: SVG-based circular text in the top-left corner using `<textPath>`
- **Client-Side Routing**: Separate pages for Home, About, and Projects using react-router-dom
- **Minimalist Design**: Clean, dark-themed interface with plenty of negative space
- **Responsive Layout**: Fully responsive design that works on all devices
- **Accessibility**: Keyboard navigation, focus styles, and respects `prefers-reduced-motion`
- **Modern Stack**: Built with React 18 and Vite for fast development and optimal performance
- **SEO Optimized**: Includes meta tags and Open Graph metadata for better discoverability

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd forReal
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Project Structure

```
forReal/
├── src/
│   ├── components/
│   │   ├── CircleNameBadge.jsx  # Circular SVG name badge (top-left)
│   │   ├── Nav.jsx               # Navigation links (About, Projects)
│   │   ├── ProfileCard.jsx       # Profile information card
│   │   ├── SocialLinks.jsx       # Social media pill buttons
│   │   └── Footer.jsx            # Footer component
│   ├── pages/
│   │   ├── Home.jsx              # Home page (profile card)
│   │   ├── About.jsx             # About page
│   │   └── Projects.jsx          # Projects page
│   ├── styles/
│   │   ├── index.css             # Global styles and CSS variables
│   │   ├── App.css               # Main app layout
│   │   ├── CircleNameBadge.css   # Circular badge styles
│   │   ├── Nav.css               # Navigation styles
│   │   ├── ProfileCard.css       # Profile card styles
│   │   ├── SocialLinks.css       # Social links styles
│   │   ├── Home.css              # Home page styles
│   │   ├── About.css             # About page styles
│   │   ├── Projects.css          # Projects page styles
│   │   └── Footer.css            # Footer styles
│   ├── App.jsx                   # Main app with routing
│   └── main.jsx                  # Entry point with BrowserRouter
├── index.html                     # HTML template with SEO meta tags
├── vite.config.js                # Vite configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
```

## 🎯 Circular Text Implementation

The circular name badge is implemented using SVG's `<textPath>` element, which is:
- **Accessible**: Screen readers can read the text normally
- **Responsive**: Scales cleanly at any size
- **Performant**: Pure SVG, no JavaScript calculations
- **Animatable**: Rotates on hover (respects `prefers-reduced-motion`)

### How it works:

1. Define a circular `<path>` in the SVG `<defs>` section
2. Use `<textPath>` to render text along that path
3. Repeat the text string to fill the circle
4. Apply CSS animations for the rotation effect

The implementation is in `src/components/CircleNameBadge.jsx`.

## 🎨 Customization

### Update Personal Information

1. **Circular Badge** (`src/components/CircleNameBadge.jsx`):
   ```javascript
   const text = 'YOUR NAME • '
   ```

2. **Profile Card** (`src/components/ProfileCard.jsx`):
   - Replace profile image URL
   - Update name and subtitle
   - Change location

3. **Social Links** (`src/components/SocialLinks.jsx`):
   - Update URLs and usernames in the `socialLinks` array
   - Add or remove social platforms as needed

4. **About Page** (`src/pages/About.jsx`):
   - Replace lorem ipsum with your personal bio
   - Add more paragraphs or sections as needed

5. **Projects** (`src/pages/Projects.jsx`):
   - Edit the `projects` array to add your own projects:
   ```javascript
   const projects = [
     {
       title: 'Your Project Name',
       description: 'Brief description (1-2 lines)',
       link: 'https://github.com/yourusername/project'
     },
     // Add more projects...
   ]
   ```

### Styling

All styles use CSS variables defined in `src/styles/index.css`. You can easily customize:

```css
:root {
  /* Colors */
  --bg-primary: #0f0f10;
  --text-primary: #ffffff;
  --text-secondary: #a8a8a8;
  
  /* Spacing */
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  
  /* Typography */
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  
  /* And more... */
}
```

### Add a New Page

1. Create a new component in `src/pages/`:
   ```javascript
   // src/pages/Contact.jsx
   function Contact() {
     return <div>Contact content...</div>
   }
   export default Contact
   ```

2. Add route in `src/App.jsx`:
   ```javascript
   import Contact from './pages/Contact'
   
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/projects" element={<Projects />} />
     <Route path="/contact" element={<Contact />} />
   </Routes>
   ```

3. Add navigation link in `src/components/Nav.jsx`:
   ```javascript
   <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
     Contact
   </NavLink>
   ```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: > 968px - Full layout with larger badge
- **Tablet**: 640px - 968px - Adjusted spacing
- **Mobile**: < 640px - Smaller badge, horizontal nav links, stacked content

## ♿ Accessibility Features

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Focus Styles**: Clear focus indicators for navigation and links
- **ARIA Labels**: Descriptive labels for the circular badge
- **Reduced Motion**: Animations disabled when `prefers-reduced-motion` is set
- **Semantic HTML**: Proper heading hierarchy and landmark elements

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder, ready to deploy to any static hosting service:

- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop or CLI deployment
- **GitHub Pages**: Use `gh-pages` package
- **Cloudflare Pages**: Connect your repository

### Important Note for Client-Side Routing

Since this app uses client-side routing, you need to configure your hosting provider to redirect all routes to `index.html`. Most modern hosts have this built-in for SPAs.

For example, on Netlify, create a `public/_redirects` file:
```
/*    /index.html   200
```

## 📦 Dependencies

- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-router-dom**: ^6.21.1
- **vite**: ^5.0.8
- **@vitejs/plugin-react**: ^4.2.1

## 📝 License

Feel free to use this template for your personal portfolio!

## 🙏 Acknowledgments

Design inspired by [wongmjane.com](https://wongmjane.com)

---

Built with ❤️ using React + Vite
