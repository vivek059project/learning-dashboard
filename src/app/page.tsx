import { supabase } from "@/lib/supabase";
import { Course } from "@/types/course";

import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import CourseCard from "@/components/CourseCard";
import ActivityTile from "@/components/ActivityTile";

export default async function Home() {
  const { data, error } = await supabase
    .from("Learning_dashboard")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center text-red-500">
        {error.message}
      </main>
    );
  }

  const courses: Course[] = data ?? [];

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col md:flex-row">

      {/* Sidebar */}
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      {/* Main */}
      <section className="flex-1 p-6 space-y-6">

        {/* Hero */}
        <header>
          <HeroTile />
        </header>

        {/* Bento Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Activity */}
          <article className="lg:col-span-1">
            <ActivityTile />
          </article>

          {/* Courses */}
          <section className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </section>

        </section>

      </section>

    </main>
  );
}