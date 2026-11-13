"use client";

import { useState } from "react";
import { Palette, Check, Sparkles, Globe, Cpu, Wrench } from "lucide-react";

interface SoftwareSkill {
  name: string;
  category: string;
  level: number;
  note: string;
  badge: string;
}

const softwareSkills: SoftwareSkill[] = [
  { name: "Adobe Photoshop", category: "Raster Craft & Retouching", level: 95, note: "Advanced image compositing, visual retouching, poster design, and asset finishing.", badge: "Verified 95%" },
  { name: "Adobe Illustrator", category: "Vector & Identity Systems", level: 95, note: "Scalable vector marks, logotypes, custom typography, and complex iconography.", badge: "Verified 95%" },
  { name: "Canva", category: "Social Systems & Rapid Kits", level: 100, note: "Modular social carousel systems, story templates, presentation decks, and collateral.", badge: "Verified 100%" },
  { name: "Adobe Premiere Pro", category: "Video & Rhythm Editing", level: 90, note: "Timeline assembly, rhythm-based beat cutting, multi-track audio sync, and color grade.", badge: "Verified 90%" },
  { name: "Adobe After Effects", category: "Motion Graphics & Kinetic Text", level: 90, note: "Kinetic motion typography, animated logo reveals, sticker loops, and transition curves.", badge: "Verified 90%" },
  { name: "Figma", category: "UI/UX & Interactive Prototypes", level: 85, note: "Component libraries, Auto-Layout, design tokens, and clickable user flow prototypes.", badge: "Proficient" }
];

const designCompetencies = [
  "Visual Communication",
  "Typography Hierarchy",
  "Brand Guidelines & Books",
  "Poster & Print Layouts",
  "Grid Systems & Baseline Rhythm",
  "Color Theory & Harmonies",
  "Short-Form Video Production",
  "Kinetic Typography Animation",
  "Social Media Architecture",
  "Wireframing & Mobile UI",
  "Packaging Label Systems",
  "Pre-Press & CMYK Preparation"
];

const languages = [
  { name: "English", proficiency: "Professional & Fluent Working Proficiency", native: false },
  { name: "Hindi", proficiency: "Native & Bilingual Proficiency", native: true }
];

export default function Skills() {
  return (
    <section className="skills-section section-pad" id="skills" aria-label="Skills & Software Expertise">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / SOFTWARE &amp; EXPERTISE</p>
            <h2>
              Verified software skills
              <br />
              <em>&amp; creative toolkit.</em>
            </h2>
          </div>
          <p className="section-intro">
            Authentic software proficiencies and creative competencies verified directly from Avika&apos;s supplied resume. Every skill listed is actively practiced and demonstrable.
          </p>
        </div>

        {/* Software Progress Grid with Verified Percentages */}
        <div className="skills-software-grid">
          {softwareSkills.map((tool) => (
            <div className="software-skill-card" key={tool.name}>
              <div className="software-card-header">
                <div>
                  <span className="software-cat-label">{tool.category}</span>
                  <h3 className="software-name">{tool.name}</h3>
                </div>
                <span className="software-badge">{tool.badge}</span>
              </div>

              {/* Animated Progress Bar */}
              <div className="skill-meter-track" aria-label={`${tool.name} proficiency: ${tool.level}%`}>
                <div
                  className="skill-meter-fill"
                  style={{ width: `${tool.level}%` }}
                />
              </div>

              <div className="software-card-footer">
                <p className="software-note">{tool.note}</p>
                <span className="software-percent">{tool.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Lower Grid: Core Design Competencies + Languages */}
        <div className="skills-lower-grid">
          {/* Design Competencies */}
          <div className="competencies-card">
            <div className="competency-header">
              <Wrench size={18} />
              <h3>Core Design Competencies</h3>
            </div>
            <p className="competency-intro">
              Methodologies applied across independent creative projects, visual brand identities, and editorial storytelling:
            </p>
            <div className="competencies-tags-wrap">
              {designCompetencies.map((comp) => (
                <span key={comp} className="comp-tag">
                  <Check size={11} /> {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Spoken & Written Languages */}
          <div className="languages-card">
            <div className="competency-header">
              <Globe size={18} />
              <h3>Communication Languages</h3>
            </div>
            <p className="competency-intro">
              Clear, disciplined collaboration across international teams and multicultural client briefs:
            </p>
            <div className="languages-list">
              {languages.map((lang) => (
                <div key={lang.name} className="language-row">
                  <div className="lang-info">
                    <h4>{lang.name}</h4>
                    <p>{lang.proficiency}</p>
                  </div>
                  <span className="lang-badge">{lang.native ? "Native" : "Fluent"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
