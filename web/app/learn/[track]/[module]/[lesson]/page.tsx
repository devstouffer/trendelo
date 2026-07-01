"use client";

import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";
import { useParams } from "next/navigation";
import Button from "../../../../components/Button";
import DottedBackground from "../../../../components/DottedBackground";
import { TRACKS } from "../../page";

// ── Sample lesson content ─────────────────────────────────────────────────────
// Only one lesson is fully built out for now: Marketing / Module 3 / Lesson 5.
// Every other track/module/lesson combo renders a "coming soon" placeholder.

const SUPPORTED = { track: "marketing", module: "3", lesson: "5" };

type Question = {
  emoji: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explain: string;
};

const LESSON_TITLE = "Personalisation at Scale";

const QUESTIONS: Question[] = [
  {
    emoji: "🎯",
    prompt: "What does AI-powered personalisation primarily use to tailor content to each visitor?",
    options: [
      "A fixed set of rules written by marketers",
      "User behaviour and data patterns",
      "Random selection between a few templates",
      "Whatever performed best last year",
    ],
    correctIndex: 1,
    explain: "Personalisation engines learn from real-time signals like clicks, dwell time, and purchase history — not fixed rules.",
  },
  {
    emoji: "🛍️",
    prompt: "A retailer shows different homepage banners to different visitors based on their past browsing. This is an example of:",
    options: ["Static targeting", "Dynamic segmentation", "Broadcast marketing", "Manual curation"],
    correctIndex: 1,
    explain: "Dynamic segmentation groups users on the fly using live behavioural data, instead of one fixed audience for everyone.",
  },
  {
    emoji: "🤖",
    prompt: "True or false: AI personalisation means you write one ad, and the system automatically generates variants tailored to different audiences.",
    options: ["True", "False"],
    correctIndex: 0,
    explain: "Modern ad platforms can auto-generate and test dozens of creative variants against different audience segments from a single input.",
  },
  {
    emoji: "😬",
    prompt: "Which of these is a real risk of over-personalisation?",
    options: [
      "Higher engagement across the board",
      "Users feeling surveilled or ‘creeped out’",
      "Lower operating costs",
      "Faster content production",
    ],
    correctIndex: 1,
    explain: "When personalisation feels too precise, it can cross from ‘helpful’ into ‘invasive’ — trust matters as much as relevance.",
  },
  {
    emoji: "👥",
    prompt: "What's a ‘lookalike audience’ in AI-driven targeting?",
    options: [
      "A random sample of every user",
      "A group that mirrors traits of your best existing customers",
      "Your competitor's customer base",
      "Anyone in the same city as your store",
    ],
    correctIndex: 1,
    explain: "Lookalike audiences use your existing customer data as a template to find new people with similar patterns.",
  },
  {
    emoji: "⏱️",
    prompt: "Which data signal is most useful for real-time personalisation?",
    options: [
      "Last year's annual report",
      "Current on-site behaviour, like clicks and dwell time",
      "Your company's org chart",
      "Static demographic averages",
    ],
    correctIndex: 1,
    explain: "Real-time personalisation leans on what a user is doing right now — recency beats broad averages.",
  },
];

const START_HEARTS = 3;
const XP_PER_CORRECT = 10;

// ── CSS animations ────────────────────────────────────────────────────────────

const ANIM = `
@keyframes banner-slide-up {
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
@keyframes shake-x {
  0%, 100% { transform: translateX(0); }
  20%  { transform: translateX(-6px); }
  40%  { transform: translateX(6px); }
  60%  { transform: translateX(-4px); }
  80%  { transform: translateX(4px); }
}
@keyframes heart-lose {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.4); }
  100% { transform: scale(1); }
}
@keyframes celebrate-pop {
  0%   { transform: scale(0.6) rotate(-8deg); opacity: 0; }
  60%  { transform: scale(1.12) rotate(4deg); }
  100% { transform: scale(1) rotate(0deg);    opacity: 1; }
}
.option-row:not(:disabled):hover { border-color: var(--color-primary-light); }
`;

// ── Page ──────────────────────────────────────────────────────────────────────

export default function LessonPage() {
  const params  = useParams<{ track: string; module: string; lesson: string }>();
  const trackId = Array.isArray(params.track)  ? params.track[0]  : (params.track  ?? "marketing");
  const moduleP = Array.isArray(params.module) ? params.module[0] : (params.module ?? "1");
  const lessonP = Array.isArray(params.lesson) ? params.lesson[0] : (params.lesson ?? "1");

  const isSupported =
    trackId === SUPPORTED.track && moduleP === SUPPORTED.module && lessonP === SUPPORTED.lesson;

  if (!isSupported) {
    return <ComingSoon trackId={trackId} />;
  }

  return <QuizLesson trackId={trackId} moduleNum={moduleP} />;
}

// ── Coming-soon fallback ──────────────────────────────────────────────────────

function ComingSoon({ trackId }: { trackId: string }) {
  return (
    <div className="relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: "var(--color-mint)", minHeight: "100vh" }}>
      <DottedBackground color="#085041" intensity={0.18} />
      <div
        className="relative max-w-sm mx-4 rounded-2xl border-2 p-8 bg-white text-center"
        style={{ borderColor: "var(--color-forest)", boxShadow: "4px 4px 0px var(--color-forest)" }}
      >
        <p style={{ fontSize: 44, marginBottom: 12 }}>🚧</p>
        <h1 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
          Lesson coming soon
        </h1>
        <p className="text-sm mb-6" style={{ color: "var(--color-on-surface-muted)" }}>
          We&apos;re still building out this lesson&apos;s content. In the meantime, try the fully-built sample lesson.
        </p>
        <div className="flex flex-col gap-2.5">
          <Button href="/learn/marketing/3/5" variant="primary" fullWidth>
            Try the sample lesson
          </Button>
          <Button href={`/learn/${trackId}`} variant="ghost" fullWidth>
            ← Back to module map
          </Button>
        </div>
      </div>
    </div>
  );
}

// ── Quiz lesson ───────────────────────────────────────────────────────────────

type Phase = "question" | "complete" | "failed";

function QuizLesson({ trackId, moduleNum }: { trackId: string; moduleNum: string }) {
  const track      = TRACKS[trackId] ?? TRACKS.marketing;
  const moduleInfo = track.modules[Number(moduleNum) - 1] ?? track.modules[0];

  const [qIndex, setQIndex]           = useState(0);
  const [selected, setSelected]       = useState<number | null>(null);
  const [checked, setChecked]         = useState(false);
  const [hearts, setHearts]           = useState(START_HEARTS);
  const [correctCount, setCorrectCount] = useState(0);
  const [phase, setPhase]             = useState<Phase>("question");

  const total    = QUESTIONS.length;
  const question = QUESTIONS[qIndex];
  const isCorrect = checked && selected === question.correctIndex;
  const pct = Math.round(((qIndex + (checked ? 1 : 0)) / total) * 100);

  function handleSelect(i: number) {
    if (checked) return;
    setSelected(i);
  }

  function handleCheck() {
    if (selected === null) return;
    if (selected === question.correctIndex) {
      setCorrectCount(c => c + 1);
    } else {
      setHearts(h => Math.max(0, h - 1));
    }
    setChecked(true);
  }

  function handleContinue() {
    if (hearts <= 0) {
      setPhase("failed");
      return;
    }
    if (qIndex === total - 1) {
      setPhase("complete");
      return;
    }
    setQIndex(i => i + 1);
    setSelected(null);
    setChecked(false);
  }

  function resetLesson() {
    setQIndex(0);
    setSelected(null);
    setChecked(false);
    setHearts(START_HEARTS);
    setCorrectCount(0);
    setPhase("question");
  }

  if (phase === "complete") {
    return (
      <CompleteCard
        trackId={trackId}
        xp={correctCount * XP_PER_CORRECT}
        correctCount={correctCount}
        total={total}
        hearts={hearts}
      />
    );
  }

  if (phase === "failed") {
    return <FailedCard trackId={trackId} onRetry={resetLesson} />;
  }

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "var(--color-mint)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <DottedBackground color="#085041" intensity={0.14} />
      <style>{ANIM}</style>

      {/* ── Header: exit · progress · hearts ─────────────────────────────── */}
      <header
        className="sticky top-0 z-30 w-full px-4 py-3 flex items-center gap-3"
        style={{ backgroundColor: "rgba(4, 38, 28, 0.88)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(200,240,224,0.1)" }}
      >
        <Button href={`/learn/${trackId}`} variant="ghost" tone="dark" size="sm" aria-label="Exit lesson" style={{ padding: "0.4rem 0.65rem", borderRadius: 9999 }}>
          ✕
        </Button>

        <div
          className="flex-1 h-3 rounded-full border-2 overflow-hidden"
          style={{ borderColor: "rgba(232,245,238,0.24)", backgroundColor: "rgba(255,255,255,0.1)" }}
        >
          <div
            className="h-full rounded-full"
            style={{ width: `${pct}%`, backgroundColor: "var(--color-primary-light)", transition: "width 300ms ease" }}
          />
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {Array.from({ length: START_HEARTS }, (_, i) => {
            const lost = i >= hearts;
            const justLost = lost && i === hearts && checked && !isCorrect;
            return (
              <span
                key={i}
                style={{
                  fontSize: 18,
                  opacity: lost ? 0.25 : 1,
                  filter: lost ? "grayscale(1)" : "none",
                  animation: justLost ? "heart-lose 0.4s ease" : undefined,
                }}
              >
                ❤️
              </span>
            );
          })}
        </div>
      </header>

      {/* ── Question ──────────────────────────────────────────────────────── */}
      <main className="flex-1 w-full max-w-sm mx-auto px-5 pt-8" style={{ paddingBottom: 140 }}>
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
        >
          {moduleInfo.emoji} {moduleInfo.title}
        </p>

        <p
          className="text-sm font-bold mb-4"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}
        >
          {LESSON_TITLE} · Question {qIndex + 1} of {total}
        </p>

        <h1
          className="text-xl font-bold leading-snug mb-6"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
        >
          <span style={{ marginRight: 8 }}>{question.emoji}</span>
          {question.prompt}
        </h1>

        <div className="flex flex-col gap-3">
          {question.options.map((opt, i) => (
            <OptionRow
              key={i}
              label={opt}
              selected={selected === i}
              checked={checked}
              isCorrectOption={i === question.correctIndex}
              onClick={() => handleSelect(i)}
            />
          ))}
        </div>
      </main>

      {/* ── Bottom action bar ─────────────────────────────────────────────── */}
      {!checked ? (
        <div className="fixed bottom-0 inset-x-0 z-30 px-4 py-4" style={{ backgroundColor: "#ffffff", borderTop: "1px solid rgba(8,80,65,0.1)" }}>
          <div className="max-w-sm mx-auto">
            <Button
              fullWidth
              size="lg"
              disabled={selected === null}
              onClick={handleCheck}
              style={selected === null ? { opacity: 0.45, pointerEvents: "none" } : undefined}
            >
              Check
            </Button>
          </div>
        </div>
      ) : (
        <div
          className="fixed bottom-0 inset-x-0 z-30 px-4 py-4"
          style={{
            backgroundColor: isCorrect ? "var(--color-primary)" : "var(--color-error)",
            animation: "banner-slide-up 220ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="max-w-sm mx-auto flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-bold text-sm mb-0.5" style={{ color: "#fff", fontFamily: "var(--font-display)" }}>
                {isCorrect ? "Nicely done! ✅" : "Not quite 💡"}
              </p>
              <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.9)" }}>
                {question.explain}
              </p>
            </div>
            <Button tone="dark" onClick={handleContinue} className="shrink-0">
              Continue →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Answer option row ─────────────────────────────────────────────────────────

function OptionRow({
  label, selected, checked, isCorrectOption, onClick,
}: {
  label: string;
  selected: boolean;
  checked: boolean;
  isCorrectOption: boolean;
  onClick: () => void;
}) {
  let style: CSSProperties = {
    textAlign: "left",
    padding: "0.9rem 1.1rem",
    borderRadius: "1rem",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "var(--color-outline)",
    backgroundColor: "#fff",
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: "0.9rem",
    color: "var(--color-on-surface)",
    cursor: "pointer",
    transition: "border-color 150ms ease, background-color 150ms ease, opacity 150ms ease",
  };

  if (!checked && selected) {
    style = { ...style, borderColor: "var(--color-primary)", backgroundColor: "var(--color-mint)" };
  }

  let animation: string | undefined;

  if (checked) {
    if (isCorrectOption) {
      style = { ...style, borderColor: "var(--color-primary)", backgroundColor: "var(--color-mint)", color: "var(--color-forest)" };
    } else if (selected) {
      style = { ...style, borderColor: "var(--color-error)", backgroundColor: "var(--color-error-bg)" };
      animation = "shake-x 0.35s ease";
    } else {
      style = { ...style, opacity: 0.5 };
    }
  }

  return (
    <button
      type="button"
      className="option-row"
      disabled={checked}
      onClick={onClick}
      style={{ ...style, animation }}
    >
      {label}
      {checked && isCorrectOption && <span style={{ marginLeft: 8 }}>✓</span>}
      {checked && selected && !isCorrectOption && <span style={{ marginLeft: 8 }}>✕</span>}
    </button>
  );
}

// ── Result screens (complete / failed) ────────────────────────────────────────

function ResultShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: "var(--color-mint)", minHeight: "100vh" }}>
      <DottedBackground color="#085041" intensity={0.18} />
      <style>{ANIM}</style>
      <div
        className="relative max-w-sm mx-4 w-full rounded-2xl border-2 p-8 bg-white text-center"
        style={{ borderColor: "var(--color-forest)", boxShadow: "4px 4px 0px var(--color-forest)" }}
      >
        {children}
      </div>
    </div>
  );
}

function CompleteCard({
  trackId, xp, correctCount, total, hearts,
}: {
  trackId: string;
  xp: number;
  correctCount: number;
  total: number;
  hearts: number;
}) {
  return (
    <ResultShell>
      <p style={{ fontSize: 56, marginBottom: 12, animation: "celebrate-pop 0.5s ease-out both" }}>🎉</p>

      <h1 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
        Lesson complete!
      </h1>

      <p className="text-sm mb-6" style={{ color: "var(--color-on-surface-muted)" }}>
        You got {correctCount} of {total} right.
      </p>

      <div className="flex items-center justify-center gap-3 mb-7">
        <StatChip icon="⚡" label={`+${xp} XP`} />
        <StatChip icon="❤️" label={`${hearts} left`} />
        <StatChip icon="🎯" label={`${Math.round((correctCount / total) * 100)}%`} />
      </div>

      <Button href={`/learn/${trackId}`} variant="primary" fullWidth>
        Back to module map
      </Button>
    </ResultShell>
  );
}

function FailedCard({ trackId, onRetry }: { trackId: string; onRetry: () => void }) {
  return (
    <ResultShell>
      <p style={{ fontSize: 56, marginBottom: 12, animation: "celebrate-pop 0.5s ease-out both" }}>💔</p>

      <h1 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
        Out of hearts!
      </h1>

      <p className="text-sm mb-6" style={{ color: "var(--color-on-surface-muted)" }}>
        You ran out of hearts for this attempt. Give it another go — you&apos;ve got this.
      </p>

      <div className="flex flex-col gap-2.5">
        <Button onClick={onRetry} variant="primary" fullWidth>
          Try again
        </Button>
        <Button href={`/learn/${trackId}`} variant="ghost" fullWidth>
          ← Back to module map
        </Button>
      </div>
    </ResultShell>
  );
}

function StatChip({ icon, label }: { icon: string; label: string }) {
  return (
    <span
      className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border"
      style={{ borderColor: "#c8f0e0", backgroundColor: "#eafef7", color: "var(--color-primary)", fontFamily: "var(--font-body)" }}
    >
      {icon} {label}
    </span>
  );
}
