import { Home, BookOpen, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-zinc-950 text-white p-6 flex flex-col gap-6">
      
      {/* Logo / Brand */}
      <div className="text-xl font-bold">
       Learning-Dashboard
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 mt-6">

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 cursor-pointer">
          <Home size={18} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 cursor-pointer">
          <BookOpen size={18} />
          <span>Courses</span>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 cursor-pointer">
          <Settings size={18} />
          <span>Settings</span>
        </div>

      </nav>

    </aside>
  );
}