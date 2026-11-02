
"use client";

import { useMemo, useState } from "react";
import {
  Search,
  BrainCircuit,
  Database,
  Languages,
  Globe,
  Folder,
  Moon,
  Sun,
} from "lucide-react";
import { links } from "@/lib/links";

const icons: Record<string, React.ElementType> = {
  BrainCircuit,
  Database,
  Languages,
  Globe,
  Folder,
};

const colors: Record<string, string> = {
  blue: "text-blue-500",
  emerald: "text-emerald-500",
  orange: "text-orange-500",
  purple: "text-purple-500",
  cyan: "text-cyan-500",
  pink: "text-pink-500",
};

export default function Home() {
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(true);
  const [category, setCategory] = useState<"OLAT" | "Materials">("OLAT");

  const filtered = useMemo(
    () =>
      links.filter(
        (link) =>
          link.category === category &&
          `${link.title} ${link.description}`
            .toLowerCase()
            .includes(search.toLowerCase())
      ),
    [search, category]
  );

  return (
    <main
      className={`min-h-screen transition-colors ${
        dark
          ? "bg-[#111111] text-white"
          : "bg-[#f7f7f7] text-[#171717]"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-10">
        <header className="flex justify-end mb-16">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </header>

        <section className="mb-8">
          <div
            className={`grid grid-cols-2 max-w-sm p-1 rounded-xl ${
              dark ? "bg-[#1b1b1b]" : "bg-gray-200"
            }`}
          >
            {(["OLAT", "Materials"] as const).map((item) => (
              <button
                key={item}
                onClick={() => {
                  setCategory(item);
                  setSearch("");
                }}
                className={`py-3 rounded-lg text-sm font-medium transition-all ${
                  category === item
                    ? dark
                      ? "bg-[#333] text-white shadow"
                      : "bg-white text-black shadow"
                    : "opacity-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className={`w-full rounded-xl border p-4 pl-11 outline-none focus:border-blue-500 ${
                dark
                  ? "bg-[#1b1b1b] border-white/10"
                  : "bg-white border-black/10"
              }`}
            />
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filtered.map((link) => {
              const Icon = icons[link.icon] || Globe;

              return (
                <a
                  key={link.slug}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col justify-between rounded-xl border p-4 h-32 transition-all hover:-translate-y-0.5 hover:border-blue-500/50 ${
                    dark
                      ? "bg-[#1b1b1b] border-white/[0.07] hover:bg-[#222]"
                      : "bg-white border-black/[0.07] hover:bg-gray-50"
                  }`}
                >
                  <Icon
                    size={21}
                    className={colors[link.color] || "opacity-60"}
                  />
                  <span className="text-sm font-medium">
                    {link.title}
                  </span>
                </a>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-sm opacity-40">No results.</p>
          )}
        </section>
      </div>
    </main>
  );
}
