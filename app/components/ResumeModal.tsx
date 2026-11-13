"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, Mail, Send, Check, ExternalLink, Sparkles } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const [hasPdf, setHasPdf] = useState(false);

  useEffect(() => {
    // Check if a real PDF exists in /public
    fetch("/Avika_Jain_Resume.pdf", { method: "HEAD" })
      .then((res) => {
        if (res.ok && res.headers.get("content-type")?.includes("pdf")) {
          setHasPdf(true);
        } else {
          setHasPdf(false);
        }
      })
      .catch(() => setHasPdf(false));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText("avikajain1107@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-title">
          <motion.div
            className="resume-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header bar */}
            <div className="modal-topbar">
              <div className="modal-tag">
                <span className="live-dot" /> VERIFIED CURRICULUM VITAE
              </div>
              <div className="modal-actions-top">
                {hasPdf ? (
                  <a
                    href="/Avika_Jain_Resume.pdf"
                    download="Avika_Jain_Resume.pdf"
                    className="modal-action-btn primary"
                  >
                    <Download size={14} /> Download PDF
                  </a>
                ) : (
                  <a
                    href="mailto:avikajain1107@gmail.com?subject=Request%20Official%20PDF%20Resume%20%E2%80%94%20Avika%20Jain"
                    className="modal-action-btn primary"
                  >
                    <Mail size={14} /> Request PDF CV
                  </a>
                )}
                <button
                  type="button"
                  onClick={handlePrint}
                  className="modal-action-btn"
                  title="Print or Save as PDF"
                >
                  <Printer size={14} /> Print
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="modal-close-btn"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Printable & Interactive CV Sheet */}
            <div className="resume-sheet">
              <div className="resume-header">
                <div>
                  <h2 id="resume-title" className="resume-name">Avika Jain</h2>
                  <p className="resume-role">
                    Graphic Designer · UI/UX &amp; Product Designer · Video Editor
                  </p>
                  <p className="resume-location">Moradabad, Uttar Pradesh, India · Open to Remote &amp; On-Site</p>
                </div>
                <div className="resume-contact-block">
                  <a href="mailto:avikajain1107@gmail.com" className="resume-contact-link">
                    <Mail size={13} /> avikajain1107@gmail.com
                  </a>
                  <a href="https://wa.me/917302415626" target="_blank" rel="noreferrer" className="resume-contact-link">
                    <Send size={13} /> +91 73024 15626
                  </a>
                  <button type="button" onClick={copyEmail} className="resume-copy-btn">
                    {copied ? <Check size={12} /> : null} {copied ? "Copied" : "Copy email address"}
                  </button>
                </div>
              </div>

              <div className="resume-divider" />

              {/* Profile summary */}
              <div className="resume-section">
                <h3 className="resume-section-title">PROFESSIONAL SUMMARY</h3>
                <p className="resume-body-text">
                  Independent creative designer specializing in visual storytelling, brand identities, digital product interfaces, and short-form motion editing. Committed to purposeful design, structured layout systems, and crafting digital experiences that feel intuitive, elegant, and deeply human.
                </p>
              </div>

              {/* Core disciplines */}
              <div className="resume-section">
                <h3 className="resume-section-title">CORE DISCIPLINES</h3>
                <div className="resume-grid-2">
                  <div className="resume-card">
                    <h4>Graphic &amp; Brand Design</h4>
                    <p>Visual identity systems, brand guidelines, editorial layouts, poster design, typography hierarchy, social media creative systems.</p>
                  </div>
                  <div className="resume-card">
                    <h4>UI/UX &amp; Product Design</h4>
                    <p>User flows, wireframing, high-fidelity prototypes, component design systems, responsive web &amp; mobile interfaces, accessibility fundamentals.</p>
                  </div>
                  <div className="resume-card">
                    <h4>Video &amp; Motion Editing</h4>
                    <p>Short-form video editing, kinetic motion typography, beat-matched social storytelling, reel pacing, sound design transitions.</p>
                  </div>
                  <div className="resume-card">
                    <h4>Creative Workflow &amp; Tools</h4>
                    <p>Adobe Photoshop, Illustrator, Premiere Pro, After Effects, Figma, Canva, AI-assisted creative workflows (Adobe Firefly).</p>
                  </div>
                </div>
              </div>

              {/* Technical toolkit */}
              <div className="resume-section">
                <h3 className="resume-section-title">TECHNICAL TOOLKIT</h3>
                <div className="resume-skills-tags">
                  <span className="skill-pill">Adobe Photoshop</span>
                  <span className="skill-pill">Adobe Illustrator</span>
                  <span className="skill-pill">Figma</span>
                  <span className="skill-pill">Adobe Premiere Pro</span>
                  <span className="skill-pill">Adobe After Effects</span>
                  <span className="skill-pill">Canva</span>
                  <span className="skill-pill">Typography</span>
                  <span className="skill-pill">Editorial Layout</span>
                  <span className="skill-pill">Design Systems</span>
                  <span className="skill-pill">Prototyping</span>
                  <span className="skill-pill">Wireframing</span>
                  <span className="skill-pill">Motion Graphics</span>
                  <span className="skill-pill">Adobe Firefly</span>
                  <span className="skill-pill">Accessibility (WCAG)</span>
                </div>
              </div>

              {/* Experience */}
              <div className="resume-section">
                <h3 className="resume-section-title">EXPERIENCE</h3>
                <div className="resume-timeline-item">
                  <div className="resume-item-top">
                    <h4>Independent Creative Designer / Freelance</h4>
                    <span className="resume-date">2024 — Present</span>
                  </div>
                  <p className="resume-item-sub">Self-Employed · Project-Based &amp; Advisory</p>
                  <ul className="resume-bullets">
                    <li>Developed brand identity guidelines, visual marks, typography pairings, and promotional assets for independent initiatives and creator accounts.</li>
                    <li>Designed responsive product concepts, user journeys, wireframes, and interactive clickable prototypes in Figma.</li>
                    <li>Produced short-form vertical video edits with animated typography, rhythm cutting, and audio synchronization for social media campaigns.</li>
                    <li>Ensured consistent visual standards and color harmony across both print and digital touchpoints.</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="resume-section">
                <h3 className="resume-section-title">EDUCATION</h3>
                <div className="resume-timeline-item">
                  <div className="resume-item-top">
                    <h4>Graduation Studies</h4>
                    <span className="resume-date">2025 — Present</span>
                  </div>
                  <p className="resume-item-sub">Teerthanker Mahaveer University</p>
                  <p className="resume-body-text">Foundational degree program pursuing multidisciplinary studies alongside intensive independent visual and digital design practice.</p>
                </div>
                <div className="resume-timeline-item" style={{ marginTop: "16px" }}>
                  <div className="resume-item-top">
                    <h4>Intermediate (Class XII)</h4>
                    <span className="resume-date">2024 — 2025</span>
                  </div>
                  <p className="resume-item-sub">C.R.B. Memorial Public School, Moradabad</p>
                  <p className="resume-body-text">Completed secondary education with focused coursework in communication and arts.</p>
                </div>
              </div>

              {/* Footer notice */}
              <div className="resume-sheet-footer">
                <span>Verified Curriculum Vitae · Avika Jain</span>
                <div className="resume-footer-links">
                  <a href="https://avika-jain-portfolio.vercel.app" target="_blank" rel="noreferrer">
                    avika-jain-portfolio.vercel.app <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

