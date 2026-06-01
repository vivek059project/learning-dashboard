"use client";

import { Home, BookOpen, Settings } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MobileNav() {
  const [active, setActive] = useState("Home");

  const items = [
    { name: "Home", icon: Home },
    { name: "Courses", icon: BookOpen },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-800 flex justify-around py-3">

      {items.map((item) => {
        const Icon = item.icon;

        return (
          <motion.button
            key={item.name}
            onClick={() => setActive(item.name)}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center text-xs"
          >
            <Icon
              size={20}
              className={
                active === item.name
                  ? "text-cyan-400"
                  : "text-zinc-400"
              }
            />

            <span
              className={
                active === item.name
                  ? "text-cyan-400"
                  : "text-zinc-400"
              }
            >
              {item.name}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}