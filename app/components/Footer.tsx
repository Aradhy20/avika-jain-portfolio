"use client";

import { ArrowUp, ArrowUpRight, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer section-wrap" role="contentinfo">
      <div className="footer-left">
        <a className="wordmark" href="#top" aria-label="Return to top of page">
          avika<span>.</span>
        </a>
        <span className="footer-credit">
          DESIGNED WITH INTENTION · CRAFTED FOR IMPACT
        </span>
      </div>

      <div className="footer-center">
        <a
          href="https://www.linkedin.com/in/avika-jain-890167397/"
          target="_blank"
          rel="noreferrer"
          className="footer-social-link"
          aria-label="Avika Jain on LinkedIn"
        >
          <Linkedin size={13} /> <span>LinkedIn Profile</span> <ArrowUpRight size={11} />
        </a>
        <span className="footer-dot">•</span>
        <span className="footer-location">MORADABAD, INDIA · AVAILABLE 2026</span>
      </div>

      <div className="footer-right">
        <button
          type="button"
          onClick={scrollToTop}
          className="footer-top-btn"
          aria-label="Scroll back to top"
        >
          <span>BACK TO TOP</span> <ArrowUp size={13} />
        </button>
        <span className="footer-copyright">
          © {new Date().getFullYear()} AVIKA JAIN. ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
}
