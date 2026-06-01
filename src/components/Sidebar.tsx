"use client";
import { useState } from "react";
import { Home, BookOpen, Settings } from "lucide-react";

export default function Sidebar() {

  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
  className={`h-screen bg-zinc-950 text-white p-6
  ${collapsed ? "w-20" : "w-64"}`}
>
      {/* Logo / Brand */}
      <div className="text-xl font-bold">
  {collapsed ? "LD" : "Learning-Dashboard"}
</div>

      <button
  onClick={() => setCollapsed(!collapsed)}
>
  Toggle
</button>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 mt-6">

        <div className={`flex items-center p-2 rounded-lg hover:bg-zinc-800
${collapsed ? "justify-center" : "gap-3"}`}>
  <Home size={18} />

  {!collapsed && (
    <span>Dashboard</span>
  )}
</div>

        <div className={`flex items-center p-2 rounded-lg hover:bg-zinc-800
${collapsed ? "justify-center" : "gap-3"}`}>
  <Home size={18} />

  {!collapsed && (
    <span>Courses</span>
  )}
</div>

        <div className={`flex items-center p-2 rounded-lg hover:bg-zinc-800
${collapsed ? "justify-center" : "gap-3"}`}>
  <Home size={18} />

  {!collapsed && (
    <span>Settings</span>
  )}
</div>

      </nav>

    </aside>
  );
}