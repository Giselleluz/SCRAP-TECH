import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { FeaturedSubmarine } from "@/components/FeaturedSubmarine";
import { NewsFeed } from "@/components/NewsFeed";
import { TrendingPostit } from "@/components/TrendingPostit";
import { WobblyFilter, Sticker, StarDoodle } from "@/components/zine";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Glitch Zine — Notícias de tech feitas à mão ✂" },
      { name: "description", content: "Portal de notícias de tecnologia em estética zine DIY scrapbook retrô. Espionagem, IA, gadgets e games — colados na sua tela." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <WobblyFilter />

      {/* Floating decor */}
      <StarDoodle className="fixed top-24 left-4 w-8 text-[oklch(0.55_0.25_305)] opacity-60 pointer-events-none hidden lg:block wiggle" />
      <StarDoodle className="fixed bottom-10 right-6 w-10 text-[oklch(0.68_0.28_0)] opacity-70 pointer-events-none hidden lg:block wiggle" />

      <Header />
      <FeaturedSubmarine />
      <NewsFeed />
      <TrendingPostit />

      <footer className="border-t-2 border-dashed border-foreground/60 py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-handwriting text-2xl">
            feito com tesoura, cola & muito ☕
          </div>
          <div className="flex gap-3">
            <Sticker bg="oklch(0.68 0.28 0)" fg="#fff" rotate={-4}>©2026 GLITCH ZINE</Sticker>
            <Sticker bg="oklch(0.92 0.22 120)" fg="#111" rotate={3}>NÃO RECICLE</Sticker>
          </div>
        </div>
      </footer>
    </main>
  );
}
