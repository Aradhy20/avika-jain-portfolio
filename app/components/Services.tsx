"use client";

import { Palette, PenTool, Layout, Clapperboard, MonitorSmartphone, Megaphone, ArrowUpRight, Sparkles } from "lucide-react";

const services = [
  {
    no: "01",
    title: "Brand Identity & Logo Design",
    detail: "Distinctive brand marks, curated color palettes, typography scales, comprehensive brand guidelines books, and cohesive multi-touchpoint visual systems.",
    icon: PenTool,
    deliverables: ["Logotypes & Monograms", "Color & Typography Systems", "Brand Guidelines Book", "Vector Brand Marks"]
  },
  {
    no: "02",
    title: "Graphic & Editorial Design",
    detail: "High-impact campaign creatives, editorial magazine spreads, publication covers, custom typography layouts, and visual communication materials.",
    icon: Palette,
    deliverables: ["Editorial Layouts", "Publication Spreads", "Brochures & Catalogs", "Visual Asset Kits"]
  },
  {
    no: "03",
    title: "Poster & Flyer Design",
    detail: "Striking promotional posters, exhibition announcements, cultural flyers, and large-format event graphics designed to capture attention instantly.",
    icon: Layout,
    deliverables: ["Promotional Posters", "Event Flyers & Handouts", "Exhibition Banners", "Print-Ready Vector Files"]
  },
  {
    no: "04",
    title: "Social Media Design",
    detail: "Modular carousel design kits, high-converting story announcements, feed aesthetics, and brand asset templates created in Photoshop and Canva.",
    icon: Megaphone,
    deliverables: ["Swipeable Carousels", "Instagram Stories & Covers", "Canva Modular Systems", "Campaign Graphics"]
  },
  {
    no: "05",
    title: "Video Editing & Motion Graphics",
    detail: "Rhythm-cut short-form video edits (Reels/Shorts/TikToks), kinetic typography, beat-matched transitions, sound design, and animated logo idents.",
    icon: Clapperboard,
    deliverables: ["Vertical Social Reels", "Kinetic Motion Typography", "Audio Sync & Foley", "Animated Logo Reveals"]
  },
  {
    no: "06",
    title: "UI/UX & Digital Concepts",
    detail: "Thoughtful wireframing, high-contrast mobile screen flows, accessible component systems, and interactive clickable prototypes in Figma.",
    icon: MonitorSmartphone,
    deliverables: ["Mobile Screen Journeys", "Wireframes & Information Architecture", "Interactive Figma Prototypes", "Accessible Tokens"]
  }
];

export default function Services() {
  return (
    <section className="services section-wrap section-pad" id="services" aria-label="Services and Creative Offerings">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / CREATIVE SERVICES</p>
          <h2>
            Visual disciplines.
            <br />
            <em>Crafted with intention.</em>
          </h2>
        </div>
        <p className="section-intro">
          From the initial exploratory sketch and typography selection to pixel-perfect final production, I craft cohesive visual communications across digital, print, and motion.
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
