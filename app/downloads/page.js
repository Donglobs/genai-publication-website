import { Download } from "lucide-react";

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-6">
          Downloads
        </p>

        <h1 className="text-6xl font-black mb-16">
          Research Resources
        </h1>

        <div className="space-y-6">
          {[
            "Full Thesis PDF",
            "Research Brochure",
            "Research Poster",
            "Defense Presentation",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-white/10 rounded-3xl p-8 flex items-center justify-between"
            >
              <h2 className="text-2xl font-bold">
                {item}
              </h2>

              <button className="flex items-center gap-3 bg-cyan-400 text-slate-950 px-6 py-3 rounded-2xl font-bold">
                <Download size={20} />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}