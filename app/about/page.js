export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-6">
          About the Study
        </p>

        <h1 className="text-6xl font-black mb-10">
          Research Overview
        </h1>

        <div className="space-y-8 text-slate-300 leading-relaxed text-lg">
          <p>
            This study examined the relationship between Generative Artificial
            Intelligence integrated pedagogy and the quality of student outputs
            in web design courses among Information Technology students.
          </p>

          <p>
            The study aligned with Sustainable Development Goal 4 by promoting
            quality education through responsible and technology-driven
            instructional practices.
          </p>

          <p>
            Guided by Diffusion of Innovation Theory, the research emphasized
            that the effectiveness of GenAI depends not on frequency of use
            alone, but on meaningful pedagogical integration.
          </p>
        </div>
      </div>
    </main>
  );
}