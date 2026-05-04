import { createFileRoute, Link } from "@tanstack/react-router";
import { Tape, Sticker, RansomText, StarDoodle, ArrowDoodle, ScribbleDoodle, WobblyFilter } from "@/components/zine";
import { Header } from "@/components/Header";
import submarineImg from "@/assets/submarine.jpg";

export const Route = createFileRoute("/reportagem-losharik")({
  component: ReportagemLosharik,
  head: () => ({
    meta: [
      { title: "Losharik & Belgorod: a operação russa no Atlântico Norte — Glitch Zine" },
      {
        name: "description",
        content:
          "Reportagem completa sobre a movimentação do submarino espião Losharik, rebocado pelo gigante Belgorod, e o que ela significa para os cabos submarinos da OTAN no Atlântico Norte.",
      },
      { property: "og:title", content: "Losharik & Belgorod: a operação russa no Atlântico Norte" },
      {
        property: "og:description",
        content:
          "Análise da operação submarina russa flagrada pela OTAN: rotas, capacidades do Losharik e do Belgorod, e o risco para a infraestrutura de cabos no Atlântico Norte.",
      },
      { property: "og:image", content: submarineImg },
      { name: "twitter:image", content: submarineImg },
    ],
  }),
});

function ReportagemLosharik() {
  return (
    <main className="relative overflow-x-hidden min-h-screen">
      <WobblyFilter />
      <StarDoodle className="fixed top-24 left-4 w-8 text-[oklch(0.55_0.25_305)] opacity-60 pointer-events-none hidden lg:block wiggle" />
      <StarDoodle className="fixed bottom-10 right-6 w-10 text-[oklch(0.68_0.28_0)] opacity-70 pointer-events-none hidden lg:block wiggle" />

      <Header />

      <article className="relative max-w-4xl mx-auto my-12 px-4">
        <div className="mb-6 font-typewriter text-sm">
          <Link to="/" className="underline decoration-wavy decoration-[oklch(0.68_0.28_0)] underline-offset-4">
            ← voltar para a edição
          </Link>
        </div>

        {/* Cabeçalho da matéria */}
        <header className="relative paper-texture border-2 border-foreground p-6 md:p-10 mb-10"
          style={{ boxShadow: "8px 10px 0 rgba(0,0,0,0.85)" }}>
          <Tape variant="pink" className="w-32 h-6 -top-3 left-10" style={{ transform: "rotate(-5deg)" }} />
          <Tape variant="cyan" className="w-28 h-6 -top-3 right-14" style={{ transform: "rotate(7deg)" }} />

          <ArrowDoodle className="absolute -top-4 -left-2 w-24 text-[oklch(0.55_0.25_305)] hidden md:block rotate-[-10deg]" />

          <div className="flex flex-wrap gap-2 mb-5">
            <Sticker bg="#111" fg="oklch(0.92 0.22 120)" rotate={-3}>REPORTAGEM</Sticker>
            <Sticker bg="oklch(0.78 0.18 210)" fg="#111" rotate={3}>🌊 ATLÂNTICO NORTE</Sticker>
            <Sticker bg="oklch(0.92 0.2 95)" fg="#111" rotate={-2}>🛰 INTELIGÊNCIA</Sticker>
          </div>

          <h1 className="text-3xl md:text-5xl mb-4">
            <RansomText text="Losharik e Belgorod: a operação russa no Atlântico Norte" />
          </h1>

          <p className="font-typewriter text-base md:text-lg leading-relaxed mt-4">
            O movimento conjunto do submarino de águas profundas <span className="font-bold scribble-underline">Losharik</span>{" "}
            e do submarino-mãe <span className="font-bold scribble-underline">Belgorod</span> reacendeu o alerta da OTAN
            sobre a vulnerabilidade dos cabos submarinos que conectam Europa e América do Norte.
          </p>

          <div className="mt-6 font-typewriter text-xs uppercase tracking-widest opacity-70 border-t border-dashed border-foreground/50 pt-3">
            por · redação glitch · publicado em 04 de maio de 2026 · leitura: 8 min
          </div>
        </header>

        {/* Foto principal */}
        <div className="relative flex justify-center mb-12">
          <div className="polaroid relative" style={{ transform: "rotate(-2deg)", maxWidth: 560 }}>
            <Tape variant="lime" className="w-44 h-7 -top-3 left-1/2 z-10" style={{ transform: "translateX(-50%) rotate(-3deg)" }} />
            <img
              src={submarineImg}
              alt="Submarino russo Losharik em operação no Atlântico Norte"
              className="w-full h-auto block xerox"
              style={{ filter: "contrast(1.2) saturate(1.3) hue-rotate(-8deg) sepia(0.1)" }}
            />
            <div className="mt-3 font-handwriting text-lg text-center text-foreground/80">
              Imagem de arquivo · operação flagrada por aeronaves de patrulha da OTAN
            </div>
          </div>
        </div>

        {/* Corpo da matéria */}
        <section className="paper-texture border-2 border-foreground p-6 md:p-10 mb-10 relative"
          style={{ boxShadow: "6px 8px 0 rgba(0,0,0,0.85)" }}>
          <div
            className="absolute -top-5 -right-3 z-20 font-bold-cut text-xl md:text-2xl text-[oklch(0.65_0.28_27)] border-4 border-[oklch(0.65_0.28_27)] px-3 py-1 bg-background/80"
            style={{ transform: "rotate(10deg)", letterSpacing: "0.08em", fontFamily: "var(--font-bold-cut)" }}
          >
            DOSSIÊ
          </div>

          <h2 className="font-marker text-2xl md:text-3xl mb-3">O que aconteceu</h2>
          <p className="font-typewriter leading-relaxed mb-4">
            Aeronaves de patrulha marítima de países da OTAN identificaram, nas últimas semanas, a presença simultânea
            do <strong>Belgorod</strong> e do <strong>Losharik</strong> em uma faixa do Atlântico Norte considerada
            estratégica pela densidade de cabos submarinos de telecomunicações. A operação, descrita por fontes militares
            como discreta e bem coordenada, sugere uma missão de reconhecimento ou de mapeamento da infraestrutura
            submarina ocidental.
          </p>
          <p className="font-typewriter leading-relaxed mb-4">
            O Belgorod, derivado da classe Oservon, é o maior submarino em operação no mundo e funciona como
            plataforma-mãe: ele transporta veículos menores, incluindo o próprio Losharik, até a região de interesse,
            permitindo que o submarino menor opere a profundidades inacessíveis para a maior parte da frota convencional.
          </p>

          <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">Quem é o Losharik</h2>
          <p className="font-typewriter leading-relaxed mb-4">
            O AS-31 Losharik é um submarino nuclear de pesquisa de águas profundas operado pela Direção-Geral de
            Pesquisas em Águas Profundas (GUGI), unidade subordinada diretamente ao Ministério da Defesa russo. Seu
            casco interno é composto por uma série de esferas de titânio, desenho que lhe rendeu o apelido — uma
            referência ao personagem infantil soviético feito de bolinhas. Essa arquitetura permite que opere a
            profundidades superiores a 2.000 metros, muito além do limite de submarinos militares convencionais.
          </p>
          <p className="font-typewriter leading-relaxed mb-4">
            Em 2019, o Losharik foi palco de um grave acidente: um incêndio a bordo matou 14 oficiais, vários deles
            condecorados como Heróis da Federação Russa. Desde então, o programa permaneceu em relativo silêncio, e
            relatos sobre seu retorno operacional foram tratados com cautela por analistas ocidentais.
          </p>

          <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">O papel do Belgorod</h2>
          <p className="font-typewriter leading-relaxed mb-4">
            Com cerca de 184 metros de comprimento, o K-329 Belgorod foi adaptado especificamente para operações
            especiais. Além de servir de transporte para o Losharik, ele é capaz de operar veículos não tripulados de
            longa autonomia. Sua simples movimentação para fora dos portos russos é, por si só, monitorada por
            satélites e por agências de inteligência da OTAN.
          </p>

          <blockquote className="speech-bubble my-8 text-base md:text-lg">
            <p className="font-typewriter">
              "A combinação Belgorod–Losharik não é uma operação rotineira. Ela representa a aplicação de capacidades
              estratégicas de águas profundas em uma região de altíssima sensibilidade civil e militar."
            </p>
            <p className="font-handwriting text-xl mt-3 -rotate-1">
              — analista naval ouvido pela redação, sob anonimato
            </p>
          </blockquote>

          <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">Por que os cabos submarinos importam</h2>
          <p className="font-typewriter leading-relaxed mb-4">
            Mais de 95% do tráfego intercontinental de internet passa por cabos submarinos. No Atlântico Norte, essa
            malha conecta data centers europeus a hubs nos Estados Unidos e no Canadá, sustentando desde transações
            financeiras até comunicações governamentais. Qualquer interrupção significativa nesse corredor teria
            impacto imediato sobre serviços críticos.
          </p>
          <p className="font-typewriter leading-relaxed mb-4">
            A presença de submarinos com capacidade comprovada de operar em grandes profundidades reacende o debate
            sobre a proteção dessa infraestrutura. Países como Reino Unido, Noruega e Irlanda já anunciaram o reforço
            de patrulhas e o investimento em novos navios de vigilância de cabos.
          </p>

          <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">A resposta da OTAN</h2>
          <p className="font-typewriter leading-relaxed mb-4">
            A OTAN ativou, ainda em 2023, uma célula de coordenação dedicada à proteção de infraestruturas submarinas
            críticas. Desde então, a aliança ampliou o compartilhamento de inteligência entre seus membros e passou a
            integrar dados de operadoras privadas de cabos. A movimentação atual deve acelerar a discussão sobre regras
            de engajamento e sobre o uso de drones submarinos defensivos.
          </p>

          <h2 className="font-marker text-2xl md:text-3xl mt-8 mb-3">O que esperar a seguir</h2>
          <p className="font-typewriter leading-relaxed mb-4">
            Não há, até o fechamento desta edição, qualquer indicação de dano efetivo a cabos. A leitura predominante
            entre analistas é a de que a operação tem caráter de mapeamento e de demonstração de capacidade. Ainda
            assim, a presença simultânea de duas plataformas tão sensíveis é, em si, uma mensagem — e ela foi recebida.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <ScribbleDoodle className="w-20" color="oklch(0.55 0.25 305)" />
            <span className="font-handwriting text-xl -rotate-2">continua em desenvolvimento</span>
          </div>
        </section>

        {/* Box lateral / ficha técnica */}
        <aside className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="postit p-5 border-2 border-foreground" style={{ transform: "rotate(-1.5deg)" }}>
            <h3 className="font-bold-cut text-xl mb-2">Ficha · Losharik (AS-31)</h3>
            <ul className="font-typewriter text-sm space-y-1">
              <li>• Tipo: submarino nuclear de pesquisa de águas profundas</li>
              <li>• Operador: GUGI / Marinha Russa</li>
              <li>• Profundidade estimada: &gt; 2.000 m</li>
              <li>• Casco interno: esferas de titânio</li>
              <li>• Incidente notável: incêndio fatal em 2019</li>
            </ul>
          </div>
          <div className="postit p-5 border-2 border-foreground" style={{ transform: "rotate(1.8deg)", background: "oklch(0.82 0.16 200)" }}>
            <h3 className="font-bold-cut text-xl mb-2">Ficha · Belgorod (K-329)</h3>
            <ul className="font-typewriter text-sm space-y-1">
              <li>• Tipo: submarino nuclear de operações especiais</li>
              <li>• Comprimento: ~184 m (maior em serviço)</li>
              <li>• Função: plataforma-mãe para veículos submarinos</li>
              <li>• Capacidade declarada: drones de longo alcance</li>
              <li>• Em serviço desde: 2022</li>
            </ul>
          </div>
        </aside>

        <div className="text-center mb-16">
          <Link
            to="/"
            className="inline-block swing-hover font-bold-cut uppercase text-sm px-6 py-3 border-2 border-foreground"
            style={{
              backgroundColor: "oklch(0.68 0.28 0)",
              color: "#fff",
              fontFamily: "var(--font-bold-cut)",
              boxShadow: "4px 4px 0 #111",
            }}
          >
            ← voltar para a capa
          </Link>
        </div>
      </article>

      <footer className="border-t-2 border-dashed border-foreground/60 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-handwriting text-2xl">feito com tesoura, cola & muito ☕</div>
          <div className="flex gap-3">
            <Sticker bg="oklch(0.68 0.28 0)" fg="#fff" rotate={-4}>©2026 GLITCH ZINE</Sticker>
            <Sticker bg="oklch(0.92 0.22 120)" fg="#111" rotate={3}>NÃO RECICLE</Sticker>
          </div>
        </div>
      </footer>
    </main>
  );
}
