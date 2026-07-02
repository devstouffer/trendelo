"use client";

import { useState } from "react";
import Button from "../../../components/Button";
import type { ToolWalkthroughLessonContent } from "../../lesson-content/types";
import { LessonActionBar, LessonHeader, LessonPromptPanel, LessonShell, ResultCard, StatChip } from "./LessonChrome";

const XP_FLAT = 30;

export default function ToolWalkthroughPlayer({
  trackId,
  moduleEmoji,
  moduleTitle,
  content,
}: {
  trackId: string;
  moduleEmoji: string;
  moduleTitle: string;
  content: ToolWalkthroughLessonContent;
}) {
  const [step, setStep]         = useState(0);
  const [complete, setComplete] = useState(false);

  const total  = content.steps.length;
  const isLast = step === total - 1;
  const pct = Math.round((step / (total - 1)) * 100);
  const current = content.steps[step];

  if (complete) {
    return (
      <ResultCard>
        <p style={{ fontSize: 56, marginBottom: 12, animation: "celebrate-pop 0.5s ease-out both" }}>🧰</p>
        <h1 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}>
          Walkthrough complete
        </h1>
        <p className="text-sm mb-6" style={{ color: "var(--color-on-surface-muted)" }}>
          {content.lessonTitle}
        </p>
        <div className="flex items-center justify-center gap-3 mb-7">
          <StatChip icon="🏆" label={`+${XP_FLAT} XP`} />
        </div>
        <div className="flex flex-col gap-2.5">
          <Button href={content.toolUrl} target="_blank" rel="noopener noreferrer" variant="ghost" fullWidth>
            Open {content.toolName} ↗
          </Button>
          <Button href={`/learn/${trackId}`} variant="primary" fullWidth>
            Back to module map
          </Button>
        </div>
      </ResultCard>
    );
  }

  return (
    <LessonShell>
      <LessonHeader trackId={trackId} pct={pct} />

      <main className="flex-1 w-full max-w-lg mx-auto px-5 pt-8" style={{ paddingBottom: 140 }}>
        <LessonPromptPanel
          eyebrow={`${moduleEmoji} ${moduleTitle}`}
          kicker={`${content.lessonTitle} · Step ${step + 1} of ${total}`}
        >
          <h1
            className="text-lg font-bold leading-snug mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
          >
            {current.title}
          </h1>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)", whiteSpace: "pre-line" }}
          >
            {current.body}
          </p>
          {current.tip && (
            <div
              className="text-xs leading-relaxed p-3 rounded-xl mb-3"
              style={{ backgroundColor: "#fdf3e6", border: "1.5px solid var(--color-amber)", color: "var(--color-on-surface)" }}
            >
              <span className="font-bold" style={{ color: "var(--color-amber)" }}>Tip · </span>
              {current.tip}
            </div>
          )}
          <Button href={content.toolUrl} target="_blank" rel="noopener noreferrer" variant="ghost" size="sm">
            Open {content.toolName} ↗
          </Button>
        </LessonPromptPanel>
      </main>

      <LessonActionBar>
        <Button fullWidth size="lg" onClick={() => (isLast ? setComplete(true) : setStep(s => s + 1))}>
          {isLast ? "Mark complete" : "Next step →"}
        </Button>
      </LessonActionBar>
    </LessonShell>
  );
}
