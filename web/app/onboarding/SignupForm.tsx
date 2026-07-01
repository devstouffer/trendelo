"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";

interface Props {
  track: string;
}

export default function SignupForm({ track }: Props) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/onboarding/confirm?track=${track}&email=${encodeURIComponent(email)}`);
  }

  const inputStyle = {
    borderColor: "var(--color-outline)",
    fontFamily: "var(--font-body)",
    color: "var(--color-on-surface)",
  };

  function focusInput(e: React.FocusEvent<HTMLInputElement>) {
    e.currentTarget.style.borderColor = "var(--color-forest)";
  }
  function blurInput(e: React.FocusEvent<HTMLInputElement>) {
    e.currentTarget.style.borderColor = "var(--color-outline)";
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Google */}
      <Button type="button" variant="ghost" fullWidth>
        <GoogleIcon />
        Continue with Google
      </Button>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px" style={{ backgroundColor: "#d1d9d4" }} />
        <span className="text-xs font-semibold" style={{ color: "var(--color-on-surface-muted)" }}>
          or
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: "#d1d9d4" }} />
      </div>

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-sm font-bold"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-on-surface)" }}
        >
          Full name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none"
          style={inputStyle}
          onFocus={focusInput}
          onBlur={blurInput}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-sm font-bold"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-on-surface)" }}
        >
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full px-4 py-3 rounded-xl border-2 text-sm outline-none"
          style={inputStyle}
          onFocus={focusInput}
          onBlur={blurInput}
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-sm font-bold"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-on-surface)" }}
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
            className="w-full px-4 py-3 pr-16 rounded-xl border-2 text-sm outline-none"
            style={inputStyle}
            onFocus={focusInput}
            onBlur={blurInput}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold"
            style={{ color: "var(--color-on-surface-muted)", fontFamily: "var(--font-body)" }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {/* Submit */}
      <Button type="submit" variant="primary" fullWidth>
        Create account →
      </Button>
    </form>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M47.5 24.55c0-1.6-.13-3.13-.38-4.6H24v8.71h13.2c-.57 2.99-2.3 5.53-4.9 7.22v6h7.93c4.64-4.27 7.27-10.57 7.27-17.33z" />
      <path fill="#34A853" d="M24 48c6.65 0 12.23-2.2 16.3-5.97l-7.93-6c-2.2 1.47-5.01 2.34-8.37 2.34-6.44 0-11.9-4.35-13.85-10.2H1.96v6.19C6.01 42.84 14.43 48 24 48z" />
      <path fill="#FBBC05" d="M10.15 28.17A14.44 14.44 0 0 1 9.4 24c0-1.44.25-2.84.75-4.17V13.64H1.96A23.98 23.98 0 0 0 0 24c0 3.87.93 7.53 2.57 10.77l7.58-6.6z" />
      <path fill="#EA4335" d="M24 9.63c3.63 0 6.88 1.25 9.45 3.69l7.1-7.1C36.22 2.39 30.64 0 24 0 14.43 0 6.01 5.16 1.96 12.64l8.19 6.36C11.99 13.47 17.56 9.63 24 9.63z" />
    </svg>
  );
}
