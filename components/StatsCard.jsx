export default function StatsCard({ value, label }) {
  return (
    <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition">
      <h3 className="text-5xl font-black text-cyan-400 mb-4">
        {value}
      </h3>

      <p className="text-slate-300 leading-relaxed">
        {label}
      </p>
    </div>
  );
}