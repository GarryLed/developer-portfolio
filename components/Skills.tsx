"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGithub,
    SiApollographql,
    SiMysql,
    SiFirebase,
    SiAngular,
  
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 85, icon: <SiReact /> },
      { name: "Next.js", level: 80, icon: <SiNextdotjs /> },
      { name: "TypeScript", level: 75, icon: <SiTypescript /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss /> },
      { name: "JavaScript (ES6+)", level: 80, icon: <SiReact /> }, 
      { name: "Bootstrap", level: 75, icon: <SiReact /> }, 
      { name: "Angular", level: 70, icon: <SiAngular /> }, 
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 70, icon: <SiNodedotjs /> },
      { name: "Express", level: 65, icon: <SiExpress /> },
      { name: "MongoDB", level: 65, icon: <SiMongodb /> },
      { name: "SQL / T-SQL", level: 60, icon: <SiMysql /> }, 
      { name: "Firebase", level: 70, icon: <SiFirebase /> },
      { name: "REST APIs", level: 75, icon: <SiApollographql /> },
      { name: "C#", level: 60, icon: <SiReact /> }, // Placeholder icon
      { name: "Ruby", level: 50, icon: <SiReact /> }, // Placeholder icon
      { name: "AWS", level: 55, icon: <SiReact /> }, // Placeholder icon

    ],
  },
 {
    title: "AI / Machine Learning",
    skills: [
      { name: "Python", level: 70, icon: <span>🐍</span> },
      { name: "Twilio", level: 65, icon: <span>📊</span> },
      { name: "Hugging Face", level: 60, icon: <span>🤗</span> },
    ],
  },
  {
    title: "Digital Marketing",
    skills: [
      { name: "SEO/SEM", level: 80, icon: <span>🔍</span> },
      { name: "Social Media Marketing", level: 75, icon: <span>📱</span> },
      { name: "Google Analytics", level: 75, icon: <span>📈</span> },
      { name: "Google Ads", level: 70, icon: <span>📝</span> },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Git & GitHub", level: 85, icon: <SiGithub /> },
      { name: "Docker", level: 60, icon: <SiReact /> }, // Placeholder icon
      { name: "CI/CD", level: 55, icon: <SiReact /> }, // Placeholder icon
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Jest / Testing Library", level: 70, icon: <SiReact /> }, // Placeholder icon
      { name: "Cypress", level: 60, icon: <SiReact /> }, // Placeholder icon
      { name: "Postman", level: 70, icon: <SiReact /> }, // Placeholder icon

    ],
    },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 85, icon: <SiGithub /> },
    
    ],
  },
];

export default function SkillBars() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 mt-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600 dark:text-indigo-300">
        🚀 My Skills
      </h2>

      {skillGroups.map((group, groupIndex) => (
        <div key={group.title} className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-100">
            {group.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {group.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex items-center justify-between hover:scale-[1.02] transition border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl text-green-500">{skill.icon}</div>
                  <div className="text-lg font-medium text-gray-800 dark:text-gray-100">
                    {skill.name}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</div>
                  <div className="relative w-32 h-3 bg-gray-200 dark:bg-gray-600 rounded-full">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
