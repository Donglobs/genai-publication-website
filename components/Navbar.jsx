"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <div className="w-11 h-11 rounded-2xl bg-cyan-400 flex items-center justify-center text-slate-950 font-black text-lg">
            AI
          </div>

          <div>
            <h1 className="text-lg font-black tracking-wide text-white">
              GenAI Research
            </h1>

            <p className="text-xs text-slate-300">
              Publication Website
            </p>
          </div>

        </div>

        {/* RIGHT */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">

          <Link
            href="/"
            className="hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-cyan-400 transition"
          >
            About
          </Link>

          <Link
            href="/findings"
            className="hover:text-cyan-400 transition"
          >
            Findings
          </Link>

          <Link
            href="/guidelines"
            className="hover:text-cyan-400 transition"
          >
            Guidelines
          </Link>

          <Link
            href="/publication"
            className="hover:text-cyan-400 transition"
          >
            Publication
          </Link>

          <Link
            href="/downloads"
            className="hover:text-cyan-400 transition"
          >
            Downloads
          </Link>

          <Link
            href="/contact"
            className="hover:text-cyan-400 transition"
          >
            Author Info
          </Link>

        </nav>

      </div>
    </header>
  );
}