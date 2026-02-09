# PentaCore Portfolio - Quick Setup Guide

## 🚀 Getting Started

### 1. Installation

If using the shadcn CLI:
```bash
npx shadcn-cli@latest init
npm install
npm run dev
```

Or download and extract the ZIP file, then:
```bash
cd pentacore-portfolio
npm install
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

---

## 📝 Customization Steps

### Step 1: Update Brand Name & Logo
All instances of "PentaCore" can be easily replaced with your company name.

**Files to update:**
- `app/layout.tsx` - Title and description
- `components/Navigation.tsx` - Logo text and brand name
- `components/Footer.tsx` - Brand section
- All component content

### Step 2: Customize Color Scheme
Edit `/app/globals.css` to change the color scheme:

```css
/* Light mode colors */
:root {
  --primary: 220 90% 45%;      /* Main blue */
  --secondary: 180 100% 50%;   /* Accent cyan */
}

/* Dark mode colors */
.dark {
  --primary: 220 90% 55%;
  --secondary: 180 100% 60%;
}
```

### Step 3: Replace Service/Feature Content

#### Services Section (`components/Services.tsx`)
```typescript
const services = [
  {
    icon: ShoppingCart,
    title: 'Your Service Title',
    description: 'Your service description...',
    color: 'from-blue-500 to-cyan-500',
  },
  // Add more services...
]
```

#### Features Section (`components/Features.tsx`)
```typescript
const features = [
  {
    icon: CheckCircle2,
    title: 'Feature Title',
    description: 'Feature description...',
  },
  // Add more features...
]
```

#### Testimonials (`components/Testimonials.tsx`)
```typescript
const testimonials = [
  {
    name: 'Client Name',
    role: 'Client Title',
    quote: 'Client testimonial text...',
    rating: 5,
    image: '👨‍💼',
  },
  // Add more testimonials...
]
```

#### Blog Posts (`components/Blog.tsx`)
```typescript
const blogPosts = [
  {
    id: 1,
    title: 'Blog Post Title',
    excerpt: 'Blog excerpt...',
    date: 'January 1, 2026',
    category: 'Category',
    image: '📰',
  },
  // Add more blog posts...
]
```

#### Pricing Plans (`components/Pricing.tsx`)
```typescript
const plans = [
  {
    name: 'Plan Name',
    price: '$99',
    period: 'per month',
    description: 'Plan description...',
    features: ['Feature 1', 'Feature 2'],
    cta: 'Get Started',
    highlight: false,
  },
  // Add more plans...
]
```

### Step 4: Update Contact Information
Edit `components/Contact.tsx` to add your contact details:
```typescript
{
  icon: Phone,
  label: 'Call Us',
  value: '+1 234-567-8900',
}
```

### Step 5: Add Navigation Links
Update `components/Navigation.tsx`:
```typescript
const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  // Add your navigation items...
]
```

---

## 🎨 Advanced Customizations

### Change 3D Animation
Edit `components/3d/FloatingShapes.tsx`:
- Modify geometry types (sphere, torus, box, etc.)
- Adjust animation speeds in `useFrame`
- Change colors in material definitions
- Add or remove particles in the loop

```typescript
// Change geometry
<sphereGeometry args={[2, 32, 32]} />

// Adjust animation speed
if (sphereRef.current) {
  sphereRef.current.position.y = Math.sin(Date.now() * 0.002) * 3
}

// Change material color
<meshStandardMaterial color="#22c3ff" emissive="#22c3ff" />
```

### Modify Section Order
In `app/page.tsx`, rearrange the component imports and order:
```typescript
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero3D />
      {/* Rearrange sections here */}
      <Services />
      <Blog />    {/* Moved up */}
      <Features />
      {/* ... */}
    </main>
  )
}
```

### Add New Sections
1. Create a new component file: `components/YourSection.tsx`
2. Add `'use client'` if using hooks
3. Use Framer Motion for animations (see existing components)
4. Import in `app/page.tsx`
5. Add to the component tree

Example template:
```typescript
'use client'

import { motion } from 'framer-motion'

export default function YourSection() {
  return (
    <section id="your-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-foreground"
        >
          Your Heading
        </motion.h2>
        {/* Add your content */}
      </div>
    </section>
  )
}
```

### Customize Animations
All animations use Framer Motion. Adjust timing in any component:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }} {/* Adjust duration and delay */}
>
  Content
</motion.div>
```

---

## 🔗 Important Links

- Navigation section IDs for smooth scrolling:
  - `#services` - Services section
  - `#features` - Features section
  - `#testimonials` - Testimonials section
  - `#pricing` - Pricing section
  - `#contact` - Contact section

### Update CTA Buttons
Search for "Get Started" buttons and update href attributes or onClick handlers:
```typescript
<button onClick={() => window.location.href = '/your-url'}>
  Get Started
</button>
```

---

## 📱 Testing & Deployment

### Local Testing
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
```bash
vercel
```

### Deploy to Netlify
```bash
npm run build
# Connect your repository to Netlify from netlify.com
```

---

## 🐛 Troubleshooting

### 3D Component Not Loading
- Check that Three.js and React Three Fiber are installed
- Ensure `components/3d/FloatingShapes.tsx` exists
- Check browser console for errors

### Animations Not Playing
- Verify Framer Motion is installed
- Check that components have `whileInView` props
- Browser DevTools → Performance tab to diagnose

### Styling Issues
- Clear `.next` and `node_modules`, then rebuild
- Check that Tailwind CSS is properly configured
- Verify design tokens in `globals.css`

---

## 📚 File Structure Reference

```
├── app/
│   ├── layout.tsx           # Main layout
│   ├── globals.css          # Global styles & animations
│   └── page.tsx             # Main page
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── Hero3D.tsx          # Hero with 3D
│   ├── Services.tsx        # Services section
│   ├── Features.tsx        # Features section
│   ├── InteractiveShowcase.tsx
│   ├── Clients.tsx         # Client logos
│   ├── Testimonials.tsx    # Testimonials
│   ├── Blog.tsx            # Blog section
│   ├── Pricing.tsx         # Pricing section
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   ├── ScrollAnimations.tsx
│   └── 3d/
│       └── FloatingShapes.tsx  # 3D scene
├── components/ui/          # shadcn/ui components
├── hooks/                  # React hooks
├── lib/                    # Utilities
└── public/                 # Static assets
```

---

## 🎯 Next Steps

1. **Customize Content** - Replace all placeholder text with your information
2. **Update Colors** - Adjust the color scheme in `globals.css`
3. **Add Your Images** - Replace placeholder icons with real assets
4. **Set Up Analytics** - Add Google Analytics or Vercel Analytics
5. **Configure Domain** - Point your domain to the deployed site
6. **Add Forms Integration** - Connect contact form to your backend service
7. **Set Up SEO** - Update meta tags for better search engine visibility

---

## 💡 Tips & Best Practices

- Use consistent component spacing (py-20 for sections)
- Keep animations duration around 0.6s for smooth feel
- Test on mobile devices before deployment
- Use Tailwind's responsive prefixes (md:, lg:) for layouts
- Keep brand colors consistent across all sections
- Update metadata in `app/layout.tsx` for SEO
- Consider adding a CMS for easier content management

Happy building! 🚀
