import { createFileRoute } from "@tanstack/react-router";
import { ArticleShell } from "@/components/ArticleShell";
import { Tape, Sticker, RansomText, ScribbleDoodle } from "@/components/zine";
import img from "@/assets/news-tiktok.jpg";

export const Route = createFileRoute("/tiktok-viagens")({
  component: Page,
  head: () => ({
    meta: [
      { title: "TikTok vira agência de viagens — Glitch Zine" },
      { name: "description", content: "Rede social libera busca e reserva de hotéis dentro do app, em movimento que aproxima o TikTok do conceito de super app." },
      { property: "og:title", content: "TikTok vira agência de viagens" },
      { property: "og:description", content: "Reserve o hotel sem sair do feed. A nova função do TikTok mira no mercado de viagens." },
      { property: "og:image", content: img },
    ],
  }),
});

function Page() {
  return (
    <ArticleShell>
      <div className="paper-texture border-2 border-foreground p-6 md:p-10 mb-10 relative" style={{ boxShadow: "8px 10px 0 rgba(0,0,0,0.85)" }}>
        <Tape variant="lime" className="w-32 h-6 -top-3 left-10" style={{ transform: "rotate(-5deg)" }} />
        <Tape variant="pink" className="w-28 h-6 -top-3 right-14" style={{ transform: "rotate(7deg)" }} />

        <div className="flex flex-wrap gap-2 mb-5">
          <Sticker bg="#111" fg="oklch(0.92 0.22 120)" rotate={-3}>📱 SOCIAL</Sticker>
          <Sticker bg="oklch(0.68 0.28 0)" fg="#fff" rotate={3}>✈️ VIAGENS</Sticker>
          <Sticker bg="oklch(0.78 0.18 210)" fg="#111" rotate={-2}>SUPER APP</Sticker>
        </div>

        <h1 className="text-3xl md:text-5xl mb-4">
          <RansomText text="TikTok: de dancinhas a agência de viagens" />
        </h1>

        <p className="font-typewriter text-base md:text-lg leading-relaxed mt-4">
          O TikTok liberou globalmente, em maio de 2026, a função de <span className="scribble-underline font-bold">busca e
          reserva de hotéis</span> diretamente dentro do aplicativo. A novidade integra parceiros como Booking.com, Trip.com
          e operadoras locais, permitindo concluir a compra sem nunca sair do feed de vídeos.
        </p>

        <div className="mt-6 font-typewriter text-xs uppercase tracking-widest opacity-70 border-t border-dashed border-foreground/50 pt-3">
          por · redação glitch · 04 maio 2026 · leitura: 4 min
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="polaroid relative" style={{ transform: "rotate(-2deg)", maxWidth: 560 }}>
          <Tape variant="pink" className="w-44 h-7 -top-3 left-1/2 z-10" style={{ transform: "translateX(-50%) rotate(-3deg)" }} />
          <img src={img} alt="TikTok com cartões postais" width={768} height={576} className="w-full h-auto block" />
          <div className="mt-3 font-handwriting text-lg text-center text-foreground/80">
            do feed para a Islândia em três toques
          </div>

          {/* Carimbo de passaporte */}
          <div
            className="absolute -bottom-4 -right-4 z-20 font-bold-cut text-sm border-4 border-[oklch(0.55_0.25_305)] text-[oklch(0.55_0.25_305)] px-3 py-2 bg-background/80 rounded-full text-center leading-tight"
            style={{ transform: "rotate(-12deg)", letterSpacing: "0.05em" }}
          >
            GLITCH ZINE<br />✈ APROVADO<br />MAI · 2026
          </div>
        </div>
      </div>

      <section className="paper-texture border-2 border-foreground p-6 md:p-10 mb-10" style={{ boxShadow: "6px 8px 0 rgba(0,0,0,0.85)" }}>
        <h2 className="font-marker text-2xl md:text-3xl mb-3">Como funciona</h2>
        <p className="font-typewriter leading-relaxed mb-4">
          Vídeos marcados com locais cadastrados ganham um botão flutuante "reservar". Ao tocar, o usuário vê
          disponibilidade, preços e avaliações sem ser redirecionado a um navegador. O pagamento ocorre via TikTok Pay,
          já operacional em mais de 40 países.
        </p>

        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">A corrida pelo super app</h2>
        <p className="font-typewriter leading-relaxed mb-4">
          O movimento aproxima o TikTok da lógica do <em>super app</em> consolidada na Ásia por WeChat e Grab: uma única
          interface concentrando rede social, e-commerce, pagamentos e agora viagens. No Ocidente, esse modelo enfrenta
          resistência regulatória — especialmente na União Europeia, onde o Digital Markets Act limita a integração de
          serviços por grandes plataformas.
        </p>

        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">O que muda para o turismo</h2>
        <p className="font-typewriter leading-relaxed">
          Operadoras menores e pousadas independentes se tornam visíveis para audiências globais sem depender de
          publicidade tradicional. A contrapartida é a dependência crescente de algoritmos opacos para a descoberta de
          destinos — o que pode concentrar fluxos turísticos em poucos pontos virais.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <ScribbleDoodle className="w-20" color="oklch(0.68 0.28 0)" />
          <span className="font-handwriting text-xl -rotate-2">scroll, curte, embarca</span>
        </div>
      </section>
    </ArticleShell>
  );
}
