"use client";

import { useState } from "react";
import { Mail, Send, Check, ArrowUpRight, Linkedin, Instagram, Asterisk, Sparkles, Clock, MapPin, Copy } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Freelance Project",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("avikajain1107@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Graceful fallback to mailto if EmailJS credentials are not configured
    if (!service || !template || !key) {
      const emailSubject = encodeURIComponent(`Portfolio Inquiry [${form.subject}]: from ${form.name}`);
      const emailBody = encodeURIComponent(
        `Hi Avika,\n\n${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.subject}`
      );
      window.location.href = `mailto:avikajain1107@gmail.com?subject=${emailSubject}&body=${emailBody}`;
      setSent(true);
      return;
    }

    setSending(true);
    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.default.send(
        service,
        template,
        {
          from_name: form.name,
          reply_to: form.email,
          subject: `Portfolio Inquiry [${form.subject}]: from ${form.name}`,
          message: `${form.message}\n\nProject Type: ${form.subject}`,
        },
        { publicKey: key }
      );
      setSent(true);
      setForm({ name: "", email: "", subject: "Freelance Project", message: "" });
    } catch {
      // Fallback on error
      const emailSubject = encodeURIComponent(`Portfolio Inquiry [${form.subject}]: from ${form.name}`);
      const emailBody = encodeURIComponent(
        `Hi Avika,\n\n${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}`
      );
      window.location.href = `mailto:avikajain1107@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section section-pad" id="contact" aria-label="Contact Avika Jain">
      <div className="section-wrap contact-grid">
        {/* Left Column: Details & Fast Channels */}
        <div className="contact-info-col">
          <p className="eyebrow">07 / HAVE A GOOD ONE IN MIND?</p>
          <h2 className="contact-heading">
            Have a creative project in mind?
            <br />
            <em>Let&apos;s make it happen.</em>
          </h2>

          <p className="contact-copy">
            Whether you have a full-time role, a freelance brand brief, an intuitive digital product to design, or simply want to say hello — I would love to hear what you are envisioning.
          </p>

          <div className="contact-details">
            <a
              href="mailto:avikajain1107@gmail.com"
              className="contact-card-link"
              title="Send email directly"
            >
              <div className="contact-card-icon">
                <Mail size={18} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">EMAIL ADDRESS</span>
                <span className="contact-card-value">avikajain1107@gmail.com</span>
              </div>
              <ArrowUpRight size={15} className="contact-card-arrow" />
            </a>

            <a
              href="https://wa.me/917302415626"
              target="_blank"
              rel="noreferrer"
              className="contact-card-link"
              title="Chat on WhatsApp"
            >
              <div className="contact-card-icon">
                <Send size={18} />
              </div>
              <div className="contact-card-text">
                <span className="contact-card-label">WHATSAPP DIRECT</span>
                <span className="contact-card-value">+91 73024 15626</span>
              </div>
              <ArrowUpRight size={15} className="contact-card-arrow" />
            </a>
          </div>

          {/* Availability Indicators */}
          <div className="contact-meta-pills">
            <div className="meta-pill">
              <Clock size={13} />
              <span>Usually replies within 24 hours</span>
            </div>
            <div className="meta-pill">
              <MapPin size={13} />
              <span>Moradabad, India · Remote Worldwide</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="socials-wrapper">
            <span className="socials-label">EXPLORE PROFILES</span>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/avika-jain-designer"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.behance.net/avikajain"
                target="_blank"
                rel="noreferrer"
                aria-label="Behance Portfolio"
              >
                <Asterisk size={18} />
              </a>
              <a
                href="https://github.com/Aradhy20/avika-jain-portfolio"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
              >
                <Sparkles size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit} aria-label="Send direct message">
          <div className="form-eyebrow">
            <span>DIRECT INQUIRY</span>
            <span className="sparkle-icon">✳</span>
          </div>

          <div className="form-group">
            <label htmlFor="contact-name">
              Your name <span className="req">*</span>
            </label>
            <input
              id="contact-name"
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="What should I call you?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">
              Email address <span className="req">*</span>
            </label>
            <input
              id="contact-email"
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">Project or Inquiry Type</label>
            <select
              id="contact-subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="contact-select"
            >
              <option value="Freelance Project">Freelance Creative Project</option>
              <option value="Full-Time Role">Full-Time Job Opportunity</option>
              <option value="Brand Identity">Brand Identity System</option>
              <option value="UI/UX Design">UI/UX &amp; Product Design</option>
              <option value="Video Editing">Video &amp; Motion Editing</option>
              <option value="General Hello">General Hello / Design Chat</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">
              Tell me a little about it <span className="req">*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Describe your vision, timeline, goals, or role..."
            />
          </div>

          <button
            type="submit"
            className="button button-dark form-submit"
            disabled={sending}
          >
            <span>
              {sent ? "Message Prepared & Sent" : sending ? "Sending..." : "Send Your Message"}
            </span>
            {sent ? <Check size={16} /> : <ArrowUpRight size={16} />}
          </button>

          <div className="form-footnote">
            <small>
              Prefers direct email?{" "}
              <button type="button" onClick={copyEmail} className="inline-copy-btn">
                {copiedEmail ? "Copied!" : "Click to copy avikajain1107@gmail.com"}
              </button>
            </small>
          </div>
        </form>
      </div>
    </section>
  );
}

