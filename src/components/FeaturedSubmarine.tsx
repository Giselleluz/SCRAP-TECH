import { Link } from "@tanstack/react-router";
import { Tape, Sticker, RansomText, StarDoodle, ArrowDoodle, ScribbleDoodle } from "./zine";
import submarineImg from "@/assets/submarine.jpg";

export function FeaturedSubmarine() {
  return (
    <article className="relative max-w-5xl mx-auto my-16 px-4">
      {/* Decor doodles */}
      <ArrowDoodle className="absolute -top-6 -left-2 w-32 text-[oklch(0.55_0.25_305)] hidden md:block rotate-[-12deg]" />
      <div className="absolute -top-10 right-10 hidden md:block">
        <Sticker bg="oklch(0.92 0.22 120)" fg="#111" rotate={-14}>
          📻 INTERCEPTADO
        </Sticker>
      </div>

      <div
        className="relative paper-texture border-2 border-foreground p-6 md:p-10"
        style={{
          transform: "rotate(-1.2deg)",
          boxShadow: "8px 10px 0 rgba(0,0,0,0.85), 0 25px 40px rgba(0,0,0,0.15)",
        }}
      >
        {/* Tapes */}
        <Tape variant="pink" className="w-32 h-6 -top-3 left-8" style={{ transform: "rotate(-6deg)" }} />
        <Tape variant="cyan" className="w-28 h-6 -top-3 right-12" style={{ transform: "rotate(8deg)" }} />

        {/* Top secret stamps */}
        <div
          className="absolute -top-6 -right-4 z-20 font-bold-cut text-2xl md:text-3xl text-[oklch(0.65_0.28_27)] border-4 border-[oklch(0.65_0.28_27)] px-3 py-1 bg-background/80"
          style={{ transform: "rotate(14deg)", letterSpacing: "0.08em", fontFamily: "var(--font-bold-cut)" }}
        >
          TOP SECRET
        </div>
        <div
          className="absolute bottom-4 -left-6 z-20 font-typewriter text-xs border-2 border-foreground bg-[oklch(0.92_0.2_95)] px-2 py-1"
          style={{ transform: "rotate(-12deg)" }}
        >
          // ARQUIVO 0117-RU //
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Polaroid image */}
          <div className="relative">
            <div
              className="polaroid swing-hover relative"
              style={{ transform: "rotate(-3deg)", maxWidth: 460 }}
            >
              <Tape
                variant="lime"
                className="w-40 h-7 -top-3 left-1/2 z-10"
                style={{ transform: "translateX(-50%) rotate(-3deg)" }}
              />
              <img
                src={submarineImg}
                alt="Submarino espião russo Losharik no Atlântico Norte"
                width={768}
                height={768}
                className="w-full h-auto block xerox"
                style={{ filter: "contrast(1.2) saturate(1.3) hue-rotate(-8deg) sepia(0.1)" }}
              />
              <div className="mt-3 font-handwriting text-xl text-center text-foreground/80">
                "olha ele aí, fofoqueiro 🤫"
              </div>
            </div>

            <div className="absolute -bottom-6 -right-2">
              <Sticker bg="oklch(0.55 0.25 305)" fg="#fff" rotate={10}>
                ⚠ EXCLUSIVO
              </Sticker>
            </div>
            <StarDoodle className="absolute -top-4 -left-4 w-10 text-[oklch(0.92_0.22_120)]" />
            <StarDoodle className="absolute top-1/3 -right-6 w-7 text-[oklch(0.68_0.28_0)]" />
          </div>

          {/* Content */}
          <div className="relative">
            <div className="text-3xl md:text-5xl mb-4">
              <RansomText text="Losharik & Belgorod aprontaram!" />
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              <Sticker bg="#111" fg="oklch(0.92 0.22 120)" rotate={-3}>⚡ BREAKING</Sticker>
              <Sticker bg="oklch(0.78 0.18 210)" fg="#111" rotate={4}>🌊 ATLÂNTICO</Sticker>
              <Sticker bg="oklch(0.92 0.2 95)" fg="#111" rotate={-2}>🤐 SUBMARINO</Sticker>
            </div>

            <div className="speech-bubble text-base md:text-lg leading-relaxed font-typewriter">
              <p>
                A OTAN identificou no Atlântico Norte uma operação combinada entre o submarino de águas profundas{" "}
                <span className="scribble-underline font-bold">Losharik</span> e o submarino-mãe{" "}
                <span className="scribble-underline font-bold">Belgorod</span>, o maior em serviço no mundo.
              </p>
              <p className="mt-3">
                A movimentação ocorre em uma região densamente atravessada por cabos submarinos de telecomunicações
                e reacende o debate sobre a vulnerabilidade da infraestrutura crítica que conecta Europa e América
                do Norte.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <Link
                to="/reportagem-losharik"
                className="swing-hover font-bold-cut uppercase text-sm px-5 py-3 border-2 border-foreground"
                style={{
                  backgroundColor: "oklch(0.68 0.28 0)",
                  color: "#fff",
                  fontFamily: "var(--font-bold-cut)",
                  boxShadow: "4px 4px 0 #111",
                }}
              >
                ler reportagem completa →
              </Link>
              <ScribbleDoodle className="w-20" color="oklch(0.55 0.25 305)" />
              <span className="font-handwriting text-xl -rotate-3">leitura recomendada</span>
            </div>

            <div className="mt-6 font-typewriter text-xs uppercase tracking-widest opacity-60 border-t border-dashed border-foreground/50 pt-3">
              por · redação glitch · ✂ recorte e guarde
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
