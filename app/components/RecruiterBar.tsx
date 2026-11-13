"use client";

import { useState } from "react";
import { Check, Copy, Download, FileText, Send, Sparkles, UserCheck, Briefcase } from "lucide-react";

interface RecruiterBarProps {
  onOpenResume: () => void;
}

export default function RecruiterBar({ onOpenResume }: RecruiterBarProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("avikajain1107@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <aside className="recruiter-bar" aria-label="Recruiter Quick Overview">
      <div className="section-wrap recruiter-inner">
        <div className="recruiter-left">
          <div className="recruiter-badge">
            <span className="live-dot" />
            <span className="recruiter-badge-text">RECRUITER FAST-TRACK · OPEN TO OPPORTUNITIES 2026</span>
          </div>
          <p className="recruiter-summary">
            <strong>In 10 seconds:</strong> Creative designer working across graphic design, digital product experiences, brand identity and video storytelling.
          </p>
          <div className="recruiter-tags">
            <span className="recruiter-tag"><Briefcase size={11} /> Full-Time &amp; Freelance</span>
            <span className="recruiter-tag"><UserCheck size={11} /> Moradabad · Remote &amp; Relocation</span>
            <span className="recruiter-tag">PS · AI · FIGMA · PR</span>
          </div>
        </div>

        <div className="recruiter-actions">
          <button
            type="button"
            onClick={onOpenResume}
            className="recruiter-btn recruiter-btn-primary"
          >
            <FileText size={14} /> <span>Resume &amp; Credentials</span>
          </button>

          <a
            href="https://wa.me/917302415626"
            target="_blank"
            rel="noreferrer"
            className="recruiter-btn"
          >
            <Send size={14} /> <span>Quick WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="recruiter-btn"
            title="Copy email to clipboard"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? "Email Copied!" : "Copy Email"}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

