# Loom House

A minimal, elegant, gallery-style website for a non-profit art & Web3 collective.

## Project Status

**STAGE 5 COMPLETE — READY FOR STAGE 6**

### Completed Stages
- ✅ **Stage 1:** Project skeleton, design system, page structure
- ✅ **Stage 2:** Home page Hero section with line-art placeholders
- ✅ **Stage 3:** Organic weaving line with scroll-linked motion
- ✅ **Stage 4:** Androgynous face line-art with stroke reveal animation
- ✅ **Stage 5:** Scroll-triggered "weaving" animation for face illustration

## Design System

### Color Palette
- **Background:** `#F7F4EF` (Warm gallery tone)
- **Warm Grey:** `#E6E2DC`
- **Soft Cocoa:** `#A38A74`
- **Burnt Sienna (CTA):** `#D18A63`
- **Black Lines:** `#1A1A1A`

### Typography
- **Headings:** Cormorant Garamond (elegant serif)
- **Body Text:** Inter (clean sans-serif)

### Layout
- 12-column grid system
- Generous whitespace (140–200px vertical spacing)
- Gallery-like aesthetic: soft, quiet, elegant

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS-in-JS + Global CSS

## Project Structure

```
loomHouse/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── artists/
│   │   └── page.tsx
│   ├── community/
│   │   └── page.tsx
│   ├── join-us/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx (Home)
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Pages

- **Home** (`/`) - Landing page with hero and mission statement
- **About** (`/about`) - Collective story and values
- **Artists** (`/artists`) - Artist profiles and featured work
- **Community** (`/community`) - Community hub and social links
- **Join Us** (`/join-us`) - Application and membership information

## Stage 1 Features

✅ Full project skeleton with Next.js  
✅ Clean folder structure  
✅ Basic routing (5 pages)  
✅ Global styles with color palette  
✅ Typography system (serif + sans-serif)  
✅ 12-column grid layout  
✅ Spacing presets (140-200px vertical)  
✅ Line-art placeholder classes  
✅ Header & Footer components  
✅ Button styles (primary & secondary)  
✅ Responsive design foundation  

## Stage 2 Features

✅ Hero component (`/components/Hero.tsx`)  
✅ Full viewport height hero section (100vh)  
✅ Androjen face line-art placeholder (460×460px, organic shape)  
✅ Large serif heading (Cormorant Garamond, 84px responsive)  
✅ Elegant subheading with extended letter-spacing  
✅ Primary CTA button (Burnt Sienna #D18A63)  
✅ Secondary text link with hover underline animation  
✅ Fully responsive design (mobile, tablet, desktop)  
✅ Centered gallery-style layout  

## Stage 3 Features

✅ WeaveLine component (`/components/WeaveLine.tsx`)  
✅ Organic Bezier curve with asymmetric, hand-drawn feel  
✅ Scroll-linked parallax motion (3-8px range)  
✅ RequestAnimationFrame for performance optimization  
✅ Passive scroll event listeners  
✅ Subtle "breathing" effect on scroll  
✅ No external animation libraries (pure React + CSS)  
✅ Clamped movement for gentle motion  
✅ Responsive design (140px desktop, 120px mobile)  
✅ Integrated seamlessly between Hero and content sections  

## Stage 4 Features

✅ FaceLineArt component (`/components/FaceLineArt.tsx`)  
✅ Androgynous abstract face illustration (gender-neutral)  
✅ Single continuous line drawing style  
✅ Refined continuous-line path (Stage 4.4)  
✅ Legible features (eyes, nose, mouth)  
✅ Organic and asymmetric hand-drawn quality  
✅ Woven aesthetic (line loops behind/around features)  

## Stage 5 Features

✅ Scroll-triggered drawing animation  
✅ Progress mapped to scroll position (0% to 100%)  
✅ Use of `requestAnimationFrame` for high performance  
✅ Optimized drawing range (starts at 80% viewport, ends at 20%)  
✅ Subtle opacity transition (0.3 → 1.0)  
✅ Smooth CSS transitions (0.1s linear)  
✅ `will-change` optimization  
✅ Fully responsive drawing behavior  

## Next Steps

Stage 6 will include:
- Final polish of interactions
- Additional page content implementation
- Performance tuning

---

**Loom House** — Where Art Meets Web3

// STAGE 5 COMPLETE — READY FOR STAGE 6

