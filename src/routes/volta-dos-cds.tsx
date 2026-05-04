import { createFileRoute } from "@tanstack/react-router";
import { ArticleShell } from "@/components/ArticleShell";
import { Tape, Sticker, RansomText, ScribbleDoodle } from "@/components/zine";
import img from "@/assets/news-cds.jpg";

export const Route = createFileRoute("/volta-dos-cds")({
  component: Page,
  head: () => ({
    meta: [
      { title: "A volta dos CDs e o cansaço das playlists de IA — Glitch Zine" },
      { name: "description", content: "Geração Z volta a comprar CDs e fitas cassete em busca de curadoria humana e objetos físicos." },
      { property: "og:title", content: "A volta dos CDs" },
      { property: "og:description", content: "Em maio de 2026, o cansaço com algoritmos reabre o mercado de mídia física." },
      { property: "og:image", content: img },
    ],
  }),
});

function Page() {
  return (
    <ArticleShell>
      <div className="paper-texture border-2 border-foreground p-6 md:p-10 mb-10 relative" style={{ boxShadow: "8px 10px 0 rgba(0,0,0,0.85)" }}>
        <Tape variant="pink" className="w-32 h-6 -top-3 left-10" style={{ transform: "rotate(-5deg)" }} />
        <Tape variant="lime" className="w-28 h-6 -top-3 right-14" style={{ transform: "rotate(7deg)" }} />

        <div className="flex flex-wrap gap-2 mb-5">
          <Sticker bg="#111" fg="oklch(0.92 0.22 120)" rotate={-3}>💿 RETRÔ</Sticker>
          <Sticker bg="oklch(0.68 0.28 0)" fg="#fff" rotate={3}>MÚSICA</Sticker>
          <Sticker bg="oklch(0.78 0.18 210)" fg="#111" rotate={-2}>CULTURA</Sticker>
        </div>

        <h1 className="text-3xl md:text-5xl mb-4">
          <RansomText text="A volta dos CDs: o contra-ataque ao algoritmo" />
        </h1>

        <p className="font-typewriter text-base md:text-lg leading-relaxed mt-4">
          Em uma reviravolta irônica, parte da geração Z começou a abandonar os streamings guiados por algoritmo e voltou a
          comprar <strong>CDs</strong> e <strong>fitas cassete</strong>. O motivo, segundo levantamento da indústria
          fonográfica em maio de 2026, é o cansaço das playlists geradas por IA e o desejo por{" "}
          <span className="scribble-underline font-bold">curadoria humana</span> e objetos físicos.
        </p>

        <div className="mt-6 font-typewriter text-xs uppercase tracking-widest opacity-70 border-t border-dashed border-foreground/50 pt-3">
          por · redação glitch · 04 maio 2026 · leitura: 4 min
        </div>
      </div>

      <div className="flex justify-center mb-10 relative">
        <div className="polaroid relative" style={{ transform: "rotate(-2deg)", maxWidth: 560 }}>
          <Tape variant="cyan" className="w-44 h-7 -top-3 left-1/2 z-10" style={{ transform: "translateX(-50%) rotate(-3deg)" }} />
          <img src={img} alt="Pilha de CDs" width={768} height={576} className="w-full h-auto block" />
          <div className="mt-3 font-handwriting text-lg text-center text-foreground/80">
            o jewel case voltou. e veio com saudade.
          </div>
        </div>
        <div className="absolute -top-2 right-6 hidden md:block">
          <div
            className="font-bold-cut text-sm border-4 border-[oklch(0.65_0.28_27)] text-[oklch(0.65_0.28_27)] px-3 py-2 bg-background rounded-full text-center leading-tight"
            style={{ transform: "rotate(12deg)" }}
          >
            100% CURADORIA<br />HUMANA ♥
          </div>
        </div>
      </div>

      <section className="paper-texture border-2 border-foreground p-6 md:p-10 mb-10" style={{ boxShadow: "6px 8px 0 rgba(0,0,0,0.85)" }}>
        <h2 className="font-marker text-2xl md:text-3xl mb-3">Por que comprar algo que se podia ouvir de graça</h2>
        <p className="font-typewriter leading-relaxed mb-4">
          A explicação mais comum nas redes é a fadiga das recomendações automáticas. Depois de anos consumindo álbuns
          cortados em pedaços por algoritmos, parte do público busca a experiência sequencial — ouvir um disco do começo
          ao fim, com encarte na mão e ordem definida pelo artista.
        </p>
        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">Os números do retorno</h2>
        <p className="font-typewriter leading-relaxed mb-4">
          Lojas independentes relatam alta de dois dígitos nas vendas de CDs e cassetes. Edições limitadas com pôsteres,
          adesivos e fanzines impressos têm se esgotado em horas. Para artistas independentes, é também uma fonte direta
          de receita, sem o intermediário do streaming.
        </p>
        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">O efeito colateral cultural</h2>
        <p className="font-typewriter leading-relaxed">
          Programas de rádio com curadoria, newsletters de música e clubes do disco voltam ao centro da conversa. O
          algoritmo continua existindo — mas, ao menos por ora, divide espaço com a recomendação assinada por gente de
          verdade.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <ScribbleDoodle className="w-20" color="oklch(0.68 0.28 0)" />
          <span className="font-handwriting text-xl -rotate-2">play, lado A</span>
        </div>
      </section>
    </ArticleShell>
  );
}
