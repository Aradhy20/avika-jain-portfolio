"use client";

import { motion } from "framer-motion";
import { Palette, MonitorSmartphone, PenTool, Clapperboard, ArrowUpRight, Sparkles } from "lucide-react";

const services = [
  {
    no: "01",
    title: "Graphic & Editorial Design",
    detail: "High-impact campaign creatives, editorial print & digital layouts, custom posters, typography hierarchies, and visual storytelling.",
    icon: Palette,
    deliverables: ["Editorial Layouts", "Posters & Print", "Social Media Kits", "Promotional Campaigns"]
  },
  {
    no: "02",
    title: "UI/UX & Product Design",
    detail: "Intuitive user flows, wireframes, high-fidelity responsive web & mobile interfaces, component design systems, and clickable Figma prototypes.",
    icon: MonitorSmartphone,
    deliverables: ["User Journeys & Wireframes", "Mobile & Web UI", "Interactive Prototypes", "Figma Design Systems"]
  },
  {
    no: "03",
    title: "Brand Identity Systems",
    detail: "Distinctive logotypes, brand marks, curated color palettes, typography rules, brand guideline books, and cohesive multi-channel brand worlds.",
    icon: PenTool,
    deliverables: ["Logotypes & Marks", "Color & Typography Systems", "Brand Style Guides", "Asset Libraries"]
  },
  {
    no: "04",
    title: "Video Editing & Motion Design",
    detail: "Short-form social edits (Reels/Shorts/TikToks), kinetic motion typography, beat-matched transitions, sound design, and narrative video cuts.",
    icon: Clapperboard,
    deliverables: ["Vertical Video Reels", "Kinetic Typography", "Motion Graphics", "Audio Sync & Sound Design"]
  }
];

export default function Services() {
  return (
    <section className="services section-wrap section-pad" id="services" aria-label="Services and Capabilities">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / WHAT I BRING</p>
          <h2>
            Different skills.
            <br />
            <em>One point of view.</em>
          </h2>
        </div>
        <p className="section-intro">
          From the first exploratory sketch to the polished final frame, I bring ideas to life across digital, print, and motion touchpoints with meticulous care.
        </p>
      </div>

      <div className="service-list">
        {services.map((s) => (
          <div className="service-row" key={s.no}>
            <span className="service-no">{s.no}</span>
            <div className="service-icon">
              <s.icon strokeWidth={1.3} />
            </div>
            <div className="service-text">
              <div className="service-head-row">
                <h3>{s.title}</h3>
                <div className="service-deliverables">
                  {s.deliverables.map((item) => (
                    <span key={item} className="deliverable-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <p>{s.detail}</p>
            </div>
            <a href="#contact" className="service-arrow" aria-label={`Inquire about ${s.title}`}>
              <ArrowUpRight />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

