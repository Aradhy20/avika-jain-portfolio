"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk,
  Check, Instagram, Linkedin, Mail, Menu, Play, X, Palette, Clapperboard,
  PenTool, MonitorSmartphone, Send, Download
} from "lucide-react";

const projects = [
  {
    n: "01", title: "Brand worlds & identities", category: "Branding",
    desc: "Visual identity explorations, campaign graphics and cohesive brand systems.",
    tags: ["Identity", "Art direction", "Social"],
    cover: "brand", year: "2026", status: "Concept showcase",
  },
  {
    n: "02", title: "Digital product experiences", category: "Product",
    desc: "Interface concepts shaped around clarity, useful journeys and thoughtful details.",
    tags: ["UI/UX", "Figma", "Prototyping"],
    cover: "product", year: "2026", status: "Concept showcase",
  },
  {
    n: "03", title: "Motion in the moment", category: "Motion",
    desc: "Short-form video edits, visual storytelling and social-first motion experiments.",
    tags: ["Editing", "Motion", "Reels"],
    cover: "motion", year: "2026", status: "Concept showcase",
  },
  {
    n: "04", title: "Campaigns that connect", category: "Graphic",
    desc: "Editorial layouts, posters and digital campaign compositions.",
    tags: ["Campaign", "Print", "Digital"],
    cover: "graphic", year: "2026", status: "Concept showcase",
  },
];
const services = [
  { no: "01", title: "Graphic design", detail: "Campaigns, posters, social creatives & visual storytelling", icon: Palette },
  { no: "02", title: "UI/UX & product design", detail: "User flows, wireframes, interfaces & clickable prototypes", icon: MonitorSmartphone },
  { no: "03", title: "Brand identity", detail: "Visual systems, typography, colour & brand consistency", icon: PenTool },
  { no: "04", title: "Video & motion", detail: "Short-form edits, reels, transitions & motion-led content", icon: Clapperboard },
];
const skills = [
  { name: "Canva", note: "Design & layouts" },
  { name: "Adobe Photoshop", note: "Image editing" },
  { name: "Adobe Illustrator", note: "Vector & identity" },
  { name: "Adobe Premiere Pro", note: "Video editing" },
  { name: "Adobe After Effects", note: "Motion graphics" },
  { name: "Figma", note: "UI/UX & prototyping", optional: true },
];
const filters = ["All", "Graphic", "Branding", "Product", "Motion"];
const reveal: Variants = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .7, ease: [0.22, 1, 0.36, 1] } } };

function ProjectArt({ type }: { type: string }) {
  if (type === "brand") return <div className="art art-brand"><span className="art-small">FORM / FUNCTION</span><div className="brand-circle">a<span>.</span></div><strong>MAKE<br/>IT MEAN.</strong><i>identity studies — 01</i></div>;
  if (type === "product") return <div className="art art-product"><span className="art-small">DIGITAL / EXPERIENCE</span><div className="phone"><div className="phone-top">studio<span>•••</span></div><div className="phone-photo"></div><b>Design for<br/>every day.</b><small>Thoughtful things, made simple.</small><div className="phone-button">Explore collection ↗</div></div><div className="product-orbit"></div></div>;
  if (type === "motion") return <div className="art art-motion"><span className="art-small">FRAME / BY / FRAME</span><div className="motion-play"><Play fill="currentColor" size={34}/></div><div className="motion-type">MOVE<br/>WITH<br/><em>MEANING</em></div><div className="timeline"><i></i><i></i><i></i><i></i><i></i></div></div>;
  return <div className="art art-graphic"><span className="art-small">POSTER / EXPERIMENT</span><div className="graphic-star">✳</div><div className="graphic-words">IDEAS<br/><em>IN</em><br/>COLOUR.</div><div className="graphic-stamp">VISUAL<br/>NOTES<br/>№ 004</div></div>;
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!service || !template || !key) {
      window.location.href = `mailto:avikajain1107@gmail.com?subject=${encodeURIComponent("Portfolio enquiry from " + form.name)}&body=${encodeURIComponent(form.message + "\n\nReply to: " + form.email)}`;
      return;
    }
    setSending(true);
    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.default.send(service, template, {
        from_name: form.name, reply_to: form.email,
        subject: "Portfolio enquiry from " + form.name, message: form.message,
      }, { publicKey: key });
      setSent(true); setForm({ name: "", email: "", message: "" });
    } catch { alert("Message could not be sent. Please email Avika directly."); }
    finally { setSending(false); }
  };
  return (
    <main>
      <div className="grain" aria-hidden="true"/>
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a className="wordmark" href="#top" aria-label="Avika Jain home">avika<span>.</span></a>
        <nav className="desktop-nav">
          <a href="#work">Work <sup>04</sup></a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </header>
      <AnimatePresence>
        {menuOpen && <motion.div className="mobile-menu" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}}>
          {["Work","About","Services","Contact"].map(x=><a key={x} onClick={closeMenu} href={`#${x.toLowerCase()}`}>{x}<ArrowUpRight/></a>)}
        </motion.div>}
      </AnimatePresence>

      <section className="hero section-wrap" id="top">
        <div className="hero-left">
          <motion.div className="availability" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.25}}><span className="live-dot"/> AVAILABLE FOR SELECT OPPORTUNITIES <span className="availability-year">2026</span></motion.div>
          <motion.p className="eyebrow hero-eyebrow" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.35}}>INDEPENDENT CREATIVE / MORADABAD, INDIA</motion.p>
          <h1><motion.span initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.9,ease:[.22,1,.36,1]}}>Avika</motion.span><motion.span className="hero-surname" initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.9,delay:.12,ease:[.22,1,.36,1]}}>Jain<span className="hero-period">.</span></motion.span></h1>
          <motion.div className="hero-subline" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.7}}>
            <span>DESIGNER & VISUAL STORYTELLER</span><span className="subline-rule"/>
          </motion.div>
          <motion.p className="hero-copy" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.8}}>
            I turn thoughtful ideas into identities, interfaces and moving images. Making the digital world feel a little more human — one detail at a time.
          </motion.p>
          <motion.div className="hero-actions" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.95}}>
            <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17}/></a>
            <a className="text-link" href="mailto:avikajain1107@gmail.com?subject=Please%20share%20your%20CV">Request my CV <Download size={16}/></a>
          </motion.div>
          <div className="hero-foot"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/><span className="hero-index">01 — 05</span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
          <motion.div className="portrait-frame" initial={{clipPath:"inset(0 0 100% 0)",scale:1.04}} animate={{clipPath:"inset(0 0 0% 0)",scale:1}} transition={{duration:1.2,delay:.3,ease:[.77,0,.18,1]}}>
            <div className="portrait-image"><img src="/avika-showcase.jpg" alt="Avika Jain — Graphic Designer, UI/UX & Product Designer, Video Editor" /></div>
          </motion.div>
          <motion.div className="hero-sticker" animate={reduceMotion?{}:{rotate:360}} transition={{duration:24,repeat:Infinity,ease:"linear"}}><svg viewBox="0 0 120 120" aria-label="Creative by nature"><defs><path id="circlePath" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"/></defs><text><textPath href="#circlePath">CREATIVE BY NATURE • MADE WITH INTENTION • </textPath></text><Asterisk size={27}/></svg></motion.div>
          <motion.div className="floating-note note-a" animate={reduceMotion?{}:{y:[0,-9,0],rotate:[-5,-2,-5]}} transition={{duration:5,repeat:Infinity}}><span>✳</span> IDEA TO IMAGE</motion.div>
          <motion.div className="floating-note note-b" animate={reduceMotion?{}:{y:[0,9,0],rotate:[4,1,4]}} transition={{duration:6,repeat:Infinity}}><span>✦</span> ALWAYS CURIOUS</motion.div>
          <div className="visual-caption"><span>FIG. 001</span><span>THE CREATIVE MIND</span></div>
        </div>
      </section>

      <div className="marquee" aria-label="Design, create, tell stories"><div className="marquee-track">{Array.from({length:2}).map((_,i)=><span key={i}>DESIGN WITH INTENTION <i>✳</i> CREATE WITH CURIOSITY <i>✳</i> TELL BETTER STORIES <i>✳</i> </span>)}</div></div>

      <section className="work section-wrap section-pad" id="work">
        <div className="section-heading">
          <div><p className="eyebrow">01 / SELECTED PROJECTS</p><h2>A little of what<br/><em>I love making.</em></h2></div>
          <p className="section-intro">A collection of visual experiments and creative directions across identity, digital products and motion. Real case studies will be added as projects are published.</p>
        </div>
        <div className="filter-row">{filters.map(f=><button key={f} className={active===f?"filter active":"filter"} onClick={()=>setActive(f)}>{f}<span>{f==="All"?"04":projects.filter(p=>p.category===f).length.toString().padStart(2,"0")}</span></button>)}</div>
        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p,i)=><motion.article className="project-card" key={p.n} layout initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{duration:.4,delay:i*.05}}>
              <div className={`project-art ${p.cover}`}><ProjectArt type={p.cover}/><span className="project-number">{p.n} / 04</span><span className="project-view"><ArrowUpRight/></span></div>
              <div className="project-info"><div><span className="project-category">{p.category} / {p.year}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><span className="concept-label">{p.status}</span></div>
            </motion.article>)}
          </AnimatePresence>
        </motion.div>
        <p className="work-note"><Asterisk size={16}/> These visual panels are illustrative portfolio placeholders, not claimed client projects. Replace them with verified work before applying.</p>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="section-wrap about-grid">
          <div className="about-side"><p className="eyebrow">02 / A LITTLE ABOUT ME</p><div className="about-big-number">A<span>.</span></div><div className="about-side-note">CURIOUS MIND.<br/>CONSIDERED DESIGN.</div></div>
          <div className="about-main">
            <h2>Good design should<br/>make you <em>feel something.</em></h2>
            <div className="about-body"><p className="about-lead">Hello, I&apos;m Avika — a creative designer exploring the space between visual communication and digital experiences.</p><p>I enjoy shaping ideas through graphic design, brand storytelling, product interfaces and video. I&apos;m drawn to the small details that make a design feel considered, clear and memorable.</p><p>My approach is curious and collaborative: learn the brief, understand the people, explore directions, then refine until the work feels right.</p><a className="inline-link" href="#contact">A little more about working together <ArrowUpRight size={16}/></a></div>
            <div className="about-stats"><div><b>04</b><span>CREATIVE DISCIPLINES</span></div><div><b>∞</b><span>IDEAS TO EXPLORE</span></div><div><b>01</b><span>CURIOUS MIND</span></div></div>
          </div>
        </div>
      </section>

      <section className="services section-wrap section-pad" id="services">
        <div className="section-heading"><div><p className="eyebrow">03 / WHAT I BRING</p><h2>Different skills.<br/><em>One point of view.</em></h2></div><p className="section-intro">From the first sketch to the final frame, I like bringing ideas to life across formats and platforms.</p></div>
        <div className="service-list">{services.map((s,i)=><motion.div className="service-row" key={s.no} initial="hidden" whileInView="show" viewport={{once:true,amount:.4}} variants={reveal}><span className="service-no">{s.no}</span><div className="service-icon"><s.icon strokeWidth={1.3}/></div><div className="service-text"><h3>{s.title}</h3><p>{s.detail}</p></div><ArrowUpRight className="service-arrow"/></motion.div>)}</div>
      </section>

      <section className="skills-section section-pad">
        <div className="section-wrap skills-grid">
          <div><p className="eyebrow">04 / MY TOOLKIT</p><h2>Tools are just<br/><em>the beginning.</em></h2><p className="skills-intro">The right tool helps an idea travel from imagination to execution. These are the tools I work with or am developing proficiency in.</p></div>
          <div className="skills-list">{skills.map((s,i)=><div className="skill-item" key={s.name}><span className="skill-index">0{i+1}</span><div><b>{s.name}{s.optional && <small> — add once proficient</small>}</b><span>{s.note}</span></div><span className="skill-mark">↗</span></div>)}</div>
        </div>
      </section>

      <section className="experience section-wrap section-pad">
        <div className="section-heading"><div><p className="eyebrow">05 / THE JOURNEY SO FAR</p><h2>Learning by<br/><em>making things.</em></h2></div><p className="section-intro">A foundation in education, independent creative practice and a commitment to keep getting better.</p></div>
        <div className="journey-grid">
          <div className="journey-col"><span className="journey-label">EXPERIENCE</span><div className="journey-entry"><span className="journey-dot"/><span className="journey-date">INDEPENDENT / FREELANCE</span><h3>Freelance creative designer</h3><p>Creating visual content, branding assets, posters and social media designs for independent projects. Add client names, dates and project outcomes where permission is available.</p><span className="journey-chip">SELF-EMPLOYED / PROJECT-BASED</span></div></div>
          <div className="journey-col"><span className="journey-label">EDUCATION</span><div className="journey-entry"><span className="journey-dot"/><span className="journey-date">2025 — 2028 · PLEASE VERIFY</span><h3>Graduation — Teerthanker Mahaveer University</h3><p>The supplied résumé lists this graduation period. Confirm the exact programme, current status and dates before publication.</p></div><div className="journey-entry"><span className="journey-dot"/><span className="journey-date">2024 — 2025</span><h3>Intermediate — C.R.B. Memorial Public School</h3><p>Moradabad, Uttar Pradesh</p></div></div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="section-wrap contact-grid">
          <div><p className="eyebrow">06 / HAVE A GOOD ONE IN MIND?</p><h2>Let&apos;s make<br/><em>something matter.</em></h2><p className="contact-copy">A role, a collaboration, a project or simply a hello — I&apos;d love to hear what you&apos;re thinking.</p><div className="contact-details"><a href="mailto:avikajain1107@gmail.com"><Mail size={18}/> avikajain1107@gmail.com <ArrowUpRight size={14}/></a><a href="https://wa.me/917302415626" target="_blank" rel="noreferrer"><Send size={18}/> +91 73024 15626 <ArrowUpRight size={14}/></a></div><div className="socials"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile — replace URL"><Linkedin/></a><a href="https://www.behance.net/" target="_blank" rel="noreferrer" aria-label="Behance profile — replace URL"><Asterisk/></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram — replace URL"><Instagram/></a></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><span className="form-eyebrow">SEND A NOTE <span>✳</span></span><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="What should I call you?"/></label><label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label>Tell me a little about it<textarea required rows={4} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="A project, a role, an idea..."/></label><button className="button button-dark form-submit" disabled={sending}>{sent ? "Message sent" : sending ? "Sending..." : "Send your message"} {sent ? <Check size={17}/> : <ArrowUpRight size={17}/>}</button><small className="form-hint">Or email directly at avikajain1107@gmail.com</small></form>
        </div>
      </section>

      <footer className="footer section-wrap"><a className="wordmark" href="#top">avika<span>.</span></a><span>MADE WITH INTENTION, IN INDIA.</span><a href="#top">BACK TO TOP ↑</a><span>© 2026 AVIKA JAIN</span></footer>
    </main>
  );
}
