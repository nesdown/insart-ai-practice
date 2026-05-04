"use client";

import { Inter } from "next/font/google";
import { useState, useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = ["Our Work", "Industries", "How It Works", "About"];

const PILLS = [
  "Metallurgy",
  "Manufacturing",
  "Agriculture",
  "Logistics",
  "Food Production",
];

const STATS = [
  { value: "20+",  label: "Years Engineering" },
  { value: "150+", label: "Projects Delivered" },
  { value: "80+",  label: "Engineers" },
  { value: "4",    label: "Countries" },
];

const LOGOS = [
  "Franklin Templeton",
  "iCapital",
  "Accel KKR",
  "Bonterra",
];

// ─── Colour tokens (insart-enterprise) ────────────────────────────────────────

const C = {
  bg:      "#0a0f1e",
  bgElevated: "#0d1427",
  bgHover: "#111b35",
  text:    "#f8f9fb",
  muted:   "#8f9ab8",
  dim:     "#5a6480",
  accent:  "#e07b35",
  accentHover: "#f09050",
  border:  "#162140",
  border2: "#2a3d6e",
} as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={inter.variable}
      style={{
        background: C.bg,
        color: C.text,
        fontFamily: "var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        minHeight: "100vh",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* Global helpers */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        a { text-decoration: none; }
        .nl { color: ${C.muted}; font-size: 14px; font-weight: 500; padding: 8px 16px; transition: color 150ms; display: inline-block; }
        .nl:hover { color: ${C.text}; }
        .btn-p { background: ${C.accent}; color: #fff; font-size: 14px; font-weight: 500; padding: 10px 22px; transition: background 150ms; display: inline-block; }
        .btn-p:hover { background: ${C.accentHover}; }
        .pill { font-size: 13px; font-weight: 400; color: ${C.muted}; border: 1px solid ${C.border}; padding: 8px 20px; transition: color 150ms, border-color 150ms, background 150ms; display: inline-block; }
        .pill:hover { color: ${C.text}; border-color: ${C.border2}; background: rgba(22,33,64,0.45); }
        .logo-cell { display: flex; align-items: center; justify-content: center; padding: 22px 36px; border-right: 1px solid ${C.border}; border-bottom: 1px solid ${C.border}; transition: background 200ms; }
        .logo-cell:hover { background: rgba(13,20,39,0.6); }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .logos-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: scrolled ? `rgba(10,15,30,0.95)` : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
          transition: "background 300ms, border-color 300ms, backdrop-filter 300ms",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>

            {/* Logo badge */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
              <div style={{
                width: 32, height: 32, background: C.accent,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ color: "#fff", fontSize: 9, fontWeight: 700, letterSpacing: "0.04em" }}>I·AI</span>
              </div>
              <div>
                <div style={{ color: C.text, fontWeight: 600, fontSize: 15, letterSpacing: "-0.02em", lineHeight: 1 }}>INSART</div>
                <div style={{ color: C.accent, fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1, marginTop: 2 }}>AI Practice</div>
              </div>
            </div>

            {/* Nav */}
            <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {NAV_LINKS.map((l) => (
                <a key={l} href="#" className="nl">{l}</a>
              ))}
            </nav>

            {/* Right */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <a href="https://insart.com" target="_blank" rel="noopener noreferrer" className="nl"
                style={{ display: "none" /* show on larger breakpoints via media */ }}>
                insart.com ↗
              </a>
              <a href="#proposal" className="btn-p">
                Get your proposal →
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden" }}>

        {/* Subtle grid overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }} />

        {/* Glow — navy right */}
        <div style={{
          position: "absolute", top: "10%", right: "-10%",
          width: 700, height: 700,
          background: "#1e2d52", opacity: 0.45,
          borderRadius: "50%", filter: "blur(110px)", pointerEvents: "none",
        }} />

        {/* Glow — accent lower-left */}
        <div style={{
          position: "absolute", bottom: "15%", left: "8%",
          width: 320, height: 320,
          background: C.accent, opacity: 0.05,
          borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none",
        }} />

        {/* Diagonal accent line */}
        <div style={{
          position: "absolute", top: 0, right: 0, width: 1, height: "100%",
          background: `linear-gradient(to bottom, transparent, ${C.accent}22, transparent)`,
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "104px 32px 88px",
          textAlign: "center",
          position: "relative",
        }}>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 36 }}>
            <div style={{ width: 28, height: 1, background: C.accent }} />
            <span style={{
              fontSize: 11, fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: C.accent,
            }}>
              An INSART AI Practice&nbsp;·&nbsp;20+ Years of Engineering&nbsp;·&nbsp;150+ Projects Delivered
            </span>
            <div style={{ width: 28, height: 1, background: C.accent }} />
          </div>

          {/* Headline */}
          <h1 style={{
            fontSize: "clamp(40px, 5.8vw, 68px)",
            fontWeight: 300,
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            color: C.text,
            maxWidth: 820,
            margin: "0 auto 26px",
          }}>
            AI for businesses where AI was{" "}
            <span style={{ color: C.accent }}>never supposed to work.</span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontSize: 18,
            fontWeight: 300,
            lineHeight: 1.65,
            color: C.muted,
            maxWidth: 540,
            margin: "0 auto 10px",
          }}>
            A 4-page custom proposal — built specifically for your operation — showing which AI integrations will deliver measurable ROI, where to start, and what it costs.
          </p>
          <p style={{ fontSize: 14, color: C.dim, marginBottom: 48, fontWeight: 400 }}>
            Free. Delivered in 5 business days.
          </p>

          {/* Industry pills */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 72 }}>
            {PILLS.map((p) => (
              <a key={p} href="#proposal" className="pill">{p}</a>
            ))}
          </div>

          {/* Stats strip */}
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              border: `1px solid ${C.border}`,
              background: `rgba(13,20,39,0.5)`,
              marginBottom: 56,
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "38px 24px",
                  textAlign: "center",
                  borderRight: i < STATS.length - 1 ? `1px solid ${C.border}` : "none",
                }}
              >
                <p style={{
                  fontSize: 46, fontWeight: 300,
                  color: C.text, lineHeight: 1,
                  letterSpacing: "-0.03em", marginBottom: 10,
                }}>
                  {s.value}
                </p>
                <p style={{
                  fontSize: 10, fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: C.dim,
                }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Partner strip */}
          <div>
            <p style={{
              fontSize: 10, fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: C.dim, marginBottom: 20,
            }}>
              Official strategic partner to
            </p>
            <div
              className="logos-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                borderTop: `1px solid ${C.border}`,
                borderLeft: `1px solid ${C.border}`,
              }}
            >
              {LOGOS.map((l) => (
                <div key={l} className="logo-cell">
                  <span style={{
                    fontSize: 13, fontWeight: 600,
                    color: C.dim, letterSpacing: "0.04em",
                  }}>
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
