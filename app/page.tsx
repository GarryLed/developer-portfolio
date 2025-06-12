"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import SkillBars from "@/components/Skills";
import SocialMedia from "@/components/SocialMedia";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-tr from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Particles or Image Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10 blur-sm" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          👨‍💻 GarCodes
        </h1>
        
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center mb-4"
        >
          Hi, I’m Garry, a third-year mature computing student, and creator of <span className="text-green-500">GarCodes</span>.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto"
>
  I’m on a mission to further my skills in software development, continue to create engaging YouTube & TikTok tutorials, and foster my love for learning.
  Looking for a 2026 work placement in software engineering, let’s build something great together.

</motion.p>

{/* Skills section  */}

  <section className="mt-12 max-w-3xl mx-auto px-4">
    <SkillBars />
  </section>

{/* Action buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="px-6 py-3 rounded bg-indigo-600 hover:bg-indigo-700 transition"
          >
            🚀 View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded bg-gray-200 text-gray-900 hover:bg-gray-300 transition dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            📬 Contact Me
          </Link>
        </motion.div>
      </motion.div>

      {/* add self image here */}
      <motion.img
        src="/profile.png"
        alt="Garry Ledwith"
        className="w-40 h-40 rounded-full border-4 border-white shadow-lg mt-12 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      />

      {/* Socials */}
     <section className="mt-12">
        <SocialMedia />
      </section>
    </main>
  );
}
