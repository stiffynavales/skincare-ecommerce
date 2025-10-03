# E-Commerce Website with Sass - VSCode Setup Guide

## Step-by-Step Instructions for Coding in VSCode

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **VSCode** - [Download here](https://code.visualstudio.com/)
- **Git** (optional but recommended) - [Download here](https://git-scm.com/)

---

## Step 1: Download and Extract the Project

1. **Download the ZIP file** from v0 (click the three dots → "Download ZIP")
2. **Extract the ZIP** to your desired location (e.g., `C:\Projects\skincare-ecommerce`)
3. **Open VSCode**
4. Click **File → Open Folder** and select the extracted folder

---

## Step 2: Install Recommended VSCode Extensions

Install these extensions for the best development experience:

1. **SCSS IntelliSense** (mrmlnc.vscode-scss)
   - Provides autocomplete for Sass/SCSS
   
2. **Live Sass Compiler** (glenn2223.live-sass)
   - Compiles Sass to CSS automatically
   
3. **ES7+ React/Redux/React-Native snippets** (dsznajder.es7-react-js-snippets)
   - React code snippets
   
4. **Prettier - Code formatter** (esbenp.prettier-vscode)
   - Automatic code formatting
   
5. **Auto Rename Tag** (formulahendry.auto-rename-tag)
   - Automatically renames paired HTML/JSX tags

**To install:**
- Press `Ctrl+Shift+X` (Windows/Linux) or `Cmd+Shift+X` (Mac)
- Search for each extension and click "Install"

---

## Step 3: Install Project Dependencies

1. **Open the integrated terminal** in VSCode:
   - Press `` Ctrl+` `` (backtick) or go to **Terminal → New Terminal**

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`
   
   This will install all required packages including:
   - Next.js
   - React
   - Sass
   - TypeScript

3. **Wait for installation to complete** (may take 2-3 minutes)

---

## Step 4: Configure Sass Settings (Optional)

If you want to customize Sass compilation:

1. Create a `.vscode` folder in your project root (if it doesn't exist)
2. Create `settings.json` inside `.vscode`:

\`\`\`json
{
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/styles/compiled"
    }
  ],
  "liveSassCompile.settings.generateMap": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
\`\`\`

---

## Step 5: Start the Development Server

1. **In the terminal, run:**
   \`\`\`bash
   npm run dev
   \`\`\`

2. **Wait for the server to start** - you'll see:
   \`\`\`
   ✓ Ready in 2.5s
   ○ Local:   http://localhost:3000
   \`\`\`

3. **Open your browser** and navigate to `http://localhost:3000`

4. **You should see your e-commerce website!**

---

## Step 6: Understanding the Project Structure

\`\`\`
skincare-ecommerce/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage (imports all components)
│   └── globals.css         # Global styles entry point
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── SimpleRoutine.tsx   # Routine section
│   ├── ProductFeatures.tsx # Product features
│   ├── OneMinute.tsx       # 1-minute routine
│   ├── Results.tsx         # Results gallery
│   ├── HeroBanner.tsx      # Large banner
│   ├── DailyBenefits.tsx   # Benefits section
│   ├── GetTheSet.tsx       # Product bundle
│   ├── Ingredients.tsx     # Ingredients grid
│   ├── ThreeFormulas.tsx   # Product details
│   ├── Testimonials.tsx    # Customer reviews
│   └── Footer.tsx          # Footer
├── styles/
│   ├── globals.scss        # Global styles
│   ├── variables.scss      # Sass variables (colors, fonts, etc.)
│   ├── mixins.scss         # Reusable Sass mixins
│   └── components/         # Component-specific styles
│       ├── header.module.scss
│       ├── hero.module.scss
│       └── ... (other component styles)
├── public/
│   └── images/             # Static images
└── package.json            # Project dependencies
\`\`\`

---

## Step 7: Making Changes and Hot Reload

The development server supports **hot reload** - changes appear instantly!

### To edit a component:

1. **Open any component file** (e.g., `components/Hero.tsx`)
2. **Make your changes** (e.g., change the heading text)
3. **Save the file** (`Ctrl+S` or `Cmd+S`)
4. **Check your browser** - changes appear automatically!

### To edit styles:

1. **Open any Sass file** (e.g., `styles/components/hero.module.scss`)
2. **Modify styles** (e.g., change `$primary-yellow` color)
3. **Save the file**
4. **Styles update instantly** in the browser

---

## Step 8: Customizing Colors and Fonts

### Change Colors:

1. Open `styles/variables.scss`
2. Modify the color variables:

\`\`\`scss
// Change primary color from yellow to blue
$primary-yellow: #2196F3;  // Changed from #FDB913

// Change dark background
$dark-bg: #1a1a2e;  // Changed from #2C3E50
\`\`\`

3. Save and see changes instantly!

### Change Fonts:

1. Open `app/layout.tsx`
2. Import different Google Fonts:

\`\`\`tsx
import { Roboto, Lato } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700', '900']
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700']
})
\`\`\`

3. Update the HTML className:

\`\`\`tsx
<html lang="en" className={`${roboto.variable} ${lato.variable}`}>
\`\`\`

4. Update `app/globals.css`:

\`\`\`css
@theme inline {
  --font-sans: var(--font-lato);
  --font-serif: var(--font-roboto);
}
\`\`\`

---

## Step 9: Adding New Sections

### To add a new component:

1. **Create a new component file:**
   \`\`\`bash
   # In terminal
   touch components/NewSection.tsx
   \`\`\`

2. **Create the component:**

\`\`\`tsx
import styles from '@/styles/components/new-section.module.scss'

export default function NewSection() {
  return (
    <section className={styles.newSection}>
      <div className="container">
        <h2>New Section</h2>
        <p>Your content here</p>
      </div>
    </section>
  )
}
\`\`\`

3. **Create the Sass file:**
   \`\`\`bash
   touch styles/components/new-section.module.scss
   \`\`\`

4. **Add styles:**

\`\`\`scss
@import '../variables';
@import '../mixins';

.newSection {
  @include section-padding;
  background-color: $light-gray;
  
  h2 {
    @include heading-medium;
    text-align: center;
    margin-bottom: $spacing-md;
  }
}
\`\`\`

5. **Import in `app/page.tsx`:**

\`\`\`tsx
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NewSection />  {/* Add your new section */}
        {/* ... other sections */}
      </main>
      <Footer />
    </>
  )
}
\`\`\`

---

## Step 10: Building for Production

When you're ready to deploy:

1. **Build the production version:**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Test the production build locally:**
   \`\`\`bash
   npm start
   \`\`\`

3. **Deploy to Vercel (recommended):**
   - Click the "Publish" button in v0
   - Or push to GitHub and connect to Vercel

---

## Step 11: Responsive Design Testing

### Test different screen sizes in VSCode:

1. **Open DevTools in your browser** (`F12`)
2. **Click the device toolbar icon** (or press `Ctrl+Shift+M`)
3. **Select different devices:**
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1024px+)

### Modify responsive breakpoints:

Open `styles/variables.scss` and adjust:

\`\`\`scss
$breakpoint-mobile: 480px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;
\`\`\`

---

## Step 12: Common Sass Patterns Used

### Using Mixins:

\`\`\`scss
// In your component style file
.myButton {
  @include button-primary;  // Applies button styles
}

.mySection {
  @include section-padding;  // Applies consistent padding
}
\`\`\`

### Using Variables:

\`\`\`scss
.myElement {
  color: $primary-yellow;
  background-color: $dark-bg;
  padding: $spacing-md;
}
\`\`\`

### Nesting (Sass feature):

\`\`\`scss
.card {
  padding: $spacing-md;
  
  .title {
    font-size: 1.5rem;
    
    &:hover {  // & refers to parent (.title)
      color: $primary-yellow;
    }
  }
  
  .description {
    color: $text-light;
  }
}
\`\`\`

---

## Step 13: Debugging Tips

### If the site doesn't load:

1. **Check the terminal for errors**
2. **Ensure port 3000 is not in use:**
   \`\`\`bash
   # Kill process on port 3000 (Windows)
   npx kill-port 3000
   
   # Or use a different port
   npm run dev -- -p 3001
   \`\`\`

### If styles don't apply:

1. **Check the import path** in your component
2. **Ensure the Sass file exists**
3. **Check for syntax errors** in the Sass file
4. **Restart the dev server** (`Ctrl+C` then `npm run dev`)

### If images don't show:

1. **Check the image path** (should be `/placeholder.svg?...`)
2. **Ensure images are in the `public` folder**
3. **Use absolute paths** starting with `/`

---

## Step 14: Keyboard Shortcuts for Productivity

### Essential VSCode shortcuts:

- **`Ctrl+P`** - Quick file open
- **`Ctrl+Shift+F`** - Search across all files
- **`Ctrl+D`** - Select next occurrence
- **`Alt+Up/Down`** - Move line up/down
- **`Ctrl+/`** - Toggle comment
- **`Ctrl+B`** - Toggle sidebar
- **`` Ctrl+` ``** - Toggle terminal
- **`F2`** - Rename symbol (updates all references)

---

## Step 15: Next Steps

### Enhance your site:

1. **Replace placeholder images** with real product photos
2. **Add animations** using Framer Motion or CSS animations
3. **Implement shopping cart** functionality
4. **Add form validation** for newsletter signup
5. **Connect to a backend** (Supabase, Firebase, etc.)
6. **Add SEO metadata** in `app/layout.tsx`
7. **Implement analytics** (Google Analytics, Vercel Analytics)

### Learn more:

- **Next.js Docs:** https://nextjs.org/docs
- **Sass Documentation:** https://sass-lang.com/documentation
- **React Docs:** https://react.dev
- **Tailwind CSS (alternative):** https://tailwindcss.com

---

## Troubleshooting

### Common Issues:

**Issue:** "Module not found" error
**Solution:** Run `npm install` again

**Issue:** Sass not compiling
**Solution:** Ensure you're using `.scss` extension and importing correctly

**Issue:** Port already in use
**Solution:** Use `npx kill-port 3000` or change port with `npm run dev -- -p 3001`

**Issue:** Changes not reflecting
**Solution:** Hard refresh browser (`Ctrl+Shift+R`) or restart dev server

---

## Support

If you encounter issues:
1. Check the terminal for error messages
2. Search the error on Google or Stack Overflow
3. Check Next.js documentation
4. Ask in the v0 community

---

**Congratulations!** You now have a fully functional e-commerce website with Sass. Happy coding! 🎉
