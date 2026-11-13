"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Check, Sparkles, Layers, Palette, Wrench, BookOpen, ExternalLink } from "lucide-react";

export interface ProjectData {
  n: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  cover: string;
  year: string;
  status: string;
  role: string;
  duration: string;
  tools: string[];
  overview: string;
  problem: string;
  process: {
    step: string;
    description: string;
  }[];
  outcome: string;
  gallery: {
    caption: string;
    highlight: string;
    accent: string;
  }[];
  lessons: string[];
}

interface CaseStudyModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "process" | "gallery" | "lessons">("overview");

  useEffect(() => {
    setActiveTab("overview");
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="case-study-title">
        <motion.div
          className="case-study-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top Bar */}
          <div className="modal-topbar">
            <div className="case-study-badge">
              <span className="case-study-num">{project.n}</span>
              <span className="case-study-cat">{project.category}</span>
              <span className="case-study-status">{project.status}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close case study"
            >
              <X size={18} />
            </button>
          </div>

          {/* Hero Banner */}
          <div className={`case-study-hero ${project.cover}`}>
            <div className="case-study-hero-inner">
              <span className="case-study-year">{project.year} · INDEPENDENT CASE STUDY</span>
              <h2 id="case-study-title" className="case-study-headline">{project.title}</h2>
              <p className="case-study-subline">{project.subtitle}</p>
              
              <div className="case-study-meta-grid">
                <div>
                  <span className="meta-label">ROLE</span>
                  <span className="meta-value">{project.role}</span>
                </div>
                <div>
                  <span className="meta-label">TIMELINE</span>
                  <span className="meta-value">{project.duration}</span>
                </div>
                <div>
                  <span className="meta-label">DISCIPLINE</span>
                  <span className="meta-value">{project.category}</span>
                </div>
                <div>
                  <span className="meta-label">TOOLS</span>
                  <span className="meta-value">{project.tools.slice(0, 3).join(", ")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="case-study-tabs">
            <button
              type="button"
              className={activeTab === "overview" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("overview")}
            >
              Overview &amp; Problem
            </button>
            <button
              type="button"
              className={activeTab === "process" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("process")}
            >
              Design Process
            </button>
            <button
              type="button"
              className={activeTab === "gallery" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("gallery")}
            >
              Visual Showcase
            </button>
            <button
              type="button"
              className={activeTab === "lessons" ? "tab-btn active" : "tab-btn"}
              onClick={() => setActiveTab("lessons")}
            >
              Key Lessons
            </button>
          </div>

          {/* Tab Content */}
          <div className="case-study-content">
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                <div className="content-block">
                  <h3 className="content-heading"><Sparkles size={16} /> Project Overview</h3>
                  <p className="content-paragraph">{project.overview}</p>
                </div>

                <div className="content-block callout-problem">
                  <h3 className="content-heading"><Layers size={16} /> Problem Statement</h3>
                  <p className="content-paragraph">{project.problem}</p>
                </div>

                <div className="content-block">
                  <h3 className="content-heading"><Wrench size={16} /> Tools &amp; Creative Stack</h3>
                  <div className="tags-row">
                    {project.tools.map((t) => (
                      <span key={t} className="tool-chip">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="content-block">
                  <h3 className="content-heading"><Check size={16} /> Final Outcome</h3>
                  <p className="content-paragraph">{project.outcome}</p>
                </div>
              </motion.div>
            )}

            {activeTab === "process" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                <div className="process-timeline-list">
                  {project.process.map((step, idx) => (
                    <div key={step.step} className="process-step-card">
                      <div className="step-badge">Phase 0{idx + 1}</div>
                      <h4 className="step-title">{step.step}</h4>
                      <p className="step-description">{step.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "gallery" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                <div className="case-study-gallery-grid">
                  {project.gallery.map((item, idx) => (
                    <div key={idx} className="gallery-card">
                      <div className="gallery-art-box" style={{ background: item.accent }}>
                        <span className="gallery-star">✳</span>
                        <div className="gallery-highlight">{item.highlight}</div>
                      </div>
                      <p className="gallery-caption">{item.caption}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "lessons" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                <div className="content-block">
                  <h3 className="content-heading"><BookOpen size={16} /> Key Takeaways &amp; Reflections</h3>
                  <div className="lessons-list">
                    {project.lessons.map((lesson, idx) => (
                      <div key={idx} className="lesson-item">
                        <span className="lesson-number">0{idx + 1}</span>
                        <p>{lesson}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="case-study-notice">
                  <span className="notice-star">✦</span>
                  <p>
                    This is an independent concept study created by Avika Jain to explore design methodologies and creative execution. No client affiliation is implied.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="case-study-footer">
            <span className="case-study-footer-note">EXPLORATION #{project.n} · AVIKA JAIN</span>
            <div className="case-study-footer-actions">
              <a href="#contact" onClick={onClose} className="button button-dark">
                Discuss Similar Work <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

