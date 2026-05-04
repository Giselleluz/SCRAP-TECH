import { ReactNode } from "react";

const fonts = [
  "var(--font-cutout)",
  "var(--font-bold-cut)",
  "var(--font-shrikhand)",
  "var(--font-marker)",
  "var(--font-typewriter)",
  "var(--font-neon)",
];

const colors = [
  { bg: "oklch(0.68 0.28 0)", fg: "#fff" },
  { bg: "oklch(0.92 0.22 120)", fg: "#111" },
  { bg: "oklch(0.78 0.18 210)", fg: "#111" },
  { bg: "oklch(0.55 0.25 305)", fg: "#fff" },
  { bg: "oklch(0.92 0.2 95)", fg: "#111" },
  { bg: "#111", fg: "oklch(0.92 0.22 120)" },
  { bg: "#fdfbf2", fg: "#111" },
];

export function RansomText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={`ransom-note inline-block leading-tight ${className}`}>
      {words.map((w, i) => {
        const f = fonts[i % fonts.length];
        const c = colors[(i * 3 + 1) % colors.length];
        const rot = ((i * 37) % 11) - 5;
        return (
          <span
            key={i}
            style={{
              fontFamily: f,
              backgroundColor: c.bg,
              color: c.fg,
              transform: `rotate(${rot}deg)`,
              border: "1.5px solid #111",
              boxShadow: "2px 2px 0 rgba(0,0,0,0.6)",
            }}
          >
            {w}
          </span>
        );
      })}
    </span>
  );
}

export function Tape({
  className = "",
  variant = "yellow",
  style,
}: {
  className?: string;
  variant?: "yellow" | "pink" | "cyan" | "lime";
  style?: React.CSSProperties;
}) {
  const v =
    variant === "pink" ? "tape-pink" : variant === "cyan" ? "tape-cyan" : variant === "lime" ? "tape-lime" : "";
  return <div className={`tape ${v} ${className}`} style={style} />;
}

export function Sticker({
  children,
  bg = "var(--hot-pink)",
  fg = "#fff",
  rotate = -8,
  className = "",
}: {
  children: ReactNode;
  bg?: string;
  fg?: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      className={`sticker swing-hover ${className}`}
      style={{
        backgroundColor: bg,
        color: fg,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {children}
    </span>
  );
}

export function StarDoodle({ className = "", color = "#111" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color}>
      <path d="M12 1.5l2.6 7.4 7.9.3-6.3 4.7 2.3 7.6L12 16.9l-6.5 4.6 2.3-7.6L1.5 9.2l7.9-.3z" />
    </svg>
  );
}

export function ArrowDoodle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M5 30 Q 40 5 80 30 T 110 28" />
      <path d="M110 28 L 100 20 M110 28 L 102 38" />
    </svg>
  );
}

export function ScribbleDoodle({ className = "", color = "#ec0867" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 40" className={className} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 20 Q 15 5 25 20 T 45 20 T 65 20 T 78 20" />
    </svg>
  );
}

export function WobblyFilter() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <filter id="wobbly">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="3" />
        <feDisplacementMap in="SourceGraphic" scale="2" />
      </filter>
    </svg>
  );
}
