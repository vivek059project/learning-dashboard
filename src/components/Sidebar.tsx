"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Home, BookOpen, Settings } from "lucide-react";

export default function Sidebar() {

  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const navItems = [
  { name: "Dashboard", icon: Home },
  { name: "Courses", icon: BookOpen },
  { name: "Settings", icon: Settings },
];

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
     <nav className="flex flex-col gap-2 mt-6">

  {navItems.map((item) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={item.name}
        layout
        onClick={() => setActive(item.name)}
        className={`relative flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
  collapsed ? "justify-center" : "gap-3"
}`}
whileHover={{ scale: 1.02 }}
        
      >

        {/* ACTIVE BACKGROUND (ANIMATED) */}
        {active === item.name && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-zinc-800 rounded-lg"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        )}

        {/* ICON */}
        <Icon size={18} className="relative z-10" />

        {/* TEXT */}
        {!collapsed && (
          <span className="relative z-10">{item.name}</span>
        )}

      </motion.div>
    );
  })}



     

      </nav>

    </aside>
  );
}