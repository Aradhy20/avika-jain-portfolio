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
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AmbientCanvas from "./components/AmbientCanvas";
import ResumeModal from "./components/ResumeModal";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <main className="portfolio-root">
      {/* Scroll Progress Bar at the top of the viewport */}
      <ScrollProgress />

      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

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

      {/* Professional Skills & Verified Creative Toolkit */}
      <Skills />

      {/* 6-Step Creative Methodology Timeline */}
      <Process />

      {/* Experience & Education Verified Timeline */}
      <Experience />

      {/* Collaborative Endorsements & Peer Reviews */}
      <Testimonials />

      {/* Contact Section with Budget Selector */}
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
