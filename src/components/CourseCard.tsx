"use client";
import {motion} from "framer-motion";
import { Course } from "@/types/course";
import { BookOpen, Code, Brain } from "lucide-react";

type Props = {
  course: Course;
};

const icons = {
  Code,
  BookOpen,
  Brain,
};

export default function CourseCard({ course }: Props) {
  const Icon =
    icons[course.icon_name as keyof typeof icons] || BookOpen;

  return (
   <motion.article
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.03 }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20,
  }}
  className="p-5 rounded-xl bg-zinc-900 text-white border border-zinc-800 hover:border-zinc-600 transition"
>
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <Icon size={18} className="text-cyan-400" />

        <h2 className="font-semibold">
          {course.title}
        </h2>
      </div>

      {/* Progress */}
      <div className="mt-4">
        
        <div className="flex justify-between text-sm text-zinc-400">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-zinc-800 rounded-full mt-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-cyan-500"
            style={{ width: `${course.progress}%` }}
          />
        </div>

      </div>

    </motion.article>
  );
}