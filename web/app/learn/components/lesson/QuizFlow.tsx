"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Button from "../../../components/Button";
import type { QuizQuestion } from "../../lesson-content/types";
import { LessonActionBar, LessonBanner, LessonHeader, LessonPromptPanel, LessonShell, ResultCard } from "./LessonChrome";

export const START_BOLTS = 1;
export const XP_PER_CORRECT = 10;
const SHOCK_DURATION_MS = 650;

export const QUIZ_ANIM = `
@keyframes shake-x {
  0%, 100% { transform: translateX(0); }
  20%  { transform: translateX(-6px); }
  40%  { transform: translateX(6px); }
  60%  { transform: translateX(-4px); }
  80%  { transform: translateX(4px); }
}
@keyframes bolt-lose {
  0%   { transform: scale(1) rotate(0deg); }
  30%  { transform: scale(1.6) rotate(-10deg); }
  60%  { transform: scale(1.2) rotate(8deg); }
  100% { transform: scale(1) rotate(0deg); }
}
@keyframes screen-shake {
  0%, 100%  { transform: translate(0, 0); }
  10% { transform: translate(-5px, 3px); }
  20% { transform: translate(5px, -3px); }
  30% { transform: translate(-7px, 0); }
  40% { transform: translate(7px, 2px); }
  50% { transform: translate(-4px, -4px); }
  60% { transform: translate(4px, 4px); }
  70% { transform: translate(-3px, 0); }
  80% { transform: translate(3px, -2px); }
  90% { transform: translate(-1px, 1px); }
}
@keyframes shock-flash {
  0%   { opacity: 0; }
  8%   { opacity: 1; }
  22%  { opacity: 0.15; }
  32%  { opacity: 0.95; }
  48%  { opacity: 0.1; }
  100% { opacity: 0; }
}
@keyframes bolt-strike {
  0%   { opacity: 0; transform: scaleY(0.3); }
  12%  { opacity: 1; transform: scaleY(1.05); }
  28%  { opacity: 0.5; transform: scaleY(0.85); }
  42%  { opacity: 1; transform: scaleY(1); }
  70%  { opacity: 0.25; }
  100% { opacity: 0; }
}
`;

export type QuizFlowResult = { correctCount: number; total: number; bolts: number };

type Phase = "question" | "failed";

/**
 * The reusable "quiz mechanic" — one question at a time, a single bolt of
 * allowed error, immediate feedback, shock animation on a wrong answer.
 * Used both by the standalone Quiz lesson and as the recap step embedded at
 * the end of Read & Reflect / Interactive Exercise / Scenario lessons.
 */
export default function QuizFlow({
  trackId,
  moduleEmoji,
  moduleTitle,
  lessonTitle,
  questions,
  onFinish,
}: {
  trackId: string;
  moduleEmoji: string;
  moduleTitle: string;
  lessonTitle: string;
  questions: QuizQuestion[];
  onFinish: (result: QuizFlowResult) => void;
}) {
  const [qIndex, setQIndex]             = useState(0);
  const [selected, setSelected]         = useState<number | null>(null);
  const [checked, setChecked]           = useState(false);
  const [bolts, setBolts]               = useState(START_BOLTS);
  const [correctCount, setCorrectCount] = useState(0);
  const [phase, setPhase]               = useState<Phase>("question");
  const [shock, setShock]               = useState(false);
  const [failing, setFailing]           = useState(false);

  const total    = questions.length;
  const question = questions[qIndex];
  const isCorrect = checked && selected === question.correctIndex;
  const pct = Math.round(((qIndex + (checked ? 1 : 0)) / total) * 100);

  function handleSelect(i: number) {
    if (checked) return;
    setSelected(i);
  }

  function handleCheck() {
    if (selected === null) return;
    setChecked(true);

    if (selected === question.correctIndex) {
      setCorrectCount(c => c + 1);
      return;
    }

    setShock(true);
    window.setTimeout(() => setShock(false), SHOCK_DURATION_MS);

    if (bolts <= 0) {
      setFailing(true);
      window.setTimeout(() => setPhase("failed"), SHOCK_DURATION_MS);
    } else {
      setBolts(b => b - 1);
    }
  }

  function handleContinue() {
    if (qIndex === total - 1) {
      onFinish({ correctCount, total, bolts });
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
    setBolts(START_BOLTS);
    setCorrectCount(0);
    setPhase("question");
    setShock(false);
    setFailing(false);
  }

  if (phase === "failed") {
    return <QuizFailedCard trackId={trackId} onRetry={resetLesson} />;
  }

  return (
    <LessonShell extraAnim={QUIZ_ANIM} style={{ animation: shock ? "screen-shake 0.5s ease" : undefined }}>
      {shock && <ShockOverlay />}

      <LessonHeader
        trackId={trackId}
        pct={pct}
        rightSlot={
          <span aria-label={bolts > 0 ? "1 mistake allowed" : "no mistakes left"}>
            <span
              style={{
                fontSize: 20,
                opacity: bolts > 0 ? 1 : 0.25,
                filter: bolts > 0 ? "none" : "grayscale(1)",
                display: "inline-block",
                animation: shock ? "bolt-lose 0.5s ease" : undefined,
              }}
            >
              ⚡
            </span>
          </span>
        }
      />

      <main className="flex-1 w-full max-w-lg mx-auto px-5 pt-8" style={{ paddingBottom: 140 }}>
        <LessonPromptPanel eyebrow={`${moduleEmoji} ${moduleTitle}`} kicker={`${lessonTitle} · Question ${qIndex + 1} of ${total}`}>
          <QuestionPrompt question={question} selected={selected} checked={checked} />
        </LessonPromptPanel>

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

      {!checked ? (
        <LessonActionBar>
          <Button
            fullWidth
            size="lg"
            disabled={selected === null}
            onClick={handleCheck}
            style={selected === null ? { opacity: 0.45, pointerEvents: "none" } : undefined}
          >
            Check
          </Button>
        </LessonActionBar>
      ) : failing ? (
        <LessonBanner tone="error">
          <p className="font-bold text-sm" style={{ color: "#fff", fontFamily: "var(--font-display)" }}>
            Out of bolts… ⚡
          </p>
        </LessonBanner>
      ) : (
        <LessonBanner tone={isCorrect ? "primary" : "error"}>
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
        </LessonBanner>
      )}
    </LessonShell>
  );
}

// ── Question prompt — choice or fill-in-the-blank ────────────────────────────

function QuestionPrompt({
  question,
  selected,
  checked,
}: {
  question: QuizQuestion;
  selected: number | null;
  checked: boolean;
}) {
  if (question.kind === "blank") {
    const [before, after] = question.sentence.split("___");
    const answer = selected !== null ? question.options[selected] : null;
    const isCorrect = checked && selected === question.correctIndex;

    return (
      <h1 className="text-xl font-bold leading-snug" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
        <span style={{ marginRight: 8 }}>{question.emoji}</span>
        {before}
        <span
          style={{
            display: "inline-block",
            minWidth: 88,
            borderBottom: "3px solid var(--color-forest)",
            margin: "0 4px",
            color: checked ? (isCorrect ? "var(--color-primary)" : "var(--color-error)") : "var(--color-on-surface-muted)",
          }}
        >
          {answer ?? "______"}
        </span>
        {after}
      </h1>
    );
  }

  return (
    <h1 className="text-xl font-bold leading-snug" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
      <span style={{ marginRight: 8 }}>{question.emoji}</span>
      {question.prompt}
    </h1>
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

// ── Shock overlay ("shocked back to life") ─────────────────────────────────────

const BOLT_STREAKS = [
  { left: "12%", height: "70%", delay: "0ms",  width: 5 },
  { left: "32%", height: "95%", delay: "60ms", width: 4 },
  { left: "58%", height: "80%", delay: "20ms", width: 6 },
  { left: "78%", height: "60%", delay: "90ms", width: 4 },
];

function ShockOverlay() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.95), rgba(120,200,255,0.55) 55%, rgba(8,80,65,0) 80%)",
          animation: `shock-flash ${SHOCK_DURATION_MS}ms ease-out both`,
        }}
      />
      {BOLT_STREAKS.map((b, i) => (
        <svg
          key={i}
          viewBox="0 0 20 100"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            top: "50%",
            left: b.left,
            width: b.width * 4,
            height: b.height,
            transform: "translateY(-50%)",
            transformOrigin: "center",
            animation: `bolt-strike ${SHOCK_DURATION_MS}ms ease-out both`,
            animationDelay: b.delay,
            filter: "drop-shadow(0 0 6px rgba(255,255,255,0.9))",
          }}
        >
          <polyline
            points="12,0 6,38 13,42 4,100 16,48 9,44"
            fill="none"
            stroke="#fff9d6"
            strokeWidth={2.4}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}

// ── Failure result screen ─────────────────────────────────────────────────────

function QuizFailedCard({ trackId, onRetry }: { trackId: string; onRetry: () => void }) {
  return (
    <ResultCard>
      <p style={{ fontSize: 56, marginBottom: 12, animation: "celebrate-pop 0.5s ease-out both" }}>🔌</p>

      <h1 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
        Out of bolts!
      </h1>

      <p className="text-sm mb-6" style={{ color: "var(--color-on-surface-muted)" }}>
        You only get one mistake per attempt. Give it another go — you&apos;ve got this.
      </p>

      <div className="flex flex-col gap-2.5">
        <Button onClick={onRetry} variant="primary" fullWidth>
          Try again
        </Button>
        <Button href={`/learn/${trackId}`} variant="ghost" fullWidth>
          ← Back to module map
        </Button>
      </div>
    </ResultCard>
  );
}
