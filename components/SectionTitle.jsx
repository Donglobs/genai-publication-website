export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="max-w-4xl">
      <p className="uppercase tracking-[0.3em] text-cyan-400 font-bold mb-4">
        {title}
      </p>

      <h2 className="text-5xl font-black leading-tight mb-6">
        {subtitle}
      </h2>
    </div>
  );
}