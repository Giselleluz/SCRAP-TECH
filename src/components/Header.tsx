import { RansomText, Tape, Sticker, StarDoodle, ScribbleDoodle } from "./zine";

const menu = [
  { label: "GADGETS", color: "var(--cyan-zine)", rot: -3 },
  { label: "IA & ROBÔS", color: "var(--lime-zine)", rot: 2 },
  { label: "GAMES", color: "var(--hot-pink)", rot: -2, fg: "#fff" },
  { label: "ESPIONAGEM", color: "var(--purple-zine)", rot: 4, fg: "#fff" },
  { label: "CIÊNCIA POP", color: "var(--yellow-tape)", rot: -4 },
];

export function Header() {
  return (
    <header className="relative px-4 md:px-10 pt-6 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="relative">
            <div className="text-5xl md:text-7xl">
              <RansomText text="GLITCH ZINE" />
            </div>
            <div className="mt-2 ml-2 flex items-center gap-2">
              <span className="font-handwriting text-2xl text-[oklch(0.55_0.25_305)] -rotate-2">
                tech news pra geração crtl+z ✨
              </span>
              <ScribbleDoodle className="w-16" color="oklch(0.68 0.28 0)" />
            </div>
            <div className="absolute -top-3 -right-8 hidden md:block">
              <Sticker bg="var(--hot-pink)" fg="#fff" rotate={15}>
                ED. #047
              </Sticker>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <div className="font-typewriter text-xs uppercase tracking-widest opacity-70">
              segunda · 04 maio 2026 · ☆☆☆
            </div>
            <div className="flex items-center gap-2">
              <StarDoodle className="w-6 h-6" color="oklch(0.68 0.28 0)" />
              <span className="font-marker text-lg">o melhor da treta digital</span>
              <StarDoodle className="w-6 h-6" color="oklch(0.55 0.25 305)" />
            </div>
          </div>
        </div>

        {/* Menu - etiquetas coladas */}
        <nav className="mt-10 relative">
          <div className="border-t-2 border-dashed border-foreground/70 pt-6 flex flex-wrap gap-4 md:gap-7 items-start">
            {menu.map((m, i) => (
              <div key={m.label} className="relative swing-hover" style={{ transform: `rotate(${m.rot}deg)` }}>
                <Tape
                  variant={i % 2 === 0 ? "pink" : "cyan"}
                  className="w-16 h-4 -top-2 left-3 z-10"
                  style={{ position: "absolute", transform: "rotate(-8deg)" }}
                />
                <a
                  href="#"
                  className="block font-bold-cut uppercase text-sm md:text-base px-4 py-2 border-2 border-foreground"
                  style={{
                    backgroundColor: m.color,
                    color: m.fg ?? "#111",
                    fontFamily: "var(--font-bold-cut)",
                    boxShadow: "3px 3px 0 #111",
                  }}
                >
                  {m.label}
                </a>
              </div>
            ))}
            <div className="ml-auto self-center">
              <Sticker bg="#111" fg="oklch(0.92 0.22 120)" rotate={-6}>
                ⚡ AO VIVO
              </Sticker>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
