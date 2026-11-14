"use client";

import { useState } from "react";
import { Mail, Send, Check, ArrowUpRight, Linkedin, Instagram, Asterisk, Sparkles, Clock, MapPin, DollarSign } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Brand Identity",
    budget: "$500 – $1,500 (Project-Based)",
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
      const emailSubject = encodeURIComponent(`Design Inquiry [${form.subject}]: from ${form.name}`);
      const emailBody = encodeURIComponent(
        `Hi Avika,\n\n${form.message}\n\n---\nClient Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.subject}\nEstimated Budget: ${form.budget}`
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
          subject: `Design Inquiry [${form.subject}]: from ${form.name}`,
          message: `${form.message}\n\nProject Type: ${form.subject}\nBudget: ${form.budget}`,
        },
        { publicKey: key }
      );
      setSent(true);
      setForm({ name: "", email: "", subject: "Brand Identity", budget: "$500 – $1,500 (Project-Based)", message: "" });
    } catch {
      // Fallback on error
      const emailSubject = encodeURIComponent(`Design Inquiry [${form.subject}]: from ${form.name}`);
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
          <p className="eyebrow">08 / LET&apos;S TALK</p>
          <h2 className="contact-heading">
            Have a creative vision?
            <br />
            <em>Let&apos;s bring it to life.</em>
          </h2>

          <p className="contact-copy">
            Whether you need a fresh brand identity, editorial layout, striking social media assets, a short-form video edit, or want to discuss a full-time role — let&apos;s connect.
          </p>

          <div className="contact-details">
            <a
              href="mailto:avikajain1107@gmail.com"
              className="contact-card-link"
              title="Send direct email"
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
              <span>Moradabad, India · Open to Remote &amp; Relocation</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="socials-wrapper">
            <span className="socials-label">VERIFIED PROFILES</span>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/avika-jain-890167397/"
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
                href="https://www.instagram.com/avikajain.design"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
              >
                <Instagram size={18} />
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
            <span>PROJECT INQUIRY FORM</span>
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

          <div className="form-row-2">
            <div className="form-group">
              <label htmlFor="contact-subject">Project Category</label>
              <select
                id="contact-subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="contact-select"
              >
                <option value="Brand Identity">Brand Identity &amp; Logo</option>
                <option value="Graphic Design">Graphic &amp; Editorial Design</option>
                <option value="Poster Design">Poster &amp; Flyer Design</option>
                <option value="Social Media">Social Media Creative Kit</option>
                <option value="Video Editing">Video &amp; Motion Editing</option>
                <option value="Full-Time Role">Full-Time Career Opportunity</option>
                <option value="General Hello">General Hello / Creative Chat</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-budget">Estimated Budget</label>
              <select
                id="contact-budget"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="contact-select"
              >
                <option value="Flexible / Negotiable">Flexible / To Be Discussed</option>
                <option value="Under $500">Under $500 (Small sprint)</option>
                <option value="$500 – $1,500">$500 – $1,500 (Project-based)</option>
                <option value="$1,500 – $3,000">$1,500 – $3,000 (Complete system)</option>
                <option value="Full-Time Salary">Full-Time Salary Discussion</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">
              Project Vision &amp; Details <span className="req">*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your brand, audience, goals, or role..."
            />
          </div>

          <button
            type="submit"
            className="button button-dark form-submit"
            disabled={sending}
          >
            <span>
              {sent ? "Message Prepared & Sent" : sending ? "Sending..." : "Submit Inquiry"}
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
