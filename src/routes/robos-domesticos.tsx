import { createFileRoute } from "@tanstack/react-router";
import { ArticleShell } from "@/components/ArticleShell";
import { Tape, Sticker, RansomText, ScribbleDoodle } from "@/components/zine";
import img from "@/assets/news-robots.jpg";

export const Route = createFileRoute("/robos-domesticos")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Robôs domésticos: limpam, ajudam e vigiam — Glitch Zine" },
      { name: "description", content: "Humanoides domésticos avançam após a CES 2026 e levantam novo debate sobre privacidade dentro de casa." },
      { property: "og:title", content: "Robôs domésticos: limpam, ajudam e vigiam" },
      { property: "og:description", content: "Câmeras e microfones em cada cômodo: o preço do humanoide doméstico." },
      { property: "og:image", content: img },
    ],
  }),
});

function Page() {
  return (
    <ArticleShell background="#fdfbf2">
      <div className="grid-paper border-2 border-foreground p-6 md:p-10 mb-10 relative" style={{ boxShadow: "8px 10px 0 rgba(0,0,0,0.85)" }}>
        <Tape variant="cyan" className="w-32 h-6 -top-3 left-10" style={{ transform: "rotate(-5deg)" }} />
        <Tape variant="pink" className="w-28 h-6 -top-3 right-14" style={{ transform: "rotate(7deg)" }} />

        <div className="flex flex-wrap gap-2 mb-5">
          <Sticker bg="oklch(0.55 0.25 305)" fg="#fff" rotate={-3}>🤖 ROBÔS</Sticker>
          <Sticker bg="oklch(0.92 0.2 95)" fg="#111" rotate={3}>CES 2026</Sticker>
          <Sticker bg="#111" fg="oklch(0.92 0.22 120)" rotate={-2}>PRIVACIDADE</Sticker>
        </div>

        <h1 className="text-3xl md:text-5xl mb-4">
          <RansomText text="Robôs domésticos: eles já limpam a casa (e vigiam você)" />
        </h1>

        <p className="font-typewriter text-base md:text-lg leading-relaxed mt-4">
          A <span className="scribble-underline font-bold">CES 2026</span> consolidou uma nova categoria: robôs assistentes
          que vão muito além do aspirador. Pequenos humanoides já abrem portas, pegam objetos, dobram roupas leves e
          conversam de forma fluida. Junto com a conveniência, vem a polêmica: cada robô doméstico carrega câmeras e
          microfones que mapeiam, em detalhes, a rotina da casa.
        </p>

        <div className="mt-6 font-typewriter text-xs uppercase tracking-widest opacity-70 border-t border-dashed border-foreground/50 pt-3">
          por · redação glitch · 04 maio 2026 · leitura: 5 min
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="polaroid relative" style={{ transform: "rotate(-2deg)", maxWidth: 560 }}>
          <Tape variant="lime" className="w-44 h-7 -top-3 left-1/2 z-10" style={{ transform: "translateX(-50%) rotate(-3deg)" }} />
          <img src={img} alt="Esboço de robô doméstico" width={768} height={576} className="w-full h-auto block" />
          <div className="mt-3 font-handwriting text-lg text-center text-foreground/80">
            esboço da redação · sala de aula, terceira fila
          </div>
        </div>
      </div>

      <section className="paper-texture border-2 border-foreground p-6 md:p-10 mb-10" style={{ boxShadow: "6px 8px 0 rgba(0,0,0,0.85)" }}>
        <h2 className="font-marker text-2xl md:text-3xl mb-3">O que muda em relação à última geração</h2>
        <p className="font-typewriter leading-relaxed mb-4">
          A nova geração combina visão por computador, modelos de linguagem locais e atuadores leves. O resultado é um
          robô que pode receber instruções em voz natural — "guarda a louça e depois liga a luz da sala" — e executar
          essas tarefas com taxa de erro aceitável em ambientes domésticos comuns.
        </p>

        <div className="postit p-5 border-2 border-foreground my-8" style={{ transform: "rotate(-1.5deg)" }}>
          <h3 className="font-bold-cut text-lg mb-2">📌 Post-it da redação</h3>
          <p className="font-typewriter text-base">
            "seu robô está te julgando pela bagunça do quarto?"
          </p>
          <p className="font-handwriting text-base mt-2">— pergunta deixada na geladeira</p>
        </div>

        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">A questão da privacidade</h2>
        <p className="font-typewriter leading-relaxed mb-4">
          Esses robôs precisam mapear continuamente o ambiente para se mover. Isso significa registrar imagens, áudio e
          a planta da casa em alta fidelidade. Quem armazena esses dados, por quanto tempo e com que finalidade ainda é
          tema em aberto. A maior parte dos fabricantes promete processamento local — mas atualizações de software podem
          mudar essa política sem grande aviso.
        </p>

        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">O que olhar antes de comprar</h2>
        <ul className="font-typewriter leading-relaxed mb-4 list-disc list-inside space-y-1">
          <li>Existe interruptor físico para câmeras e microfones?</li>
          <li>Os dados ficam no aparelho ou vão para a nuvem?</li>
          <li>É possível apagar todo o histórico de mapeamento?</li>
          <li>O fabricante tem política clara para terceiros (seguradoras, anunciantes)?</li>
        </ul>

        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">O cenário regulatório</h2>
        <p className="font-typewriter leading-relaxed">
          Na União Europeia, o AI Act passa a exigir avaliações de risco para robôs domésticos com câmeras. Nos EUA, a
          regulação segue fragmentada por estado. No Brasil, a LGPD já cobre o tratamento de imagens e áudio captados
          dentro de casa — mas a fiscalização específica para esses dispositivos ainda engatinha.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <ScribbleDoodle className="w-20" color="oklch(0.55 0.25 305)" />
          <span className="font-handwriting text-xl -rotate-2">cuidado com quem te ajuda</span>
        </div>
      </section>
    </ArticleShell>
  );
}
