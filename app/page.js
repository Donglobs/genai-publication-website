"use client";

import Link from "next/link";
import {
  Brain,
  GraduationCap,
  BarChart3,
  ShieldCheck,
  Sparkles,
  BookOpen,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-36 px-6 overflow-hidden border-b border-white/10">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-slate-950 to-cyan-900 opacity-90"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_30%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-8">
            Research Publication Website
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight max-w-6xl mb-10">
            GenAI Integrated Pedagogy in Web Design Education
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
            A research-based digital publication platform exploring the
            relationship between Generative Artificial Intelligence integrated
            pedagogy and the quality of student web design outputs among BSIT
            students.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-6 mt-14">

            <Link
              href="/findings"
              className="px-10 py-5 rounded-3xl bg-cyan-400 text-slate-950 font-black text-lg hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
            >
              Explore Findings
            </Link>

            <Link
              href="/guidelines"
              className="px-10 py-5 rounded-3xl border border-white/20 text-white font-black text-lg hover:bg-white/10 transition duration-300"
            >
              View Guidelines
            </Link>

          </div>

        </div>

      </section>

      {/* OVERVIEW */}
      <section className="py-28 px-6 border-b border-white/10">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-6">
              Research Overview
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
              AI integration alone does not automatically improve learning outcomes.
            </h2>

            <p className="text-slate-300 text-xl leading-relaxed">
              The study revealed that while GenAI tools were widely utilized in
              web design courses, meaningful improvement in student output
              quality depended on structured pedagogy, reflective refinement,
              ethical implementation, and learner-centered integration.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 gap-8">

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-8">
              <Brain size={42} className="text-cyan-400 mb-6" />

              <h3 className="text-3xl font-black mb-4">
                2.68
              </h3>

              <p className="text-slate-300">
                Overall level of GenAI-integrated pedagogy.
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-8">
              <BarChart3 size={42} className="text-cyan-400 mb-6" />

              <h3 className="text-3xl font-black mb-4">
                1.79
              </h3>

              <p className="text-slate-300">
                Quality of student web design outputs.
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-8">
              <GraduationCap size={42} className="text-cyan-400 mb-6" />

              <h3 className="text-3xl font-black mb-4">
                80
              </h3>

              <p className="text-slate-300">
                Second-year BSIT student respondents.
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-8">
              <ShieldCheck size={42} className="text-cyan-400 mb-6" />

              <h3 className="text-3xl font-black mb-4">
                3
              </h3>

              <p className="text-slate-300">
                Expert validators evaluated the student outputs.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* SDG */}
      <section className="py-28 px-6 bg-slate-900 border-b border-white/10">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-6">
            Sustainable Development Goal
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-12">
            SDG 4 — Quality Education
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-slate-300 text-xl leading-relaxed">
                This study supports Sustainable Development Goal 4 by promoting
                ethical, inclusive, and technology-enhanced learning practices
                through responsible integration of Generative Artificial
                Intelligence in education.
              </p>
            </div>

            <div className="bg-slate-950 border border-white/10 rounded-[2rem] p-10">

              <Sparkles size={52} className="text-cyan-400 mb-8" />

              <h3 className="text-3xl font-black mb-6">
                Technology Enhanced Learning
              </h3>

              <p className="text-slate-300 leading-relaxed text-lg">
                The proposed framework emphasizes creativity, critical thinking,
                ethical responsibility, learner engagement, and meaningful
                digital transformation in web design education.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* METHODOLOGY */}
      <section className="py-28 px-6 border-b border-white/10">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-6">
            Methodology
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-16">
            Research Design and Statistical Treatment
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-10">
              <BookOpen size={46} className="text-cyan-400 mb-8" />

              <h3 className="text-2xl font-black mb-6">
                Research Design
              </h3>

              <p className="text-slate-300 leading-relaxed">
                The study utilized a descriptive-correlational research design
                to determine the relationship between GenAI-integrated pedagogy
                and student output quality.
              </p>

            </div>

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-10">
              <GraduationCap size={46} className="text-cyan-400 mb-8" />

              <h3 className="text-2xl font-black mb-6">
                Sampling
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Purposive sampling was utilized involving 80 second-year BSIT
                students enrolled in web design courses and three expert
                evaluators.
              </p>

            </div>

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-10">
              <BarChart3 size={46} className="text-cyan-400 mb-8" />

              <h3 className="text-2xl font-black mb-6">
                Statistical Tools
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Frequency count, percentage, weighted mean, Kruskal-Wallis H-test, and Pearson
                r correlation were utilized for data analysis and interpretation.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-slate-900">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-6">
            Research Dissemination
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
            Explore the complete research publication platform.
          </h2>

          <p className="text-slate-300 text-xl leading-relaxed mb-14">
            Access the findings, proposed guidelines, publication framework,
            and responsible AI integration model developed from the study.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <Link
              href="/findings"
              className="px-10 py-5 rounded-3xl bg-cyan-400 text-slate-950 font-black text-lg hover:scale-105 transition duration-300"
            >
              Research Findings
            </Link>

            <Link
              href="/publication"
              className="px-10 py-5 rounded-3xl border border-white/20 text-white font-black text-lg hover:bg-white/10 transition duration-300"
            >
              View Publication
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}