export default function CourseSkeleton() {
  return (
    <div className="p-5 rounded-xl bg-zinc-900 animate-pulse space-y-3">
      <div className="h-4 bg-zinc-800 rounded w-1/2" />
      <div className="h-2 bg-zinc-800 rounded w-full" />
      <div className="h-2 bg-zinc-800 rounded w-3/4" />
    </div>
  );
}