"use client";

import { motion } from "framer-motion";
import { Search, Compass, Lightbulb, PenTool, CheckCircle, Sparkles, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Understanding the Brief",
    tagline: "Unpack core objectives, audience needs, and project scope.",
    icon: Search,
    points: [
      "Deep dive into project goals, brand values, and required deliverables.",
      "Define audience personas, emotional anchors, and technical constraints.",
      "Establish milestone timelines and communicative touchpoints."
    ]
  },
  {
    num: "02",
    title: "Research & Inspiration",
    tagline: "Explore visual culture, competitor landscapes, and moodboards.",
    icon: Compass,
    points: [
      "Gather diverse visual artifacts, editorial layouts, and design references.",
      "Analyze aesthetic saturation points to identify distinctive opportunities.",
      "Curate focused moodboards defining color harmony and typography pairings."
    ]
  },
  {
    num: "03",
    title: "Concept Development",
    tagline: "Divergent sketching, typographic scales, and initial roughs.",
    icon: Lightbulb,
    points: [
      "Explore contrasting structural directions through rapid sketching.",
      "Experiment with type contrast, optical weight, and layout rhythm.",
      "Select the strongest 2–3 visual directions for high-fidelity execution."
    ]
  },
  {
    num: "04",
    title: "Design & Execution",
    tagline: "Translate ideas into high-fidelity compositions and motion.",
    icon: PenTool,
    points: [
      "Craft pixel-perfect vector artwork, poster layouts, and motion cuts in Adobe Suite.",
      "Build modular component structures in Figma and Canva for scalable use.",
      "Fine-tune spacing, micro-interactions, sound cues, and color tolerances."
    ]
  },
  {
    num: "05",
    title: "Feedback & Refinement",
    tagline: "Iterative stakeholder review and rigorous detail polish.",
    icon: RefreshCw,
    points: [
      "Synthesize constructive feedback without ego to sharpen clarity.",
      "Audit legibility across multiple screen scales and print viewing distances.",
      "Polish kerning, optical alignment, and transition ease curves."
    ]
  },
  {
    num: "06",
    title: "Final Delivery",
    tagline: "Production-ready master assets and documentation handoff.",
    icon: CheckCircle,
    points: [
      "Export print-ready CMYK PDFs, vector SVGs, and web-optimized media formats.",
      "Package comprehensive brand guidelines, font specs, and asset libraries.",
      "Provide clean documentation for effortless implementation."
    ]
  }
];

export default function Process() {
  return (
    <section className="process-section section-pad" id="process" aria-label="Creative Methodology">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / 6-STEP CREATIVE PROCESS</p>
            <h2>
              A structured path from
              <br />
              <em>curiosity to clarity.</em>
            </h2>
          </div>
          <p className="section-intro">
            Great visual design isn&apos;t accidental. It emerges from rigorous inquiry, fearless aesthetic exploration, and meticulous craftsmanship across six intentional stages.
          </p>
        </div>

        {/* 6-Step Process Grid */}
        <div className="process-grid process-grid-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="process-card">
                <div className="process-card-top">
                  <span className="process-card-num">{step.num}</span>
                  <div className="process-card-icon">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-tagline">{step.tagline}</p>

                <ul className="process-bullets">
                  {step.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>

                <div className="process-card-footer">
                  <span>STAGE {step.num}</span>
                  {idx < steps.length - 1 ? <ArrowRight size={14} /> : <Sparkles size={14} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
