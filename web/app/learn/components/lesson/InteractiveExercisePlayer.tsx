"use client";

import { useState } from "react";
import Button from "../../../components/Button";
import type { InteractiveExerciseLessonContent } from "../../lesson-content/types";
import { LessonActionBar, LessonHeader, LessonPromptPanel, LessonShell, ResultCard, StatChip } from "./LessonChrome";
import QuizFlow, { XP_PER_CORRECT, type QuizFlowResult } from "./QuizFlow";

const XP_FLAT = 40;

type Phase = "content" | "recap" | "complete";

export default function InteractiveExercisePlayer({
  trackId,
  moduleEmoji,
  moduleTitle,
  content,
}: {
  trackId: string;
  moduleEmoji: string;
  moduleTitle: string;
  content: InteractiveExerciseLessonContent;
}) {
  const [step, setStep]         = useState(0);
  const [answers, setAnswers]   = useState<string[]>(() => content.steps.map(() => ""));
  const [revealed, setRevealed] = useState<boolean[]>(() => content.steps.map(() => false));
  const [copied, setCopied]     = useState(false);
  const [phase, setPhase]       = useState<Phase>("content");
  const [recapResult, setRecapResult] = useState<QuizFlowResult | null>(null);

  const totalSteps    = content.steps.length + 1;
  const isArtifactStep = step === content.steps.length;
  const pct = Math.round((step / (totalSteps - 1)) * 100);

  const artifactText = content.steps
    .map((s, i) => answers[i].trim() || s.modelAnswer)
    .join("\n\n");

  function handleCopy() {
    navigator.clipboard.writeText(artifactText).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
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
        <p style={{ fontSize: 56, marginBottom: 12, animation: "celebrate-pop 0.5s ease-out both" }}>🛠️</p>
        <h1 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
          Nice work — you built something real
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
        {isArtifactStep ? (
          <LessonPromptPanel eyebrow={`${moduleEmoji} ${moduleTitle}`} kicker={`${content.lessonTitle} · Your artifact`}>
            <h1
              className="text-lg font-bold leading-snug mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
            >
              🧩 {content.artifactTitle}
            </h1>
            <div
              className="whitespace-pre-wrap text-sm leading-relaxed p-4 rounded-xl"
              style={{
                backgroundColor: "#fff",
                border: "1px solid var(--color-ghost-border)",
                color: "var(--color-on-surface)",
                fontFamily: "var(--font-body)",
              }}
            >
              {artifactText}
            </div>
            <Button variant="ghost" size="sm" onClick={handleCopy} className="mt-3">
              {copied ? "Copied ✓" : "Copy artifact"}
            </Button>
          </LessonPromptPanel>
        ) : (
          <LessonPromptPanel
            eyebrow={`${moduleEmoji} ${moduleTitle}`}
            kicker={`${content.lessonTitle} · Step ${step + 1} of ${content.steps.length}`}
          >
            {step === 0 && (
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)", whiteSpace: "pre-line" }}
              >
                {content.intro}
              </p>
            )}

            <h1
              className="text-lg font-bold leading-snug mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)", whiteSpace: "pre-line" }}
            >
              {content.steps[step].prompt}
            </h1>

            {content.steps[step].open ? (
              <>
                <textarea
                  value={answers[step]}
                  onChange={e => {
                    const v = e.target.value;
                    setAnswers(a => a.map((x, i) => (i === step ? v : x)));
                  }}
                  placeholder={content.steps[step].placeholder}
                  rows={4}
                  className="w-full mb-3"
                  style={{
                    borderRadius: "1rem",
                    border: "2px solid var(--color-forest)",
                    padding: "0.75rem 1rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--color-on-surface)",
                    resize: "none",
                  }}
                />

                {!revealed[step] ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setRevealed(r => r.map((x, i) => (i === step ? true : x)))}
                  >
                    Show example
                  </Button>
                ) : (
                  <div
                    className="text-sm leading-relaxed p-3 rounded-xl"
                    style={{ backgroundColor: "#eef6fd", border: "1.5px solid var(--color-blue)", color: "var(--color-on-surface)", whiteSpace: "pre-line" }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "var(--color-blue)" }}>
                      Example
                    </p>
                    {content.steps[step].modelAnswer}
                  </div>
                )}
              </>
            ) : (
              <div
                className="text-sm leading-relaxed p-3 rounded-xl"
                style={{ backgroundColor: "#eef6fd", border: "1.5px solid var(--color-blue)", color: "var(--color-on-surface)", whiteSpace: "pre-line" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-1.5" style={{ color: "var(--color-blue)" }}>
                  Walkthrough
                </p>
                {content.steps[step].modelAnswer}
              </div>
            )}
          </LessonPromptPanel>
        )}
      </main>

      <LessonActionBar>
        <Button
          fullWidth
          size="lg"
          onClick={() => (isArtifactStep ? setPhase("recap") : setStep(s => s + 1))}
        >
          {isArtifactStep ? "Start recap →" : step === content.steps.length - 1 ? "Review your work →" : "Continue →"}
        </Button>
      </LessonActionBar>
    </LessonShell>
  );
}
