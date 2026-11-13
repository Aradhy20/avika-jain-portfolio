"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, CheckCheck } from "lucide-react";

const quickPrompts = [
  { label: "🎨 Brand & Logo Design", text: "Hi Avika, I would like to discuss a brand identity & logo project." },
  { label: "📱 UI/UX Product Design", text: "Hi Avika, I'm interested in working together on a UI/UX digital product design." },
  { label: "🎬 Video & Motion Editing", text: "Hi Avika, I have a video editing / motion graphics project to discuss." },
  { label: "💼 Freelance / Role Offer", text: "Hi Avika, I saw your portfolio and would love to discuss a freelance or full-time opportunity." },
];

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Show a gentle greeting tooltip after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Close with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  const handleSend = (textToSend?: string) => {
    const msg = (textToSend || message).trim() || "Hi Avika, I'm visiting your portfolio and would like to connect!";
    const encoded = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/917302415626?text=${encoded}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setMessage("");
  };

  const handleQuickPrompt = (promptText: string) => {
    handleSend(promptText);
  };

  return (
    <div className="whatsapp-widget-root" aria-label="WhatsApp Chat Widget">
      {/* Floating Greeting Tooltip */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            className="whatsapp-tooltip"
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.92 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              className="whatsapp-tooltip-close"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              aria-label="Dismiss chat tooltip"
            >
              <X size={12} />
            </button>
            <div className="whatsapp-tooltip-content" onClick={() => setIsOpen(true)}>
              <span className="tooltip-badge">ONLINE</span>
              <p className="tooltip-title">Need creative design or video work?</p>
              <p className="tooltip-sub">Chat directly with Avika on WhatsApp 👋</p>
            </div>
            <div className="whatsapp-tooltip-arrow" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Interactive Chat Card Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="whatsapp-card"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Avika Jain WhatsApp Chat"
          >
            {/* Header */}
            <div className="whatsapp-card-header">
              <div className="whatsapp-header-user">
                <div className="whatsapp-avatar-wrap">
                  <img
                    src="/avika-showcase.jpg"
                    alt="Avika Jain"
                    className="whatsapp-avatar"
                  />
                  <span className="whatsapp-online-dot" />
                </div>
                <div>
                  <div className="whatsapp-header-name">
                    <h4>Avika Jain</h4>
                    <span className="whatsapp-verified-badge" title="Verified Creator">✓</span>
                  </div>
                  <p className="whatsapp-header-status">
                    <span className="live-status-dot" />
                    Online · Typically replies in minutes
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="whatsapp-card-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close WhatsApp chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="whatsapp-card-body">
              <div className="whatsapp-timestamp">Today</div>

              {/* Automated Welcome Message */}
              <div className="whatsapp-message-bubble incoming">
                <div className="bubble-tail" />
                <p className="bubble-text">
                  Hello! 👋 Thanks for visiting my creative portfolio.
                </p>
                <p className="bubble-text" style={{ marginTop: "6px" }}>
                  How can I help with your project? Feel free to ask for a design quote, review availability, or request my CV.
                </p>
                <div className="bubble-meta">
                  <span className="bubble-time">Just now</span>
                  <CheckCheck size={14} className="bubble-checks" />
                </div>
              </div>

              {/* Quick Prompt Pills */}
              <div className="whatsapp-quick-prompts">
                <span className="quick-prompts-label">QUICK INQUIRY</span>
                <div className="quick-prompts-grid">
                  {quickPrompts.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="quick-prompt-btn"
                      onClick={() => handleQuickPrompt(p.text)}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Input Footer */}
            <form
              className="whatsapp-card-footer"
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a message to Avika..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="whatsapp-input"
                aria-label="Message to Avika Jain"
              />
              <button
                type="submit"
                className="whatsapp-send-btn"
                aria-label="Send via WhatsApp"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Circular Floating WhatsApp Button (matches user screenshot exactly) */}
      <motion.button
        type="button"
        className={`whatsapp-float-btn ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Chat with Avika on WhatsApp"
        aria-expanded={isOpen}
      >
        {/* Subtle Outer Halo Ring */}
        <span className="whatsapp-halo-ring" />

        {/* Pulse Radar Wave */}
        <span className="whatsapp-radar-wave" />

        {/* Active Online Status Badge Dot (matches green dot in image) */}
        <span className="whatsapp-btn-badge" />

        {/* Authentic WhatsApp Speech Bubble SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          className="whatsapp-icon-svg"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.13 7.39C8.94 7.39 8.64 7.46 8.38 7.74C8.13 8.03 7.42 8.7 7.42 10.05C7.42 11.4 8.41 12.7 8.55 12.89C8.68 13.08 10.5 15.89 13.3 17.1C13.97 17.39 14.49 17.56 14.9 17.69C15.57 17.9 16.18 17.87 16.66 17.8C17.2 17.72 18.32 17.12 18.55 16.47C18.79 15.82 18.79 15.26 18.71 15.14C18.64 15.03 18.45 14.96 18.16 14.82C17.88 14.68 16.49 14 16.23 13.91C15.98 13.81 15.79 13.77 15.61 14.05C15.42 14.33 14.89 14.96 14.73 15.14C14.56 15.33 14.4 15.35 14.12 15.21C13.84 15.07 12.93 14.77 11.86 13.82C11.02 13.08 10.46 12.16 10.29 11.88C10.13 11.6 10.28 11.44 10.42 11.3C10.55 11.18 10.7 10.98 10.84 10.82C10.98 10.65 11.03 10.54 11.12 10.35C11.22 10.17 11.17 10 11.1 9.87C11.03 9.73 10.46 8.35 10.23 7.79C10 7.24 9.77 7.32 9.6 7.31C9.44 7.31 9.28 7.39 9.13 7.39Z"
          />
        </svg>
      </motion.button>
    </div>
  );
}
