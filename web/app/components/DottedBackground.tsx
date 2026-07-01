"use client";

import { useEffect, useRef } from "react";

/**
 * Dot-grid background. Each dot has its own phase + frequency and
 * sine-fades between 0 and a per-dot peak opacity, so the field looks
 * like it's flickering on/off rather than pulsing uniformly.
 */

interface Props {
  /** Hex or rgb color of the dots. */
  color?: string;
  /** Grid spacing in CSS pixels (smaller = denser). Defaults to 22. */
  spacing?: number;
  /** Dot radius in CSS pixels. Defaults to 1.4. */
  radius?: number;
  /** Global opacity ceiling applied on top of the per-dot sine. */
  intensity?: number;
}

interface Dot {
  x: number;
  y: number;
  phase:     number; // 0 .. 2π
  frequency: number; // rad/ms — speed of fade cycle
  peak:      number; // per-dot maximum opacity multiplier
  jitterR:   number; // size jitter ± px
}

export default function DottedBackground({
  color     = "#085041",
  spacing   = 22,
  radius    = 1.4,
  intensity = 0.55,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let dots: Dot[] = [];
    let widthCSS  = 0;
    let heightCSS = 0;

    const buildGrid = () => {
      widthCSS  = canvas.offsetWidth;
      heightCSS = canvas.offsetHeight;
      canvas.width  = widthCSS  * dpr;
      canvas.height = heightCSS * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(widthCSS  / spacing) + 1;
      const rows = Math.ceil(heightCSS / spacing) + 1;

      // Offset so the grid is centred and overlaps the edges slightly.
      const offsetX = (widthCSS  - (cols - 1) * spacing) / 2;
      const offsetY = (heightCSS - (rows - 1) * spacing) / 2;

      const next: Dot[] = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Slight pixel jitter so the grid doesn't look mechanically perfect.
          const jx = (Math.random() - 0.5) * spacing * 0.18;
          const jy = (Math.random() - 0.5) * spacing * 0.18;

          next.push({
            x: offsetX + col * spacing + jx,
            y: offsetY + row * spacing + jy,
            phase:     Math.random() * Math.PI * 2,
            // 0.0006 .. 0.0022 rad/ms → ~2.8s .. ~10s full cycle
            frequency: 0.0006 + Math.random() * 0.0016,
            // 0.35 .. 1.0 — most dots quite dim, some pop brighter
            peak:      0.35 + Math.random() * 0.65,
            jitterR:   Math.random() * 0.6,
          });
        }
      }
      dots = next;
    };

    buildGrid();
    const onResize = () => buildGrid();
    window.addEventListener("resize", onResize);

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      // Static snapshot — each dot at half its peak so the field is visible
      // but motionless.
      ctx.clearRect(0, 0, widthCSS, heightCSS);
      ctx.fillStyle = color;
      for (const d of dots) {
        ctx.globalAlpha = d.peak * intensity * 0.5;
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius + d.jitterR, 0, Math.PI * 2);
        ctx.fill();
      }
      return () => window.removeEventListener("resize", onResize);
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, widthCSS, heightCSS);
      ctx.fillStyle = color;

      for (const d of dots) {
        // sin returns -1..1; map to 0..1 then ease toward off so most of the
        // cycle is dim and only the peak bursts are visible.
        const s     = Math.sin(time * d.frequency + d.phase) * 0.5 + 0.5;
        const eased = s * s; // quadratic ease → flicker, not breathe
        const alpha = eased * d.peak * intensity;

        if (alpha < 0.015) continue; // skip near-invisible dots

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius + d.jitterR, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [color, spacing, radius, intensity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
