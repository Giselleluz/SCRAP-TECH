import { createFileRoute } from "@tanstack/react-router";
import { ArticleShell } from "@/components/ArticleShell";
import { Tape, Sticker, RansomText, ScribbleDoodle, StarDoodle } from "@/components/zine";
import img from "@/assets/news-haven1.jpg";

export const Route = createFileRoute("/duas-luas-haven1")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Duas Luas e a estação Haven-1 — Glitch Zine" },
      { name: "description", content: "Maio de 2026 traz duas luas cheias e o lançamento da Haven-1, primeira estação espacial comercial privada da Vast." },
      { property: "og:title", content: "Duas Luas e a estação Haven-1" },
      { property: "og:description", content: "O mês da Lua Azul e o início oficial do turismo espacial privado." },
      { property: "og:image", content: img },
    ],
  }),
});

function Page() {
  return (
    <ArticleShell background="radial-gradient(circle at 20% 20%, #1a1140 0%, #0a0820 60%, #050314 100%)">
      <div className="paper-texture border-2 border-foreground p-6 md:p-10 mb-10 relative" style={{ boxShadow: "8px 10px 0 rgba(0,0,0,0.85)" }}>
        <Tape variant="cyan" className="w-32 h-6 -top-3 left-10" style={{ transform: "rotate(-5deg)" }} />
        <Tape variant="pink" className="w-28 h-6 -top-3 right-14" style={{ transform: "rotate(7deg)" }} />
        <StarDoodle className="absolute -top-6 -right-4 w-12 text-[oklch(0.92_0.22_120)]" />

        <div className="flex flex-wrap gap-2 mb-5">
          <Sticker bg="oklch(0.55 0.25 305)" fg="#fff" rotate={-3}>🌕 LUA AZUL</Sticker>
          <Sticker bg="oklch(0.78 0.18 210)" fg="#111" rotate={3}>🚀 ESPAÇO</Sticker>
          <Sticker bg="#111" fg="oklch(0.92 0.22 120)" rotate={-2}>HAVEN-1</Sticker>
        </div>

        <h1 className="text-3xl md:text-5xl mb-4">
          <RansomText text="O verão das duas luas e a era do turismo espacial" />
        </h1>

        <p className="font-typewriter text-base md:text-lg leading-relaxed mt-4">
          Maio de 2026 entrou para o calendário astronômico como o mês da{" "}
          <span className="scribble-underline font-bold">Lua Azul</span>: duas luas cheias, no dia 1º e no dia 31. No mesmo
          início de mês, a empresa norte-americana <strong>Vast</strong> colocou em órbita a <strong>Haven-1</strong>, a
          primeira estação espacial comercial privada da história.
        </p>

        <div className="mt-6 font-typewriter text-xs uppercase tracking-widest opacity-70 border-t border-dashed border-foreground/50 pt-3">
          por · redação glitch · 04 maio 2026 · leitura: 5 min
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="polaroid relative" style={{ transform: "rotate(-2deg)", maxWidth: 560 }}>
          <Tape variant="lime" className="w-44 h-7 -top-3 left-1/2 z-10" style={{ transform: "translateX(-50%) rotate(-3deg)" }} />
          <img src={img} alt="Haven-1 entre duas luas" width={768} height={576} className="w-full h-auto block xerox" />
          <div className="mt-3 font-handwriting text-lg text-center text-foreground/80">
            Haven-1 sob a primeira das duas luas cheias do mês
          </div>
        </div>
      </div>

      <section className="paper-texture border-2 border-foreground p-6 md:p-10 mb-10" style={{ boxShadow: "6px 8px 0 rgba(0,0,0,0.85)" }}>
        <h2 className="font-marker text-2xl md:text-3xl mb-3">A Haven-1 em órbita</h2>
        <p className="font-typewriter leading-relaxed mb-4">
          Com cerca de 10 metros de comprimento e capacidade para receber até quatro tripulantes em missões de duas semanas,
          a Haven-1 é o primeiro módulo de uma futura estação maior planejada pela Vast. A operação inaugural marca o início
          de um mercado privado de hospedagem orbital, antes restrito a programas estatais e à Estação Espacial Internacional.
        </p>
        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">Por que duas luas no mesmo mês</h2>
        <p className="font-typewriter leading-relaxed mb-4">
          O fenômeno popularmente chamado de <em>Blue Moon</em> ocorre quando duas luas cheias caem dentro do mesmo mês
          do calendário. É um efeito apenas do nosso calendário civil — o ciclo lunar dura cerca de 29,5 dias —, mas se
          tornou marca registrada de coberturas culturais e científicas.
        </p>

        <div className="postit p-5 border-2 border-foreground my-8" style={{ transform: "rotate(-1.5deg)" }}>
          <div className="flex items-center gap-2 mb-3">
            <Tape variant="pink" className="!relative w-20 h-5" style={{ transform: "rotate(-6deg)" }} />
            <h3 className="font-bold-cut text-xl">CHECKLIST · viagem espacial</h3>
          </div>
          <ul className="font-typewriter text-base space-y-1">
            <li>☐ Protetor solar galáctico (FPS 9000)</li>
            <li>☐ Wi-Fi de Marte (plano pré-pago)</li>
            <li>☐ Saco de dormir com velcro</li>
            <li>☐ Câmera para registrar a Lua nº 2</li>
            <li>☐ Seguro contra micrometeoritos</li>
            <li>☐ Termo de responsabilidade — assinado, claro</li>
          </ul>
        </div>

        <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">O que vem por aí</h2>
        <p className="font-typewriter leading-relaxed">
          A Vast já anunciou novas missões para o segundo semestre, incluindo experimentos de empresas farmacêuticas e
          parcerias com agências espaciais europeias. A SpaceX segue como fornecedora dos lançamentos via Falcon 9 e da
          cápsula Dragon usada para o transporte de tripulação.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <ScribbleDoodle className="w-20" color="oklch(0.55 0.25 305)" />
          <span className="font-handwriting text-xl -rotate-2">próxima parada: órbita</span>
        </div>
      </section>
    </ArticleShell>
  );
}
