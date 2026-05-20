import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-cyan-400 flex items-center justify-center text-slate-950 font-black text-lg">
                AI
              </div>

              <div>
                <h2 className="text-2xl font-black text-white">
                  GenAI Research
                </h2>

                <p className="text-slate-400 text-sm">
                  Publication Website
                </p>
              </div>

            </div>

            <p className="text-slate-400 leading-relaxed max-w-md">
              A research-based digital publication platform presenting the
              findings, conclusions, and proposed guidelines on responsible
              AI integration in web design education.
            </p>

          </div>

          {/* CENTER */}
          <div>

            <h3 className="text-lg font-black text-white mb-6">
              Navigation
            </h3>

            <div className="space-y-4 text-slate-400">

              <Link href="/" className="block hover:text-cyan-400 transition">
                Home
              </Link>

              <Link href="/about" className="block hover:text-cyan-400 transition">
                About
              </Link>

              <Link href="/findings" className="block hover:text-cyan-400 transition">
                Findings
              </Link>

              <Link href="/guidelines" className="block hover:text-cyan-400 transition">
                Guidelines
              </Link>

              <Link href="/publication" className="block hover:text-cyan-400 transition">
                Publication
              </Link>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <h3 className="text-lg font-black mb-6">
              Research Information
            </h3>

            <div className="space-y-4 text-slate-400">

              <p>
                BS Information Technology
              </p>

              <p>
                Gingoog City Colleges, Inc.
              </p>

              <p>
                Responsible AI Integration Framework
              </p>

              <p>
                /Rllobia2023
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-slate-500 text-sm">
            © 2026 GenAI Research Publication Website. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Developed for academic research dissemination and responsible AI advocacy.
          </p>

        </div>

      </div>

    </footer>
  );
}