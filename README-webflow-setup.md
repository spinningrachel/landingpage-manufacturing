# Webflow DevLink Setup Instructions

## ✅ Webflow DevLink + Extended Tailwind Compatibility

Your project is now configured for **full compatibility** with Webflow DevLink while maintaining your extended Tailwind CSS design system. Here's what has been implemented and what you need to do next:

## 🎯 What's Already Done

### 1. **Extended Tailwind Configuration** ✅
- Custom design tokens transferred from your original project
- Color system: green, blue, purple, gray palettes with OKLCH values
- Typography scale: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl
- Spacing system: Based on 0.25rem units
- Component-specific variables: primary, secondary, muted, accent colors
- Container sizes: md (28rem), 4xl (56rem), 7xl (80rem)

### 2. **Webflow-Compatible CSS Architecture** ✅
- CSS custom properties in globals.css
- Dark mode support
- All design tokens are CSS variables that work with DevLink

### 3. **DevLink Compatibility Configuration** ✅
- `.webflowrc.js` created with `skipTagSelectors: true`
- This prevents conflicts between Tailwind and DevLink global styles
- Your components and forms have been copied over

### 4. **Landing Page Restored** ✅
- Your original landing page design is now in `src/app/page.tsx`
- Uses your extended Tailwind classes
- Includes DemoForm and NewsletterSignup components

## 🚀 Next Steps for Webflow DevLink

### 1. **Set Up DevLink Connection**
When you're ready to connect to Webflow:

```bash
# Install DevLink (if not already done)
npm install @webflow/webflow-cli

# Update .webflowrc.js with your actual values:
```

In `.webflowrc.js`, update:
- `siteId: "your-webflow-site-id"`
- `authToken: "your-webflow-auth-token"`

### 2. **Important Configuration Notes**

The `skipTagSelectors: true` setting is **critical** for compatibility:

**✅ What it does:**
- Removes global CSS conflicts between Webflow and Tailwind
- Keeps Webflow component styles intact
- Allows your extended Tailwind system to work properly

**⚠️ What to remember:**
- Ensure parent containers have defined heights/widths
- Set `height: 100%` on html and body if using viewport-dependent components (Navbar, Dropdown)

### 3. **Design System Usage**

You can now use both systems together:

**Tailwind Classes:** (your extended system)
```tsx
<div className="bg-primary text-primary-foreground p-8 rounded-lg">
  <h1 className="text-4xl font-bold text-gray-900">
    Your content
  </h1>
</div>
```

**Webflow Components:** (when DevLink is connected)
```tsx
import { HeaderStructure, Footer } from '@/components/devlink'

<HeaderStructure />
<Footer />
```

## 🎨 Design Tokens Available

Your extended Tailwind now includes:

```css
/* Colors */
bg-primary, text-primary, border-primary
bg-blue-400, text-blue-600, bg-green-100
bg-purple-600, text-gray-700, etc.

/* Typography */
text-xs, text-sm, text-base, text-lg, text-xl
text-2xl, text-3xl, text-4xl, text-5xl, text-6xl

/* Spacing */
p-1, p-2, p-4, p-8, p-16, p-20
gap-1, gap-2, gap-4, gap-8, gap-12

/* Containers */
max-w-md, max-w-4xl, max-w-7xl

/* Border Radius */
rounded-lg, rounded-md, rounded-sm
```

## ✅ Current Status

- **Design System**: ✅ Fully transferred and compatible
- **Components**: ✅ Forms and DevLink components copied
- **Configuration**: ✅ Webflow-compatible setup ready
- **Landing Page**: ✅ Restored with proper styling

## 🔧 Testing

To test your setup:

```bash
npm run dev
```

Your landing page should now display with all the original design elements using the extended Tailwind system.

## 📞 Support

If you encounter issues with DevLink integration:
1. Verify `skipTagSelectors: true` is enabled
2. Check that parent containers have proper dimensions
3. Ensure DevLink components are imported correctly

Your project is now ready for seamless Webflow DevLink integration! 🚀