"use client";

import { motion } from "framer-motion";
import { Search, Compass, PenTool, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discover",
    tagline: "Understand the brief, users and creative objectives.",
    icon: Search,
    points: [
      "Unpack the core problem and project objectives through deep inquiry.",
      "Identify audience expectations, emotional anchors, and market contexts.",
      "Establish non-negotiables, accessibility baselines, and project deliverables."
    ]
  },
  {
    num: "02",
    title: "Explore",
    tagline: "Research, brainstorm and develop visual directions.",
    icon: Compass,
    points: [
      "Gather wide-ranging visual references, editorial artifacts, and layout studies.",
      "Conduct rapid divergent sketches to explore contrasting typographic & structural moods.",
      "Curate focused moodboards and define harmonious color stories."
    ]
  },
  {
    num: "03",
    title: "Design",
    tagline: "Create, refine, prototype and test.",
    icon: PenTool,
    points: [
      "Translate selected visual concepts into high-fidelity comps and interactive Figma prototypes.",
      "Fine-tune typographic hierarchy, spacing rhythm, micro-interactions, and motion timing.",
      "Incorporate constructive stakeholder feedback through iterative review cycles."
    ]
  },
  {
    num: "04",
    title: "Deliver",
    tagline: "Prepare final assets and communicate the outcome.",
    icon: CheckCircle,
    points: [
      "Prepare clean, organized, production-ready assets across print, web, and social formats.",
      "Document brand guidelines, Figma design tokens, and developer implementation notes.",
      "Perform quality checks to guarantee pixel-perfection and performance."
    ]
  }
];

export default function Process() {
  return (
    <section className="process-section section-pad" id="process" aria-label="Design Process">
      <div className="section-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / HOW I WORK</p>
            <h2>
              A structured path from
              <br />
              <em>curiosity to clarity.</em>
            </h2>
          </div>
          <p className="section-intro">
            Great creative work isn&apos;t accidental. It emerges from disciplined inquiry, divergent visual experimentation, and meticulous refinement at every stage.
          </p>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="process-grid">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                className="process-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
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
                  <span>PHASE {step.num}</span>
                  {idx < steps.length - 1 ? <ArrowRight size={14} /> : <Sparkles size={14} />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

