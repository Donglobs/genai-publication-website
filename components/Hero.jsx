"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-slate-950 to-cyan-900 opacity-90"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_30%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-8">
            Responsible AI Integration
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight max-w-5xl mb-10">
            Guidelines for Responsible AI Usage in Web Design Courses
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            Promoting ethical, structured, and outcomes-based AI integration
            to improve creativity, learning, instructional quality, and
            student output quality.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-6 mt-12">

            <Link
              href="/findings"
              className="px-10 py-5 rounded-3xl bg-cyan-400 text-slate-950 font-black text-lg hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
            >
              Explore Findings
            </Link>

            <Link
              href="/publication"
              className="px-10 py-5 rounded-3xl border border-white/20 text-white font-black text-lg hover:bg-white/10 transition duration-300"
            >
              View Publication
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}