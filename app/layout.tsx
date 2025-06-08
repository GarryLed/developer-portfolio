import "@/styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ReactNode } from "react";

export const metadata = {
  title: "Garry Ledwith - Developer Portfolio",
  description: "Garry Ledwith's personal portfolio showcasing projects, skills, and contact information.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}




