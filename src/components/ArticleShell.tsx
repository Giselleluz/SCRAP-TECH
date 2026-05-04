import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { WobblyFilter, StarDoodle, Sticker } from "./zine";

export function ArticleShell({
  children,
  background,
}: {
  children: ReactNode;
  background?: string;
}) {
  return (
    <main
      className="relative overflow-x-hidden min-h-screen"
      style={background ? { background } : undefined}
    >
      <WobblyFilter />
      <StarDoodle className="fixed top-24 left-4 w-8 text-[oklch(0.55_0.25_305)] opacity-60 pointer-events-none hidden lg:block wiggle" />
      <StarDoodle className="fixed bottom-10 right-6 w-10 text-[oklch(0.68_0.28_0)] opacity-70 pointer-events-none hidden lg:block wiggle" />

      <Header />

      <article className="relative max-w-4xl mx-auto my-12 px-4">
        <div className="mb-6 font-typewriter text-sm">
          <Link
            to="/"
            className="underline decoration-wavy decoration-[oklch(0.68_0.28_0)] underline-offset-4"
          >
            ← voltar para a edição
          </Link>
        </div>

        {children}

        <div className="text-center my-16">
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
          <div className="font-handwriting text-2xl">
            feito com tesoura, cola & muito ☕
          </div>
          <div className="flex gap-3">
            <Sticker bg="oklch(0.68 0.28 0)" fg="#fff" rotate={-4}>
              ©2026 GLITCH ZINE
            </Sticker>
            <Sticker bg="oklch(0.92 0.22 120)" fg="#111" rotate={3}>
              NÃO RECICLE
            </Sticker>
          </div>
        </div>
      </footer>
    </main>
  );
}
