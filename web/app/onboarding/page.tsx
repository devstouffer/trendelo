import Link from "next/link";
import SpiralBackground from "../components/SpiralBackground";
import SignupForm from "./SignupForm";

const TRACK_META: Record<string, { label: string; emoji: string }> = {
  marketing:    { label: "AI in Marketing",          emoji: "📈" },
  education:    { label: "AI in Education",           emoji: "🎓" },
  business:     { label: "AI in Business",            emoji: "💼" },
  journalism:   { label: "AI in Journalism & Media",  emoji: "📰" },
  architecture: { label: "AI in Design",              emoji: "🏛️" },
};

export default async function OnboardingPage({
  searchParams,
}: {
  searchParams: Promise<{ track?: string }>;
}) {
  const { track = "marketing" } = await searchParams;
  const meta = TRACK_META[track] ?? TRACK_META.marketing;

  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--color-mint)" }}
    >
      <SpiralBackground charColor="#085041" />

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-10 py-5">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
        >
          Trendelo
        </Link>
        <Link
          href="/sign-in"
          className="text-sm font-semibold px-4 py-2 rounded-full border-2 transition-opacity hover:opacity-70"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-primary)",
            borderColor: "var(--color-primary)",
          }}
        >
          Sign in
        </Link>
      </header>

      {/* Main */}
      <main className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 py-12">
        {/* Track chip */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 mb-8 text-sm font-bold"
          style={{
            backgroundColor: "#fff",
            borderColor: "var(--color-primary-light)",
            color: "var(--color-primary)",
            fontFamily: "var(--font-body)",
            boxShadow: "2px 2px 0px var(--color-primary)",
          }}
        >
          <span>{meta.emoji}</span>
          <span>{meta.label}</span>
          <span style={{ color: "var(--color-on-surface-muted)", fontWeight: 400 }}>
            — selected
          </span>
        </div>

        {/* Card */}
        <div
          className="w-full max-w-md p-10 rounded-2xl border-2 bg-white"
          style={{
            borderColor: "var(--color-forest)",
            boxShadow: "4px 4px 0px var(--color-forest)",
          }}
        >
          <h1
            className="text-3xl font-bold mb-2 text-center"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
          >
            Create your account
          </h1>
          <p
            className="text-sm text-center mb-8"
            style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
          >
            Start learning right away. No credit card needed.
          </p>

          <SignupForm track={track} />

          <p
            className="text-xs text-center mt-6"
            style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
          >
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-bold underline"
              style={{ color: "var(--color-primary)" }}
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Step indicator */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <div
            className="w-48 h-3 rounded-full border-2 overflow-hidden"
            style={{ borderColor: "var(--color-forest)", backgroundColor: "#fff" }}
          >
            <div
              className="h-full rounded-full"
              style={{ width: "66%", backgroundColor: "var(--color-primary)" }}
            />
          </div>
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
          >
            Step 2 of 3
          </span>
        </div>
      </main>

      <footer className="relative z-10 text-center py-5">
        <p className="text-xs" style={{ color: "var(--color-on-surface-muted)" }}>
          © 2024 Trendelo AI Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
