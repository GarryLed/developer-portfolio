"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const getMenuClasses = () => {
  return [
    isOpen ? "flex" : "hidden", // mobile visibility
    "md:flex",                  // always show on md and up
    "absolute md:static",       // position: absolute on mobile, static on desktop
    "top-[60px] md:top-auto",
    "left-0",
    "bg-gray-800 md:bg-transparent",
    "w-full md:w-auto",
    "p-4 md:p-0",
    "gap-4",
    "flex-col md:flex-row",
    "z-50",
  ].join(" ");
};

  return (
    <nav className="bg-gray-800 text-white shadow-md p-4 sm:px-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          GarCodes
        </Link>

        <div className={getMenuClasses()}>
          <Link href="/" className="mx-2 hover:text-green-300">
            Home
          </Link>
          <Link href="/about" className="mx-2 hover:text-green-300">
            About
          </Link>
          <Link href="/projects" className="mx-2 hover:text-green-300">
            Projects
          </Link>
          <Link href="/contact" className="mx-2 hover:text-green-300">
            Contact
          </Link>
            <Link href="/blog" className="mx-2 hover:text-green-300">
                Blog
            </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
