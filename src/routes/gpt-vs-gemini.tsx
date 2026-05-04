import { createFileRoute } from "@tanstack/react-router";
import { ArticleShell } from "@/components/ArticleShell";
import { Tape, Sticker, RansomText, ScribbleDoodle } from "@/components/zine";
import img from "@/assets/news-aiwar.jpg";

export const Route = createFileRoute("/gpt-vs-gemini")({
  component: Page,
  head: () => ({
    meta: [
      { title: "GPT-5.2 vs Gemini 3 Pro: a guerra dos titãs — Glitch Zine" },
      { name: "description", content: "OpenAI aposta no raciocínio de longo prazo do GPT-5.2 enquanto o Google integra o Gemini 3 Pro à tela inteira do Android." },
      { property: "og:title", content: "GPT-5.2 vs Gemini 3 Pro" },
      { property: "og:description", content: "A nova rodada da disputa pela IA suprema." },
      { property: "og:image", content: img },
    ],
  }),
});

function Page() {
  return (
    <ArticleShell>
      <div className="paper-texture border-2 border-foreground p-6 md:p-10 mb-10 relative" style={{ boxShadow: "8px 10px 0 rgba(0,0,0,0.85)" }}>
        <Tape variant="pink" className="w-32 h-6 -top-3 left-10" style={{ transform: "rotate(-5deg)" }} />
        <Tape variant="cyan" className="w-28 h-6 -top-3 right-14" style={{ transform: "rotate(7deg)" }} />

        <div className="flex flex-wrap gap-2 mb-5">
          <Sticker bg="oklch(0.55 0.25 305)" fg="#fff" rotate={-3}>🥊 VERSUS</Sticker>
          <Sticker bg="#111" fg="oklch(0.92 0.22 120)" rotate={3}>IA</Sticker>
          <Sticker bg="oklch(0.92 0.2 95)" fg="#111" rotate={-2}>BIG TECH</Sticker>
        </div>

        <h1 className="text-3xl md:text-5xl mb-4">
          <RansomText text="GPT-5.2 contra Gemini 3 Pro: a guerra dos titãs" />
        </h1>

        <p className="font-typewriter text-base md:text-lg leading-relaxed mt-4">
          A disputa pela liderança em IA atingiu novo pico em maio de 2026. De um lado, a OpenAI lançou o{" "}
          <strong>GPT-5.2</strong>, elogiado pelo raciocínio em tarefas longas e por uma janela de contexto que mantém
          coerência por horas de conversa. Do outro, o Google entregou o <strong>Gemini 3 Pro</strong>, agora integrado
          de fábrica a todos os Android compatíveis e capaz de "ver" tudo o que aparece na tela em tempo real.
        </p>

        <div className="mt-6 font-typewriter text-xs uppercase tracking-widest opacity-70 border-t border-dashed border-foreground/50 pt-3">
          por · redação glitch · 04 maio 2026 · leitura: 6 min
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="polaroid relative" style={{ transform: "rotate(-2deg)", maxWidth: 600 }}>
          <Tape variant="lime" className="w-44 h-7 -top-3 left-1/2 z-10" style={{ transform: "translateX(-50%) rotate(-3deg)" }} />
          <img src={img} alt="GPT contra Gemini" width={768} height={576} className="w-full h-auto block xerox" />
          <div className="mt-3 font-handwriting text-lg text-center text-foreground/80">
            "round 1 — fight!"
          </div>
        </div>
      </div>

      {/* Card VS */}
      <section className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="paper-texture border-2 border-foreground p-6 relative" style={{ transform: "rotate(-1.8deg)", boxShadow: "6px 8px 0 rgba(0,0,0,0.85)" }}>
          <div className="absolute -top-3 -left-3 z-10">
            <Sticker bg="oklch(0.55 0.25 305)" fg="#fff" rotate={-8}>⚪ OPENAI</Sticker>
          </div>
          <h3 className="font-bold-cut text-2xl mb-2">GPT-5.2</h3>
          <div className="speech-bubble mb-3">
            <p className="font-typewriter">"Eu penso melhor — e por mais tempo."</p>
          </div>
          <ul className="font-typewriter text-sm space-y-1">
            <li>• Janela de contexto extensa, ideal para projetos longos</li>
            <li>• Forte em matemática, código e revisão jurídica</li>
            <li>• Modo "pesquisa profunda" com citações verificáveis</li>
            <li>• API com novos preços por etapa de raciocínio</li>
          </ul>
        </div>

        <div className="paper-texture border-2 border-foreground p-6 relative" style={{ transform: "rotate(2deg)", boxShadow: "6px 8px 0 rgba(0,0,0,0.85)" }}>
          <div className="absolute -top-3 -right-3 z-10">
            <Sticker bg="oklch(0.78 0.18 210)" fg="#111" rotate={8}>⚫ GOOGLE</Sticker>
          </div>
          <h3 className="font-bold-cut text-2xl mb-2">Gemini 3 Pro</h3>
          <div className="speech-bubble mb-3">
            <p className="font-typewriter">"Eu vejo tudo o que você está fazendo agora."</p>
          </div>
          <ul className="font-typewriter text-sm space-y-1">
            <li>• Integração nativa com Android e Chrome OS</li>
            <li>• Visão de tela contínua ("screen awareness")</li>
            <li>• Multimodal forte: vídeo, áudio e imagem</li>
            <li>• Preço competitivo no plano Google One AI</li>
          </ul>
        </div>
      </section>

      <section className="paper-texture border-2 border-foreground p-6 md:p-10 mb-10" style={{ boxShadow: "6px 8px 0 rgba(0,0,0,0.85)" }}>
        <h2 className="font-marker text-2xl md:text-3xl mb-3">Quem ganha em cada arena</h2>
        <p className="font-typewriter leading-relaxed mb-4">
          Em benchmarks de raciocínio matemático e revisão de código, o GPT-5.2 tem mostrado vantagem consistente. Em
          tarefas multimodais que exigem entender simultaneamente vídeo, voz e tela do dispositivo, o Gemini 3 Pro
          domina, especialmente no ecossistema Android.
        </p>
        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">O custo da disputa</h2>
        <p className="font-typewriter leading-relaxed">
          Ambas as empresas vêm queimando bilhões em data centers e contratos de energia. Para o usuário, isso se traduz
          em recursos cada vez mais avançados — e em planos de assinatura que começam a se aproximar do preço de um
          serviço de streaming premium.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <ScribbleDoodle className="w-20" color="oklch(0.55 0.25 305)" />
          <span className="font-handwriting text-xl -rotate-2">round 2 carregando…</span>
        </div>
      </section>
    </ArticleShell>
  );
}
