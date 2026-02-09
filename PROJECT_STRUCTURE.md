# PentaCore Portfolio Website - Project Structure

A professional, fully-separated component architecture built with Next.js 16, React Three Fiber, and Framer Motion.

## 🎨 Design System

### Color Palette
- **Primary**: Professional Blue (`#3b82f6`)
- **Secondary/Accent**: Tech Cyan (`#22c3ff`)
- **Neutrals**: White, Grays, and Dark variants for light/dark modes
- **Gradients**: Blue → Cyan combinations for modern feel

### Typography
- **Headings**: Geist Font (Bold weights)
- **Body**: Geist Font (Regular weights)
- All font utilities applied via `font-sans` class

## 📁 File Structure

### Root Configuration Files
- `package.json` - Dependencies including React Three Fiber, Framer Motion, and shadcn/ui
- `tailwind.config.ts` - Tailwind CSS configuration with theme tokens
- `tsconfig.json` - TypeScript configuration
- `next.config.mjs` - Next.js configuration

### App Directory (`/app`)
```
/app
├── layout.tsx          - Root layout with metadata
├── globals.css         - Global styles with design tokens & animations
└── page.tsx            - Main page importing all components
```

### Components Directory (`/components`)

#### Layout Components
- **Navigation.tsx** - Fixed navigation with mobile menu, smooth animations, and CTA buttons
- **Footer.tsx** - Footer with links, social media, newsletter subscription

#### Main Section Components
- **Hero3D.tsx** - Hero section with 3D Three.js canvas, gradient text, and stats
- **Services.tsx** - 6 service cards with gradient icons and hover effects
- **Features.tsx** - Feature grid highlighting key benefits with icons
- **InteractiveShowcase.tsx** - Interactive showcase with parallax scroll and gradient accents
- **Clients.tsx** - Client logos grid with stats (24 client placeholders)
- **Testimonials.tsx** - 4 testimonial cards with ratings and author info
- **Blog.tsx** - 3 blog post cards with categories and newsletter signup
- **Pricing.tsx** - 3 pricing tiers (Starter, Professional, Enterprise) with billing toggle
- **Contact.tsx** - Multi-field contact form with contact info sidebar

#### Utility Components
- **ScrollAnimations.tsx** - Reusable scroll animation hooks:
  - `FadeInOnScroll` - Fade animation on scroll
  - `SlideInOnScroll` - Slide animation from left
  - `ScaleInOnScroll` - Scale and fade combined
  - `ParallaxScroll` - Parallax scroll effect
  - `RotateInOnScroll` - Rotation animation

#### 3D Components (`/components/3d`)
- **FloatingShapes.tsx** - Three.js scene with:
  - Animated floating sphere (cyan)
  - Rotating torus (blue)
  - Moving box (sky blue)
  - 15 floating particles with emissive materials
  - Two point lights for dynamic lighting

### UI Components (`/components/ui`)
- Pre-built shadcn/ui components (button, card, etc.)

### Hooks (`/hooks`)
- `use-mobile.tsx` - Mobile breakpoint detection
- `use-toast.ts` - Toast notification system

### Utilities (`/lib`)
- `utils.ts` - Helper functions like `cn()` for class merging

## 🎬 Animation Features

### Framer Motion Animations
- **Entrance Animations**: Fade-in-up effects on component mount
- **Hover Effects**: Subtle scale and shadow changes on cards
- **Scroll Animations**: Staggered animations as sections come into view
- **Parallax Effects**: Scroll-triggered transforms for depth
- **Transitions**: Smooth duration (0.6s) and easing (ease-out) throughout

### CSS Animations (in globals.css)
- `fadeInUp` - 0.6s fade and slide animation
- `slideInDown` - 0.6s downward slide
- `float` - Continuous subtle up/down float
- `pulse-glow` - Glowing pulse effect for highlights

### Three.js 3D Animations
- Continuous rotating geometries
- Sin wave vertical movements
- Cosine wave horizontal movements
- Emissive material glow effects
- Particle system with random positioning

## 🔧 Component Integration Flow

```
page.tsx
├── Navigation (fixed header)
├── Hero3D (3D canvas + gradient text)
├── Services (6 service cards)
├── Features (feature grid)
├── InteractiveShowcase (parallax showcase)
├── Clients (logo grid)
├── Testimonials (testimonial cards)
├── Blog (blog posts)
├── Pricing (pricing tiers)
├── Contact (contact form)
└── Footer (footer with links)
```

## 🎯 Key Features Implemented

### Hero Section with 3D
- React Three Fiber canvas integration
- Animated geometric shapes with emissive materials
- Gradient text overlay
- Call-to-action buttons with hover animations
- Stats showcase

### Services & Features
- Icon-based cards with gradient backgrounds
- Hover animations revealing additional content
- Responsive grid layouts (1-3 columns)
- Consistent color scheme with primary/secondary accents

### Testimonials & Social Proof
- 4 client testimonials with star ratings
- Client logo grid (24 placeholders)
- Hover scale animations

### Pricing
- 3-tier pricing model with toggle for monthly/yearly
- "Most Popular" highlight on middle tier
- Feature lists with checkmarks
- Bottom section with included benefits

### Contact & Forms
- Multi-field form with validation states
- Success message animation
- Sidebar with contact options and quick actions
- Responsive layout (sidebar on desktop, above on mobile)

### Blog & Content
- Blog card grid with category badges
- Newsletter subscription section
- Date and category metadata
- Hover animations for interactivity

## 🚀 Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **React Three Fiber** - 3D scene management
- **Three.js** - 3D graphics library
- **Framer Motion** - Advanced animations
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type safety
- **shadcn/ui** - Pre-built UI components
- **Lucide Icons** - Icon library

## 📱 Responsive Design

All components follow mobile-first approach:
- **Mobile**: Single column, touch-friendly interactions
- **Tablet (md)**: 2-column layouts
- **Desktop (lg)**: 3+ column layouts

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px

## 🎨 Customization Guide

### Update Brand Colors
Edit `/app/globals.css` in the `:root` section:
```css
--primary: 220 90% 45%;      /* Change blue */
--secondary: 180 100% 50%;   /* Change cyan */
```

### Modify Content
- **Navigation**: Update `navItems` array in `Navigation.tsx`
- **Services**: Edit `services` array in `Services.tsx`
- **Testimonials**: Update `testimonials` array in `Testimonials.tsx`
- **Blog**: Edit `blogPosts` array in `Blog.tsx`
- **Pricing**: Modify `plans` array in `Pricing.tsx`

### Adjust 3D Animation
- Edit geometry properties in `FloatingShapes.tsx`
- Modify animation speeds with `useFrame` delta values
- Change colors in material definitions

### Add New Sections
1. Create new component in `/components`
2. Add `'use client'` if using hooks
3. Import in `app/page.tsx`
4. Add to component tree

## 🔄 Component Dependencies

```
Navigation ← (standalone)
Hero3D ← FloatingShapes (3D)
Services ← (standalone)
Features ← (standalone)
InteractiveShowcase ← (uses Framer Motion scroll)
Clients ← (standalone)
Testimonials ← (standalone)
Blog ← (standalone)
Pricing ← (uses state for toggle)
Contact ← (uses state for form)
Footer ← (standalone)
```

## 📊 Performance Optimizations

- Lazy loading with `<Suspense>` for 3D component
- Image optimization via Next.js
- CSS-in-JS minimization with Tailwind
- Component code splitting via dynamic imports
- Scroll animation throttling with Framer Motion

## ✅ Browser Support

- Modern browsers with ES2020+ support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Development Notes

- All components use TypeScript for type safety
- Animations use `viewport={{ once: true }}` to prevent re-triggering
- Color tokens in design system ensure consistency
- Framer Motion `transition={{ duration: 0.6 }}` is standard
- Hover states follow consistent patterns across cards

## 🚀 Deployment

Ready to deploy to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting

No environment variables required for basic setup. Add payment integration, CMS, or analytics as needed.
