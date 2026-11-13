"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Asterisk, Download, Sparkles, Send } from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

const roles = [
  "Graphic Designer",
  "UI/UX & Product Designer",
  "Video & Motion Editor",
  "Visual Brand Storyteller",
];

export default function Hero({ onOpenResume }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotate roles smoothly every 3 seconds
  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  // Mouse tilt physics for the portrait card
  const cardRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="hero section-wrap" id="top" aria-label="Hero Introduction">
      <div className="hero-left">
        {/* Availability Badge */}
        <motion.div
          className="availability"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="live-dot" />
          <span>AVAILABLE FOR SELECT OPPORTUNITIES</span>
          <span className="availability-year">2026</span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          INDEPENDENT CREATIVE / MORADABAD, INDIA
        </motion.p>

        {/* Main Staggered Headline */}
        <h1 className="hero-heading">
          <motion.span
            className="hero-firstname"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Avika
          </motion.span>
          <motion.span
            className="hero-surname"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          >
            Jain<span className="hero-period">.</span>
          </motion.span>
        </h1>

        {/* Animated Role Text Transition */}
        <div className="hero-role-wrapper">
          <span className="role-bullet">✦</span>
          <div className="role-ticker" aria-live="polite">
            <motion.span
              key={roles[roleIndex]}
              className="role-text"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </div>
          <span className="subline-rule" />
        </div>

        {/* Introduction Copy */}
        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          I transform ideas into meaningful visual experiences through graphic design, digital products, branding and motion.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a className="button button-dark" href="#work">
            <span>Explore My Work</span> <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            onClick={onOpenResume}
            className="button button-outline"
            aria-label="Download or view verified resume"
          >
            <Download size={15} /> <span>Download My Resume</span>
          </button>
          <a className="text-link" href="#contact">
            <span>Let&apos;s Collaborate</span> <Send size={14} />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="hero-foot">
          <span className="hero-scroll-label">SCROLL TO EXPLORE</span>
          <motion.div
            animate={reduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
          <span className="hero-index">01 — 06</span>
        </div>
      </div>

      {/* Hero Visual Area with 3D Tilt Portrait & Floating Toolkit */}
      <div
        className="hero-visual"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Subtle Background Orbits */}
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />

        {/* 3D Tilted Portrait Card */}
        <motion.div
          className="portrait-frame"
          style={reduceMotion ? {} : { rotateX, rotateY, transformPerspective: 1000 }}
          initial={{ clipPath: "inset(0 0 100% 0)", scale: 1.04 }}
          animate={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.77, 0, 0.18, 1] }}
        >
          <div className="portrait-image">
            {/* Real verified portrait artwork of Avika Jain */}
            <img
              src="/avika-showcase.jpg"
              alt="Avika Jain — Graphic Designer, UI/UX & Product Designer, Video Editor"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Rotating Editorial Creative Badge */}
        <motion.div
          className="hero-sticker"
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 120 120" aria-label="Creative by nature">
            <defs>
              <path
                id="circlePath"
                d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
              />
            </defs>
            <text>
              <textPath href="#circlePath">
                CREATIVE BY NATURE • MADE WITH INTENTION •{" "}
              </textPath>
            </text>
            <Asterisk size={24} />
          </svg>
        </motion.div>

        {/* Floating Creative Toolkit Badges */}
        <motion.div
          className="floating-note note-a"
          animate={reduceMotion ? {} : { y: [0, -7, 0], rotate: [-4, -1, -4] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>✳</span> IDEA TO IMAGE
        </motion.div>

        <motion.div
          className="floating-note note-b"
          animate={reduceMotion ? {} : { y: [0, 8, 0], rotate: [3, 1, 3] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>✦</span> ALWAYS CURIOUS
        </motion.div>

        {/* Floating Tool Pills */}
        <motion.div
          className="floating-tool-pill tool-ps"
          animate={reduceMotion ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="tool-dot ps" /> PS · AI · FIGMA
        </motion.div>

        {/* Visual Caption */}
        <div className="visual-caption">
          <span>FIG. 001</span>
          <span>THE CREATIVE MIND</span>
        </div>
      </div>
    </section>
  );
}

