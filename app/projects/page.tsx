"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MacroMate (MERN)",
    description: "A calorie and macro tracking app built with the MERN stack and Tailwind CSS.",
    tags: ["React", "MongoDB", "Express", "Node.js", "Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/garcodes/macromate",
    demo: "https://macromate.vercel.app",
  },
  {
    title: "MacroMate (MEAN)",
    description: "A calorie and macro tracking app built with the MEAN stack and Bootstrap / SCSS.",
    tags: ["Angular", "MongoDB", "Express", "Node.js", "TypeScript"],
    github: "https://github.com/garcodes/macromate-mean",
    demo: "https://macromate-mean.vercel.app",
  },
  {
    title: "E-commerce Store (MERN)",
    description: "Full-stack e-commerce application with product management, user authentication, and payment integration.",
    tags: ["Next.js", "AI", "Firebase", "TypeScript"],
    github: "https://github.com/GarryLed/E-Commerce-Store-MERN",
    demo: "https://e-commerce-store-mern.vercel.app",
  },
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h1>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 my-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-100 dark:bg-indigo-600/30 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                href={project.github}
                target="_blank"
                className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <FaGithub /> Code
              </Link>
              <Link
                href={project.demo}
                target="_blank"
                className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <FaExternalLinkAlt /> Live Demo
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
