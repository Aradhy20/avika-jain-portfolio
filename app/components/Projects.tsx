"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Asterisk, Play, Layers, Maximize2 } from "lucide-react";
import type { ProjectData } from "./CaseStudyModal";

interface ProjectsProps {
  onSelectProject: (project: ProjectData) => void;
}

export const allProjects: ProjectData[] = [
  {
    n: "01",
    title: "Lumina Botanicals",
    subtitle: "Organic Skincare Brand Identity & Packaging Suite",
    category: "Branding",
    tags: ["Branding", "Graphic Design", "Packaging", "Typography"],
    cover: "brand",
    year: "2026",
    status: "Concept Showcase",
    role: "Brand & Visual Designer",
    duration: "4 Weeks Exploration",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "InDesign"],
    overview:
      "A comprehensive brand identity exploration crafted for an organic skincare studio. The concept balances earthy minimalism with refined editorial typography to evoke sensory luxury without cold clinical sterility.",
    problem:
      "Natural beauty branding frequently suffers from aesthetic homogenization — predominantly bland beige hues and generic botanical line art. The goal was to build a distinct visual voice using deep botanical plum tones, high-contrast serif typography, and tactile packaging labels.",
    process: [
      {
        step: "Market & Aesthetic Research",
        description: "Audited 18 independent beauty brands to identify visual saturation points. Decided on a warm, grounded earth-tone system accented by wine and gold foils."
      },
      {
        step: "Typographic Architecture",
        description: "Explored pairings between high-contrast editorial serifs for expressive headlines and disciplined grotesque sans-serifs for technical skincare ingredient lists."
      },
      {
        step: "Packaging & Physical System",
        description: "Engineered box layouts, label hierarchies, and custom minimalist seal marks for amber glass bottles and paper carton packaging."
      },
      {
        step: "Brand Guidelines & Social Kit",
        description: "Compiled a 24-page brand style book covering minimum clearance, color tolerances, photographic art direction, and launch campaign assets."
      }
    ],
    outcome:
      "A cohesive 360-degree brand system including bespoke logotype, secondary monogram stamps, 4 packaging container layouts, and launch social templates that convey quiet confidence.",
    gallery: [
      {
        caption: "Packaging Hierarchy & Box Label Typography",
        highlight: "MINIMAL / BOTANIC",
        accent: "linear-gradient(135deg, #25232A, #98556B)"
      },
      {
        caption: "Editorial Print Guideline & Color Swatches",
        highlight: "EARTH & WINE PALETTE",
        accent: "linear-gradient(135deg, #98556B, #D89AA9)"
      },
      {
        caption: "Social Launch Grid & Art-Directed Still Lifes",
        highlight: "CAMPAIGN ASSETS",
        accent: "linear-gradient(135deg, #25232A, #EDE1D8)"
      }
    ],
    lessons: [
      "Negative space in packaging conveys luxury more effectively than complex illustration.",
      "Strict typographic hierarchy on small-format bottles dramatically improves readability and user trust."
    ]
  },
  {
    n: "02",
    title: "Aura Editorial Magazine",
    subtitle: "High-Fashion Typographic Spread & Poster Layouts",
    category: "Posters",
    tags: ["Posters", "Graphic Design", "Editorial", "Typography"],
    cover: "graphic",
    year: "2026",
    status: "Concept Showcase",
    role: "Editorial & Graphic Designer",
    duration: "2 Weeks Study",
    tools: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
    overview:
      "An editorial design and poster series examining brutalist minimalism combined with classic serif grace for a high-fashion and culture publication.",
    problem:
      "Editorial readers skim rapidly. The layout required a dynamic baseline rhythm that guides the eye through 2-page spreads without visual fatigue.",
    process: [
      {
        step: "Grid Architecture",
        description: "Constructed a 12-column baseline grid system allowing flexible column spans, oversized pull-quotes, and generous margins."
      },
      {
        step: "Typographic Contrast Testing",
        description: "Paired dramatic Playfair Display italics with dense tabular mono labels to create visual tension and editorial poise."
      },
      {
        step: "Image Juxtaposition",
        description: "Balanced full-bleed duotone imagery against tight typographic text blocks and minimal geometric stamps."
      },
      {
        step: "Pre-press & Digital Translation",
        description: "Prepared print-ready PDF specifications with trim marks alongside a swipeable digital carousel edition."
      }
    ],
    outcome:
      "An 8-page editorial spread series, exhibition poster, and companion social carousel demonstrating disciplined grid mastery and typographic courage.",
    gallery: [
      {
        caption: "Feature Spread: Asymmetric Grid & Pull-Quote Rhythm",
        highlight: "12-COLUMN BASELINE",
        accent: "linear-gradient(135deg, #25232A, #D89AA9)"
      },
      {
        caption: "Cover & Poster Series: Dramatic Serif & Monogram",
        highlight: "POSTER SERIES",
        accent: "linear-gradient(135deg, #98556B, #25232A)"
      },
      {
        caption: "Typographic Specimen & Margin Studies",
        highlight: "TYPE SPECIMEN",
        accent: "linear-gradient(135deg, #EDE1D8, #D89AA9)"
      }
    ],
    lessons: [
      "Rigid grids paradoxically allow the greatest creative freedom when broken with deliberate intent.",
      "Micro-typography (tracking, optical kerning, and hanging punctuation) elevates good design into exceptional design."
    ]
  },
  {
    n: "03",
    title: "Crafted Social Systems",
    subtitle: "Modular Content Architecture for Creative Studios",
    category: "Social Media",
    tags: ["Social Media", "Graphic Design", "Canva", "Photoshop"],
    cover: "brand",
    year: "2026",
    status: "Concept Showcase",
    role: "Visual Content Designer",
    duration: "2 Weeks System Build",
    tools: ["Canva", "Adobe Photoshop", "Adobe Illustrator"],
    overview:
      "A modular social design architecture enabling creative agencies and boutique studios to maintain brand coherence across Instagram carousels, announcement stories, and Twitter graphics.",
    problem:
      "Creative agencies frequently struggle to maintain visual consistency across their own social channels due to rushed ad-hoc post creation without systematized templates.",
    process: [
      {
        step: "Platform Asset Audit",
        description: "Evaluated high-performing studio feeds to categorize post archetypes: case study spotlights, client reviews, thought leadership, and culture reels."
      },
      {
        step: "Template Systemization",
        description: "Built modular 1080x1350 vertical carousel slides with interchangeable header, body, quote, and statistical layout blocks in Canva and Photoshop."
      },
      {
        step: "Color & Typography Locking",
        description: "Created standardized color presets and typographic scales that team members can duplicate without breaking brand aesthetics."
      },
      {
        step: "Export Optimization",
        description: "Documented compression and export protocols for crisp vector-like text rendering on Instagram and LinkedIn feeds."
      }
    ],
    outcome:
      "A 24-slide modular carousel system, 12 animated story templates, and a visual brand guidelines one-pager for frictionless social publishing.",
    gallery: [
      {
        caption: "Swipeable Carousel Slides with Narrative Progression",
        highlight: "SWIPEABLE CAROUSEL",
        accent: "linear-gradient(135deg, #98556B, #25232A)"
      },
      {
        caption: "Quote Cards & Studio Announcement Formats",
        highlight: "STORY TEMPLATES",
        accent: "linear-gradient(135deg, #25232A, #EDE1D8)"
      },
      {
        caption: "Modular Component Palette for Quick Production",
        highlight: "CANVA & PS SYSTEM",
        accent: "linear-gradient(135deg, #D89AA9, #98556B)"
      }
    ],
    lessons: [
      "Standardizing 3 core templates produces far better brand recognition than 20 divergent ad-hoc designs.",
      "Clear visual hooks on slide 1 determine 80% of total carousel swipe completion."
    ]
  },
  {
    n: "04",
    title: "Kinetic Rhythm Studio",
    subtitle: "Short-Form Video Direction & Kinetic Typography",
    category: "Video Editing",
    tags: ["Video Editing", "Motion Graphics", "Premiere Pro", "After Effects"],
    cover: "motion",
    year: "2026",
    status: "Concept Showcase",
    role: "Video Editor & Motion Designer",
    duration: "2 Weeks Exploration",
    tools: ["Adobe Premiere Pro", "Adobe After Effects"],
    overview:
      "An experimental motion design and video editing showcase exploring beat-matched typography, kinetic transitions, and high-retention vertical social storytelling.",
    problem:
      "Attention drop-off in the first 2 seconds of social media video is severe. Traditional corporate editing styles fail to engage modern audiences who expect rhythm-driven pacing and kinetic text accents.",
    process: [
      {
        step: "Audio Breakdown & Waveform Analysis",
        description: "Mapped transient peaks and rhythmic accents of the soundtrack to anchor precise frame cuts and kinetic typography triggers."
      },
      {
        step: "Kinetic Typographic Keyframing",
        description: "Built custom kinetic title animations in After Effects with expressive overshoot curves and staggered letter reveals."
      },
      {
        step: "Pacing, Sound Design & Foley",
        description: "Integrated subtle audio swooshes, analog clicks, and riser sweeps to provide physical weight to each on-screen transition."
      },
      {
        step: "Color Grading & Master Assembly",
        description: "Crafted a signature filmic tone curve balancing deep burgundy shadows and clean skin tones across 9:16 vertical reels."
      }
    ],
    outcome:
      "A punchy 30-second kinetic edit system complete with modular motion typography presets, rhythm cut sequences, and seamless looping hooks.",
    gallery: [
      {
        caption: "Kinetic Typography & Frame Beat Synchronization",
        highlight: "BEAT-MATCHED CUTS",
        accent: "linear-gradient(135deg, #98556B, #25232A)"
      },
      {
        caption: "Color Balance & LUT Grading Pipeline",
        highlight: "BURGUNDY COLOR GRADE",
        accent: "linear-gradient(135deg, #25232A, #D89AA9)"
      },
      {
        caption: "Modular Lower-Thirds & Social Overlay Kit",
        highlight: "AFTER EFFECTS PRESETS",
        accent: "linear-gradient(135deg, #D89AA9, #25232A)"
      }
    ],
    lessons: [
      "Audio sound design accounts for more than half of perceived motion fluidity.",
      "Speed ramping must follow natural physics: fast in, settle smoothly, exit with momentum."
    ]
  },
  {
    n: "05",
    title: "Kavya Audio Experience",
    subtitle: "Distraction-Free Ambient Sound & Journaling Mobile UI",
    category: "UI/UX",
    tags: ["UI/UX", "Product Design", "Figma", "Design System"],
    cover: "product",
    year: "2026",
    status: "Concept Showcase",
    role: "Product & Interaction Designer",
    duration: "3 Weeks Sprint",
    tools: ["Figma", "FigJam", "Interactive Prototyping"],
    overview:
      "A focused mobile interface tailored for mindful audio listening, soundscapes, and reflective daily micro-journaling. Built around tactile controls and calm, low-cognitive-load screens.",
    problem:
      "Modern streaming applications are cluttered with algorithmic suggestions and promotional badges that counteract their calming intent.",
    process: [
      {
        step: "Information Architecture & Personas",
        description: "Synthesized listening habits into 3 core user flows: quick single-tap soundscape launch, focused journal prompt entry, and sleep timer management."
      },
      {
        step: "Wireframing & Gestural Mapping",
        description: "Prototyped full-bleed gestural interactions: horizontal swipes for sound layer cross-fading and tactile circular sliders for frequency adjustment."
      },
      {
        step: "Component Design System",
        description: "Constructed an atomic Figma library with 32 master components, WCAG AAA accessible high-contrast text, and soft ambient dark mode tokens."
      },
      {
        step: "High-Fidelity Interactive Testing",
        description: "Tested micro-interactions with users to calibrate feedback states, sound level scrubber friction, and transition ease curves."
      }
    ],
    outcome:
      "A 14-screen clickable mobile app experience featuring customized ambient player controls, dark-room contrast optimization, and a lightweight micro-journaling interface.",
    gallery: [
      {
        caption: "Main Player Interface with Frequency Layering",
        highlight: "TACTILE SCRUBBER UI",
        accent: "linear-gradient(135deg, #25232A, #98556B)"
      },
      {
        caption: "Evening Reflection & Journal Prompt Screen",
        highlight: "CALM DARK MODE",
        accent: "linear-gradient(135deg, #98556B, #EDE1D8)"
      },
      {
        caption: "Design Tokens & Reusable Interactive Atoms",
        highlight: "ATOMIC FIGMA SYSTEM",
        accent: "linear-gradient(135deg, #D89AA9, #25232A)"
      }
    ],
    lessons: [
      "Tactile visual feedback (soft glows and spring physics) makes screen-based audio controls feel tangible.",
      "Limiting choices on the primary screen reduces decision anxiety for evening users."
    ]
  },
  {
    n: "06",
    title: "Verve Design System",
    subtitle: "Accessible Multi-Platform UI Component Framework",
    category: "Graphic Design",
    tags: ["Graphic Design", "UI/UX", "Figma", "Design Tokens"],
    cover: "product",
    year: "2026",
    status: "Concept Showcase",
    role: "UI/UX & Systems Designer",
    duration: "3 Weeks Build",
    tools: ["Figma", "WCAG Contrast Checker", "Auto-Layout 5.0"],
    overview:
      "An accessible multi-platform UI component library and design system in Figma, featuring strict WCAG contrast compliance, scalable spacing tokens, and responsive web/mobile components.",
    problem:
      "Small product teams often suffer from UI inconsistency, disjointed states, and inaccessible color combinations when building without an established design system.",
    process: [
      {
        step: "Token Architecture",
        description: "Defined semantic design tokens for color, typography, spacing (4pt grid), elevation, and border radii across light and dark contexts."
      },
      {
        step: "Atomic Component Creation",
        description: "Constructed foundational atoms: buttons, inputs, toggles, badges, tooltips, and avatar groups using Figma Auto-Layout and component properties."
      },
      {
        step: "Accessibility & State Audit",
        description: "Tested every component across default, hover, focus, active, disabled, and error states with verified 4.5:1+ contrast ratios."
      },
      {
        step: "Documentation & Handoff Setup",
        description: "Documented component usage guidelines, do's/don'ts, and developer specs for clean implementation."
      }
    ],
    outcome:
      "40+ thoroughly tested Figma components with nested variants, responsive auto-layout behavior, and complete design token documentation.",
    gallery: [
      {
        caption: "Button & Input Component Variants with Focus States",
        highlight: "ATOMIC VARIANTS",
        accent: "linear-gradient(135deg, #25232A, #98556B)"
      },
      {
        caption: "Semantic Color Tokens & Contrast Verification",
        highlight: "WCAG AAA TOKENS",
        accent: "linear-gradient(135deg, #98556B, #D89AA9)"
      },
      {
        caption: "Responsive Card & Navigation Layout Testing",
        highlight: "RESPONSIVE AUTO-LAYOUT",
        accent: "linear-gradient(135deg, #EDE1D8, #25232A)"
      }
    ],
    lessons: [
      "Designing with interactive states (focus, active, disabled) from day one prevents UX bugs during frontend development.",
      "Semantic tokens (e.g. `surface-primary` vs `#FFFFFF`) make dark mode adaptation virtually effortless."
    ]
  }
];

const categories = [
  "All",
  "Branding",
  "Graphic Design",
  "Social Media",
  "Posters",
  "Video Editing",
  "UI/UX"
];

function ProjectVisualArt({ type, title }: { type: string; title: string }) {
  if (type === "brand") {
    return (
      <div className="art art-brand">
        <span className="art-small">IDENTITY / SYSTEM</span>
        <div className="brand-circle">
          a<span>.</span>
        </div>
        <strong>
          MAKE
          <br />
          IT MEAN.
        </strong>
        <i>{title} · 01</i>
      </div>
    );
  }
  if (type === "product") {
    return (
      <div className="art art-product">
        <span className="art-small">DIGITAL / EXPERIENCE</span>
        <div className="phone">
          <div className="phone-top">
            studio<span>•••</span>
          </div>
          <div className="phone-photo" />
          <b>
            Design for
            <br />
            every day.
          </b>
          <small>Thoughtful things, made simple.</small>
          <div className="phone-button">Inspect Case Study ↗</div>
        </div>
        <div className="product-orbit" />
      </div>
    );
  }
  if (type === "motion") {
    return (
      <div className="art art-motion">
        <span className="art-small">FRAME / BY / FRAME</span>
        <div className="motion-play">
          <Play fill="currentColor" size={30} />
        </div>
        <div className="motion-type">
          MOVE
          <br />
          WITH
          <br />
          <em>MEANING</em>
        </div>
        <div className="timeline">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }
  return (
    <div className="art art-graphic">
      <span className="art-small">POSTER / EXPERIMENT</span>
      <div className="graphic-star">✳</div>
      <div className="graphic-words">
        IDEAS
        <br />
        <em>IN</em>
        <br />
        COLOUR.
      </div>
      <div className="graphic-stamp">
        VISUAL
        <br />
        NOTES
        <br />№ 004
      </div>
    </div>
  );
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory || p.tags.includes(activeCategory));

  return (
    <section className="work section-wrap section-pad" id="work" aria-label="Selected Projects">
      {/* Section Heading */}
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / SELECTED PROJECTS &amp; CASE STUDIES</p>
          <h2>
            A collection of what
            <br />
            <em>I love making.</em>
          </h2>
        </div>
        <p className="section-intro">
          A dynamic gallery of visual case studies spanning brand identity, social content systems, editorial poster layouts, and motion storytelling. Click any project to open the full case study.
        </p>
      </div>

      {/* Category Filter Row */}
      <div className="filter-row" role="tablist" aria-label="Filter projects by category">
        {categories.map((cat) => {
          const count =
            cat === "All"
              ? allProjects.length
              : allProjects.filter((p) => p.category === cat || p.tags.includes(cat)).length;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={activeCategory === cat ? "filter active" : "filter"}
              onClick={() => setActiveCategory(cat)}
            >
              <span>{cat}</span>
              <span className="filter-count">{count.toString().padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <article
              className="project-card"
              key={p.n}
              onClick={() => onSelectProject(p)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectProject(p);
                }
              }}
              aria-label={`Open case study for ${p.title}`}
            >
              <div className={`project-art ${p.cover}`}>
                <ProjectVisualArt type={p.cover} title={p.title} />
                <span className="project-number">{p.n} / 06</span>
                <span className="project-view" title="View detailed case study">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <div className="project-info">
                <div>
                  <div className="project-meta-row">
                    <span className="project-category">{p.category}</span>
                    <span className="project-year">{p.year}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p className="project-subtitle-text">{p.subtitle}</p>
                  <div className="tag-row">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="project-card-footer">
                  <span className="concept-label">{p.status}</span>
                  <span className="card-inspect-cta">
                    Deep-Dive Case Study <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Transparent Disclaimer Note */}
      <div className="work-note-box">
        <Asterisk size={16} />
        <p>
          <strong>Authenticity Notice:</strong> These projects represent independent conceptual studies, personal explorations, and verified coursework demonstrating Avika&apos;s design methodology. They are not claimed client commissions. Real client engagements will be added as permissions are secured.
        </p>
      </div>
    </section>
  );
}
