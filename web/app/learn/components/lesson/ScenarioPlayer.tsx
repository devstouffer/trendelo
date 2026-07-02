"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Button from "../../../components/Button";
import type { ScenarioLessonContent } from "../../lesson-content/types";
import { LessonActionBar, LessonBanner, LessonHeader, LessonPromptPanel, LessonShell, ResultCard, StatChip } from "./LessonChrome";
import QuizFlow, { XP_PER_CORRECT, type QuizFlowResult } from "./QuizFlow";

const XP_FLAT = 30;

type Phase = "content" | "recap" | "complete";

export default function ScenarioPlayer({
  trackId,
  moduleEmoji,
  moduleTitle,
  content,
}: {
  trackId: string;
  moduleEmoji: string;
  moduleTitle: string;
  content: ScenarioLessonContent;
}) {
  const [beatIndex, setBeatIndex]           = useState(0);
  const [chosenOutcome, setChosenOutcome]   = useState<string | null>(null);
  const [chosenLabel, setChosenLabel]       = useState<string | null>(null);
  const [phase, setPhase]                   = useState<Phase>("content");
  const [recapResult, setRecapResult]       = useState<QuizFlowResult | null>(null);

  const total = content.beats.length;
  const beat  = content.beats[beatIndex];
  const isLast = beatIndex === total - 1;
  const pct = Math.round((beatIndex / (total - 1)) * 100);

  function advance() {
    setChosenOutcome(null);
    setChosenLabel(null);
    if (isLast) {
      setPhase("recap");
    } else {
      setBeatIndex(i => i + 1);
    }
  }

  if (phase === "recap") {
    return (
      <QuizFlow
        trackId={trackId}
        moduleEmoji={moduleEmoji}
        moduleTitle={moduleTitle}
        lessonTitle={`${content.lessonTitle} · Recap`}
        questions={content.recapQuestions}
        onFinish={result => {
          setRecapResult(result);
          setPhase("complete");
        }}
      />
    );
  }

  if (phase === "complete") {
    const recapXP = (recapResult?.correctCount ?? 0) * XP_PER_CORRECT;
    return (
      <ResultCard>
        <p style={{ fontSize: 56, marginBottom: 12, animation: "celebrate-pop 0.5s ease-out both" }}>🎬</p>
        <h1 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
          Scenario complete
        </h1>
        <p className="text-sm mb-6" style={{ color: "var(--color-on-surface-muted)" }}>
          {content.lessonTitle}
        </p>
        <div className="flex items-center justify-center gap-3 mb-7">
          <StatChip icon="🏆" label={`+${XP_FLAT + recapXP} XP`} />
          {recapResult && <StatChip icon="🎯" label={`Recap ${recapResult.correctCount}/${recapResult.total}`} />}
        </div>
        <Button href={`/learn/${trackId}`} variant="primary" fullWidth>
          Back to module map
        </Button>
      </ResultCard>
    );
  }

  return (
    <LessonShell>
      <LessonHeader trackId={trackId} pct={pct} />

      <main className="flex-1 w-full max-w-lg mx-auto px-5 pt-8" style={{ paddingBottom: 140 }}>
        <LessonPromptPanel
          eyebrow={`${moduleEmoji} ${moduleTitle}`}
          kicker={`${content.lessonTitle} · ${beatIndex + 1} of ${total}`}
        >
          {beat.kind === "narrative" ? (
            <h1
              className="text-lg font-bold leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)", whiteSpace: "pre-line" }}
            >
              {beat.emoji && <span style={{ marginRight: 8 }}>{beat.emoji}</span>}
              {beat.body}
            </h1>
          ) : (
            <h1
              className="text-lg font-bold leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)", whiteSpace: "pre-line" }}
            >
              🤔 {beat.prompt}
            </h1>
          )}
        </LessonPromptPanel>

        {beat.kind === "decision" && (
          <div className="flex flex-col gap-3">
            {beat.choices.map((c, i) => (
              <ChoiceButton
                key={i}
                label={c.label}
                selected={chosenLabel === c.label}
                disabled={chosenOutcome !== null}
                onClick={() => {
                  setChosenOutcome(c.outcome);
                  setChosenLabel(c.label);
                }}
              />
            ))}
          </div>
        )}
      </main>

      {beat.kind === "decision" && chosenOutcome !== null ? (
        <LessonBanner tone="neutral">
          <div className="min-w-0">
            <p className="font-bold text-sm mb-0.5" style={{ color: "#fff", fontFamily: "var(--font-display)" }}>
              Here's what happened
            </p>
            <p className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.9)", whiteSpace: "pre-line" }}>
              {chosenOutcome}
            </p>
          </div>
          <Button tone="dark" onClick={advance} className="shrink-0">
            Continue →
          </Button>
        </LessonBanner>
      ) : beat.kind === "narrative" ? (
        <LessonActionBar>
          <Button fullWidth size="lg" onClick={advance}>
            {isLast ? "Start recap →" : "Continue →"}
          </Button>
        </LessonActionBar>
      ) : null}
    </LessonShell>
  );
}

function ChoiceButton({
  label, selected, disabled, onClick,
}: {
  label: string;
  selected: boolean;
  disabled: boolean;
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
    cursor: disabled ? "default" : "pointer",
    transition: "border-color 150ms ease, background-color 150ms ease, opacity 150ms ease",
  };

  if (disabled) {
    style = selected
      ? { ...style, borderColor: "var(--color-primary)", backgroundColor: "var(--color-mint)", color: "var(--color-forest)" }
      : { ...style, opacity: 0.5 };
  }

  return (
    <button type="button" className="option-row" disabled={disabled} onClick={onClick} style={style}>
      {label}
      {selected && <span style={{ marginLeft: 8 }}>✓</span>}
    </button>
  );
}
