"use client";

import {
  Brain,
  ShieldCheck,
  LineChart,
  RefreshCcw,
  SearchCheck,
  MonitorSmartphone,
} from "lucide-react";

const guidelines = [
  {
    icon: Brain,
    title: "Structured Instructional Design",
    text: "GenAI shall be intentionally integrated into lesson objectives, learning activities, and assessment tasks to support meaningful learning outcomes.",
  },

  {
    icon: ShieldCheck,
    title: "AI as Cognitive Support",
    text: "AI tools shall support brainstorming, creativity, and reflective learning rather than replace independent thinking and critical analysis.",
  },

  {
    icon: RefreshCcw,
    title: "Continuous Improvement",
    text: "Students shall revise and improve AI-assisted outputs through reflective refinement processes and continuous evaluation.",
  },

  {
    icon: SearchCheck,
    title: "Critical Evaluation Skills",
    text: "Students shall critically assess AI-generated outputs for usability, originality, audience alignment, structure, and overall design quality.",
  },

  {
    icon: LineChart,
    title: "Ethical AI Usage",
    text: "Responsible use, proper attribution, transparency, and academic integrity shall always be practiced when using AI technologies.",
  },

  {
    icon: MonitorSmartphone,
    title: "Diversified AI Engagement",
    text: "Students and instructors shall explore multiple AI tools based on instructional relevance and meaningful learning goals.",
  },

  {
    icon: Brain,
    title: "Monitoring and Quality Control",
    text: "Institutions shall continuously evaluate the effectiveness of AI integration in improving student performance and instructional outcomes.",
  },

  {
    icon: ShieldCheck,
    title: "Learner-Centered Integration",
    text: "AI integration shall prioritize creativity, higher-order thinking, learner engagement, and authentic skill development in web design education.",
  },
];

export default function GuidelinesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-32 px-6 border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-slate-950 to-cyan-900 opacity-90"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_30%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-8">
            Responsible AI Integration
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight max-w-5xl mb-10">
            Guidelines for Responsible AI Usage in Web Design Courses
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
            Promoting ethical, structured, and outcomes-based integration of
            Generative Artificial Intelligence to improve creativity, learning,
            instructional quality, and student output development.
          </p>

        </div>
      </section>

      {/* CORE MESSAGE */}
      <section className="py-24 px-6 border-b border-white/10">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-6">
            Core Insight
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
            AI integration alone does not automatically improve learning outcomes.
          </h2>

          <p className="text-slate-300 text-xl leading-relaxed">
            The findings revealed that while GenAI tools were widely used in
            web design education, meaningful improvements depended on
            structured pedagogy, reflective refinement, ethical implementation,
            and critical evaluation.
          </p>

        </div>
      </section>

      {/* GUIDELINES GRID */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-6">
              Proposed Guidelines
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Framework for Responsible AI Integration
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {guidelines.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative bg-slate-900 border border-white/10 rounded-[2rem] p-10 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-2"
                >

                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/5 to-blue-700/5 opacity-0 group-hover:opacity-100 transition"></div>

                  <div className="relative z-10">

                    <div className="w-20 h-20 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-8">

                      <Icon
                        size={40}
                        className="text-cyan-400"
                      />

                    </div>

                    <div className="flex items-center gap-4 mb-6">

                      <div className="w-12 h-12 rounded-2xl bg-cyan-400 text-slate-950 flex items-center justify-center font-black text-lg">
                        {index + 1}
                      </div>

                      <h3 className="text-2xl font-black leading-tight">
                        {item.title}
                      </h3>

                    </div>

                    <p className="text-slate-300 leading-relaxed text-lg">
                      {item.text}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* FINAL INSIGHT */}
      <section className="py-28 px-6 bg-slate-900 border-t border-white/10">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-6">
            Conclusion
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-10">
            GenAI shall function not merely as a productivity tool.
          </h2>

          <p className="text-slate-300 text-xl leading-relaxed">
            The effectiveness of AI in web design education depends on
            meaningful pedagogical integration, continuous improvement,
            ethical responsibility, and learner-centered implementation.
          </p>

        </div>
      </section>

    </main>
  );
}