# PentaCore Portfolio - Component Inventory

Complete reference guide for all components with their props, animations, and customization options.

---

## 📋 Component List

### 1. Navigation Component
**File**: `components/Navigation.tsx`

**Purpose**: Fixed header with mobile menu and navigation links

**Features**:
- Fixed positioning with blur backdrop
- Mobile hamburger menu
- Desktop navigation items
- CTA button
- Logo with gradient

**Key Props**:
```typescript
interface NavItems {
  label: string
  href: string
}
```

**Customization**:
```typescript
const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  // Add more items
]
```

**Animations**:
- Logo: fade-in from left (0.5s)
- Nav items: staggered fade-in (0.1s delay between items)
- Mobile menu: smooth slide-down

---

### 2. Hero3D Component
**File**: `components/Hero3D.tsx`

**Purpose**: Hero section with 3D canvas background and gradient text

**Features**:
- React Three Fiber canvas integration
- Gradient background overlay
- Dynamic gradient text
- CTA buttons (primary + secondary)
- Stats showcase (3 columns)

**Customization**:
```typescript
// Update heading text
h1 className text: "Digital Solutions for\nModern Business"

// Update CTA text
button: "Get Started Now", "Watch Demo"

// Update stats
stats: [
  { value: '400+', label: 'Active Users' },
  { value: '50M+', label: 'Orders Processed' },
  { value: '24/7', label: 'Support' },
]
```

**Animations**:
- Main heading: fade-in-up (0.8s, 0.2s delay)
- Buttons: fade-in-up (0.8s, 0.4s delay)
- Stats: fade-in (0.8s, 0.6s delay)

---

### 3. Services Component
**File**: `components/Services.tsx`

**Purpose**: Display 6 service offerings in a grid

**Features**:
- 6 service cards with icons
- Gradient backgrounds on hover
- Icon badges with gradients
- Learn more link reveals on hover
- Responsive grid (1-2-3 columns)

**Service Data Structure**:
```typescript
interface Service {
  icon: IconType
  title: string
  description: string
  color: string // Gradient class like 'from-blue-500 to-cyan-500'
}
```

**Available Icons** (from lucide-react):
- ShoppingCart, CreditCard, Truck, Monitor, Zap, Users

**Customization**:
```typescript
const services = [
  {
    icon: ShoppingCart,
    title: 'Online Ordering System',
    description: 'Let customers order easily...',
    color: 'from-blue-500 to-cyan-500',
  },
  // Add more services
]
```

**Animations**:
- Container: staggered children (0.1s delay)
- Cards: fade-in-up (0.6s)
- Hover: subtle scale and shadow

---

### 4. Features Component
**File**: `components/Features.tsx`

**Purpose**: Showcase 6 key features/benefits

**Features**:
- Feature grid with icons
- Icon gradient backgrounds
- Hover effects on cards
- Bottom CTA section
- 3-column responsive layout

**Feature Data Structure**:
```typescript
interface Feature {
  icon: IconType
  title: string
  description: string
}
```

**Available Icons**:
- CheckCircle2, Settings, Globe, BarChart3, Lock, Clock

**Customization**:
```typescript
const features = [
  {
    icon: CheckCircle2,
    title: 'Easy to Setup',
    description: 'No programming required...',
  },
  // Add more features
]
```

**Animations**:
- Cards: individual fade-in-up with 0.1s delay per index

---

### 5. InteractiveShowcase Component
**File**: `components/InteractiveShowcase.tsx`

**Purpose**: Interactive showcase with parallax scroll effects

**Features**:
- 4-item showcase grid
- Scroll-based opacity/scale transforms
- Animated gradient lines
- Background blur elements
- Hover effects on cards

**Showcase Data Structure**:
```typescript
interface ShowcaseItem {
  icon: IconType
  title: string
  description: string
  color: string // Gradient class
}
```

**Customization**:
```typescript
const showcaseItems = [
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Fully responsive platform...',
    color: 'from-blue-500 to-cyan-500',
  },
  // Add more items
]
```

**Animations**:
- Uses scroll progress (0.5s at halfway point)
- Opacity: 0.3 → 1 → 0.3
- Scale: 0.8 → 1 → 0.8
- Animated line: scaleX 0 → 1

---

### 6. Clients Component
**File**: `components/Clients.tsx`

**Purpose**: Display client logos and statistics

**Features**:
- 24 client logo placeholders
- 6-column responsive grid
- Hover scale effects
- Bottom stats section (3 columns)
- "Trusted by" header

**Data**:
```typescript
const clients = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  name: `Client ${i + 1}`,
}))

stats: [
  { value: '400+', label: 'Active Clients' },
  { value: '50M+', label: 'Orders Processed' },
  { value: '24/7', label: 'Uptime Guarantee' },
]
```

**Customization**:
- Replace placeholder divs with actual client logos
- Update stats numbers
- Change section heading

---

### 7. Testimonials Component
**File**: `components/Testimonials.tsx`

**Purpose**: Display client testimonials and social proof

**Features**:
- 4 testimonial cards with ratings
- Star rating display
- Quote icons
- Author avatars
- Bottom clients logo section

**Testimonial Data Structure**:
```typescript
interface Testimonial {
  name: string
  role: string
  quote: string
  rating: number // 1-5
  image: string // Emoji or icon
}
```

**Example**:
```typescript
{
  name: 'Miss Mahnoor',
  role: 'CEO Bigbash',
  quote: 'We have been using PentaCore...',
  rating: 5,
  image: '👨‍💼',
}
```

**Animations**:
- Cards: fade-in-up with 0.1s stagger
- Hover: border color change to primary

---

### 8. Blog Component
**File**: `components/Blog.tsx`

**Purpose**: Display blog posts and article previews

**Features**:
- 3 blog post cards
- Category badges
- Date display with calendar icon
- Image placeholders (emoji-based)
- Hover animations
- Newsletter subscription section

**Blog Post Data Structure**:
```typescript
interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string // Emoji
}
```

**Example**:
```typescript
{
  id: 1,
  title: 'Top Karachi\'s Restaurant Owners...',
  excerpt: 'In a city where restaurant owners...',
  date: 'January 29, 2026',
  category: 'Industry News',
  image: '📰',
}
```

**Customization**:
- Update blog post content
- Add real images or use different emojis
- Change category tags
- Update dates

---

### 9. Pricing Component
**File**: `components/Pricing.tsx`

**Purpose**: Display 3-tier pricing with toggle

**Features**:
- Monthly/yearly toggle
- 3 pricing tiers
- "Most Popular" highlight on tier 2
- Feature lists with checkmarks
- Bottom "All plans include" section

**State**:
```typescript
const [selectedBilling, setSelectedBilling] = useState('monthly')
```

**Plan Data Structure**:
```typescript
interface Plan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlight: boolean
}
```

**Example**:
```typescript
{
  name: 'Professional',
  price: '$99',
  period: 'per month',
  description: 'For growing restaurants...',
  features: ['Everything in Starter', 'Unlimited Visitors', ...],
  cta: 'Start 14-Days Trial',
  highlight: true,
}
```

**Customization**:
- Update pricing amounts
- Change feature lists
- Modify tier names
- Adjust highlight position

---

### 10. Contact Component
**File**: `components/Contact.tsx`

**Purpose**: Contact form with submission handling

**Features**:
- Multi-field form (name, email, phone, company, locations, services, message)
- Contact info sidebar (3 contact methods)
- Quick action buttons
- Form submission with success message
- Client-side validation

**State**:
```typescript
const [formData, setFormData] = useState({
  name: '', email: '', phone: '', company: '',
  locations: '', services: [], message: ''
})
const [submitted, setSubmitted] = useState(false)
```

**Contact Methods**:
- Phone: +92 345-297-5578
- Email: hello@pentacore.com
- Location: Karachi, Pakistan

**Customization**:
- Update contact information
- Modify form fields
- Add backend integration for submissions
- Change location
- Update support hours

---

### 11. Footer Component
**File**: `components/Footer.tsx`

**Purpose**: Website footer with links and social media

**Features**:
- Brand section with logo
- 4-column footer links (Product, Company, Resources, Legal)
- Social media links (Facebook, Twitter, LinkedIn, Instagram)
- Newsletter subscription
- Bottom copyright bar

**Social Links**:
- Facebook, Twitter, LinkedIn, Instagram (links placeholder)

**Footer Sections**:
```typescript
{
  title: 'Product',
  links: ['Online Ordering', 'POS System', ...]
}
```

**Customization**:
- Update social media links (href attributes)
- Modify footer link sections
- Change company information
- Update copyright year (auto-calculated)

---

### 12. ScrollAnimations Component
**File**: `components/ScrollAnimations.tsx`

**Purpose**: Reusable scroll-triggered animations

**Exported Functions**:

1. **FadeInOnScroll**
   - Fades in as element enters viewport
   - Usage: Wrap any content

2. **SlideInOnScroll**
   - Slides in from left (X-axis)
   - Usage: Wrap any content

3. **ScaleInOnScroll**
   - Scales up while fading in
   - Usage: Wrap any content

4. **ParallaxScroll**
   - Parallax vertical movement
   - Usage: For background elements

5. **RotateInOnScroll**
   - Rotates 360° while fading in
   - Usage: For rotating elements

**Usage Example**:
```typescript
import { FadeInOnScroll } from '@/components/ScrollAnimations'

<FadeInOnScroll>
  <div>Content fades in on scroll</div>
</FadeInOnScroll>
```

---

### 13. FloatingShapes Component (3D)
**File**: `components/3d/FloatingShapes.tsx`

**Purpose**: Three.js scene with animated geometric shapes

**Features**:
- Animated sphere (cyan, 2 radius)
- Rotating torus (blue, 2.5 radius)
- Moving box (sky blue)
- 15 floating particles
- Point lighting (2 colored lights)
- Emissive materials for glow

**3D Objects**:

1. **Sphere**
   - Position: [-5, 0, 0]
   - Color: #22c3ff
   - Animation: Vertical sine wave + rotation

2. **Torus**
   - Position: [5, 0, -5]
   - Color: #3b82f6
   - Animation: Circular horizontal + rotation

3. **Box**
   - Position: [0, 3, -8]
   - Color: #0ea5e9
   - Animation: Sine wave Z-axis + rotation

4. **Particles (15)**
   - Random positions
   - Size: 0.1 - 0.4
   - Alternating colors

**Customization**:
- Change geometry args: `sphereGeometry args={[radius, widthSegments, heightSegments]}`
- Adjust animation speed: multiply Date.now() value
- Change colors in material definitions
- Add/remove particles in the loop
- Modify light positions and colors

---

## 🎨 Reusable Patterns

### Animation Pattern (Framer Motion)
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Card Hover Pattern
```typescript
className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
```

### Icon Gradient Pattern
```typescript
<div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color}`}>
  <Icon className="text-white" size={24} />
</div>
```

### Responsive Grid Pattern
```typescript
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```

---

## 🔄 Data Flow

```
page.tsx (imports all)
├── Navigation (nav items data)
├── Hero3D (FloatingShapes import)
├── Services (services array)
├── Features (features array)
├── InteractiveShowcase (showcase items)
├── Clients (clients array)
├── Testimonials (testimonials array)
├── Blog (blog posts array)
├── Pricing (plans array)
├── Contact (form state, contact info)
└── Footer (footer sections, social links)
```

---

## 🎯 Quick Reference

| Component | File | Animations | Responsive | Interactive |
|-----------|------|-----------|-----------|------------|
| Navigation | Navigation.tsx | ✓ | Mobile menu | Yes |
| Hero3D | Hero3D.tsx | ✓ | ✓ | Canvas |
| Services | Services.tsx | ✓ | ✓ | Hover |
| Features | Features.tsx | ✓ | ✓ | Hover |
| Interactive | InteractiveShowcase.tsx | ✓ | ✓ | Scroll |
| Clients | Clients.tsx | ✓ | ✓ | Hover |
| Testimonials | Testimonials.tsx | ✓ | ✓ | Static |
| Blog | Blog.tsx | ✓ | ✓ | Hover |
| Pricing | Pricing.tsx | ✓ | ✓ | Toggle |
| Contact | Contact.tsx | ✓ | ✓ | Form |
| Footer | Footer.tsx | ✓ | ✓ | Links |

---

## 🚀 Performance Notes

- All components use `viewport={{ once: true }}` to prevent re-triggering animations
- 3D scene uses `Suspense` for lazy loading
- Images can be optimized with Next.js Image component
- Tailwind CSS handles responsive design efficiently
- Framer Motion animations are GPU-accelerated

This component inventory provides everything needed for customization and extension!
