import { createFileRoute } from "@tanstack/react-router";
import { ArticleShell } from "@/components/ArticleShell";
import { Tape, Sticker, RansomText, ScribbleDoodle } from "@/components/zine";
import img from "@/assets/news-rings.jpg";

export const Route = createFileRoute("/aneis-inteligentes")({
  component: Page,
  head: () => ({
    meta: [
      { title: "A invasão dos anéis inteligentes — Glitch Zine" },
      { name: "description", content: "Oura Ring 4, Samsung e Ultrahuman lideram a era dos smart rings: monitoramento de estresse, sono e até alertas de detox digital." },
      { property: "og:title", content: "A invasão dos anéis inteligentes" },
      { property: "og:description", content: "Por que o anel discreto pode substituir o smartwatch em 2026." },
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
          <Sticker bg="oklch(0.68 0.28 0)" fg="#fff" rotate={-3}>💍 ACESSÓRIOS</Sticker>
          <Sticker bg="oklch(0.92 0.22 120)" fg="#111" rotate={3}>WEARABLE</Sticker>
          <Sticker bg="oklch(0.78 0.18 210)" fg="#111" rotate={-2}>SAÚDE</Sticker>
        </div>

        <h1 className="text-3xl md:text-5xl mb-4">
          <RansomText text="A invasão dos anéis inteligentes" />
        </h1>

        <p className="font-typewriter text-base md:text-lg leading-relaxed mt-4">
          O smartwatch volumoso vai dando lugar a um acessório bem mais discreto. O <strong>Oura Ring 4</strong>, somado às
          novas linhas da <strong>Samsung Galaxy Ring</strong> e do <strong>Ultrahuman Ring Air</strong>, consolidou em
          2026 a era dos <span className="scribble-underline font-bold">anéis inteligentes</span>.
        </p>

        <div className="mt-6 font-typewriter text-xs uppercase tracking-widest opacity-70 border-t border-dashed border-foreground/50 pt-3">
          por · redação glitch · 04 maio 2026 · leitura: 4 min
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="polaroid relative" style={{ transform: "rotate(2deg)", maxWidth: 560 }}>
          <Tape variant="cyan" className="w-44 h-7 -top-3 left-1/2 z-10" style={{ transform: "translateX(-50%) rotate(3deg)" }} />
          <img src={img} alt="Mãos com anéis inteligentes" width={768} height={576} className="w-full h-auto block" />
          <div className="mt-3 font-handwriting text-lg text-center text-foreground/80">
            anatomia rápida do anel que sabe demais
          </div>
        </div>
      </div>

      <section className="paper-texture border-2 border-foreground p-6 md:p-10 mb-10" style={{ boxShadow: "6px 8px 0 rgba(0,0,0,0.85)" }}>
        <h2 className="font-marker text-2xl md:text-3xl mb-3">O que esses anéis monitoram</h2>
        <p className="font-typewriter leading-relaxed mb-4">
          Sensores de PPG, temperatura periférica e acelerômetros embutidos em poucos gramas de titânio permitem
          acompanhar batimentos, variabilidade cardíaca, qualidade do sono, ciclo menstrual e nível de estresse em tempo
          real. Alguns modelos já cruzam esses dados para sugerir pausas e até <em>detox digital</em>.
        </p>

        <div className="grid md:grid-cols-2 gap-5 my-8">
          <div className="postit p-5 border-2 border-foreground" style={{ transform: "rotate(-1.5deg)" }}>
            <h3 className="font-bold-cut text-lg mb-2">→ Lê seu pensamento?</h3>
            <p className="font-typewriter text-sm">
              Não. Mas detecta picos de cortisol indiretos via frequência cardíaca e temperatura — o que se aproxima de
              um "termômetro emocional".
            </p>
          </div>
          <div className="postit p-5 border-2 border-foreground" style={{ transform: "rotate(1.8deg)", background: "oklch(0.78 0.22 0 / 0.6)" }}>
            <h3 className="font-bold-cut text-lg mb-2">→ Apaixonada ou taquicardia tech?</h3>
            <p className="font-typewriter text-sm">
              O anel não distingue. Ele só registra o aumento da frequência. Interpretação fica com você (e seu terapeuta).
            </p>
          </div>
        </div>

        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">Por que substituem o smartwatch</h2>
        <p className="font-typewriter leading-relaxed mb-4">
          Sem tela, sem notificações vibrando, sem necessidade de carregar todo dia. A bateria dura entre 5 e 8 dias e o
          anel passa despercebido em reuniões e eventos formais. Para quem busca dados de saúde sem o ruído visual do
          relógio conectado, é a alternativa mais elegante.
        </p>

        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">A questão dos dados</h2>
        <p className="font-typewriter leading-relaxed">
          Como todo wearable, o anel é também um sensor permanente. Especialistas em privacidade alertam para a
          importância de checar onde os dados são processados, se há criptografia ponta a ponta e se a empresa permite
          exportação ou exclusão completa do histórico.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <ScribbleDoodle className="w-20" color="oklch(0.55 0.25 305)" />
          <span className="font-handwriting text-xl -rotate-2">discreto, mas atento</span>
        </div>
      </section>
    </ArticleShell>
  );
}
