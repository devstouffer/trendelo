"use client";

import { useState } from "react";
import Button from "../../../components/Button";
import type { QuizLessonContent } from "../../lesson-content/types";
import { ResultCard, StatChip } from "./LessonChrome";
import QuizFlow, { XP_PER_CORRECT, type QuizFlowResult } from "./QuizFlow";

export default function QuizPlayer({
  trackId,
  moduleEmoji,
  moduleTitle,
  content,
}: {
  trackId: string;
  moduleEmoji: string;
  moduleTitle: string;
  content: QuizLessonContent;
}) {
  const [result, setResult] = useState<QuizFlowResult | null>(null);

  if (result) {
    return (
      <QuizCompleteCard
        trackId={trackId}
        xp={result.correctCount * XP_PER_CORRECT}
        correctCount={result.correctCount}
        total={result.total}
        bolts={result.bolts}
      />
    );
  }

  return (
    <QuizFlow
      trackId={trackId}
      moduleEmoji={moduleEmoji}
      moduleTitle={moduleTitle}
      lessonTitle={content.lessonTitle}
      questions={content.questions}
      onFinish={setResult}
    />
  );
}

function QuizCompleteCard({
  trackId, xp, correctCount, total, bolts,
}: {
  trackId: string;
  xp: number;
  correctCount: number;
  total: number;
  bolts: number;
}) {
  return (
    <ResultCard>
      <p style={{ fontSize: 56, marginBottom: 12, animation: "celebrate-pop 0.5s ease-out both" }}>🎉</p>

      <h1 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
        Lesson complete!
      </h1>

      <p className="text-sm mb-6" style={{ color: "var(--color-on-surface-muted)" }}>
        You got {correctCount} of {total} right.
      </p>

      <div className="flex items-center justify-center gap-3 mb-7">
        <StatChip icon="🏆" label={`+${xp} XP`} />
        <StatChip icon="⚡" label={bolts > 0 ? "Bolt unused" : "Bolt used"} />
        <StatChip icon="🎯" label={`${Math.round((correctCount / total) * 100)}%`} />
      </div>

      <Button href={`/learn/${trackId}`} variant="primary" fullWidth>
        Back to module map
      </Button>
    </ResultCard>
  );
}
