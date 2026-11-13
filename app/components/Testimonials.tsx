"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote: "Avika approaches visual design with rare maturity. Her typographic sensitivity, disciplined color palette, and prompt communication made our brand identity exploration feel effortless.",
    author: "Creative Collaborator",
    context: "Brand Identity & Visual System Exploration",
    year: "2026"
  },
  {
    quote: "Her ability to translate abstract conceptual ideas into crisp, high-impact poster designs and kinetic social edits is remarkable. She truly designs with intention.",
    author: "Independent Content Creator",
    context: "Social Media Motion & Editorial Campaign",
    year: "2026"
  },
  {
    quote: "From wireframing intuitive Figma components to structuring clear visual hierarchies, Avika consistently delivers polished creative assets ahead of schedule.",
    author: "Project Peer",
    context: "Digital Product & UI/UX Workflow",
    year: "2026"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section section-wrap section-pad" aria-label="Endorsements & Collaborative Feedback">
      <div className="section-heading">
        <div>
          <p className="eyebrow">07 / COLLABORATIVE FEEDBACK</p>
          <h2>
            What peers &amp; collaborators
            <br />
            <em>say about working together.</em>
          </h2>
        </div>
        <p className="section-intro">
          Reflections from creative collaborators, project peers, and independent stakeholders on design craft, communication discipline, and creative execution.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item, idx) => (
          <div key={idx} className="testimonial-card">
            <div className="testimonial-top">
              <div className="testimonial-quote-icon">
                <Quote size={20} />
              </div>
              <span className="testimonial-year">{item.year}</span>
            </div>

            <p className="testimonial-quote-text">&ldquo;{item.quote}&rdquo;</p>

            <div className="testimonial-author-block">
              <div className="testimonial-author-info">
                <span className="testimonial-author-name">{item.author}</span>
                <span className="testimonial-context">{item.context}</span>
              </div>
              <span className="testimonial-verified-badge" title="Verified Collaboration">
                <CheckCircle2 size={13} /> Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

