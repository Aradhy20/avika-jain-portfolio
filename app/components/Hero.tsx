"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Asterisk, Download, Send, PenTool, Sparkles, Palette } from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

const roles = [
  "Graphic Designer & Visual Artist",
  "Brand Identity Specialist",
  "UI/UX & Product Designer",
  "Video Editor & Motion Designer",
];

export default function Hero({ onOpenResume }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotate roles smoothly every 3.2 seconds
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
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  // Parallax offsets for floating 3D creative objects
  const floatObjX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);
  const floatObjY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-18, 18]), springConfig);

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

  // Letter array for letter-by-letter typographic animation
  const firstNameLetters = ["A", "v", "i", "k", "a"];
  const surnameLetters = ["J", "a", "i", "n"];

  return (
    <section className="hero section-wrap" id="top" aria-label="Hero Introduction">
      <div className="hero-left">
        {/* Availability Badge */}
        <div className="availability">
          <span className="live-dot" />
          <span>AVAILABLE FOR SELECT OPPORTUNITIES</span>
          <span className="availability-year">2026</span>
        </div>

        {/* Eyebrow */}
        <p className="eyebrow hero-eyebrow">
          GRAPHIC DESIGNER &amp; CREATIVE VISUAL ARTIST · MORADABAD, INDIA
        </p>

        {/* Main Letter-by-Letter Animated Headline */}
        <h1 className="hero-heading" aria-label="Avika Jain">
          <span className="hero-firstname">
            {firstNameLetters.map((char, i) => (
              <span key={i} className="letter-span">
                {char}
              </span>
            ))}
          </span>
          <span className="hero-surname">
            {surnameLetters.map((char, i) => (
              <span key={i} className="letter-span">
                {char}
              </span>
            ))}
            <span className="hero-period">.</span>
          </span>
        </h1>

        {/* Animated Role Text Transition */}
        <div className="hero-role-wrapper">
          <span className="role-bullet">✦</span>
          <div className="role-ticker" aria-live="polite">
            <motion.span
              key={roles[roleIndex]}
              className="role-text"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </div>
          <span className="subline-rule" />
        </div>

        {/* Introduction Copy */}
        <p className="hero-copy">
          I transform ideas into meaningful visual experiences through graphic design, brand identities, editorial layouts and motion storytelling.
        </p>

        {/* 3 CTA Buttons */}
        <div className="hero-actions">
          <a className="button button-dark magnetic-target" href="#work">
            <span>Explore My Work</span> <ArrowUpRight size={16} />
          </a>
          <button
            type="button"
            onClick={onOpenResume}
            className="button button-outline magnetic-target"
            aria-label="Download or view verified resume"
          >
            <Download size={15} /> <span>Download CV</span>
          </button>
          <a className="button button-beige magnetic-target" href="#contact">
            <span>Contact Me</span> <Send size={14} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-foot">
          <span className="hero-scroll-label">SCROLL TO EXPLORE</span>
          <motion.div
            animate={reduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
          <span className="hero-index">01 — 08</span>
        </div>
      </div>

      {/* Hero Visual Area with 3D Tilt Portrait & Floating 3D Objects */}
      <div
        className="hero-visual"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Subtle Background Orbits */}
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />

        {/* Floating 3D Creative Scene Elements */}
        <motion.div
          className="floating-3d-object obj-pen"
          style={reduceMotion ? {} : { x: floatObjX, y: floatObjY }}
          aria-hidden="true"
        >
          <div className="creative-obj-box">
            <PenTool size={16} />
            <span>Vector Pen</span>
          </div>
        </motion.div>

        <motion.div
          className="floating-3d-object obj-geometry"
          style={reduceMotion ? {} : { x: floatObjY, y: floatObjX }}
          aria-hidden="true"
        >
          <div className="creative-shape-disc" />
        </motion.div>

        {/* 3D Tilted Portrait Card */}
        <motion.div
          className="portrait-frame"
          style={reduceMotion ? {} : { rotateX, rotateY, transformPerspective: 1000 }}
        >
          <div className="portrait-image">
            {/* Real verified portrait artwork of Avika Jain */}
            <img
              src="/avika-showcase.jpg"
              alt="Avika Jain — Graphic Designer & Creative Visual Artist"
              loading="eager"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.endsWith("/avika-profile.jpeg")) {
                  target.src = "/avika-profile.jpeg";
                }
              }}
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
          <span>✳</span> VISUAL STORIES
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
          <span className="tool-dot ps" /> PS · AI · CANVA · PR · AE
        </motion.div>

        {/* Visual Caption */}
        <div className="visual-caption">
          <span>FIG. 001</span>
          <span>THE CREATIVE ARTIST</span>
        </div>
      </div>
    </section>
  );
}
