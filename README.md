# Mahalaxmi Agri Commodities Website

A world-class, production-ready website for Mahalaxmi Agri Commodities — India's premier agricultural commodity brokerage.

## 🌐 Live Website

**URL:** https://mahalaxmiagri.com

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Pages Included](#pages-included)
4. [Deploy to Vercel (No Terminal Required)](#deploy-to-vercel-no-terminal-required)
5. [Deploy to GitHub + Vercel](#deploy-to-github--vercel)
6. [Project Structure](#project-structure)
7. [Design System](#design-system)
8. [SEO & AEO Features](#seo--aeo-features)
9. [Customization Guide](#customization-guide)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

This is a premium, editorial-style website built for **Mahalaxmi Agri Commodities**, a commodity brokerage based in Rajkot, Gujarat, India. The website positions the company as "The Trusted Network Behind India's Agricultural Trade" with a sophisticated, data-driven aesthetic inspired by Bloomberg, JP Morgan, and Trafigura.

**Business Details:**
- **Founder:** Kishan Raichura
- **Established:** 2008 (17+ years)
- **Location:** Rajkot, Gujarat, India
- **Phone:** +91 90330 00032 | +91 98255 00032
- **Email:** mahalaxmiagricommodities@gmail.com
- **Website:** www.mahalaxmiagri.com

---

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.1.0 | React framework with App Router |
| React | 19.0.0 | UI library |
| TypeScript | 5.7.0 | Type safety |
| Tailwind CSS | 3.4.0 | Utility-first styling |
| Framer Motion | 11.15.0 | Animations & transitions |
| GSAP | 3.12.0 | Advanced animations |
| Lenis | 1.1.0 | Smooth scrolling |
| Three.js | 0.171.0 | 3D experiences |
| React Three Fiber | 9.0.0 | React Three.js integration |
| Lucide React | 0.460.0 | Icons |

---

## Pages Included

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Hero, metrics, process, commodities, intelligence, network, testimonials, insights, CTA |
| **About** | `/about/` | Company story, founder info, values, contact details |
| **Services** | `/services/` | 6 brokerage services with features |
| **Commodities** | `/commodities/` | Category grid + all commodities listing |
| **Spices** | `/commodities/spices/` | Cumin, Fennel details |
| **Pulses** | `/commodities/pulses/` | Tur, Moong, Urad, Chana details |
| **Oil Seeds** | `/commodities/oil-seeds/` | Sesame, Groundnut, Cotton Seed details |
| **Cotton** | `/commodities/cotton/` | Cotton details |
| **Market Intelligence** | `/market-intelligence/` | Dashboard, price charts, reports |
| **Knowledge Center** | `/knowledge-center/` | Searchable article grid with categories |
| **Case Studies** | `/case-studies/` | 3 success stories with challenges/solutions/results |
| **FAQ** | `/faq/` | 8 AEO-optimized questions with accordion |
| **Contact** | `/contact/` | Contact form + contact information |
| **Buyer Request** | `/buyer-request/` | Sourcing match request form |
| **Supplier Request** | `/supplier-request/` | Commodity listing form |
| **Privacy Policy** | `/privacy-policy/` | Legal privacy policy |
| **Terms of Service** | `/terms-of-service/` | Legal terms |
| **Sitemap** | `/sitemap/` | HTML sitemap page |

---

## Deploy to Vercel (No Terminal Required)

### Method 1: Direct Vercel Import (Recommended — Easiest)

This method requires **zero terminal commands** and takes about 5 minutes.

#### Step 1: Upload to GitHub (No Terminal)

1. Go to https://github.com/new
2. Enter repository name: `mahalaxmi-agri-website`
3. Choose **Public** or **Private**
4. Click **Create repository**
5. On the new repo page, click **uploading an existing file** link
6. Drag and drop ALL files from this folder into the GitHub upload area
7. Wait for upload to complete, then click **Commit changes**

> ⚠️ **Important:** Make sure to upload the ENTIRE folder contents including:
> - `package.json`
> - `next.config.js`
> - `tsconfig.json`
> - `tailwind.config.ts`
> - `postcss.config.js`
> - `src/` folder (all components, pages, data, styles)
> - `public/` folder

#### Step 2: Deploy on Vercel

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Find and select your `mahalaxmi-agri-website` repository
4. Vercel will auto-detect Next.js settings
5. Click **Deploy**
6. Wait 2-3 minutes for build to complete
7. Your site is live! 🎉

#### Step 3: Add Custom Domain (mahalaxmiagri.com)

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Enter `mahalaxmiagri.com` and click **Add**
4. Follow Vercel's DNS instructions to point your domain
5. Usually just add these records at your domain registrar:
   - **Type:** A | **Name:** @ | **Value:** 76.76.21.21
   - **Type:** CNAME | **Name:** www | **Value:** cname.vercel-dns.com

---

## Deploy to GitHub + Vercel

### Step 1: Create GitHub Repository

1. Visit https://github.com/new
2. Name: `mahalaxmi-agri-website`
3. Visibility: Public (or Private)
4. Click **Create repository**

### Step 2: Upload Files

**Option A — GitHub Web Upload (No Terminal):**
1. On your new repo page, click **uploading an existing file**
2. Drag and drop all project files
3. Commit changes

**Option B — GitHub Desktop (No Terminal):**
1. Download GitHub Desktop: https://desktop.github.com
2. Sign in with your GitHub account
3. Click **File** → **Add local repository**
4. Select this project folder
5. Click **Publish repository**

### Step 3: Deploy to Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Framework preset: Next.js (auto-detected)
4. Click **Deploy**

---

## Project Structure

```
mahalaxmi-agri-website/
├── package.json              # Dependencies & scripts
├── next.config.js            # Next.js configuration (static export)
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS design system
├── postcss.config.js         # PostCSS configuration
├── next-env.d.ts             # Next.js types
├── .gitignore                # Git ignore rules
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── page.tsx          # Homepage
│   │   ├── layout.tsx        # Root layout (fonts, SEO, schema)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── commodities/
│   │   │   ├── page.tsx
│   │   │   ├── spices/
│   │   │   ├── pulses/
│   │   │   ├── oil-seeds/
│   │   │   └── cotton/
│   │   ├── market-intelligence/
│   │   ├── knowledge-center/
│   │   ├── case-studies/
│   │   ├── faq/
│   │   ├── contact/
│   │   ├── buyer-request/
│   │   ├── supplier-request/
│   │   ├── privacy-policy/
│   │   ├── terms-of-service/
│   │   └── sitemap/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx    # Navigation with mobile menu
│   │   │   ├── Footer.tsx    # Multi-column footer
│   │   │   └── SmoothScroll.tsx
│   │   ├── sections/         # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustMetrics.tsx
│   │   │   ├── NetworkProcess.tsx
│   │   │   ├── CommodityEcosystem.tsx
│   │   │   ├── MarketIntelligence.tsx
│   │   │   ├── TradeNetwork.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── KnowledgeHub.tsx
│   │   │   └── PowerCTA.tsx
│   │   └── ui/               # Reusable UI components
│   │       ├── AnimatedCounter.tsx
│   │       ├── SectionReveal.tsx
│   │       ├── StaggerContainer.tsx
│   │       ├── TextReveal.tsx
│   │       ├── GradientText.tsx
│   │       └── ParticleBackground.tsx
│   ├── data/                 # Content data
│   │   ├── site.ts           # Site config, navigation, metrics
│   │   ├── commodities.ts    # 10 commodities data
│   │   ├── services.ts       # 6 services data
│   │   ├── testimonials.ts   # 4 testimonials
│   │   ├── faq.ts            # 8 FAQ items
│   │   └── insights.ts       # 5 market insights
│   ├── lib/
│   │   ├── utils.ts          # Utility functions
│   │   └── seo.ts            # SEO metadata generator
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   └── styles/
│       └── globals.css       # Global styles, fonts, animations
└── public/                   # Static assets
    └── images/               # Image assets (add your own)
```

---

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#DE2A72` | Brand color, CTAs, accents |
| Primary Light | `#F5A0C4` | Hover states |
| Primary Dark | `#B01F5A` | Active states |
| Secondary | `#F7F7F7` | Backgrounds |
| Accent | `#D8A463` | Gold accents, highlights |
| Accent Light | `#E8C89A` | Hover accents |
| Text | `#101010` | Primary text |
| Text Light | `#4A4A4A` | Secondary text |
| Text Muted | `#8A8A8A` | Captions, labels |
| Background | `#FFFFFF` | Page background |

### Typography

| Role | Font | Weights |
|------|------|---------|
| Body | Barlow | 300, 400, 500, 600, 700 |
| Display | Cormorant Garamond | 400, 500, 600, 700 |

### Font Sizes (Responsive)

| Token | Size | Line Height |
|-------|------|-------------|
| display-1 | clamp(3rem, 8vw, 7rem) | 1.05 |
| display-2 | clamp(2.5rem, 6vw, 5rem) | 1.1 |
| display-3 | clamp(2rem, 4vw, 3.5rem) | 1.15 |
| heading-1 | clamp(1.5rem, 3vw, 2.5rem) | 1.2 |
| heading-2 | clamp(1.25rem, 2vw, 1.75rem) | 1.3 |
| body-lg | 1.125rem | 1.7 |
| body | 1rem | 1.7 |
| body-sm | 0.875rem | 1.6 |
| caption | 0.75rem | 1.5 |

---

## SEO & AEO Features

### Implemented SEO

- ✅ Meta titles & descriptions for all pages
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ Structured data (Schema.org):
  - Organization schema
  - WebSite schema
  - LocalBusiness data
- ✅ Semantic HTML (proper heading hierarchy)
- ✅ Keywords optimized for:
  - "agricultural commodity broker India"
  - "commodity sourcing India"
  - "spice procurement India"
  - "oil seed suppliers India"
  - "pulse sourcing India"
  - "Rajkot commodity broker"
  - "Gujarat agricultural trade"

### AEO (Answer Engine Optimization)

- ✅ FAQ page with direct answers to common questions
- ✅ Content structured for AI answer engines
- ✅ Answers to:
  - "What does an agricultural commodity broker do?"
  - "How do exporters find reliable suppliers?"
  - "How can buyers reduce sourcing risk?"
  - "What are the advantages of commodity brokerage?"
  - "How does agricultural procurement work in India?"

---

## Customization Guide

### Change Business Information

Edit `src/data/site.ts`:

```typescript
export const siteConfig = {
  name: "Mahalaxmi Agri Commodities",
  tagline: "The Trusted Network Behind India's Agricultural Trade",
  founder: "Kishan Raichura",
  location: {
    marketing: "Tower A-118 New Marketing Yard, Rajkot Morbi Highway, Bedi, Rajkot (Gujarat) 360 003",
    main: "408-Star Plaza, Phulchhab Chowk, Rajkot (Gujarat) 360 001",
  },
  contact: {
    phone: ["+91 90330 00032", "+91 98255 00032"],
    email: "mahalaxmiagricommodities@gmail.com",
    website: "www.mahalaxmiagri.com",
  },
  // ...
}
```

### Add New Commodities

Edit `src/data/commodities.ts` and add to the `commodities` array:

```typescript
{
  id: "11",
  name: "New Commodity",
  category: "spices",
  description: "Description here...",
  origin: ["Gujarat"],
  seasonality: "Month - Month",
  varieties: ["Variety 1", "Variety 2"],
  specifications: "Specs here...",
  image: "/images/commodities/new.jpg",
  slug: "new-commodity",
}
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "#DE2A72",      // Change this
  accent: "#D8A463",       // Change this
  text: "#101010",         // Change this
  // ...
}
```

### Add Images

1. Place images in `public/images/`
2. Reference in components: `src="/images/your-image.jpg"`
3. Recommended sizes:
   - Hero backgrounds: 1920x1080
   - Commodity cards: 800x600
   - Team photos: 600x800
   - OG image: 1200x630

---

## Troubleshooting

### Build Errors

**Error: "Cannot find module"**
- Make sure all dependencies are installed
- Run `npm install` in the project folder

**Error: "Image optimization"**
- This project uses `unoptimized: true` in `next.config.js`
- Images are served as static files

**Error: "TypeScript errors"**
- Check that `tsconfig.json` is present
- Ensure all imports use correct paths with `@/` prefix

### Common Issues

**Fonts not loading:**
- Fonts are loaded via Google Fonts in `src/styles/globals.css`
- Ensure internet connection during build

**Animations not working:**
- Framer Motion requires JavaScript to be enabled
- Check browser console for errors

**Mobile menu not opening:**
- Check that `lucide-react` is installed
- Verify Header component is imported correctly

---

## Performance

- ✅ Static HTML export (no server needed)
- ✅ Optimized for Lighthouse 95+
- ✅ Responsive design (mobile-first)
- ✅ Accessible (ARIA labels, semantic HTML)
- ✅ Fast loading (minimal JavaScript)

---

## License

© 2026 Mahalaxmi Agri Commodities. All rights reserved.

---

## Support

For questions or issues:
- Email: mahalaxmiagricommodities@gmail.com
- Phone: +91 90330 00032
