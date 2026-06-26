import Link from "next/link";

const tracks = [
  {
    id: "marketing",
    title: "AI in Marketing",
    description: "For marketing students and early-career professionals.",
    emoji: "📈",
    popular: false,
  },
  {
    id: "education",
    title: "AI in Education",
    description: "For teachers and education students.",
    emoji: "🎓",
    popular: true,
  },
  {
    id: "business",
    title: "AI in Business",
    description: "For MBA students, managers, and consultants.",
    emoji: "💼",
    popular: false,
  },
];

export default function TrackSelectionPage() {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ backgroundColor: "var(--color-mint)" }}>
      {/* Subtle grid background pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-forest) 1px, transparent 1px), linear-gradient(90deg, var(--color-forest) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-10 py-5">
        <span
          className="text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
        >
          Trendelo
        </span>
        <button
          aria-label="Sign in"
          className="text-sm font-semibold px-4 py-2 rounded-full border-2 transition-all"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-primary)",
            borderColor: "var(--color-primary)",
            backgroundColor: "transparent",
          }}
        >
          Sign in
        </button>
      </header>

      {/* Main */}
      <main className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 py-12">
        <h1
          className="text-4xl md:text-5xl font-bold text-center mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
        >
          AI is changing your field.
          <br />
          We&apos;ll show you how.
        </h1>
        <p
          className="text-lg mb-12 text-center"
          style={{ color: "var(--color-on-surface-muted)" }}
        >
          Choose your track to get started.
        </p>

        {/* Track cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl border-2"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-forest)",
                boxShadow: "4px 4px 0px var(--color-forest)",
              }}
            >
              {track.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border-2"
                  style={{
                    backgroundColor: "var(--color-amber)",
                    borderColor: "var(--color-forest)",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Popular
                </span>
              )}

              <div className="text-5xl mb-4">{track.emoji}</div>

              <h2
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
              >
                {track.title}
              </h2>
              <p
                className="text-sm mb-8 leading-relaxed"
                style={{ color: "var(--color-on-surface-muted)" }}
              >
                {track.description}
              </p>

              <Link
                href={`/onboarding?track=${track.id}`}
                className="w-full py-3 rounded-full border-2 text-sm font-bold text-center block"
                style={{
                  fontFamily: "var(--font-display)",
                  backgroundColor: "var(--color-primary)",
                  borderColor: "var(--color-forest)",
                  color: "#fff",
                  boxShadow: "3px 3px 0px var(--color-forest)",
                }}
              >
                Select Track
              </Link>
            </div>
          ))}
        </div>

        {/* Step indicator */}
        <div className="mt-14 flex flex-col items-center gap-2">
          <div
            className="w-48 h-3 rounded-full border-2 overflow-hidden"
            style={{ borderColor: "var(--color-forest)", backgroundColor: "#fff" }}
          >
            <div
              className="h-full rounded-full"
              style={{ width: "33%", backgroundColor: "var(--color-primary)" }}
            />
          </div>
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
          >
            Step 1 of 3
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-5">
        <p className="text-xs" style={{ color: "var(--color-on-surface-muted)" }}>
          © 2024 Trendelo AI Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
