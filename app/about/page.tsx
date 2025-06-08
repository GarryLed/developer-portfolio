"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4 text-center">👨‍💻 About Me</h1>

        <p className="text-lg leading-relaxed mb-6">
          Hey, I'm <strong>Garry</strong> – a third-year Computing student based in Ireland and a mature career-changer with a background in web design and digital marketing.
          I spent years running a small business, but my passion for software engineering led me back to college, and I haven't looked back since.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I'm currently building a developer portfolio using <strong>Next.js, Tailwind, TypeScript, and Framer Motion</strong>, and exploring real-world projects like
          <em> MacroMate</em> (a nutrition tracker) and <em>ResQAssist AI</em> (an AI dispatch automation tool).
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I also document my coding journey on <Link href="https://youtube.com/@GarCodes" className="text-green-500 underline">YouTube</Link> and <Link href="https://tiktok.com/@GarCodes" className="text-green-500 underline">TikTok</Link> under the name <strong>@GarCodes</strong>, where I share tutorials, devlogs, and tips for fellow career-changers.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I'm actively seeking a <strong>2025 software engineering placement</strong> in a company that values curiosity, clean code, and growth. If you're hiring or want to collaborate, feel free to reach out via my <Link href="/contact" className="text-indigo-500 underline">contact page</Link>.
        </p>

        <div className="mt-8 flex justify-center">
          <Image
            src="/garry-avatar.png"
            alt="Garry's Avatar"
            width={180}
            height={180}
            className="rounded-full border-4 border-indigo-600 dark:border-indigo-400 shadow-lg"
          />
        </div>
      </motion.div>
    </main>
  );
}

