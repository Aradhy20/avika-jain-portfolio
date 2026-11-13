"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Sparkles, Compass, Users, Lightbulb, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section className="about-section section-pad" id="about" aria-label="About Avika Jain">
      <div className="section-wrap about-grid">
        {/* Left Side: Editorial Typography Monogram & Visual */}
        <div className="about-side">
          <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
          <div className="about-big-number">
            A<span>.</span>
          </div>

          <div className="about-side-portrait-card">
            <div className="about-photo-wrapper">
              <img
                src="/avika-showcase.jpg"
                alt="Avika Jain — Independent Designer & Visual Storyteller"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.endsWith("/avika-profile.jpeg")) {
                    target.src = "/avika-profile.jpeg";
                  }
                }}
              />
            </div>
            <div className="about-photo-caption">
              <span>AVIKA JAIN</span>
              <small>MORADABAD, INDIA</small>
            </div>
          </div>

          <div className="about-side-note">
            CURIOUS MIND.
            <br />
            CONSIDERED DESIGN.
          </div>
        </div>

        {/* Right Side: Editorial Body Copy & Values */}
        <div className="about-main">
          <h2>
            Good design should
            <br />
            make you <em>feel something.</em>
          </h2>

          <div className="about-body">
            <p className="about-lead">
              Hello, I&apos;m Avika Jain — a multidisciplinary creative passionate about visual storytelling, thoughtful digital experiences and meaningful design.
            </p>
            <p>
              Based in Moradabad, Uttar Pradesh, I work at the intersection of brand identity, digital product design, editorial layouts, and video motion. I believe great design isn&apos;t just about visual decoration; it&apos;s about creating clarity, emotional connection, and moments of quiet delight.
            </p>
            <p>
              Whether I&apos;m establishing a cohesive brand world from scratch, structuring intuitive user journeys in Figma, or editing a fast-paced vertical video reel in Premiere Pro, my goal remains consistent: craft work that feels intentional, memorable, and human.
            </p>

            <a className="inline-link" href="#contact">
              A little more about working together <ArrowUpRight size={16} />
            </a>
          </div>

          {/* 4 Pillars of Avika's Creative Practice */}
          <div className="about-pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon">
                <Heart size={18} />
              </div>
              <h4>Creative Philosophy</h4>
              <p>
                Design with intention, craft with curiosity, communicate with heart. Every detail, from typographic tracking to button hover transitions, serves a distinct purpose.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <Compass size={18} />
              </div>
              <h4>Design Interests</h4>
              <p>
                Expressive typography systems, editorial print aesthetics brought to web, tactile mobile micro-interactions, and rhythm-synchronized video storytelling.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <Lightbulb size={18} />
              </div>
              <h4>Working Approach</h4>
              <p>
                Listen deeply to the core challenge, explore divergent visual directions without ego, test rigorously against user expectations, and polish until the execution feels effortless.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon">
                <Users size={18} />
              </div>
              <h4>Collaboration Approach</h4>
              <p>
                Transparent, deadline-disciplined, receptive to iterative feedback, and dedicated to elevating the team&apos;s collective vision through clear visual deliverables.
              </p>
            </div>
          </div>

          {/* Verified Stats */}
          <div className="about-stats">
            <div>
              <b>04</b>
              <span>CREATIVE DISCIPLINES</span>
            </div>
            <div>
              <b>100%</b>
              <span>FOCUSED CRAFT</span>
            </div>
            <div>
              <b>01</b>
              <span>CURIOUS MIND</span>
            </div>
            <div>
              <b>2026</b>
              <span>AVAILABLE NOW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

