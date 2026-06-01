export default function ActivityTile() {
  return (
    <article className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 text-white">
      
      <h2 className="font-semibold mb-4">
        Activity Overview
      </h2>

      {/* Fake activity grid (dashboard style) */}
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 21 }).map((_, i) => (
          <div
            key={i}
            className={`h-6 rounded ${
              Math.random() > 0.5
                ? "bg-cyan-500/60"
                : "bg-zinc-800"
            }`}
          />
        ))}
      </div>

      <p className="text-xs text-zinc-400 mt-3">
        Weekly learning activity
      </p>

    </article>
  );
}