"use client";

import { useState } from "react";
import Button from "../../../components/Button";
import type { ReadReflectLessonContent } from "../../lesson-content/types";
import { LessonActionBar, LessonHeader, LessonPromptPanel, LessonShell, ResultCard, StatChip } from "./LessonChrome";
import QuizFlow, { XP_PER_CORRECT, type QuizFlowResult } from "./QuizFlow";

const XP_FLAT = 30;

type Phase = "content" | "recap" | "complete";

export default function ReadReflectPlayer({
  trackId,
  moduleEmoji,
  moduleTitle,
  content,
}: {
  trackId: string;
  moduleEmoji: string;
  moduleTitle: string;
  content: ReadReflectLessonContent;
}) {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<Phase>("content");
  const [recapResult, setRecapResult] = useState<QuizFlowResult | null>(null);

  const totalSteps = content.cards.length + 1;
  const isReflectStep = step === content.cards.length;
  const pct = Math.round((step / (totalSteps - 1)) * 100);

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
        <p style={{ fontSize: 56, marginBottom: 12, animation: "celebrate-pop 0.5s ease-out both" }}>📗</p>
        <h1 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
          Lesson complete!
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

  const card = content.cards[step];

  return (
    <LessonShell>
      <LessonHeader trackId={trackId} pct={pct} />

      <main className="flex-1 w-full max-w-lg mx-auto px-5 pt-8" style={{ paddingBottom: 140 }}>
        {isReflectStep ? (
          <LessonPromptPanel eyebrow={`${moduleEmoji} ${moduleTitle}`} kicker={`${content.lessonTitle} · Reflect`}>
            <h1
              className="text-xl font-bold leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
            >
              <span style={{ marginRight: 8 }}>💭</span>
              {content.reflectPrompt}
            </h1>
            <p className="text-xs mt-3" style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}>
              Just something to think about — no answer needed.
            </p>
          </LessonPromptPanel>
        ) : (
          <LessonPromptPanel
            eyebrow={`${moduleEmoji} ${moduleTitle}`}
            kicker={`${content.lessonTitle} · Card ${step + 1} of ${content.cards.length}`}
          >
            <h1
              className="text-xl font-bold leading-snug mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
            >
              {card.emoji && <span style={{ marginRight: 8 }}>{card.emoji}</span>}
              {card.headline}
            </h1>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)", whiteSpace: "pre-line" }}
            >
              {card.body}
            </p>
          </LessonPromptPanel>
        )}
      </main>

      <LessonActionBar>
        <Button fullWidth size="lg" onClick={() => (isReflectStep ? setPhase("recap") : setStep(s => s + 1))}>
          {isReflectStep ? "Start recap →" : step === content.cards.length - 1 ? "Continue to reflection →" : "Next →"}
        </Button>
      </LessonActionBar>
    </LessonShell>
  );
}
