"use client";

import Link from "next/link";
import { useState } from "react";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react";

type Variant = "primary" | "ghost";
type Size    = "sm" | "md" | "lg";
type Tone    = "light" | "dark";

type Common = {
  children:   ReactNode;
  variant?:   Variant;
  size?:      Size;
  tone?:      Tone;
  fullWidth?: boolean;
  className?: string;
  style?:     CSSProperties;
};

type AsLink   = Common & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href" | "style">;
type AsButton = Common & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "style">;

export type ButtonProps = AsLink | AsButton;

const INK         = "#062019";
const INK_HOVER   = "#0a3329";
const INK_ACTIVE  = "#04140f";

const SIZES: Record<Size, { padding: string; fontSize: string }> = {
  sm: { padding: "0.5rem 1rem",        fontSize: "0.8125rem" },
  md: { padding: "0.6875rem 1.375rem", fontSize: "0.875rem"  },
  lg: { padding: "0.875rem 1.75rem",   fontSize: "1rem"      },
};

const TRANSITION =
  "background-color 220ms cubic-bezier(0.22,1,0.36,1)," +
  "border-color 220ms cubic-bezier(0.22,1,0.36,1)," +
  "color 220ms cubic-bezier(0.22,1,0.36,1)," +
  "transform 180ms cubic-bezier(0.22,1,0.36,1)," +
  "box-shadow 220ms cubic-bezier(0.22,1,0.36,1)";

function buildStyle(
  variant: Variant,
  tone:    Tone,
  size:    Size,
  hover:   boolean,
  fullWidth: boolean | undefined,
  extra:   CSSProperties | undefined,
): CSSProperties {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: 9999,
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: 700,
    letterSpacing: "-0.005em",
    lineHeight: 1,
    whiteSpace: "nowrap",
    cursor: "pointer",
    border: "1px solid transparent",
    textDecoration: "none",
    userSelect: "none",
    transition: TRANSITION,
    transform: hover ? "translateY(-1px)" : "translateY(0)",
    width: fullWidth ? "100%" : undefined,
    ...SIZES[size],
  };

  // Primary — solid ink on light surface, solid white on dark surface
  if (variant === "primary") {
    if (tone === "dark") {
      const bg = hover ? "#f0fbf6" : "#ffffff";
      return {
        ...base,
        backgroundColor: bg,
        color: INK,
        borderColor: bg,
        boxShadow: hover
          ? "0 2px 4px rgba(0,0,0,0.18), 0 8px 16px rgba(0,0,0,0.26)"
          : "0 1px 2px rgba(0,0,0,0.18), 0 4px 10px rgba(0,0,0,0.22)",
        ...extra,
      };
    }
    const bg = hover ? INK_HOVER : INK;
    return {
      ...base,
      backgroundColor: bg,
      color: "#ffffff",
      borderColor: bg,
      boxShadow: hover
        ? "0 2px 4px rgba(0,0,0,0.10), 0 8px 14px rgba(6,32,25,0.24)"
        : "0 1px 2px rgba(0,0,0,0.10), 0 4px 8px rgba(6,32,25,0.18)",
      ...extra,
    };
  }

  // Ghost — outlined translucent
  if (tone === "dark") {
    return {
      ...base,
      backgroundColor: hover ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.07)",
      color: "#e1f5ee",
      borderColor: hover ? "rgba(232,245,238,0.4)" : "rgba(232,245,238,0.24)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      ...extra,
    };
  }
  return {
    ...base,
    backgroundColor: hover ? "#ffffff" : "rgba(255,255,255,0.86)",
    color: INK,
    borderColor: hover ? "rgba(8,80,65,0.36)" : "rgba(8,80,65,0.2)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    ...extra,
  };
}

export default function Button(props: ButtonProps) {
  const [hover, setHover] = useState(false);

  const variant   = props.variant   ?? "primary";
  const size      = props.size      ?? "md";
  const tone      = props.tone      ?? "light";
  const fullWidth = props.fullWidth;

  const style = buildStyle(variant, tone, size, hover, fullWidth, props.style);

  if ("href" in props && props.href !== undefined) {
    const { href, children, variant: _v, size: _s, tone: _t, fullWidth: _fw, className, style: _st, ...rest } = props;
    return (
      <Link
        href={href}
        className={className}
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { children, variant: _v, size: _s, tone: _t, fullWidth: _fw, className, style: _st, ...rest } = props;
  return (
    <button
      className={className}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      {...rest}
    >
      {children}
    </button>
  );
}
