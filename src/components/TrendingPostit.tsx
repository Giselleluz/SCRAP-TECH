import { Sticker, StarDoodle, ScribbleDoodle } from "./zine";

const trending = [
  "🚀 SpaceX explode (de novo)",
  "👾 Game indie viraliza no TikTok",
  "🤖 IA escreve novela e ganha Emmy",
  "💾 Disquete volta como NFT???",
  "🛸 OVNI ou drone? você decide",
];

export function TrendingPostit() {
  return (
    <aside className="max-w-7xl mx-auto px-4 md:px-10 mb-20">
      <div className="flex justify-end">
        <div
          className="postit p-6 w-full md:w-96 relative swing-hover"
          style={{ transform: "rotate(3deg)" }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 tape tape-pink" style={{ transform: "translateX(-50%) rotate(-4deg)" }} />

          <div className="flex items-center gap-2 mb-3">
            <StarDoodle className="w-6 h-6 text-[oklch(0.68_0.28_0)]" />
            <h3 className="font-marker text-3xl">Trending</h3>
            <Sticker bg="oklch(0.68 0.28 0)" fg="#fff" rotate={-10} className="ml-auto">
              🔥
            </Sticker>
          </div>
          <ScribbleDoodle className="w-32 -mt-2 mb-3" />

          <ol className="space-y-3 font-handwriting text-xl">
            {trending.map((t, i) => (
              <li key={i} className="flex gap-2 items-start swing-hover cursor-pointer">
                <span
                  className="font-bold-cut text-2xl"
                  style={{
                    fontFamily: "var(--font-bold-cut)",
                    color: ["oklch(0.68 0.28 0)", "oklch(0.55 0.25 305)", "oklch(0.78 0.18 210)", "oklch(0.6 0.25 50)", "#111"][i],
                  }}
                >
                  0{i + 1}
                </span>
                <span className="leading-tight pt-1">{t}</span>
              </li>
            ))}
          </ol>

          <div className="mt-5 pt-3 border-t border-dashed border-foreground/40 font-typewriter text-xs uppercase tracking-widest opacity-60">
            atualizado agorinha · ✦
          </div>
        </div>
      </div>
    </aside>
  );
}
