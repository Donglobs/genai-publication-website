import {
  FileText,
  BookOpen,
  GraduationCap,
  BadgeCheck,
  Database,
  Quote,
} from "lucide-react";

export default function PublicationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative py-32 px-6 border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-slate-950 to-cyan-900 opacity-90"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_30%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-8">
            Digital Research Publication
          </p>

          <h1 className="text-6xl md:text-7xl font-black leading-tight max-w-6xl mb-10">
            Publication Metadata and Research Indexing
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
            A simulated academic publication framework for responsible AI
            integration research in web design education.
          </p>

        </div>

      </section>

      {/* DOI SECTION */}
      <section className="py-28 px-6 border-b border-white/10">

        <div className="max-w-7xl mx-auto">

          <div className="bg-slate-900 border border-cyan-400/20 rounded-[2rem] p-12">

            <div className="flex items-center gap-6 mb-10">

              <div className="w-20 h-20 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">

                <BadgeCheck
                  size={42}
                  className="text-cyan-400"
                />

              </div>

              <div>

                <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-2">
                  Simulated DOI
                </p>

                <h2 className="text-4xl md:text-5xl font-black">
                  10.2026/GCC.GenAI.001
                </h2>

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-12">

              <div className="space-y-8">

                <div>
                  <p className="text-cyan-400 font-bold mb-2">
                    Title
                  </p>

                  <p className="text-slate-300 text-lg leading-relaxed">
                    GenAI Integrated Pedagogy in Web Design Courses and Its
                    Influence on the Quality of Student Outputs Among BSIT
                    Students
                  </p>
                </div>

                <div>
                  <p className="text-cyan-400 font-bold mb-2">
                    Author
                  </p>

                  <p className="text-slate-300 text-lg">
                    Reuben Llobia
                  </p>
                </div>

                <div>
                  <p className="text-cyan-400 font-bold mb-2">
                    Institution
                  </p>

                  <p className="text-slate-300 text-lg">
                    Gingoog City Colleges, Inc.
                  </p>
                </div>

                <div>
                  <p className="text-cyan-400 font-bold mb-2">
                    Program
                  </p>

                  <p className="text-slate-300 text-lg">
                    Bachelor of Science in Information Technology
                  </p>
                </div>

              </div>

              <div className="space-y-8">

                <div>
                  <p className="text-cyan-400 font-bold mb-2">
                    Publication Year
                  </p>

                  <p className="text-slate-300 text-lg">
                    2026
                  </p>
                </div>

                <div>
                  <p className="text-cyan-400 font-bold mb-2">
                    Research Category
                  </p>

                  <p className="text-slate-300 text-lg">
                    Educational Technology and Artificial Intelligence
                  </p>
                </div>

                <div>
                  <p className="text-cyan-400 font-bold mb-2">
                    Status
                  </p>

                  <p className="text-slate-300 text-lg">
                    Academic Publication Prototype
                  </p>
                </div>

                <div>
                  <p className="text-cyan-400 font-bold mb-2">
                    Accessibility
                  </p>

                  <p className="text-slate-300 text-lg">
                    Open Access Research Publication
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABSTRACT */}
      <section className="py-28 px-6 border-b border-white/10">

        <div className="max-w-5xl mx-auto">

          <div className="flex items-center gap-4 mb-10">

            <FileText
              size={42}
              className="text-cyan-400"
            />

            <h2 className="text-5xl font-black">
              Abstract
            </h2>

          </div>

          <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-12">

            <p className="text-slate-300 text-xl leading-relaxed">
              This study determined the GenAI-integrated pedagogy in web design
              courses and its influence on the quality of student outputs among
              Information Technology students at Gingoog City Colleges, Inc.
              Utilizing a descriptive-correlational research design, the study
              examined instructional integration, AI usage behavior, output
              quality, and proposed guidelines for responsible AI integration
              in web design education.
            </p>

          </div>

        </div>

      </section>

      {/* KEYWORDS */}
      <section className="py-28 px-6 border-b border-white/10 bg-slate-900">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-14">

            <Database
              size={42}
              className="text-cyan-400"
            />

            <h2 className="text-5xl font-black">
              Indexing Keywords
            </h2>

          </div>

          <div className="flex flex-wrap gap-6">

            {[
              "Generative Artificial Intelligence",
              "GenAI Integrated Pedagogy",
              "Web Design Education",
              "Educational Technology",
              "AI in Education",
              "Responsible AI Usage",
              "Digital Learning",
              "Technology Integration",
              "Student Output Quality",
              "BSIT Education",
              "Instructional Design",
              "AI Ethics",
            ].map((keyword, index) => (
              <div
                key={index}
                className="px-8 py-4 rounded-2xl bg-slate-950 border border-white/10 text-lg text-slate-300 hover:border-cyan-400/40 transition"
              >
                {keyword}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CITATION */}
      <section className="py-28 px-6 border-b border-white/10">

        <div className="max-w-6xl mx-auto">

          <div className="flex items-center gap-4 mb-14">

            <Quote
              size={42}
              className="text-cyan-400"
            />

            <h2 className="text-5xl font-black">
              Citation Formats
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-10">

              <h3 className="text-3xl font-black mb-8">
                APA 7th Edition
              </h3>

              <p className="text-slate-300 leading-relaxed text-lg">
                Llobia, R. (2026). GenAI integrated pedagogy in web design
                courses and its influence on the quality of student outputs
                among BSIT students. Gingoog City Colleges, Inc.
              </p>

            </div>

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-10">

              <h3 className="text-3xl font-black mb-8">
                MLA Format
              </h3>

              <p className="text-slate-300 leading-relaxed text-lg">
                Llobia, Reuben. GenAI Integrated Pedagogy in Web Design Courses
                and Its Influence on the Quality of Student Outputs Among BSIT
                Students. Gingoog City Colleges, Inc., 2026.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PUBLICATION STATS */}
      <section className="py-28 px-6 bg-slate-900">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-14">

            <BookOpen
              size={42}
              className="text-cyan-400"
            />

            <h2 className="text-5xl font-black">
              Publication Information
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                title: "Research Respondents",
                value: "80",
              },
              {
                title: "Expert Evaluators",
                value: "3",
              },
              {
                title: "Proposed Guidelines",
                value: "8",
              },
              {
                title: "Research Problems",
                value: "6",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-white/10 rounded-[2rem] p-10 text-center"
              >

                <h3 className="text-6xl font-black text-cyan-400 mb-6">
                  {item.value}
                </h3>

                <p className="text-slate-300 text-lg">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}