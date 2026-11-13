"use client";

import { useState } from "react";
import Header from "./components/Header";
import RecruiterBar from "./components/RecruiterBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import CaseStudyModal, { type ProjectData } from "./components/CaseStudyModal";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AmbientCanvas from "./components/AmbientCanvas";
import ResumeModal from "./components/ResumeModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <main className="portfolio-root">
      {/* Background Subtle Particle Canvas */}
      <AmbientCanvas />

      {/* Background Grain Texture Overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Global Fixed Navigation */}
      <Header onOpenResume={() => setResumeOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResume={() => setResumeOpen(true)} />

      {/* Recruiter Fast-Track 10-Second Summary Bar */}
      <RecruiterBar onOpenResume={() => setResumeOpen(true)} />

      {/* Editorial Marquee Banner */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i}>
              DESIGN WITH INTENTION <i>✳</i> CRAFT WITH CURIOSITY <i>✳</i> COMMUNICATE WITH HEART <i>✳</i> SHAPE BETTER EXPERIENCES <i>✳</i>{" "}
            </span>
          ))}
        </div>
      </div>

      {/* Selected Projects with Filter & Interactive Case Studies */}
      <Projects onSelectProject={(project) => setSelectedProject(project)} />

      {/* Editorial About Me Section */}
      <About />

      {/* Services & Capabilities */}
      <Services />

      {/* Professional Skills & Creative Toolkit */}
      <Skills />

      {/* 4-Step Design Process Timeline */}
      <Process />

      {/* Experience & Education Verified Timeline */}
      <Experience />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Detailed Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Resume & CV Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </main>
  );
}
