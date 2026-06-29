import Link from "next/link";
import SpiralBackground from "./components/SpiralBackground";

const FEATURES = [
  {
    icon: "🎯",
    title: "Built for your field",
    body: "Every track is designed for one career path — not generic AI content. Marketing, Education, Business, and more coming.",
    bg: "#eafef7",
    border: "var(--color-primary-light)",
    shadow: "var(--color-primary)",
  },
  {
    icon: "📅",
    title: "Fresh every month",
    body: "AI moves fast. Pro subscribers get a monthly digest of what changed in their field — and what it means for their work.",
    bg: "#eef5ff",
    border: "var(--color-blue)",
    shadow: "#2a6bbf",
  },
  {
    icon: "🏅",
    title: "Credentials that matter",
    body: "Complete a track and earn a shareable LinkedIn badge with a verified credential page. Proof your AI skills are current.",
    bg: "#fff8ec",
    border: "var(--color-amber)",
    shadow: "#a06510",
  },
];

const TRACKS = [
  {
    id: "marketing",
    title: "AI in Marketing",
    desc: "Content, SEO, paid media, analytics — how AI is reshaping every corner of modern marketing.",
    badge: "AI-Ready Marketer",
    emoji: "📈",
  },
  {
    id: "education",
    title: "AI in Education",
    desc: "From lesson planning to academic integrity — how teachers stay ahead of AI in the classroom.",
    badge: "AI-Confident Educator",
    emoji: "🎓",
    popular: true,
  },
  {
    id: "business",
    title: "AI in Business",
    desc: "Strategy, workforce, productivity, governance — the AI playbook for modern professionals.",
    badge: "AI-Fluent Business Pro",
    emoji: "💼",
  },
  {
    id: "journalism",
    title: "AI in Journalism & Media",
    desc: "Synthetic media, verification tools, automated reporting — stay ahead of AI's impact on the newsroom.",
    badge: "AI-Literate Journalist",
    emoji: "📰",
  },
  {
    id: "architecture",
    title: "AI in Design",
    desc: "Generative design, AI rendering, parametric modelling — unlock AI as a creative tool in your practice.",
    badge: "AI-Fluent Designer",
    emoji: "🏛️",
  },
];

const FREE_FEATURES = [
  "Module 1 of your chosen track (4 lessons)",
  "Knowledge check quiz",
  "Track overview & roadmap",
];

const PRO_FEATURES = [
  "All 6 modules across all 3 tracks",
  "Monthly AI update digest per track",
  "Shareable LinkedIn badge on completion",
  "All downloadable resources & templates",
  "Cancel anytime — no contract",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col min-h-screen overflow-hidden"
        style={{ backgroundColor: "var(--color-forest)" }}
      >
        <SpiralBackground charColor="#c8f0e0" />

        {/* Nav */}
        <header
          className="relative z-10 w-full flex items-center justify-between px-10 py-4"
          style={{
            backgroundColor: "rgba(4, 38, 28, 0.75)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(200,240,224,0.1)",
          }}
        >
          <div className="w-full max-w-[1100px] mx-auto flex items-center justify-between">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)", color: "#e1f5ee" }}
          >
            Trendelo
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {[["Tracks", "#tracks"], ["How it works", "#how"], ["Pricing", "#pricing"]].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold transition-opacity hover:opacity-70"
                style={{ color: "#a0d4be", fontFamily: "var(--font-display)" }}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: "#a0d4be", fontFamily: "var(--font-display)" }}
            >
              Sign in
            </Link>
            <Link
              href="/get-started"
              className="text-sm font-bold px-5 py-2.5 rounded-full border-2"
              style={{
                backgroundColor: "var(--color-primary-light)",
                borderColor: "#c8f0e0",
                color: "#fff",
                fontFamily: "var(--font-display)",
                boxShadow: "3px 3px 0px #c8f0e0",
              }}
            >
              Get started free
            </Link>
          </div>
          </div>
        </header>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col flex-1 items-center justify-center text-center px-6 pb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 text-xs font-bold uppercase tracking-widest"
            style={{
              borderColor: "rgba(200,240,224,0.25)",
              backgroundColor: "rgba(200,240,224,0.07)",
              color: "#a0d4be",
              fontFamily: "var(--font-body)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: "var(--color-primary-light)", animation: "pulse 2s infinite" }}
            />
            New modules added monthly
          </div>

          <h1
            className="text-5xl md:text-[3.75rem] font-bold leading-[1.1] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "#ffffff",
              letterSpacing: "-0.025em",
              maxWidth: "800px",
            }}
          >
            AI is changing your field.{" "}
            <span style={{ color: "var(--color-primary-light)" }}>We&apos;ll show you how.</span>
          </h1>

          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: "#8fc9b0", fontFamily: "var(--font-body)", maxWidth: "520px" }}
          >
            Field-specific AI tracks for students and professionals who need practical skills — not tech jargon. Updated every month as AI evolves.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/get-started"
              className="px-8 py-3.5 rounded-full border-2 text-base font-bold"
              style={{
                fontFamily: "var(--font-display)",
                backgroundColor: "var(--color-primary-light)",
                borderColor: "#c8f0e0",
                color: "#fff",
                boxShadow: "4px 4px 0px #c8f0e0",
              }}
            >
              Start for free →
            </Link>
            <a
              href="#tracks"
              className="px-8 py-3.5 rounded-full border-2 text-base font-bold"
              style={{
                fontFamily: "var(--font-display)",
                borderColor: "rgba(200,240,224,0.3)",
                color: "#a0d4be",
              }}
            >
              See the tracks
            </a>
          </div>

          {/* Track pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {TRACKS.map((t) => (
              <span
                key={t.id}
                className="text-xs font-bold px-4 py-2 rounded-full border"
                style={{
                  borderColor: "rgba(200,240,224,0.2)",
                  backgroundColor: "rgba(200,240,224,0.05)",
                  color: "#8fc9b0",
                  fontFamily: "var(--font-body)",
                }}
              >
                {t.emoji} {t.title}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="relative z-10 flex justify-center pb-8" aria-hidden>
          <div
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: "rgba(200,240,224,0.25)" }}
          >
            <div
              className="w-1 h-2.5 rounded-full"
              style={{ backgroundColor: "rgba(200,240,224,0.4)", animation: "bounce 1.8s infinite" }}
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex flex-col p-8 rounded-2xl border-2"
              style={{
                backgroundColor: f.bg,
                borderColor: f.border,
                boxShadow: `4px 4px 0px ${f.shadow}`,
              }}
            >
              <div className="text-4xl mb-5">{f.icon}</div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
              >
                {f.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-on-surface-muted)" }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRACKS ────────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-24 px-6" style={{ backgroundColor: "var(--color-mint)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)", letterSpacing: "-0.02em" }}
            >
              Pick your track
            </h2>
            <p style={{ color: "var(--color-on-surface-muted)" }}>
              Each track is built around one field. Practical, specific, and updated monthly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRACKS.map((track) => (
              <div
                key={track.id}
                className="relative flex flex-col p-8 rounded-2xl border-2 bg-white"
                style={{ borderColor: "var(--color-forest)", boxShadow: "4px 4px 0px var(--color-forest)" }}
              >
                {track.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border-2 whitespace-nowrap"
                    style={{
                      backgroundColor: "var(--color-amber)",
                      borderColor: "var(--color-forest)",
                      color: "#fff",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Popular
                  </span>
                )}
                <div className="text-4xl mb-4">{track.emoji}</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
                >
                  {track.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--color-on-surface-muted)" }}>
                  {track.desc}
                </p>
                <span
                  className="self-start text-xs font-bold px-3 py-1.5 rounded-full border mb-6"
                  style={{
                    borderColor: "var(--color-primary-light)",
                    color: "var(--color-primary)",
                    backgroundColor: "var(--color-mint)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  ✓ {track.badge}
                </span>
                <Link
                  href={`/get-started?track=${track.id}`}
                  className="w-full py-3 rounded-full border-2 text-sm font-bold text-center block"
                  style={{
                    fontFamily: "var(--font-display)",
                    backgroundColor: "var(--color-primary)",
                    borderColor: "var(--color-forest)",
                    color: "#fff",
                    boxShadow: "3px 3px 0px var(--color-forest)",
                  }}
                >
                  Start this track
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section id="how" className="bg-white py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)", letterSpacing: "-0.02em" }}
            >
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Pick your field", body: "Choose the track that matches your career — Marketing, Education, or Business." },
              { step: "2", title: "Learn in bite-sized cards", body: "Work through modules at your pace. One idea per card. Quizzes after each module." },
              { step: "3", title: "Earn your badge", body: "Pass the final assessment and share your verified LinkedIn credential." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-start">
                <div
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold mb-5"
                  style={{
                    borderColor: "var(--color-forest)",
                    backgroundColor: "var(--color-mint)",
                    color: "var(--color-forest)",
                    fontFamily: "var(--font-display)",
                    boxShadow: "2px 2px 0px var(--color-forest)",
                  }}
                >
                  {s.step}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-muted)" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-6" style={{ backgroundColor: "var(--color-mint)" }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)", letterSpacing: "-0.02em" }}
            >
              Simple pricing
            </h2>
            <p style={{ color: "var(--color-on-surface-muted)" }}>
              Start free. Unlock everything with Pro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Free */}
            <div
              className="p-8 rounded-2xl border-2 flex flex-col bg-white"
              style={{ borderColor: "var(--color-outline)" }}
            >
              <div
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
              >
                Free
              </div>
              <div
                className="text-5xl font-bold mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
              >
                $0
              </div>
              <div className="text-sm mb-8" style={{ color: "var(--color-on-surface-muted)" }}>forever</div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {FREE_FEATURES.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-on-surface-muted)" }}>
                    <span style={{ color: "var(--color-primary-light)" }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/get-started"
                className="w-full py-3 rounded-full border-2 text-sm font-bold text-center block"
                style={{
                  borderColor: "var(--color-outline)",
                  color: "var(--color-forest)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Start free
              </Link>
            </div>

            {/* Pro */}
            <div
              className="p-8 rounded-2xl border-2 flex flex-col"
              style={{
                borderColor: "var(--color-forest)",
                backgroundColor: "var(--color-forest)",
                boxShadow: "4px 4px 0px var(--color-primary)",
              }}
            >
              <div
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#8fc9b0", fontFamily: "var(--font-body)" }}
              >
                Pro
              </div>
              <div className="text-5xl font-bold mb-1" style={{ fontFamily: "var(--font-display)", color: "#fff" }}>
                $15<span className="text-2xl font-normal">/mo</span>
              </div>
              <div className="text-sm mb-8" style={{ color: "#8fc9b0" }}>or $144/year — save 20%</div>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {PRO_FEATURES.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#c8f0e0" }}>
                    <span style={{ color: "var(--color-primary-light)" }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/get-started"
                className="w-full py-3 rounded-full border-2 text-sm font-bold text-center block"
                style={{
                  fontFamily: "var(--font-display)",
                  backgroundColor: "var(--color-primary-light)",
                  borderColor: "#c8f0e0",
                  color: "#fff",
                  boxShadow: "3px 3px 0px #c8f0e0",
                }}
              >
                Go Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-28 px-6 text-center"
        style={{ backgroundColor: "var(--color-forest)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-display)", color: "#fff", letterSpacing: "-0.025em" }}
          >
            Your field is changing.{" "}
            <span style={{ color: "var(--color-primary-light)" }}>Get ahead of it.</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "#8fc9b0", fontFamily: "var(--font-body)" }}>
            Start with Module 1 for free. No credit card required.
          </p>
          <Link
            href="/get-started"
            className="inline-block px-10 py-4 rounded-full border-2 text-base font-bold"
            style={{
              fontFamily: "var(--font-display)",
              backgroundColor: "var(--color-primary-light)",
              borderColor: "#c8f0e0",
              color: "#fff",
              boxShadow: "4px 4px 0px #c8f0e0",
            }}
          >
            Start for free →
          </Link>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        className="py-8 px-10 text-center border-t"
        style={{ backgroundColor: "var(--color-forest)", borderTopColor: "rgba(200,240,224,0.12)" }}
      >
        <p className="text-xs" style={{ color: "rgba(200,240,224,0.4)" }}>
          © 2024 Trendelo AI Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
