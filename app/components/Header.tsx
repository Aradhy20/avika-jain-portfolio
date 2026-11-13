"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, FileText, Send, Mail } from "lucide-react";

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-container">
          <a className="wordmark" href="#top" aria-label="Avika Jain Home">
            avika<span>.</span>
          </a>

          <nav className="desktop-nav" aria-label="Main Navigation">
            <a href="#work" className="nav-link">
              Work <sup>06</sup>
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#process" className="nav-link">
              Process
            </a>
            <a href="#experience" className="nav-link">
              Timeline
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>

          <div className="nav-right">
            <button
              type="button"
              onClick={onOpenResume}
              className="nav-resume-btn"
              aria-label="View verified resume"
            >
              <FileText size={14} /> <span>Resume</span>
            </button>

            <a className="nav-cta" href="#contact">
              <span>Let&apos;s talk</span> <ArrowUpRight size={14} />
            </a>

            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-inner">
              <div className="mobile-menu-links">
                {[
                  { label: "Work", href: "#work", count: "06" },
                  { label: "About", href: "#about" },
                  { label: "Skills & Toolkit", href: "#skills" },
                  { label: "Design Process", href: "#process" },
                  { label: "Experience & Education", href: "#experience" },
                  { label: "Contact & Inquiries", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.label}
                    onClick={closeMenu}
                    href={item.href}
                    className="mobile-link-item"
                  >
                    <span>{item.label}</span>
                    {item.count && <small>{item.count}</small>}
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>

              <div className="mobile-menu-footer">
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    onOpenResume();
                  }}
                  className="mobile-cv-btn"
                >
                  <FileText size={15} /> View Verified Curriculum Vitae
                </button>
                <div className="mobile-quick-contacts">
                  <a href="mailto:avikajain1107@gmail.com">
                    <Mail size={14} /> avikajain1107@gmail.com
                  </a>
                  <a href="https://wa.me/917302415626" target="_blank" rel="noreferrer">
                    <Send size={14} /> +91 73024 15626
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

