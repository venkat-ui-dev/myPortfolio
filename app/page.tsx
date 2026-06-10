'use client';

import { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    emoji: '🤖',
    title: 'AI Chat App',
    tagline: 'Chat with Claude AI — smarter conversations',
    description: 'Full-stack real-time chat with Claude AI. Multi-conversation support, persistent chat history, and export functionality.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Claude API', 'Tailwind'],
    features: ['Google OAuth', 'Chat History', 'Export Chat', 'Real-time UI'],
    link: 'https://ai-chat-app-xi-nine.vercel.app/',
    bg: 'linear-gradient(135deg, #1e1040 0%, #2d1b69 100%)',
  },
  {
    id: 2,
    emoji: '📄',
    title: 'HireReady',
    tagline: 'Get interview-ready in minutes',
    description: 'AI-powered resume analyzer. Upload your resume, paste a JD, and get ATS scores, keyword gaps, and actionable feedback instantly.',
    tech: ['Next.js', 'React', 'TypeScript', 'Claude AI', 'Tailwind'],
    features: ['ATS Score', 'JD Match', 'Keyword Analysis', 'Tips'],
    link: 'https://hireready-nine-sigma.vercel.app',
    bg: 'linear-gradient(135deg, #052e16 0%, #064e3b 100%)',
  },
  {
    id: 3,
    emoji: '🥛',
    title: 'Milk Tracker',
    tagline: 'Dairy management, simplified',
    description: 'Smart dairy management app for tracking daily milk collection, customer payments, and delivery streaks — available in Tamil.',
    tech: ['React', 'Supabase', 'TypeScript', 'Vercel'],
    features: ['Daily Tracking', 'Payments', 'Tamil UI', 'Calendar'],
    link: 'https://milk-tracker-phi.vercel.app',
    bg: 'linear-gradient(135deg, #1c0f00 0%, #3a1f00 100%)',
  },
];

const skills = [
  { label: 'React & Next.js', level: 98 },
  { label: 'TypeScript', level: 92 },
  { label: 'Tailwind CSS', level: 95 },
  { label: 'Node.js', level: 85 },
  { label: 'Supabase & PostgreSQL', level: 82 },
  { label: 'Claude AI Integration', level: 90 },
  { label: 'Performance Optimization', level: 92 },
  { label: 'WCAG Accessibility', level: 88 },
];

const WORDS = ['React Applications', 'AI-Powered Apps', 'Frontend Systems', 'Full-Stack Products'];

function useTyping(words: string[]) {
  const [wi, setWi] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const word = words[wi % words.length];
    if (pause) { const t = setTimeout(() => setPause(false), 1200); return () => clearTimeout(t); }
    if (!del && text.length < word.length) { const t = setTimeout(() => setText(word.slice(0, text.length + 1)), 60); return () => clearTimeout(t); }
    if (!del && text.length === word.length) { setPause(true); setTimeout(() => setDel(true), 1200); return; }
    if (del && text.length > 0) { const t = setTimeout(() => setText(text.slice(0, -1)), 35); return () => clearTimeout(t); }
    if (del && text.length === 0) { setDel(false); setWi(i => (i + 1) % words.length); }
  }, [text, del, pause, wi, words]);

  return text;
}

export default function Portfolio() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const typed = useTyping(WORDS);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ background: '#05080F', color: '#E2E8F3', fontFamily: "'Inter','Segoe UI',sans-serif", minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #05080F; }
        ::-webkit-scrollbar-thumb { background: #FF6B35; border-radius: 3px; }
        .navbtn { background: none; border: none; color: #6B7A99; font-size: 14px; font-weight: 500; cursor: pointer; padding: 6px 14px; border-radius: 6px; transition: color 0.2s; font-family: 'Inter',sans-serif; }
        .navbtn:hover, .navbtn.on { color: #FF6B35; }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
        .cursor { display:inline-block; width:3px; height:1em; background:#FF6B35; margin-left:3px; animation:blink 1s infinite; vertical-align:text-bottom; border-radius:1px; }
        @keyframes float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)} }
        .float { animation:float 5s ease-in-out infinite; }
        .grid-bg { position:absolute; inset:0; background-image:linear-gradient(rgba(255,107,53,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,53,0.03) 1px,transparent 1px); background-size:60px 60px; pointer-events:none; }
        .glow { position:absolute; width:500px; height:500px; background:radial-gradient(circle,rgba(255,107,53,0.08) 0%,transparent 70%); pointer-events:none; border-radius:50%; }
        .tag { display:inline-flex; padding:3px 10px; background:rgba(255,107,53,0.12); color:#FF8F5E; font-size:11px; font-weight:500; border-radius:20px; font-family:'JetBrains Mono',monospace; }
        .stack-tag { font-size:11px; padding:3px 9px; background:rgba(255,255,255,0.07); border-radius:4px; color:rgba(255,255,255,0.45); font-family:'JetBrains Mono',monospace; }
        .pcard { border-radius:20px; overflow:hidden; border:1px solid rgba(255,255,255,0.06); transition:transform 0.3s, box-shadow 0.3s; }
        .pcard:hover { transform:translateY(-8px); box-shadow:0 28px 56px rgba(0,0,0,0.5); }
        .demo-btn { display:flex; align-items:center; justify-content:center; padding:11px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:8px; color:#E2E8F3; font-size:14px; font-weight:600; text-decoration:none; transition:all 0.2s; }
        .demo-btn:hover { background:rgba(255,107,53,0.18); border-color:rgba(255,107,53,0.45); color:#FF8F5E; }
        .pri { padding:13px 28px; background:#FF6B35; color:white; border:none; border-radius:8px; font-weight:600; font-size:15px; cursor:pointer; transition:all 0.2s; font-family:'Inter',sans-serif; }
        .pri:hover { background:#FF8050; transform:translateY(-2px); box-shadow:0 8px 24px rgba(255,107,53,0.3); }
        .sec { padding:12px 24px; background:transparent; color:#E2E8F3; border:1.5px solid rgba(255,255,255,0.15); border-radius:8px; font-weight:600; font-size:15px; cursor:pointer; transition:all 0.2s; font-family:'Inter',sans-serif; }
        .sec:hover { border-color:#FF6B35; color:#FF6B35; }
        .ccard { background:#0B1020; border:1px solid rgba(255,107,53,0.12); border-radius:16px; padding:28px; transition:all 0.2s; text-decoration:none; display:block; }
        .ccard:hover { border-color:rgba(255,107,53,0.4); transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,0,0,0.4); }
        .sec-label { font-size:12px; color:#FF6B35; font-family:'JetBrains Mono',monospace; font-weight:500; text-transform:uppercase; letter-spacing:2px; margin-bottom:12px; }
        .sec-title { font-family:'Space Grotesk',sans-serif; font-size:42px; font-weight:800; margin-bottom:8px; }
        .skill-fill { height:4px; border-radius:2px; background:linear-gradient(90deg,#FF6B35,#FF9A6C); }
        .typed-container { display:block; position:relative; height:1.3em; }
        .typed-inner { position:absolute; top:0; left:0; white-space:nowrap; }
        @media (max-width:560px) { .typed-inner { white-space:normal; font-size:36px; } .typed-container { height:2.6em; } }
        @media (max-width:900px) {
          .hero-grid { grid-template-columns:1fr !important; }
          .terminal-wrap { display:none !important; }
          .proj-grid { grid-template-columns:1fr !important; }
          .about-grid { grid-template-columns:1fr !important; }
          .contact-grid { grid-template-columns:repeat(2,1fr) !important; }
          .sec-title { font-size:32px !important; }
        }
        @media (max-width:560px) {
          .contact-grid { grid-template-columns:1fr !important; }
          .stats-grid { grid-template-columns:repeat(2,1fr) !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, background: scrolled ? 'rgba(5,8,15,0.93)' : 'transparent', backdropFilter: scrolled ? 'blur(20px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,107,53,0.1)' : 'none', transition: 'all 0.3s' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', height: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20 }}>
            VS<span style={{ color: '#FF6B35' }}>.</span>
          </span>
          <div style={{ display: 'flex', gap: 4 }}>
            {['home', 'projects', 'about', 'contact'].map(s => (
              <button key={s} className={`navbtn${active === s ? ' on' : ''}`} onClick={() => go(s)}>
                {s[0].toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" />
        <div className="glow" style={{ top: -150, left: -100 }} />
        <div className="glow" style={{ bottom: -150, right: -100 }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '120px 32px 80px', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

            {/* LEFT */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,107,53,0.1)', border: '1px solid rgba(255,107,53,0.2)', borderRadius: 20, padding: '6px 16px', marginBottom: 24 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 8px #4ADE80', display: 'inline-block' }} />
                <span style={{ fontSize: 13, color: '#FF8F5E', fontWeight: 500 }}>Available for freelance</span>
              </div>
              <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 50, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1px' }}>
                I build
                <span className="typed-container" style={{ color: '#FF6B35' }}>
                  <span className="typed-inner">{typed}<span className="cursor" /></span>
                </span>
              </h1>
              <p style={{ fontSize: 17, color: '#8899BB', lineHeight: 1.7, margin: '20px 0 10px' }}>
                Senior Frontend Developer with <strong style={{ color: '#E2E8F3' }}>11+ years</strong> experience.
                Shipped products at <strong style={{ color: '#E2E8F3' }}>Microsoft, Pfizer & Publicis</strong>.
              </p>
              <p style={{ fontSize: 15, color: '#6B7A99', lineHeight: 1.7, marginBottom: 36 }}>
                React, Next.js, TypeScript + AI-augmented development.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
                <button className="pri" onClick={() => go('projects')}>View My Work →</button>
                <button className="sec" onClick={() => go('contact')}>Hire Me</button>
              </div>
              <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {[['11+', 'Years'], ['3', 'Live Apps'], ['40%', 'Perf Boost'], ['100+', 'Reviews']].map(([n, l]) => (
                  <div key={l} style={{ textAlign: 'center', padding: '12px 8px', background: 'rgba(255,107,53,0.05)', borderRadius: 10, border: '1px solid rgba(255,107,53,0.1)' }}>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 26, fontWeight: 800, color: '#FF6B35' }}>{n}</div>
                    <div style={{ fontSize: 11, color: '#6B7A99', marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Terminal */}
            <div className="terminal-wrap" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: -30, background: 'radial-gradient(circle at center, rgba(255,107,53,0.1) 0%, transparent 70%)', filter: 'blur(24px)', borderRadius: '50%' }} />
              <div className="float" style={{ background: '#0B1120', border: '1px solid rgba(255,107,53,0.18)', borderRadius: 16, overflow: 'hidden', position: 'relative', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>
                {/* Title bar */}
                <div style={{ background: '#0D1530', padding: '13px 20px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  {['#FF5F57', '#FEBC2E', '#28C840'].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}
                  <span style={{ marginLeft: 10, fontSize: 12, color: '#4A5A7A', fontFamily: "'JetBrains Mono',monospace" }}>venkatesh.config.ts</span>
                </div>
                {/* Code */}
                <div style={{ padding: '22px 24px', fontFamily: "'JetBrains Mono',monospace", fontSize: 13, lineHeight: 2.1 }}>
                  <div style={{ color: '#4A5A7A' }}>{'// Senior Frontend Developer'}</div>
                  <div style={{ marginTop: 6 }}>
                    <span style={{ color: '#FF6B35' }}>const</span>{' '}
                    <span style={{ color: '#E2E8F3' }}>dev</span>{' '}
                    <span style={{ color: '#7C8DB0' }}>= {'{'}</span>
                  </div>
                  {[
                    ['name', '"Venkatesh S"', '#4ADE80'],
                    ['exp', '"11+ years"', '#60A5FA'],
                    ['role', '"Senior Frontend"', '#F472B6'],
                    ['location', '"Bangalore, IN"', '#4ADE80'],
                  ].map(([k, v, c]) => (
                    <div key={k} style={{ paddingLeft: 18 }}>
                      <span style={{ color: '#7C8DB0' }}>{k}</span>
                      <span style={{ color: '#4A5A7A' }}>: </span>
                      <span style={{ color: c }}>{v}</span>
                      <span style={{ color: '#4A5A7A' }}>,</span>
                    </div>
                  ))}
                  <div style={{ paddingLeft: 18 }}><span style={{ color: '#7C8DB0' }}>skills</span><span style={{ color: '#4A5A7A' }}>: [</span></div>
                  {['"React"', '"Next.js"', '"TypeScript"', '"Claude AI"'].map((s, i) => (
                    <div key={s} style={{ paddingLeft: 36 }}>
                      <span style={{ color: '#FBBF24' }}>{s}</span>
                      {i < 3 && <span style={{ color: '#4A5A7A' }}>,</span>}
                    </div>
                  ))}
                  <div style={{ paddingLeft: 18 }}><span style={{ color: '#4A5A7A' }}>],</span></div>
                  <div style={{ paddingLeft: 18 }}><span style={{ color: '#7C8DB0' }}>available</span><span style={{ color: '#4A5A7A' }}>: </span><span style={{ color: '#4ADE80' }}>true</span></div>
                  <div><span style={{ color: '#7C8DB0' }}>{'}'}</span></div>
                  <div style={{ marginTop: 14, color: '#4A5A7A' }}>
                    <span style={{ color: '#FF6B35' }}>export default</span> dev
                  </div>
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: -14, right: -14, background: '#FF6B35', color: 'white', padding: '10px 16px', borderRadius: 10, fontSize: 13, fontWeight: 700, boxShadow: '0 8px 24px rgba(255,107,53,0.4)', whiteSpace: 'nowrap' }}>
                🚀 Open to work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ background: '#070C16', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 32px', width: '100%' }}>
          <p className="sec-label">// featured work</p>
          <h2 className="sec-title">Projects I've shipped</h2>
          <p style={{ color: '#6B7A99', fontSize: 16, marginBottom: 52 }}>Production-ready apps solving real problems.</p>

          <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {projects.map(p => (
              <div key={p.id} className="pcard" style={{ background: p.bg }}>
                <div style={{ padding: '32px 28px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ fontSize: 44, marginBottom: 16 }}>{p.emoji}</div>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', marginBottom: 14 }}>{p.tagline}</p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{p.description}</p>
                </div>
                <div style={{ padding: '20px 28px 24px' }}>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, fontFamily: "'JetBrains Mono',monospace" }}>Features</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {p.features.map(f => <span className="tag" key={f}>{f}</span>)}
                  </div>
                  <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8, fontFamily: "'JetBrains Mono',monospace" }}>Stack</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {p.tech.map(t => <span className="stack-tag" key={t}>{t}</span>)}
                  </div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="demo-btn">↗ View Live</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 32px', width: '100%' }}>
          <p className="sec-label">// about me</p>
          <h2 className="sec-title">Who I am</h2>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start', marginTop: 40 }}>
            <div>
              {['I\'m a Senior Frontend Developer with 11+ years building scalable, performant web applications for companies like Microsoft, Pfizer, and Publicis.',
                'I specialize in React and Next.js — and I\'ve been an early adopter of AI-augmented development using Cursor AI and GitHub Copilot to ship faster without sacrificing quality.',
                'I care about Core Web Vitals, WCAG 2.1 accessibility, and code quality. My work has delivered 40% performance improvements and production systems used by thousands.'
              ].map((t, i) => <p key={i} style={{ fontSize: 16, color: '#8899BB', lineHeight: 1.8, marginBottom: 18 }}>{t}</p>)}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
                {[['💼', 'Microsoft · Pfizer · Publicis'], ['🌍', 'Remote · Bangalore · Coimbatore'], ['⚡', 'Open to freelance projects']].map(([ic, tx]) => (
                  <div key={tx} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: '#6B7A99' }}>
                    <span>{ic}</span><span>{tx}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 28 }}>Technical Skills</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {skills.map(s => (
                  <div key={s.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 14, color: '#8899BB', fontWeight: 500 }}>{s.label}</span>
                      <span style={{ fontSize: 12, color: '#FF6B35', fontFamily: "'JetBrains Mono',monospace" }}>{s.level}%</span>
                    </div>
                    <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
                      <div className="skill-fill" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: '#070C16', position: 'relative', overflow: 'hidden' }}>
        <div className="glow" style={{ top: -100, right: -100 }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 32px', width: '100%', position: 'relative', zIndex: 1 }}>
          <p className="sec-label">// let's work</p>
          <h2 className="sec-title">Ready to build something?</h2>
          <p style={{ color: '#6B7A99', fontSize: 16, maxWidth: 480, lineHeight: 1.6, marginBottom: 52 }}>
            Available for freelance contracts, consulting, and full-time positions.
          </p>

          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 40 }}>
            {[
              { ic: '💼', title: 'Freelance', sub: 'Quick projects', href: 'https://www.fiverr.com', cta: 'View Profile →' },
              { ic: '🚀', title: 'Upwork', sub: 'Long-term contracts', href: 'https://www.upwork.com', cta: 'View Profile →' },
              { ic: '📧', title: 'Email', sub: 'Direct enquiries', href: 'mailto:techvenkats@gmail.com', cta: 'Send Email →' },
              { ic: '🔗', title: 'LinkedIn', sub: 'Professional network', href: 'https://linkedin.com/in/svenkatesh-pro', cta: 'Connect →' },
            ].map(c => (
              <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="ccard">
                <div style={{ fontSize: 28, marginBottom: 12 }}>{c.ic}</div>
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 17, fontWeight: 700, color: '#E2E8F3', marginBottom: 4 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: '#6B7A99', marginBottom: 14 }}>{c.sub}</div>
                <div style={{ fontSize: 13, color: '#FF6B35', fontWeight: 600 }}>{c.cta}</div>
              </a>
            ))}
          </div>

          <div style={{ background: '#0B1020', border: '1px solid rgba(255,107,53,0.15)', borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Pricing</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
              {[['Hourly Rate', '$25–50 / hr'], ['Project-Based', '₹10k – ₹2L+'], ['Full-time', '₹35–50 LPA']].map(([l, v]) => (
                <div key={l}>
                  <div style={{ fontSize: 11, color: '#6B7A99', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 6, fontFamily: "'JetBrains Mono',monospace" }}>{l}</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#E2E8F3', fontFamily: "'Space Grotesk',sans-serif" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,107,53,0.08)', padding: '24px 32px', textAlign: 'center' }}>
        <p style={{ color: '#3A4560', fontSize: 14 }}>
          © 2026 <span style={{ color: '#FF6B35' }}>Venkatesh Shanmuganathan</span> · Senior Frontend Developer
        </p>
      </footer>
    </div>
  );
}
