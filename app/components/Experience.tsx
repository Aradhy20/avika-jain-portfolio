"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section className="experience section-wrap section-pad" id="experience" aria-label="Experience & Education">
      <div className="section-heading">
        <div>
          <p className="eyebrow">06 / THE JOURNEY SO FAR</p>
          <h2>
            Learning by
            <br />
            <em>making things.</em>
          </h2>
        </div>
        <p className="section-intro">
          A foundation in multidisciplinary education, independent creative practice, and an unrelenting drive to learn by shipping real work.
        </p>
      </div>

      <div className="journey-grid">
        {/* Experience Column */}
        <div className="journey-col">
          <div className="journey-col-header">
            <Briefcase size={16} />
            <span className="journey-label">EXPERIENCE &amp; PRACTICE</span>
          </div>

          <div className="journey-entry">
            <span className="journey-dot" />
            <div className="journey-entry-meta">
              <span className="journey-date">2024 — PRESENT</span>
              <span className="journey-chip">INDEPENDENT / FREELANCE</span>
            </div>
            <h3>Independent Creative Designer</h3>
            <p className="journey-org">Self-Employed · Moradabad &amp; Remote</p>
            <p className="journey-description">
              Creating visual identities, promotional posters, editorial layout systems, and short-form video reels for independent projects and creator brands.
            </p>
            <ul className="journey-bullets">
              <li>Authored complete brand style guidelines, logo suites, and typography rules.</li>
              <li>Engineered interactive mobile wireframes and high-fidelity product prototypes in Figma.</li>
              <li>Directed and cut dynamic rhythm-matched vertical video edits with custom kinetic typography.</li>
            </ul>
          </div>
        </div>

        {/* Education Column */}
        <div className="journey-col">
          <div className="journey-col-header">
            <GraduationCap size={16} />
            <span className="journey-label">ACADEMIC FOUNDATION</span>
          </div>

          <div className="journey-entry">
            <span className="journey-dot" />
            <div className="journey-entry-meta">
              <span className="journey-date">2025 — PRESENT (ONGOING)</span>
              <span className="journey-chip">UNDERGRADUATE</span>
            </div>
            <h3>Graduation Studies</h3>
            <p className="journey-org">Teerthanker Mahaveer University</p>
            <p className="journey-description">
              Pursuing foundational degree studies in Moradabad alongside dedicated self-directed practice in digital product design, visual arts, and video production.
            </p>
          </div>

          <div className="journey-entry">
            <span className="journey-dot" />
            <div className="journey-entry-meta">
              <span className="journey-date">2024 — 2025</span>
              <span className="journey-chip">SECONDARY EDUCATION</span>
            </div>
            <h3>Intermediate (Class XII)</h3>
            <p className="journey-org">C.R.B. Memorial Public School</p>
            <p className="journey-description">
              Moradabad, Uttar Pradesh. Completed higher secondary curriculum with focused foundation in communication, design principles, and academic rigor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

