export default function GuidelineCard({
  number,
  title,
  text,
}) {
  return (
    <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 transition">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-500 flex items-center justify-center text-2xl font-black mb-6">
        {number}
      </div>

      <h3 className="text-2xl font-black mb-4">
        {title}
      </h3>

      <p className="text-slate-300 leading-relaxed">
        {text}
      </p>
    </div>
  );
}