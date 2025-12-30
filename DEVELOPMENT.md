# KOEL Landing Page - Development Guide

## Architecture Overview

This is a **production-ready, premium landing page** built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

### Key Principles

1. **Performance First** - Memoization, optimized re-renders, efficient animations
2. **Clean Architecture** - Clear separation of concerns, centralized state management
3. **Type Safety** - Full TypeScript coverage for better DX
4. **Accessibility** - Semantic HTML, ARIA labels where needed
5. **Mobile-First** - Responsive design from ground up
6. **Premium UX** - Smooth animations, micro-interactions, luxury feel

---

## Project Structure

```
/app
├── /components
│   ├── /layout          # Header, Footer (fixed components)
│   ├── /sections        # Page sections (HeroSection, ProductSystemSection, etc.)
│   └── /ui              # Reusable UI components (Button, Card, LoadingScreen, etc.)
├── /config              # Centralized configuration
│   ├── animations.ts    # All animation timings and easing functions
│   └── index.ts         # Config exports
├── /hooks               # Custom React hooks
│   ├── useMediaQuery.ts # Responsive design hooks
│   ├── useHeroTransition.ts # Hero animation management
│   └── index.ts         # Hook exports
├── /providers           # React Context providers
│   └── AppStateProvider.tsx # Global app state (isLoading, isTransitioning)
├── page.tsx             # Main landing page (orchestrator)
├── layout.tsx           # Root layout with metadata
└── globals.css          # Global styles
```

---

## State Management

### AppStateProvider

Global state is managed via React Context in `AppStateProvider.tsx`:

```typescript
const { isLoading, isTransitioning, handleLoadingComplete } = useAppState();
```

**State Variables:**
- `isLoading` - Loading screen is visible (0-2500ms)
- `isTransitioning` - Hero transition animation is playing (2500-3000ms)
- `handleLoadingComplete` - Callback to transition from loading → hero animation

**Why Context API?**
- Avoids prop drilling
- Centralized state updates
- Easy to debug and maintain
- Perfect for this use case (global but not complex)

---

## Custom Hooks

### useMediaQuery

Detects screen size changes reactively:

```typescript
const { isMobile, isLoaded } = useIsMobile(768);
const { isDesktop, isLoaded } = useIsDesktop();
```

**Usage:** Responsive UI components that need to render differently on mobile/desktop.

### useHeroTransition

Manages hero section animation timing:

```typescript
const { showTransition, timings } = useHeroTransition();
```

**Timings object includes:**
- `irisDuration` - Circle reveal animation duration
- `scaleDelay` - When scale animation starts
- `totalDuration` - Complete animation time

**Why a custom hook?**
- Single source of truth for animation timing
- Easy to adjust all timings in one place
- Reusable logic that can be shared with other components

---

## Animation Configuration

All animation values are centralized in `/app/config/animations.ts`:

```typescript
ANIMATION_TIMINGS.HERO_TRANSITION.IRIS
ANIMATION_TIMINGS.HERO_TRANSITION.SCALE
ANIMATION_TIMINGS.HEADER.FADE
// ... etc
```

**Benefits:**
- ✅ Easy to adjust animations globally
- ✅ Consistent timing across entire app
- ✅ Version control friendly (single file to diff)
- ✅ TypeScript support for safety

---

## Performance Optimization

### Component Memoization

Components that don't need frequent re-renders are memoized:

```typescript
const HeroSection = memo(HeroSectionComponent);
const HeaderWrapper = memo(function HeaderWrapper({ isTransitioning }) { ... });
```

**When to use memo:**
- Component receives props that rarely change
- Component is expensive to render
- Parent components re-render frequently

### useCallback

Event handlers are wrapped in `useCallback` to preserve reference equality:

```typescript
const handleLoadingComplete = useCallback(() => {
  // ...
}, []);
```

**Why?**
- Prevents child components from unnecessary re-renders
- Improves performance with memoized children
- Required for optimization to work properly

---

## Loading & Transition Flow

```
┌─────────────────────────────────────────────────────┐
│ 1. PAGE LOADS                                        │
│    isLoading = true                                  │
│    → LoadingStateOverlay visible                     │
│    → LoadingScreen visible (splash screen)           │
│    → All other content hidden                        │
└─────────────────────────────────────────────────────┘
                        ↓
         [2500ms minimum loading duration]
                        ↓
┌─────────────────────────────────────────────────────┐
│ 2. HERO TRANSITION STARTS                           │
│    isLoading = false                                │
│    isTransitioning = true                           │
│    → LoadingScreen exits                            │
│    → Hero image iris opens + expands (2.8s)         │
│    → Header fades out (opacity 0)                   │
│    → Background stays cream color                   │
└─────────────────────────────────────────────────────┘
                        ↓
         [2.8s hero transition animation]
                        ↓
┌─────────────────────────────────────────────────────┐
│ 3. CONTENT APPEARS                                  │
│    isTransitioning = false                          │
│    → Background changes to normal                   │
│    → Header fades in (opacity 1)                    │
│    → All sections visible                           │
│    → User can scroll and interact                   │
└─────────────────────────────────────────────────────┘
```

---

## Mobile-First Development

### Responsive Breakpoints

```typescript
BREAKPOINTS = {
  MOBILE: 640,    // sm
  TABLET: 768,    // md
  DESKTOP: 1024,  // lg
  WIDE: 1280      // xl
}
```

### Pattern: Mobile First

```typescript
// Show on mobile only
<div className="md:hidden">Mobile content</div>

// Show on desktop only
<div className="hidden md:block">Desktop content</div>
```

### useMediaQuery Hook

```typescript
const { isMobile } = useIsMobile();

if (isMobile) {
  return <MobileVersion />;
}
return <DesktopVersion />;
```

---

## Z-Index Strategy

All z-index values are centralized:

```typescript
Z_INDEX = {
  BLOCKER: 9998,         // Loading overlay (covers everything)
  LOADING_SCREEN: 9999,  // Splash screen (on top of blocker)
  HEADER: 50,            // Fixed header (always visible)
  HERO_TRANSITION: 20,   // Hero animation
  MODALS: 40,            // Popup modals
  DROPDOWN: 30,          // Dropdown menus
}
```

**Stacking order (highest to lowest):**
1. LoadingScreen (9999) - Visible during loading
2. LoadingStateOverlay (9998) - Blocks content during loading
3. Header (50) - Always visible, fades during transition
4. Modals (40)
5. Dropdown (30)
6. Hero transition (20)
7. Normal content (10)

---

## Adding New Features

### New Section

1. Create component in `/components/sections/NewSection.tsx`
2. Make it a client component if needed: `'use client';`
3. Add to exports in `/components/sections/index.ts`
4. Import and render in `page.tsx`

### New Animation

1. Add timing to `/config/animations.ts`
2. Reference in component: `ANIMATION_TIMINGS.NEW_ANIMATION`
3. Use Framer Motion with the config values

### New Custom Hook

1. Create in `/hooks/useNewHook.ts`
2. Export from `/hooks/index.ts`
3. Use in components: `import { useNewHook } from '@/app/hooks'`

---

## Testing Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Testing Loading Flow

1. Page loads → See loading screen (2.5s minimum)
2. Loading screen exits → Hero transition begins
3. Image expands with iris effect (2.8s)
4. Header fades in, content appears
5. Test on mobile and desktop

---

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

**Note:** Smooth scroll (Lenis) may have limited support on older browsers, but site remains functional.

---

## Performance Tips

### Optimize Images

```typescript
// ✅ Good - Next.js Image optimization
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority // Critical images only
/>

// ❌ Bad - Regular img tag
<img src="/hero.jpg" alt="Hero" />
```

### Avoid Inline Objects

```typescript
// ❌ Bad - Creates new object on every render
<motion.div style={{ color: 'red' }} />

// ✅ Good - Static object
const styles = { color: 'red' };
<motion.div style={styles} />
```

### Use Framer Motion Properly

```typescript
// ✅ Good - Exits don't cause layout shift
<AnimatePresence mode="wait">
  {condition && <motion.div exit={{ opacity: 0 }} />}
</AnimatePresence>

// ✅ Good - Avoid re-renders with correct dependencies
useEffect(() => {
  // ...
}, [specificValue]); // Not [])
```

---

## Debugging

### Check State with React DevTools

1. Install React DevTools extension
2. Open DevTools → Components tab
3. Find `AppStateProvider` → Inspect `isLoading`, `isTransitioning`

### Debug Animations

1. Slow down animations in DevTools (25% speed)
2. Add `key` prop to motion components to force remount
3. Check Framer Motion Console for errors

---

## Common Issues & Solutions

### Header Flickering

**Problem:** Header disappears and reappears briefly during scroll.
**Solution:** Already fixed! Header is memoized and only animates opacity.

### Image Appearing Too Early

**Problem:** Hero transition image visible during loading screen.
**Solution:** `showTransition` only becomes true after `isLoading` is false.

### Animations Not Playing

**Problem:** Motion components not animating.
**Solution:** Ensure `animate` prop is different from `initial`, check `transition` is defined.

---

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: Add new feature"

# Push to branch
git push -u origin feature/new-feature

# Create PR with clear description
```

---

## Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Hooks:** https://react.dev/reference/react/hooks
- **TypeScript:** https://www.typescriptlang.org/docs/

---

## Questions?

Refer to:
1. This DEVELOPMENT.md file
2. Code comments in specific files
3. Component exports in `/components/sections/index.ts`
4. Animation config in `/app/config/animations.ts`

---

**Last Updated:** December 2024
**Team:** KOEL Development
