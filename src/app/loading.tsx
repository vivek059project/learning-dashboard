import CourseSkeleton from "@/components/CourseSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col md:flex-row">

      {/* Sidebar Skeleton */}
      <aside className="hidden md:block w-64 p-6">
        <div className="h-8 bg-zinc-800 rounded animate-pulse" />
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-6 space-y-6">

        {/* Hero Skeleton */}
        <div className="h-40 rounded-2xl bg-zinc-900 animate-pulse" />

        {/* Bento Grid Skeleton */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Activity Skeleton */}
          <div className="h-64 rounded-xl bg-zinc-900 animate-pulse" />

          {/* Course Skeletons */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">

            <CourseSkeleton />
            <CourseSkeleton />
            <CourseSkeleton />
            <CourseSkeleton />

          </div>

        </section>

      </section>

    </main>
  );
}