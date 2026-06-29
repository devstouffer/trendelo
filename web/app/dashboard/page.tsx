"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const TRACK_META: Record<string, {
  label: string;
  emoji: string;
  badge: string;
  currentModule: string;
  currentLesson: string;
  progress: number;
}> = {
  marketing: {
    label: "AI in Marketing",
    emoji: "📈",
    badge: "AI-Ready Marketer",
    currentModule: "Module 2",
    currentLesson: "2.3 — AI tools for content creation",
    progress: 28,
  },
  education: {
    label: "AI in Education",
    emoji: "🎓",
    badge: "AI-Confident Educator",
    currentModule: "Module 1",
    currentLesson: "1.4 — Knowledge check quiz",
    progress: 12,
  },
  business: {
    label: "AI in Business",
    emoji: "💼",
    badge: "AI-Fluent Business Pro",
    currentModule: "Module 3",
    currentLesson: "3.1 — AI strategy frameworks",
    progress: 45,
  },
  journalism: {
    label: "AI in Journalism & Media",
    emoji: "📰",
    badge: "AI-Literate Journalist",
    currentModule: "Module 1",
    currentLesson: "1.2 — Personalised impact assessment",
    progress: 8,
  },
  architecture: {
    label: "AI in Design",
    emoji: "🏛️",
    badge: "AI-Fluent Designer",
    currentModule: "Module 1",
    currentLesson: "1.1 — How AI is expanding what designers can create",
    progress: 0,
  },
};

const NEWS = [
  {
    tag: "New Track",
    text: "AI in Design is now live — generative tools, AI rendering, and parametric workflows.",
    date: "Jun 2026",
    bg: "#eef5ff",
    border: "var(--color-blue)",
  },
  {
    tag: "New Track",
    text: "AI in Journalism & Media is now available. Start learning about synthetic media and verification tools.",
    date: "Jun 2026",
    bg: "#fff8ec",
    border: "var(--color-amber)",
  },
  {
    tag: "Content Update",
    text: "Module 6 added to AI in Marketing — build your AI-enhanced workflow and earn your badge.",
    date: "May 2026",
    bg: "#eafef7",
    border: "var(--color-primary-light)",
  },
];

const LIBRARY_ITEMS = [
  { emoji: "✍️", title: "Writing better AI prompts", duration: "5 min" },
  { emoji: "📖", title: "AI glossary: 20 terms you need to know", duration: "8 min" },
  { emoji: "🤔", title: "Understanding AI hallucinations", duration: "6 min" },
  { emoji: "⚖️", title: "ChatGPT vs Claude vs Gemini", duration: "7 min" },
  { emoji: "🖼️", title: "How image generation works", duration: "5 min" },
  { emoji: "🔧", title: "What is fine-tuning?", duration: "10 min" },
];

const TABS = [
  { id: "course",     label: "Course",      emoji: "📚" },
  { id: "newsletter", label: "Newsletter",  emoji: "📰" },
  { id: "library",    label: "Library",     emoji: "🗂️" },
];

export default function DashboardPage() {
  const [activeTrack, setActiveTrack] = useState("marketing");
  const [activeTab, setActiveTab]     = useState("course");
  const [switcherOpen, setSwitcherOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);
  const track = TRACK_META[activeTrack];

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (switcherRef.current && !switcherRef.current.contains(e.target as Node)) {
        setSwitcherOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-mint)" }}>

      {/* ── Nav ──────────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-30 w-full px-8 py-4 flex items-center justify-between gap-4"
        style={{
          backgroundColor: "rgba(4, 38, 28, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(200,240,224,0.1)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight shrink-0"
          style={{ fontFamily: "var(--font-display)", color: "#e1f5ee" }}
        >
          Trendelo
        </Link>

        {/* Track switcher */}
        <div className="relative" ref={switcherRef}>
          <button
            onClick={() => setSwitcherOpen((v) => !v)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-bold transition-opacity hover:opacity-80"
            style={{
              fontFamily: "var(--font-display)",
              backgroundColor: "var(--color-primary-light)",
              borderColor: "#c8f0e0",
              color: "#fff",
              boxShadow: "3px 3px 0px #c8f0e0",
            }}
          >
            <span>{track.emoji}</span>
            <span className="hidden sm:inline">{track.label}</span>
            <span style={{ fontSize: "10px", color: "var(--color-on-surface-muted)" }}>
              {switcherOpen ? "▲" : "▼"}
            </span>
          </button>

          {switcherOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl border-2 bg-white overflow-hidden"
              style={{
                borderColor: "var(--color-forest)",
                boxShadow: "4px 4px 0px var(--color-forest)",
              }}
            >
              <div
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-widest"
                style={{
                  color: "var(--color-on-surface-muted)",
                  borderBottom: "1px solid #daeee5",
                  fontFamily: "var(--font-body)",
                }}
              >
                Switch track
              </div>
              {Object.entries(TRACK_META).map(([id, t]) => (
                <button
                  key={id}
                  onClick={() => { setActiveTrack(id); setSwitcherOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-semibold transition-colors hover:bg-[var(--color-mint)]"
                  style={{
                    color: id === activeTrack ? "var(--color-primary)" : "var(--color-on-surface)",
                    backgroundColor: id === activeTrack ? "var(--color-mint)" : "transparent",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <span className="text-xl">{t.emoji}</span>
                  <span className="flex-1">{t.label}</span>
                  {id === activeTrack && (
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "var(--color-primary)", color: "#fff" }}
                    >
                      Current
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* User avatar */}
        <div className="flex items-center gap-3 shrink-0">
          <span
            className="text-sm font-semibold hidden md:block"
            style={{ color: "#a0d4be", fontFamily: "var(--font-body)" }}
          >
            Devin
          </span>
          <div
            className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold"
            style={{
              borderColor: "var(--color-forest)",
              backgroundColor: "var(--color-primary)",
              color: "#fff",
              fontFamily: "var(--font-display)",
              boxShadow: "2px 2px 0px var(--color-forest)",
            }}
          >
            D
          </div>
        </div>
      </header>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-6 py-10">

        {/* Welcome */}
        <div className="mb-10">
          <h1
            className="text-3xl font-bold mb-1"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
          >
            Welcome back, Devin 👋
          </h1>
          <p className="text-base" style={{ color: "var(--color-on-surface-muted)" }}>
            You&apos;re on track to earn your{" "}
            <strong style={{ color: "var(--color-primary)" }}>{track.badge}</strong> badge.
          </p>
        </div>

        {/* What's new */}
        <div className="mb-10">
          <h2
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
          >
            What&apos;s new on Trendelo
          </h2>
          <div className="flex flex-col gap-3">
            {NEWS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl border-2"
                style={{ backgroundColor: item.bg, borderColor: item.border }}
              >
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full border-2 whitespace-nowrap mt-0.5 shrink-0"
                  style={{
                    borderColor: item.border,
                    color: "var(--color-forest)",
                    backgroundColor: "#fff",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.tag}
                </span>
                <p className="text-sm flex-1" style={{ color: "var(--color-on-surface)" }}>
                  {item.text}
                </p>
                <span
                  className="text-xs whitespace-nowrap shrink-0 mt-0.5"
                  style={{ color: "var(--color-on-surface-muted)" }}
                >
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1 mb-8 p-1 rounded-full border-2 w-fit"
          style={{
            borderColor: "var(--color-forest)",
            backgroundColor: "#fff",
            boxShadow: "3px 3px 0px var(--color-forest)",
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all"
              style={{
                fontFamily: "var(--font-display)",
                backgroundColor: activeTab === tab.id ? "var(--color-primary)" : "transparent",
                color: activeTab === tab.id ? "#fff" : "var(--color-on-surface-muted)",
                boxShadow: activeTab === tab.id ? "2px 2px 0px var(--color-forest)" : "none",
              }}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "course"     && <CourseTab track={track} trackId={activeTrack} />}
        {activeTab === "newsletter" && <NewsletterTab />}
        {activeTab === "library"    && <LibraryTab />}
      </main>
    </div>
  );
}

/* ── Course Tab ──────────────────────────────────────────────────────────── */

function CourseTab({
  track,
  trackId,
}: {
  track: typeof TRACK_META[string];
  trackId: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      {/* Current lesson card */}
      <div
        className="p-8 rounded-2xl border-2 bg-white"
        style={{
          borderColor: "var(--color-forest)",
          boxShadow: "4px 4px 0px var(--color-forest)",
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{track.emoji}</span>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
              >
                {track.label}
              </span>
            </div>
            <h3
              className="text-xl font-bold mb-1"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
            >
              {track.currentModule}
            </h3>
            <p className="text-sm mb-5" style={{ color: "var(--color-on-surface-muted)" }}>
              Up next: <span style={{ color: "var(--color-on-surface)", fontWeight: 600 }}>{track.currentLesson}</span>
            </p>

            {/* Progress bar */}
            <div
              className="w-full h-3 rounded-full border-2 overflow-hidden mb-1"
              style={{ borderColor: "var(--color-outline)", backgroundColor: "var(--color-mint)" }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: `${track.progress}%`, backgroundColor: "var(--color-primary)" }}
              />
            </div>
            <p className="text-xs" style={{ color: "var(--color-on-surface-muted)" }}>
              {track.progress}% complete
            </p>
          </div>

          <Link
            href={`/learn/${trackId}`}
            className="px-7 py-3 rounded-full border-2 text-sm font-bold text-center shrink-0"
            style={{
              fontFamily: "var(--font-display)",
              backgroundColor: "var(--color-primary)",
              borderColor: "var(--color-forest)",
              color: "#fff",
              boxShadow: "3px 3px 0px var(--color-forest)",
            }}
          >
            Continue →
          </Link>
        </div>
      </div>

      {/* Badge target */}
      <div
        className="flex items-center gap-4 p-5 rounded-xl border-2"
        style={{
          borderColor: "var(--color-primary-light)",
          backgroundColor: "#eafef7",
        }}
      >
        <span className="text-4xl shrink-0">🏅</span>
        <div>
          <p
            className="text-sm font-bold mb-0.5"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
          >
            Working towards: {track.badge}
          </p>
          <p className="text-xs" style={{ color: "var(--color-on-surface-muted)" }}>
            Complete all 6 modules and pass the final assessment to earn your shareable LinkedIn badge.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Newsletter Tab ──────────────────────────────────────────────────────── */

function NewsletterTab() {
  return (
    <div
      className="p-10 rounded-2xl border-2 bg-white text-center"
      style={{
        borderColor: "var(--color-forest)",
        boxShadow: "4px 4px 0px var(--color-forest)",
      }}
    >
      <div
        className="w-16 h-16 rounded-full border-2 flex items-center justify-center text-3xl mx-auto mb-5"
        style={{
          backgroundColor: "var(--color-mint)",
          borderColor: "var(--color-primary-light)",
          boxShadow: "2px 2px 0px var(--color-primary-light)",
        }}
      >
        🔒
      </div>
      <h3
        className="text-2xl font-bold mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
      >
        Pro subscribers only
      </h3>
      <p
        className="text-sm leading-relaxed mb-8 mx-auto"
        style={{ color: "var(--color-on-surface-muted)", maxWidth: "360px" }}
      >
        Get a monthly digest of what changed in AI for your field — what&apos;s new, what matters, and what to do about it.
      </p>
      <Link
        href="/get-started"
        className="inline-block px-8 py-3.5 rounded-full border-2 text-sm font-bold"
        style={{
          fontFamily: "var(--font-display)",
          backgroundColor: "var(--color-primary)",
          borderColor: "var(--color-forest)",
          color: "#fff",
          boxShadow: "3px 3px 0px var(--color-forest)",
        }}
      >
        Upgrade to Pro →
      </Link>
    </div>
  );
}

/* ── Library Tab ─────────────────────────────────────────────────────────── */

function LibraryTab() {
  return (
    <div>
      <p className="text-sm mb-6" style={{ color: "var(--color-on-surface-muted)" }}>
        Standalone bite-sized lessons — no track required. Pick a concept and learn it in minutes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {LIBRARY_ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex flex-col p-6 rounded-2xl border-2 bg-white"
            style={{
              borderColor: "var(--color-outline)",
              boxShadow: "3px 3px 0px var(--color-outline)",
            }}
          >
            <div className="text-3xl mb-3">{item.emoji}</div>
            <h4
              className="text-sm font-bold mb-1 flex-1 leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
            >
              {item.title}
            </h4>
            <p className="text-xs mb-4" style={{ color: "var(--color-on-surface-muted)" }}>
              {item.duration} read
            </p>
            <button
              className="w-full py-2 rounded-full border-2 text-xs font-bold transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--font-display)",
                borderColor: "var(--color-primary-light)",
                color: "var(--color-primary)",
                backgroundColor: "var(--color-mint)",
              }}
            >
              Start →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
