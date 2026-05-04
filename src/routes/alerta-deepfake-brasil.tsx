import { createFileRoute } from "@tanstack/react-router";
import { ArticleShell } from "@/components/ArticleShell";
import { Tape, Sticker, RansomText, ScribbleDoodle } from "@/components/zine";
import img from "@/assets/news-deepfake.jpg";

export const Route = createFileRoute("/alerta-deepfake-brasil")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Alerta deepfake: Brasil lidera ranking — Glitch Zine" },
      { name: "description", content: "Uso de deepfakes em golpes financeiros cresceu 830% em um ano. Brasil lidera o ranking na América Latina." },
      { property: "og:title", content: "Alerta deepfake: Brasil lidera ranking" },
      { property: "og:description", content: "Como criar uma senha de voz e se proteger de fraudes com vídeo gerado por IA." },
      { property: "og:image", content: img },
    ],
  }),
});

function Page() {
  return (
    <ArticleShell background="repeating-linear-gradient(135deg, #111 0 30px, #1a1a1a 30px 60px)">
      <div className="border-4 border-[oklch(0.92_0.2_95)] bg-[#0a0a0a] text-[oklch(0.92_0.2_95)] p-6 md:p-10 mb-10 relative" style={{ boxShadow: "8px 10px 0 #000" }}>
        <div className="absolute -top-4 left-6 right-6 h-3 bg-[repeating-linear-gradient(45deg,#111_0_10px,#fde047_10px_20px)]" />

        <div className="flex flex-wrap gap-2 mb-5">
          <Sticker bg="oklch(0.92 0.2 95)" fg="#111" rotate={-3}>⚠ ALERTA</Sticker>
          <Sticker bg="#dc2626" fg="#fff" rotate={3}>🚨 GOLPE</Sticker>
          <Sticker bg="#111" fg="oklch(0.92 0.2 95)" rotate={-2}>🇧🇷 BRASIL</Sticker>
        </div>

        <h1 className="text-3xl md:text-5xl mb-4 text-[oklch(0.92_0.2_95)]">
          <RansomText text="Alerta deepfake: Brasil lidera ranking de golpes" />
        </h1>

        <p className="font-typewriter text-base md:text-lg leading-relaxed mt-4">
          Relatório divulgado em maio de 2026 aponta que o uso de <span className="scribble-underline font-bold text-[oklch(0.92_0.2_95)]">deepfakes</span> em
          fraudes financeiras cresceu <strong>830%</strong> nos últimos doze meses. O Brasil lidera o ranking na América
          Latina, principalmente em golpes que envolvem chamadas de vídeo simulando familiares e executivos.
        </p>

        <div className="mt-6 font-typewriter text-xs uppercase tracking-widest opacity-80 border-t border-dashed border-[oklch(0.92_0.2_95)]/50 pt-3">
          por · redação glitch · 04 maio 2026 · leitura: 5 min
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="polaroid relative" style={{ transform: "rotate(-2deg)", maxWidth: 560 }}>
          <Tape variant="pink" className="w-44 h-7 -top-3 left-1/2 z-10" style={{ transform: "translateX(-50%) rotate(-3deg)" }} />
          <img src={img} alt="Alerta deepfake" width={768} height={576} className="w-full h-auto block" />
          <div className="mt-3 font-handwriting text-lg text-center text-foreground/80">
            quando o vídeo deixa de ser prova
          </div>
        </div>
      </div>

      <section className="paper-texture border-2 border-foreground p-6 md:p-10 mb-10" style={{ boxShadow: "6px 8px 0 rgba(0,0,0,0.85)" }}>
        <h2 className="font-marker text-2xl md:text-3xl mb-3">O tamanho do problema</h2>
        <p className="font-typewriter leading-relaxed mb-4">
          Bancos, fintechs e empresas de seguros relatam aumento expressivo de fraudes envolvendo voz e vídeo
          sintéticos. As técnicas vão de áudios curtos imitando a voz de um filho pedindo socorro até reuniões inteiras
          em videoconferência com executivos clonados.
        </p>
        <p className="font-typewriter leading-relaxed mb-4">
          O Brasil reúne dois fatores que explicam a liderança regional: forte presença de bancos digitais e alta
          adoção de WhatsApp e PIX, que reduzem o tempo entre o engano e a transferência efetiva.
        </p>

        <div className="border-2 border-dashed border-foreground p-5 my-8 bg-[oklch(0.92_0.2_95)]" style={{ transform: "rotate(-0.8deg)" }}>
          <div className="flex items-center gap-2 mb-3">
            <Tape variant="cyan" className="!relative w-20 h-5" style={{ transform: "rotate(-6deg)" }} />
            <h3 className="font-bold-cut text-xl">GUIA DE SOBREVIVÊNCIA DIGITAL</h3>
          </div>
          <ol className="font-typewriter text-sm space-y-2 list-decimal list-inside">
            <li>Combine uma <strong>senha de voz</strong> com a família — uma palavra que ninguém posta nas redes.</li>
            <li>Em qualquer vídeo suspeito, peça que a pessoa <strong>vire a cabeça de perfil</strong>: deepfakes ainda
              falham em ângulos extremos.</li>
            <li>Antes de transferir, ligue de volta no número conhecido. Sempre.</li>
            <li>Desconfie de urgência: golpe vive de pressa.</li>
            <li>Ative <strong>verificação em duas etapas</strong> no banco e no e-mail.</li>
            <li>Não confirme dados pessoais por chamada recebida — só por chamada feita.</li>
          </ol>
          <p className="font-handwriting text-lg mt-3 text-right">— xerox &amp; grampo • redação glitch</p>
        </div>

        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">O que esperar da regulação</h2>
        <p className="font-typewriter leading-relaxed">
          O Banco Central estuda obrigar instituições a oferecerem mecanismos adicionais de validação biométrica
          combinada — voz, rosto e gesto. No Congresso, tramita projeto de lei que tipifica o uso fraudulento de
          deepfakes e prevê pena maior quando há dano financeiro.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <ScribbleDoodle className="w-20" color="oklch(0.65 0.28 27)" />
          <span className="font-handwriting text-xl -rotate-2">desconfie. sempre.</span>
        </div>
      </section>
    </ArticleShell>
  );
}
