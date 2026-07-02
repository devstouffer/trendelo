"use client";

import { useParams } from "next/navigation";
import Button from "../../../../components/Button";
import DottedBackground from "../../../../components/DottedBackground";
import InteractiveExercisePlayer from "../../../components/lesson/InteractiveExercisePlayer";
import QuizPlayer from "../../../components/lesson/QuizPlayer";
import ReadReflectPlayer from "../../../components/lesson/ReadReflectPlayer";
import ScenarioPlayer from "../../../components/lesson/ScenarioPlayer";
import ToolWalkthroughPlayer from "../../../components/lesson/ToolWalkthroughPlayer";
import { getLessonContent } from "../../../lesson-content";
import { TRACKS } from "../../page";

export default function LessonPage() {
  const params  = useParams<{ track: string; module: string; lesson: string }>();
  const trackId = Array.isArray(params.track)  ? params.track[0]  : (params.track  ?? "marketing");
  const moduleP = Array.isArray(params.module) ? params.module[0] : (params.module ?? "1");
  const lessonP = Array.isArray(params.lesson) ? params.lesson[0] : (params.lesson ?? "1");

  const content = getLessonContent(trackId, moduleP, lessonP);

  if (!content) {
    return <ComingSoon trackId={trackId} />;
  }

  const track      = TRACKS[trackId] ?? TRACKS.marketing;
  const moduleInfo = track.modules[Number(moduleP) - 1] ?? track.modules[0];

  switch (content.type) {
    case "quiz":
      return <QuizPlayer trackId={trackId} moduleEmoji={moduleInfo.emoji} moduleTitle={moduleInfo.title} content={content} />;
    case "read-reflect":
      return <ReadReflectPlayer trackId={trackId} moduleEmoji={moduleInfo.emoji} moduleTitle={moduleInfo.title} content={content} />;
    case "interactive-exercise":
      return <InteractiveExercisePlayer trackId={trackId} moduleEmoji={moduleInfo.emoji} moduleTitle={moduleInfo.title} content={content} />;
    case "scenario":
      return <ScenarioPlayer trackId={trackId} moduleEmoji={moduleInfo.emoji} moduleTitle={moduleInfo.title} content={content} />;
    case "tool-walkthrough":
      return <ToolWalkthroughPlayer trackId={trackId} moduleEmoji={moduleInfo.emoji} moduleTitle={moduleInfo.title} content={content} />;
  }
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
