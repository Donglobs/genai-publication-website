import {
  Brain,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  MonitorSmartphone,
  Mail,
  BadgeInfo,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative py-32 px-6 border-b border-white/10 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-slate-950 to-cyan-900 opacity-90"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_30%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-8">
            Curriculum Vitae
          </p>

          <h1 className="text-6xl md:text-7xl font-black mb-10">
            Reuben Llobia
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl">
            Information Technology educator, researcher, and digital learning
            advocate specializing in GenAI-integrated pedagogy, web design,
            educational technology, and responsible AI integration in teaching
            and learning.
          </p>

        </div>

      </section>

      {/* PROFILE */}
      <section className="py-28 px-6 border-b border-white/10">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-6">
              Professional Profile
            </p>

            <h2 className="text-5xl font-black mb-10">
              Academic and Professional Background
            </h2>

            <div className="space-y-8 text-slate-300 text-lg leading-relaxed">

              <p>
                A college instructor and Information Technology professional
                with extensive experience in educational technology,
                programming, web design, computer systems servicing, and
                digital learning integration.
              </p>

              <p>
                Currently teaching Information Technology courses at Gingoog
                City Colleges, Inc., focusing on web design, programming,
                databases, and technology-enhanced learning environments.
              </p>

              <p>
                Passionate about integrating emerging technologies and
                Generative Artificial Intelligence into instruction to improve
                creativity, engagement, and student learning outcomes.
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="grid gap-8">

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-8">
              <GraduationCap size={42} className="text-cyan-400 mb-6" />

              <h3 className="text-2xl font-black mb-4">
                Education
              </h3>

              <p className="text-slate-300">
                Bachelor of Science in Information Technology (BSIT)
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-8">
              <Briefcase size={42} className="text-cyan-400 mb-6" />

              <h3 className="text-2xl font-black mb-4">
                Professional Experience
              </h3>

              <p className="text-slate-300">
                College Instructor, ICT Educator, Computer Technical Support,
                Content Creator, and Researcher.
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-8">
              <Award size={42} className="text-cyan-400 mb-6" />

              <h3 className="text-2xl font-black mb-4">
                Certifications
              </h3>

              <p className="text-slate-300">
                NC II Caregiving Certification and technology-related academic
                competencies.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* EXPERTISE */}
      <section className="py-28 px-6 bg-slate-900 border-b border-white/10">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-6">
            Areas of Expertise
          </p>

          <h2 className="text-5xl font-black mb-16">
            Research and Technical Competencies
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {[
              "Web Design and Development",
              "Programming and Databases",
              "Educational Technology",
              "GenAI-Integrated Pedagogy",
              "Computer Systems Servicing",
              "Digital Learning Integration",
              "Research and Data Analysis",
              "Technology-Based Instruction",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-white/10 rounded-[2rem] p-8 hover:border-cyan-400/40 transition"
              >

                <MonitorSmartphone
                  size={40}
                  className="text-cyan-400 mb-6"
                />

                <h3 className="text-2xl font-black leading-tight">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* RESEARCH */}
      <section className="py-28 px-6 border-b border-white/10">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-6">
            Research Interests
          </p>

          <h2 className="text-5xl font-black mb-16">
            Research and Publication Focus
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-10">
              <BookOpen size={46} className="text-cyan-400 mb-8" />

              <h3 className="text-2xl font-black mb-6">
                AI in Education
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Ethical and responsible integration of Generative AI in
                technology-enhanced learning environments.
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-10">
              <MonitorSmartphone size={46} className="text-cyan-400 mb-8" />

              <h3 className="text-2xl font-black mb-6">
                Web Design Education
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Improving creativity, usability, and instructional quality in
                web design courses.
              </p>
            </div>

            <div className="bg-slate-900 border border-white/10 rounded-[2rem] p-10">
              <Brain size={46} className="text-cyan-400 mb-8" />

              <h3 className="text-2xl font-black mb-6">
                Digital Pedagogy
              </h3>

              <p className="text-slate-300 leading-relaxed">
                Learner-centered approaches to digital transformation and
                educational innovation.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="py-28 px-6 bg-slate-900">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-bold mb-6">
            Contact Information
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-12">
            Academic and Professional Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-950 border border-white/10 rounded-[2rem] p-10">

              <Mail size={46} className="text-cyan-400 mb-8 mx-auto" />

              <h3 className="text-2xl font-black mb-4">
                Institution
              </h3>

              <p className="text-slate-300">
                Gingoog City Colleges, Inc.
              </p>

            </div>

            <div className="bg-slate-950 border border-white/10 rounded-[2rem] p-10">

              <BadgeInfo size={46} className="text-cyan-400 mb-8 mx-auto" />

              <h3 className="text-2xl font-black mb-4">
                Facebook
              </h3>

              <p className="text-slate-300">
                /Rllobia2023
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}