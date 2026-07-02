import Link from "next/link";
import DottedBackground from "../../components/DottedBackground";
import Button from "../../components/Button";

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ track?: string; email?: string }>;
}) {
  const { track = "marketing", email = "" } = await searchParams;
  const decodedEmail = email ? decodeURIComponent(email) : "";

  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{ backgroundColor: "#63b295" }}
    >
      <DottedBackground color="#eafef7" intensity={0.5} />

      {/* Nav */}
      <header className="relative z-10 flex items-center px-10 py-5">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
        >
          Trendelo
        </Link>
      </header>

      {/* Main */}
      <main className="relative z-10 flex flex-col flex-1 items-center justify-center px-6 py-12">
        {/* Card */}
        <div
          className="w-full max-w-md p-10 rounded-2xl border-2 bg-white text-center"
          style={{
            borderColor: "var(--color-forest)",
            boxShadow: "4px 4px 0px var(--color-forest)",
          }}
        >
          {/* Icon */}
          <div
            className="w-20 h-20 rounded-full border-2 flex items-center justify-center text-4xl mx-auto mb-6"
            style={{
              backgroundColor: "var(--color-mint)",
              borderColor: "var(--color-primary-light)",
              boxShadow: "3px 3px 0px var(--color-primary)",
            }}
          >
            📬
          </div>

          <h1
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-forest)" }}
          >
            Check your inbox
          </h1>

          <p
            className="text-sm leading-relaxed mb-1"
            style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
          >
            We sent a confirmation link to
          </p>

          {decodedEmail && (
            <p
              className="text-sm font-bold mb-5"
              style={{ color: "var(--color-forest)", fontFamily: "var(--font-body)" }}
            >
              {decodedEmail}
            </p>
          )}

          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
          >
            Click the link in the email to activate your account and start learning.
          </p>

          <div className="mb-4">
            <Button variant="ghost" fullWidth>
              Resend email
            </Button>
          </div>

          <p
            className="text-xs"
            style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
          >
            Wrong email?{" "}
            <Link
              href={`/onboarding?track=${track}`}
              className="font-bold underline"
              style={{ color: "var(--color-primary)" }}
            >
              Go back
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
              style={{ width: "100%", backgroundColor: "var(--color-primary)" }}
            />
          </div>
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
          >
            Step 3 of 3
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
