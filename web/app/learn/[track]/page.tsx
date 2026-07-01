"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Button from "../../components/Button";
import DottedBackground from "../../components/DottedBackground";

// ── Track & module data ───────────────────────────────────────────────────────

const TRACKS: Record<string, {
  label: string;
  emoji: string;
  tagline: string;
  badge: string;
  modules: { title: string; emoji: string }[];
}> = {
  marketing: {
    label: "AI in Marketing",
    emoji: "📈",
    tagline: "Learn how AI is reshaping marketing, content, and growth.",
    badge: "AI-Ready Marketer",
    modules: [
      { title: "AI & the Marketing Landscape",     emoji: "🌐" },
      { title: "AI-Powered Content Creation",       emoji: "✍️" },
      { title: "Data, Targeting & Personalisation", emoji: "🎯" },
      { title: "AI Tools for Campaigns",            emoji: "🚀" },
      { title: "Measuring & Optimising with AI",    emoji: "📊" },
      { title: "Your AI Marketing Strategy",        emoji: "🏆" },
    ],
  },
  education: {
    label: "AI in Education",
    emoji: "🎓",
    tagline: "Discover how AI is reshaping teaching, learning, and assessment.",
    badge: "AI-Confident Educator",
    modules: [
      { title: "AI in Modern Education",          emoji: "🏫" },
      { title: "AI Tools for Teachers",           emoji: "✏️" },
      { title: "Personalised Learning with AI",   emoji: "🌱" },
      { title: "AI in Assessment & Feedback",     emoji: "📝" },
      { title: "Ethics & AI in the Classroom",    emoji: "⚖️" },
      { title: "Your AI Teaching Toolkit",        emoji: "🧰" },
    ],
  },
  business: {
    label: "AI in Business",
    emoji: "💼",
    tagline: "Use AI to lead smarter decisions, teams, and operations.",
    badge: "AI-Fluent Business Pro",
    modules: [
      { title: "The AI Business Revolution",  emoji: "⚡" },
      { title: "AI for Productivity & Ops",   emoji: "📋" },
      { title: "AI Strategy Frameworks",      emoji: "🎯" },
      { title: "AI in Finance & HR",          emoji: "💡" },
      { title: "Managing Risk & Ethics",      emoji: "🛡️" },
      { title: "Your AI Business Playbook",   emoji: "📖" },
    ],
  },
  journalism: {
    label: "AI in Journalism & Media",
    emoji: "📰",
    tagline: "Navigate AI tools, misinformation, and the synthetic media era.",
    badge: "AI-Literate Journalist",
    modules: [
      { title: "AI & the News Landscape",          emoji: "🌐" },
      { title: "AI Tools for Journalists",         emoji: "🔍" },
      { title: "Verifying AI-Generated Content",   emoji: "✅" },
      { title: "Synthetic Media & Deepfakes",      emoji: "🎭" },
      { title: "Ethics & Responsibility",          emoji: "⚖️" },
      { title: "Your AI Journalism Practice",      emoji: "🏆" },
    ],
  },
  architecture: {
    label: "AI in Design",
    emoji: "🏛️",
    tagline: "Explore how AI is expanding the creative frontier for designers.",
    badge: "AI-Fluent Designer",
    modules: [
      { title: "AI & the Design Revolution",  emoji: "🎨" },
      { title: "Generative Design Tools",     emoji: "🖥️" },
      { title: "AI in Visual Communication",  emoji: "🖼️" },
      { title: "AI for Prototyping & UX",     emoji: "🏗️" },
      { title: "Ethics & AI Creativity",      emoji: "✨" },
      { title: "Your AI Design Practice",     emoji: "🏆" },
    ],
  },
};

// Fixed demo progress — 2 complete, 1 in-progress, 3 locked
const DEMO: { status: "completed" | "in-progress" | "locked"; done: number }[] = [
  { status: "completed",   done: 10 },
  { status: "completed",   done: 10 },
  { status: "in-progress", done: 4  },
  { status: "locked",      done: 0  },
  { status: "locked",      done: 0  },
  { status: "locked",      done: 0  },
];

// ── Map geometry ──────────────────────────────────────────────────────────────

const R  = 44;   // node radius (px)
const W  = 360;  // container width (px)
const SH = 1070; // SVG height
const CH = 1150; // container height (extra room for last node's label)

// [cx, cy] — node centres, winding left ↔ right as we go down
const POS: [number, number][] = [
  [95,   90],
  [262,  270],
  [82,   450],
  [265,  630],
  [88,   810],
  [180,  990],
];

// Cubic bezier connecting bottom of node[i] to top of node[i+1]
function segPath(i: number): string {
  const [x1, y1] = POS[i];
  const [x2, y2] = POS[i + 1];
  const sy  = y1 + R;
  const ey  = y2 - R;
  const mid = (sy + ey) / 2;
  return `M ${x1} ${sy} C ${x1} ${mid} ${x2} ${mid} ${x2} ${ey}`;
}

// Point on the same bezier at parameter t ∈ [0,1]
function bezierPt(i: number, t: number): [number, number] {
  const [x1, y1] = POS[i];
  const [x2, y2] = POS[i + 1];
  const sy  = y1 + R;
  const ey  = y2 - R;
  const mid = (sy + ey) / 2;
  const mt  = 1 - t;
  const bx  = mt * mt * mt * x1  + 3 * mt * mt * t * x1  + 3 * mt * t * t * x2  + t * t * t * x2;
  const by  = mt * mt * mt * sy  + 3 * mt * mt * t * mid + 3 * mt * t * t * mid + t * t * t * ey;
  return [Math.round(bx), Math.round(by)];
}

// ── CSS animations ────────────────────────────────────────────────────────────

const ANIM = `
@keyframes pulse-ring {
  0%   { transform: scale(1);   opacity: 0.65; }
  100% { transform: scale(1.65); opacity: 0;  }
}
@keyframes sparkle-float {
  0%   { transform: translate(0, 0) scale(1);              opacity: 1; }
  100% { transform: translate(var(--sx, 0px), -36px) scale(0.5); opacity: 0; }
}
@keyframes badge-pop {
  0%   { transform: scale(0.7); opacity: 0; }
  65%  { transform: scale(1.12); }
  100% { transform: scale(1);   opacity: 1; }
}
@keyframes node-hover {
  from { transform: scale(1); }
  to   { transform: scale(1.06); }
}
.module-node:hover { transform: scale(1.06); }
.module-node:active { transform: scale(0.97); }
`;

// ── Page ──────────────────────────────────────────────────────────────────────

export default function LearnTrackPage() {
  const { track } = useParams<{ track: string }>();
  const trackId = Array.isArray(track) ? track[0] : (track ?? "marketing");
  const data    = TRACKS[trackId] ?? TRACKS.marketing;

  const completedCount = DEMO.filter(m => m.status === "completed").length;
  const totalXP        = DEMO.reduce((acc, m) => acc + m.done * 10, 0);
  const overallPct     = Math.round(
    (DEMO.reduce((acc, m) => acc + m.done, 0) / (6 * 10)) * 100
  );

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: "var(--color-mint)", minHeight: "100vh" }}>
      <DottedBackground color="#085041" intensity={0.18} />
      <style>{ANIM}</style>

      {/* ── Sticky nav ───────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-30 w-full px-6 py-4 flex items-center justify-between gap-4"
        style={{
          backgroundColor: "rgba(4,38,28,0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(200,240,224,0.1)",
        }}
      >
        <Link
          href="/dashboard"
          className="flex items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-70"
          style={{ color: "#a0d4be", fontFamily: "var(--font-body)" }}
        >
          ← Dashboard
        </Link>

        <span
          className="text-sm font-bold truncate"
          style={{ fontFamily: "var(--font-display)", color: "#e1f5ee" }}
        >
          {data.emoji} {data.label}
        </span>

        <span
          className="text-xs font-bold px-3 py-1 rounded-full shrink-0"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "#fff",
            fontFamily: "var(--font-body)",
            boxShadow: "2px 2px 0px var(--color-forest)",
          }}
        >
          ⚡ {totalXP} XP
        </span>
      </header>

      {/* ── Overview card ────────────────────────────────────────────────── */}
      <div className="max-w-sm mx-auto px-4 pt-6 pb-2">
        <div
          className="rounded-2xl border-2 p-5 bg-white"
          style={{
            borderColor: "var(--color-forest)",
            boxShadow: "4px 4px 0px var(--color-forest)",
          }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-2xl border-2 flex items-center justify-center text-3xl shrink-0"
              style={{
                backgroundColor: "var(--color-mint)",
                borderColor: "var(--color-primary-light)",
                boxShadow: "2px 2px 0px var(--color-primary-light)",
              }}
            >
              {data.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <h1
                className="text-lg font-bold leading-snug mb-0.5"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
              >
                {data.label}
              </h1>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-on-surface-muted)" }}>
                {data.tagline}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="flex-1 h-3 rounded-full border-2 overflow-hidden"
              style={{ borderColor: "var(--color-outline)", backgroundColor: "var(--color-mint)" }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: `${overallPct}%`, backgroundColor: "var(--color-primary)" }}
              />
            </div>
            <span
              className="text-xs font-bold shrink-0"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}
            >
              {overallPct}%
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: "var(--color-on-surface-muted)" }}>
              <strong style={{ color: "var(--color-forest)" }}>{completedCount}</strong> of 6 modules complete
            </span>
            <span
              className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border"
              style={{
                borderColor: "#c8f0e0",
                backgroundColor: "#eafef7",
                color: "var(--color-on-surface-muted)",
              }}
            >
              🏅 Goal: <strong style={{ color: "var(--color-primary)" }}>{data.badge}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* ── Module map ───────────────────────────────────────────────────── */}
      <div className="max-w-sm mx-auto px-4 pb-20">
        <p
          className="text-xs font-bold uppercase tracking-widest my-5 text-center"
          style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
        >
          Your learning path
        </p>

        {/* Constrain to exactly W px, centred; clip any overflow */}
        <div className="mx-auto overflow-hidden" style={{ width: W }}>
          <div className="relative" style={{ width: W, height: CH }}>

            {/* SVG layer — path lines + star decorations */}
            <svg
              viewBox={`0 0 ${W} ${SH}`}
              width={W}
              height={SH}
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 0 }}
            >
              {/* Segment lines */}
              {Array.from({ length: 5 }, (_, i) => {
                const done = i <= 1;
                return (
                  <path
                    key={i}
                    d={segPath(i)}
                    fill="none"
                    stroke={done ? "var(--color-primary)" : "#c5d9d0"}
                    strokeWidth={8}
                    strokeLinecap="round"
                    strokeDasharray={done ? undefined : "14 9"}
                    opacity={done ? 1 : 0.6}
                  />
                );
              })}

              {/* Star decorations along completed segments */}
              {[0, 1].map(seg =>
                [0.3, 0.5, 0.72].map((t, j) => {
                  const [bx, by] = bezierPt(seg, t);
                  return (
                    <text
                      key={`s${seg}-${j}`}
                      x={bx}
                      y={by}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={11}
                      style={{ userSelect: "none" }}
                    >
                      ⭐
                    </text>
                  );
                })
              )}
            </svg>

            {/* Module nodes */}
            {data.modules.map((mod, i) => (
              <ModuleNode
                key={i}
                index={i}
                trackId={trackId}
                cx={POS[i][0]}
                cy={POS[i][1]}
                emoji={mod.emoji}
                title={mod.title}
                status={DEMO[i].status}
                done={DEMO[i].done}
                total={10}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Module node ───────────────────────────────────────────────────────────────

function ModuleNode({
  index, trackId, cx, cy, emoji, title, status, done, total,
}: {
  index: number;
  trackId: string;
  cx: number;
  cy: number;
  emoji: string;
  title: string;
  status: "completed" | "in-progress" | "locked";
  done: number;
  total: number;
}) {
  const D = R * 2;

  const circleStyle: CSSProperties = {
    position: "absolute",
    left: cx - R,
    top:  cy - R,
    width: D,
    height: D,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    zIndex: 10,
    cursor: status === "locked" ? "default" : "pointer",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
    ...(status === "completed" && {
      backgroundColor: "var(--color-primary)",
      border: "3px solid var(--color-forest)",
      boxShadow: "4px 4px 0px var(--color-forest)",
    }),
    ...(status === "in-progress" && {
      backgroundColor: "#ffffff",
      border: "4px solid var(--color-primary)",
      boxShadow: "4px 4px 0px var(--color-primary-light)",
    }),
    ...(status === "locked" && {
      backgroundColor: "#f0f4f2",
      border: "3px solid #c0cfc8",
      opacity: 0.55,
    }),
  };

  // Label beside the node — right of left-side nodes, left of right-side nodes.
  // Last node (M6) uses a below label since there is no outgoing path to avoid.
  const isLast = index === 5;
  const isLeft = cx < 180;

  const labelStyle: CSSProperties = isLast
    ? {
        position: "absolute",
        left: cx - 80,
        top: cy + R + 10,
        width: 160,
        textAlign: "center",
        zIndex: 10,
        pointerEvents: status === "locked" ? "none" : "auto",
      }
    : isLeft
    ? {
        position: "absolute",
        left: cx + R + 14,
        top: cy - 44,
        width: W - (cx + R + 14) - 8,
        textAlign: "left",
        zIndex: 10,
        pointerEvents: status === "locked" ? "none" : "auto",
      }
    : {
        position: "absolute",
        left: 8,
        top: cy - 44,
        width: cx - R - 14 - 8,
        textAlign: "right",
        zIndex: 10,
        pointerEvents: status === "locked" ? "none" : "auto",
      };

  const dotsAlign   = isLast ? "center"     : isLeft ? "flex-start" : "flex-end";
  const actionAlign = isLast ? "center"     : isLeft ? "flex-start" : "flex-end";

  return (
    <>
      {/* Pulse ring — in-progress only */}
      {status === "in-progress" && (
        <div
          style={{
            position: "absolute",
            left: cx - R - 12,
            top:  cy - R - 12,
            width:  D + 24,
            height: D + 24,
            borderRadius: "50%",
            border: "3px solid var(--color-primary-light)",
            animation: "pulse-ring 1.7s ease-out infinite",
            zIndex: 8,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Floating sparkles — completed only */}
      {status === "completed" &&
        ([-18, 2, 20] as number[]).map((sx, j) => (
          <span
            key={j}
            style={{
              position: "absolute",
              left: cx + sx - 8,
              top:  cy - R - 10,
              fontSize: 13,
              animation: `sparkle-float 2.6s ease-out ${j * 0.7}s infinite`,
              "--sx": `${sx}px`,
              zIndex: 20,
              pointerEvents: "none",
              userSelect: "none",
            } as CSSProperties}
          >
            ✨
          </span>
        ))}

      {/* Circle node */}
      <div className="module-node" style={circleStyle}>
        {status === "locked" ? (
          <span style={{ fontSize: 26, opacity: 0.45 }}>🔒</span>
        ) : (
          emoji
        )}

        {/* ✅ checkmark badge on completed */}
        {status === "completed" && (
          <div
            style={{
              position: "absolute",
              bottom: -3,
              right:  -3,
              width: 26,
              height: 26,
              borderRadius: "50%",
              backgroundColor: "#fff",
              border: "2px solid var(--color-forest)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              animation: "badge-pop 0.5s ease-out both",
            }}
          >
            ✅
          </div>
        )}
      </div>

      {/* Label block */}
      <div style={labelStyle}>
        {/* Module number */}
        <p
          style={{
            fontSize: 9,
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: status === "locked" ? "#9ab0a5" : "var(--color-on-surface-muted)",
            fontFamily: "var(--font-body)",
            marginBottom: 3,
          }}
        >
          Module {index + 1}
        </p>

        {/* Module title */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: status === "locked" ? "#b0c4bc" : "var(--color-forest)",
            fontFamily: "var(--font-display)",
            lineHeight: 1.35,
            marginBottom: 7,
          }}
        >
          {title}
        </p>

        {/* Lesson progress dots */}
        <div style={{ display: "flex", gap: 3, justifyContent: dotsAlign, flexWrap: "wrap" }}>
          {Array.from({ length: total }, (_, j) => (
            <div
              key={j}
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor:
                  j < done
                    ? "var(--color-primary)"
                    : status === "locked"
                    ? "#d4e4dc"
                    : "#c5d5cf",
                border: j < done ? "none" : `1px solid ${status === "locked" ? "#c0cfc8" : "#b0c8be"}`,
              }}
            />
          ))}
        </div>

        {/* Status action / badge */}
        <div style={{ marginTop: 8, display: "flex", justifyContent: actionAlign }}>
          {status === "completed" && (
            <span
              style={{
                display: "inline-block",
                fontSize: 10,
                fontWeight: 800,
                color: "var(--color-primary)",
                backgroundColor: "#eafef7",
                border: "1.5px solid var(--color-primary-light)",
                borderRadius: 999,
                padding: "2px 10px",
                fontFamily: "var(--font-body)",
              }}
            >
              +100 XP ✓
            </span>
          )}

          {status === "in-progress" && (
            <Button href={`/learn/${trackId}/${index + 1}/5`} variant="primary" size="sm">
              Continue →
            </Button>
          )}

          {status === "locked" && (
            <span
              style={{
                display: "inline-block",
                fontSize: 10,
                fontWeight: 700,
                color: "#9ab0a5",
                fontFamily: "var(--font-body)",
              }}
            >
              🔒 Locked
            </span>
          )}
        </div>
      </div>
    </>
  );
}
