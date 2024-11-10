"use client";

import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  index: number;
}

export function SkillCategory({ title, skills, icon, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // Ensures the animation runs only once
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} // Ensures each skill animates only once
            transition={{
              duration: 0.3,
              delay: index * 0.1 + idx * 0.05,
              type: "spring",
              stiffness: 300,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="bg-accent/50 px-3 py-2 rounded-lg text-sm font-medium hover:bg-accent cursor-default flex items-center justify-center text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
