"use client";

import { useEffect, useRef } from "react";

const CHARS = [
  "0","1","2","3","4","5","6","7","8","9",
  "∑","π","λ","∂","∞","∇","≈","×","∫","∈",
  "∀","∃","%","#","→","←","⟨","⟩","!","?",
];

const ARMS = 3;
const PER_ARM = 55;
const TURNS = 4.5;
const ROTATION_SPEED = 0.00025;
const REPEL_RADIUS = 140;
const REPEL_STRENGTH = 7;
const SPRING = 0.032;
const DAMPING = 0.80;
const CHAR_SWAP_INTERVAL = 2400;

interface Particle {
  arm: number;
  t: number;
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  char: string;
  size: number;
  baseOpacity: number;
  nextSwap: number;
}

interface Props {
  charColor?: string;
}

export default function SpiralBackground({ charColor = "#085041" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rotationRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const particles: Particle[] = [];
    const now = performance.now();

    for (let arm = 0; arm < ARMS; arm++) {
      for (let i = 0; i < PER_ARM; i++) {
        const t = (i + 1) / PER_ARM;
        const size = 9 + t * 8;
        const baseOpacity = 0.055 + t * 0.085;

        const armOffset = (arm / ARMS) * Math.PI * 2;
        const theta = t * Math.PI * 2 * TURNS + armOffset;
        const r = t * Math.min(canvas.width, canvas.height) * 0.44;
        const hx = canvas.width / 2 + r * Math.cos(theta);
        const hy = canvas.height / 2 + r * Math.sin(theta);

        particles.push({
          arm, t,
          homeX: hx, homeY: hy,
          x: hx, y: hy,
          vx: 0, vy: 0,
          char: CHARS[Math.floor(Math.random() * CHARS.length)],
          size, baseOpacity,
          nextSwap: now + Math.random() * CHAR_SWAP_INTERVAL,
        });
      }
    }

    if (prefersReduced) {
      // Static render only
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.save();
        ctx.globalAlpha = p.baseOpacity;
        ctx.fillStyle = charColor;
        ctx.font = `${p.size}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
      }
      return () => {
        window.removeEventListener("resize", resize);
        canvas.removeEventListener("mousemove", onMove);
        canvas.removeEventListener("mouseleave", onLeave);
      };
    }

    const animate = (time: number) => {
      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;
      const maxR = Math.min(W, H) * 0.44;

      rotationRef.current += ROTATION_SPEED;
      const rot = rotationRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        if (time > p.nextSwap) {
          p.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          p.nextSwap = time + CHAR_SWAP_INTERVAL * (0.5 + Math.random());
        }

        const armOffset = (p.arm / ARMS) * Math.PI * 2;
        const theta = p.t * Math.PI * 2 * TURNS + armOffset + rot;
        const r = p.t * maxR;
        p.homeX = cx + r * Math.cos(theta);
        p.homeY = cy + r * Math.sin(theta);

        let ax = (p.homeX - p.x) * SPRING;
        let ay = (p.homeY - p.y) * SPRING;

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const dist = Math.sqrt(mdx * mdx + mdy * mdy);
        let nearMouse = 0;
        if (dist < REPEL_RADIUS && dist > 0.5) {
          const t = 1 - dist / REPEL_RADIUS;
          const force = t * t * REPEL_STRENGTH;
          ax += (mdx / dist) * force;
          ay += (mdy / dist) * force;
          nearMouse = t;
        }

        p.vx = (p.vx + ax) * DAMPING;
        p.vy = (p.vy + ay) * DAMPING;
        p.x += p.vx;
        p.y += p.vy;

        ctx.save();
        ctx.globalAlpha = Math.min(p.baseOpacity + nearMouse * 0.18, 0.45);
        ctx.fillStyle = charColor;
        ctx.font = `${p.size + nearMouse * 4}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [charColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
