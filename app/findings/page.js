"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const pedagogyData = [
  {
    name: "Idea Generation",
    value: 2.84,
  },
  {
    name: "Coding Support",
    value: 2.67,
  },
  {
    name: "Design Refinement",
    value: 2.63,
  },
  {
    name: "Feedback",
    value: 2.58,
  },
];

const qualityData = [
  {
    name: "Panel 1",
    value: 1.79,
  },
  {
    name: "Panel 2",
    value: 1.77,
  },
  {
    name: "Panel 3",
    value: 1.82,
  },
];

export default function FindingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-6">
            Findings Dashboard
          </p>

          <h1 className="text-6xl md:text-7xl font-black mb-10">
            Research Findings
          </h1>

          <p className="text-slate-300 text-xl leading-relaxed max-w-4xl">
            This dashboard presents the summarized findings derived from the
            study on GenAI-integrated pedagogy and the quality of student web
            design outputs among BSIT students.
          </p>
        </div>
      </section>

      {/* PROBLEM 1 */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-4">
              Problem 1
            </p>

            <h2 className="text-5xl font-black mb-6">
              Profile of GenAI Usage
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-5xl">
              The findings revealed that students frequently utilized GenAI tools,
              particularly ChatGPT, for coding support, research activities,
              content generation, and web design-related tasks. Most respondents
              reported using GenAI several times per week, demonstrating high
              accessibility and widespread adoption of AI tools in web design
              education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-5xl font-black text-cyan-400 mb-4">
                61
              </h3>

              <p className="text-slate-300">
                Students primarily used GenAI for coding-related tasks.
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-5xl font-black text-cyan-400 mb-4">
                39
              </h3>

              <p className="text-slate-300">
                Students reported using GenAI several times per week.
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-5xl font-black text-cyan-400 mb-4">
                ChatGPT
              </h3>

              <p className="text-slate-300">
                emerged as the most dominant AI platform used by students.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEM 2 */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-4">
              Problem 2
            </p>

            <h2 className="text-5xl font-black mb-6">
              Level of GenAI-Integrated Pedagogy
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-5xl">
              The overall level of GenAI-integrated pedagogy was interpreted as
              neutral with a grand mean of 2.68. Idea generation obtained the
              highest mean, while feedback and improvement received the lowest
              mean, indicating limited integration of AI in reflective and
              evaluative learning processes.
            </p>
          </div>

          <div className="bg-slate-950 rounded-3xl p-10 border border-white/10">
            <div className="h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pedagogyData}>
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#22d3ee"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM 3 */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-4">
              Problem 3
            </p>

            <h2 className="text-5xl font-black mb-6">
              Significant Differences in GenAI Usage
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-5xl">
              No significant differences were found across text-based tools,
              image generation tools, and purpose of use. However, significant
              differences were observed in relation to code generation tools and
              frequency of use, particularly in higher-order learning processes
              such as idea generation, refinement, and feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-3xl font-black text-cyan-400 mb-4">
                Significant
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Differences were observed in code generation tools and frequency
                of use.
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
              <h3 className="text-3xl font-black text-cyan-400 mb-4">
                Not Significant
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Text-based tools, image generation tools, and purpose of use
                showed no significant differences.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEM 4 */}
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-4">
              Problem 4
            </p>

            <h2 className="text-5xl font-black mb-6">
              Quality of Student Outputs
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-5xl">
              The quality of student web design outputs was interpreted as
              developing, with an overall mean score of 1.79. The findings
              indicate that while students were able to produce outputs
              efficiently using AI tools, the overall quality remained moderate.
            </p>
          </div>

          <div className="bg-slate-950 rounded-3xl p-10 border border-white/10">
            <div className="h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={qualityData}>
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Bar
                    dataKey="value"
                    fill="#3b82f6"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM 5 */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-4">
              Problem 5
            </p>

            <h2 className="text-5xl font-black mb-6">
              Relationship Between Variables
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-5xl">
              The relationship between GenAI-integrated pedagogy and the quality
              of student outputs was generally weak and not statistically
              significant. This indicates that frequent AI usage alone does not
              necessarily improve output quality in web design education.
            </p>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-8">

              <div>
                <h3 className="text-3xl font-black text-cyan-400 mb-4">
                  Weak Correlation
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  Most dimensions revealed weak negative correlations with
                  non-significant p-values greater than 0.05.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-cyan-400 mb-4">
                  Interpretation
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  The findings suggest that structured pedagogical integration,
                  rather than mere AI exposure, is necessary to improve learning
                  outcomes and student output quality.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM 6 */}
      <section className="py-24 px-6 bg-slate-900 border-t border-white/10">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-4">
              Problem 6
            </p>

            <h2 className="text-5xl font-black mb-6">
              Proposed Guidelines
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-5xl">
              Based on the findings, the study proposed structured guidelines
              for responsible AI usage in web design courses emphasizing ethical
              integration, continuous improvement, analytical thinking,
              diversified AI engagement, and institutional monitoring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {[
                "Structured Instructional Design",
                "AI as Cognitive Support",
                "Continuous Improvement",
                "Critical Evaluation Skills",
                "Ethical AI Usage",
                "Diversified AI Engagement",
                "Monitoring and Quality Control",
                "Learner-Centered Integration",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-400 text-slate-950 flex items-center justify-center text-xl font-black mb-6">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-black">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}