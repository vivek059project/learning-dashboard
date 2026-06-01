export default function HeroTile() {
  return (
    <section className="w-full p-6 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-800 text-white relative overflow-hidden">
      
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-violet-500 to-cyan-500 blur-2xl" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-2xl font-bold">
          Welcome back 👋
        </h1>

        <p className="text-zinc-300 mt-1">
          Keep pushing your learning streak today.
        </p>

        {/* Stats */}
        <div className="flex gap-6 mt-4">
          
          <div>
            <p className="text-sm text-zinc-400">Current Streak</p>
            <p className="text-xl font-semibold">14 days</p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Today’s Focus</p>
            <p className="text-xl font-semibold">Frontend</p>
          </div>

        </div>
      </div>

    </section>
  );
}