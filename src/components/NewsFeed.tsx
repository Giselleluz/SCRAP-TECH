import { Link } from "@tanstack/react-router";
import { Tape, Sticker, RansomText, StarDoodle } from "./zine";
import news2 from "@/assets/news2.jpg";
import news3 from "@/assets/news3.jpg";
import news4 from "@/assets/news4.jpg";
import haven1 from "@/assets/news-haven1.jpg";
import rings from "@/assets/news-rings.jpg";
import tiktok from "@/assets/news-tiktok.jpg";
import aiwar from "@/assets/news-aiwar.jpg";
import deepfake from "@/assets/news-deepfake.jpg";
import cds from "@/assets/news-cds.jpg";
import robots from "@/assets/news-robots.jpg";

type Item = {
  to: string;
  img: string;
  title: string;
  cat: string;
  catBg: string;
  catFg: string;
  excerpt: string;
  rot: number;
  tape: "pink" | "lime" | "cyan" | "yellow";
  badge?: string;
};

const items: Item[] = [
  {
    to: "/duas-luas-haven1",
    img: haven1,
    title: "Duas luas e a Haven-1",
    cat: "ESPAÇO",
    catBg: "oklch(0.55 0.25 305)",
    catFg: "#fff",
    excerpt: "primeira estação espacial comercial privada sobe sob o mês da Lua Azul.",
    rot: -3,
    tape: "cyan",
    badge: "🚀 NOVO",
  },
  {
    to: "/aneis-inteligentes",
    img: rings,
    title: "Anéis tomam o pulso",
    cat: "GADGETS",
    catBg: "oklch(0.78 0.18 210)",
    catFg: "#111",
    excerpt: "Oura, Samsung e Ultrahuman lideram a era dos wearables discretos.",
    rot: 2.5,
    tape: "pink",
  },
  {
    to: "/tiktok-viagens",
    img: tiktok,
    title: "TikTok agora é agência",
    cat: "SOCIAL",
    catBg: "#111",
    catFg: "oklch(0.92 0.22 120)",
    excerpt: "rede social libera reserva de hotéis sem sair do feed de vídeos.",
    rot: -2,
    tape: "lime",
  },
  {
    to: "/gpt-vs-gemini",
    img: aiwar,
    title: "GPT-5.2 vs Gemini 3",
    cat: "IA",
    catBg: "oklch(0.55 0.25 305)",
    catFg: "#fff",
    excerpt: "raciocínio de longo prazo contra visão de tela: a guerra dos titãs.",
    rot: 2,
    tape: "pink",
    badge: "🥊 VERSUS",
  },
  {
    to: "/alerta-deepfake-brasil",
    img: deepfake,
    title: "Deepfakes em alta",
    cat: "ESPIONAGEM",
    catBg: "oklch(0.92 0.2 95)",
    catFg: "#111",
    excerpt: "fraudes com IA crescem 830%; Brasil lidera ranking na América Latina.",
    rot: -2.5,
    tape: "cyan",
    badge: "⚠ ALERTA",
  },
  {
    to: "/volta-dos-cds",
    img: cds,
    title: "A volta dos CDs",
    cat: "CULTURA",
    catBg: "oklch(0.68 0.28 0)",
    catFg: "#fff",
    excerpt: "geração Z troca playlists de IA por curadoria humana e mídia física.",
    rot: 3,
    tape: "lime",
  },
  {
    to: "/robos-domesticos",
    img: robots,
    title: "Robôs em casa",
    cat: "IA & ROBÔS",
    catBg: "oklch(0.78 0.18 210)",
    catFg: "#111",
    excerpt: "humanoides ajudam nas tarefas — e levantam debate sobre privacidade.",
    rot: -1.8,
    tape: "pink",
  },
  {
    to: "/reportagem-losharik",
    img: news4,
    title: "Losharik & Belgorod",
    cat: "ESPIONAGEM",
    catBg: "#111",
    catFg: "oklch(0.92 0.22 120)",
    excerpt: "OTAN flagra operação russa de águas profundas no Atlântico Norte.",
    rot: 2,
    tape: "cyan",
  },
];

// imports kept for backwards reference (avoid unused-vars on legacy assets)
void news2; void news3;

export function NewsFeed() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 mt-10 mb-20">
      <div className="flex items-end gap-4 mb-10">
        <h2 className="text-3xl md:text-5xl">
          <RansomText text="EDIÇÃO DE MAIO" />
        </h2>
        <StarDoodle className="w-8 h-8 text-[oklch(0.68_0.28_0)] mb-2" />
        <span className="font-handwriting text-2xl -rotate-2 text-[oklch(0.55_0.25_305)] mb-1">
          fresquinho!
        </span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
        {items.map((it, i) => (
          <article
            key={it.to}
            className="relative paper-texture border-2 border-foreground p-4 swing-hover"
            style={{
              transform: `rotate(${it.rot}deg)`,
              boxShadow: "5px 6px 0 rgba(0,0,0,0.85), 0 18px 28px rgba(0,0,0,0.12)",
            }}
          >
            <Tape variant={it.tape} className="w-24 h-5 -top-2 left-6" style={{ transform: "rotate(-7deg)" }} />
            <Tape variant={i % 2 === 0 ? "cyan" : "lime"} className="w-20 h-5 -top-2 right-4" style={{ transform: "rotate(9deg)" }} />

            <Link to={it.to} className="block">
              <div className="overflow-hidden border border-foreground/40">
                <img
                  src={it.img}
                  alt={it.title}
                  width={768}
                  height={576}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                  style={{ filter: "contrast(1.1) saturate(1.3)" }}
                />
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span
                  className="px-2 py-1 text-xs border-2 border-foreground font-bold-cut uppercase"
                  style={{ backgroundColor: it.catBg, color: it.catFg, fontFamily: "var(--font-bold-cut)" }}
                >
                  {it.cat}
                </span>
                <span className="font-typewriter text-xs opacity-60">há 2h</span>
              </div>

              <h3 className="mt-3 text-2xl leading-tight" style={{ fontFamily: "var(--font-shrikhand)" }}>
                {it.title}
              </h3>
              <p className="mt-2 font-typewriter text-sm leading-relaxed text-foreground/80">
                {it.excerpt}
              </p>
            </Link>

            <div className="mt-4 flex items-center justify-between">
              <Link
                to={it.to}
                className="font-marker text-lg underline decoration-wavy decoration-[oklch(0.68_0.28_0)] underline-offset-4"
              >
                ler reportagem →
              </Link>
              <Sticker bg="oklch(0.92 0.22 120)" fg="#111" rotate={(i - 1) * 6}>
                {it.badge ?? "☆ HOT"}
              </Sticker>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
