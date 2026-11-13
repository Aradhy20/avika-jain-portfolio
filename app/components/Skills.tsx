"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, MonitorSmartphone, Clapperboard, Sparkles, Check, ArrowUpRight } from "lucide-react";

interface SkillCategory {
  id: string;
  label: string;
  icon: typeof Palette;
  description: string;
  tools: {
    name: string;
    description: string;
    verified: boolean;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "graphic",
    label: "Graphic Design",
    icon: Palette,
    description: "Visual communication, brand identities, editorial layouts, and high-impact marketing assets.",
    tools: [
      { name: "Adobe Photoshop", description: "Image compositing, retouching, poster design, and visual asset preparation.", verified: true },
      { name: "Adobe Illustrator", description: "Vector iconography, custom brand marks, logotypes, and scalable artwork.", verified: true },
      { name: "Canva", description: "Rapid content templates, modular social post kits, and presentations.", verified: true },
      { name: "Typography", description: "Font pairing, optical hierarchy, editorial scale, and typographic harmony.", verified: true },
      { name: "Layout Design", description: "Grid systems, baseline grids, negative space balance, and print specifications.", verified: true },
      { name: "Brand Identity", description: "Color palettes, logo suites, asset lockups, and comprehensive brand books.", verified: true },
      { name: "Visual Communication", description: "Translating complex narratives into clear, engaging visual compositions.", verified: true }
    ]
  },
  {
    id: "ux",
    label: "Product & UX Design",
    icon: MonitorSmartphone,
    description: "Human-centered digital interfaces, user journeys, responsive web & mobile layouts, and scalable Figma systems.",
    tools: [
      { name: "Figma", description: "Component libraries, Auto-Layout 5.0, design tokens, and clickable prototypes.", verified: true },
      { name: "Wireframing", description: "Translating user requirements into low-fidelity structural page architectures.", verified: true },
      { name: "Prototyping", description: "Interactive micro-interactions, gestural states, and realistic flow walkthroughs.", verified: true },
      { name: "User Flows", description: "Mapping frictionless paths from user entry to key conversion touchpoints.", verified: true },
      { name: "Design Systems", description: "Atomic UI components, scalable token sets, and cross-platform style guides.", verified: true },
      { name: "Responsive UI", description: "Pixel-disciplined adaptation across smartphone, tablet, and desktop viewports.", verified: true },
      { name: "Usability Testing", description: "Heuristic evaluation, user feedback synthesis, and iterative UI refinement.", verified: true },
      { name: "Accessibility (WCAG)", description: "Color contrast compliance (4.5:1+), accessible touch targets, and readable typography.", verified: true }
    ]
  },
  {
    id: "motion",
    label: "Video & Motion",
    icon: Clapperboard,
    description: "Short-form video editing, kinetic motion typography, beat-matched social storytelling, and dynamic pacing.",
    tools: [
      { name: "Adobe Premiere Pro", description: "Timeline cutting, rhythm editing, multi-track audio sync, and color correction.", verified: true },
      { name: "Adobe After Effects", description: "Kinetic typography, logo reveals, animated stickers, and smooth keyframing.", verified: true },
      { name: "Video Editing", description: "Narrative pacing, B-roll integration, hook crafting, and visual flow.", verified: true },
      { name: "Motion Graphics", description: "Dynamic lower-thirds, graphical overlays, and animated UI presentation clips.", verified: true },
      { name: "Storytelling", description: "Script-to-screen structuring that maintains audience retention from start to finish.", verified: true },
      { name: "Short-Form Video Production", description: "Vertical 9:16 reels, Shorts, and TikTok pacing optimized for algorithmic discovery.", verified: true }
    ]
  },
  {
    id: "ai",
    label: "AI-Assisted Creativity",
    icon: Sparkles,
    description: "Harnessing cutting-edge generative tools to accelerate creative ideation, moodboarding, and asset generation.",
    tools: [
      { name: "Adobe Firefly", description: "Generative fill, texture expansion, and AI-assisted asset compositing.", verified: true },
      { name: "Generative Ideation", description: "Prompt-driven concept exploration, visual moodboards, and style benchmarking.", verified: true },
      { name: "AI Design Workflows", description: "Iterative image refinement and rapid variant generation to speed up production.", verified: true },
      { name: "Image & Video Tools", description: "Leveraging generative video and visual models for experimental motion hooks.", verified: true }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("graphic");

  const currentCategory = skillCategories.find((c) => c.id === activeTab) || skillCategories[0];

  return (
    <section className="skills-section section-pad" id="skills" aria-label="Skills & Toolkit">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / PROFESSIONAL TOOLKIT</p>
            <h2>
              Tools are just
              <br />
              <em>the beginning.</em>
            </h2>
          </div>
          <p className="section-intro">
            A genuine creative toolkit refined through practical execution. Only skills Avika actively practices and can demonstrate during an interview are listed.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="skills-category-tabs" role="tablist">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`skill-tab-btn ${isActive ? "active" : ""}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
                <span className="skill-tab-count">{cat.tools.length}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="skills-content-container">
          <div className="skills-category-header">
            <div>
              <span className="skills-cat-eyebrow">ACTIVE DISCIPLINE</span>
              <h3 className="skills-cat-title">{currentCategory.label}</h3>
            </div>
            <p className="skills-cat-description">{currentCategory.description}</p>
          </div>

          <motion.div
            key={currentCategory.id}
            className="skills-cards-grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentCategory.tools.map((tool, idx) => (
              <div className="skill-card-item" key={tool.name}>
                <div className="skill-card-top">
                  <span className="skill-index-num">0{idx + 1}</span>
                  <span className="skill-verified-badge" title="Verified Proficiency">
                    <Check size={11} /> Verified
                  </span>
                </div>
                <h4 className="skill-name">{tool.name}</h4>
                <p className="skill-detail">{tool.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

