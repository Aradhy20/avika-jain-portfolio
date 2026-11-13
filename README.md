# Avika Jain — Award-Winning Creative Portfolio

A premium, interactive, editorial personal portfolio website for **Avika Jain** — Graphic Designer, UI/UX & Product Designer, and Video Editor.

- **GitHub Repository**: [https://github.com/Aradhy20/avika-jain-portfolio](https://github.com/Aradhy20/avika-jain-portfolio)
- **Live Deployment**: [https://avika-jain-portfolio.vercel.app/](https://avika-jain-portfolio.vercel.app/)

---

## Architecture & Tech Stack

- **Framework**: Next.js 15 (App Router, React 19, TypeScript)
- **Animation System**: Framer Motion 12 with full `prefers-reduced-motion` compliance
- **Icons**: Lucide React
- **Aesthetic**: Editorial Luxury Minimalism (Playfair Display, Manrope, DM Mono)
- **Palette**: Deep Plum (`#39283A`), Burgundy (`#914B65`), Dusty Rose (`#C77B8C`), Blush (`#ECD0CD`), Warm Cream (`#FBF8F4`), Charcoal (`#282329`)
- **Interactive Features**:
  - Pointer-based 3D spring tilt physics on the hero portrait card
  - 10-second hiring manager Recruiter Fast-Track bar
  - Interactive Project Case Studies with tabbed deep-dive modal (Overview, Process, Visuals, Lessons)
  - 4-category Interactive Skills Matrix with verified competency tags
  - 4-step animated Design Process timeline (Discover, Explore, Design, Deliver)
  - Verified Academic & Experience timeline (Teerthanker Mahaveer University, C.R.B. Memorial)
  - Interactive & Printable Curriculum Vitae modal with PDF download/request
  - High-performance ambient particle canvas (HTML5 Canvas with frame throttling)
- **Technical SEO**:
  - Full Open Graph, Twitter Cards, and meta keywords
  - JSON-LD Structured Data Schema (`Person` & `WebSite`)
  - Dynamic `sitemap.xml` and `robots.txt`
  - Custom SVG favicon brand monogram (`icon.svg`)
  - Custom editorial 404 page (`not-found.tsx`)

---

## Project Structure

```
app/
├── components/
│   ├── About.tsx            # Editorial About section with philosophy & pillars
│   ├── AmbientCanvas.tsx    # Lightweight ambient particle canvas (60fps)
│   ├── CaseStudyModal.tsx   # Detailed project case-study drawer/modal
│   ├── Contact.tsx          # Direct inquiry form with WhatsApp & email
│   ├── Experience.tsx       # Verified academic & freelance journey timeline
│   ├── Footer.tsx           # Editorial footer with back-to-top & copyright
│   ├── Header.tsx           # Scroll-aware nav, mobile drawer & resume trigger
│   ├── Hero.tsx             # 3D tilt portrait, staggered reveals, toolkit badges
│   ├── Process.tsx          # 4-phase design methodology timeline
│   ├── Projects.tsx         # Category filterable portfolio grid (6 case studies)
│   ├── RecruiterBar.tsx     # 10-second hiring manager summary bar
│   ├── ResumeModal.tsx      # Printable & viewable verified CV sheet
│   ├── Services.tsx         # 4 core creative disciplines & deliverables
│   ├── Skills.tsx           # Interactive 4-tab technical toolkit
│   └── StructuredData.tsx   # Google search JSON-LD schema markup
├── globals.css              # Editorial styling, variables, print & responsive rules
├── icon.svg                 # Brand monogram SVG favicon
├── layout.tsx               # Root layout, fonts, and comprehensive SEO metadata
├── not-found.tsx            # Custom 404 error page
├── page.tsx                 # Composed main page
├── robots.ts                # SEO robots.txt generator
└── sitemap.ts               # Dynamic sitemap generator
public/
├── avika-showcase.jpg       # Verified hero portrait artwork (946x1024)
├── avika-profile.jpeg       # High-resolution portrait fallback
└── avika-profile-small.jpg  # Compact portrait
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## Production Build & Verification

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

---

## Deployment to Vercel

1. Commit and push changes to `main` at `https://github.com/Aradhy20/avika-jain-portfolio`.
2. Vercel automatically detects the push and deploys to [https://avika-jain-portfolio.vercel.app/](https://avika-jain-portfolio.vercel.app/).
3. Optional EmailJS keys can be set in Vercel project environment variables (documented in `.env.example`).
