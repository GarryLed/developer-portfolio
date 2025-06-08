"use client"
import Link from "next/link"
import { useState } from "react"



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu (initially closed)
    const toggleMenu = () => setIsOpen(!isOpen); // Function to toggle the mobile menu

    function handleResize() {
        let mobileMenuClasses = []; // Array to hold classes for the mobile menu
        if (isOpen) {
            mobileMenuClasses = [
                "flex", // Show the menu when open
                "absolute", // Position the menu absolutely
                "top-[60px]", // Position the menu below the navb
                "left-0", // Align the menu to the left
                "bg-gray-800", // Background color for the mobile menu
                "w-full", // Full width for the mobile menu
                "p-15", // Padding for the mobile menu
                "gap-4", // Spacing between items
                "flex-col", // Stack items vertically
                "z-50", // Ensure the menu is above other content
            ];
        } else {
            mobileMenuClasses.push("hidden"); // Hide the menu when closed
        }
        return mobileMenuClasses.join(" "); // Join the classes into a single string
    }

    return (
        <nav className="bg-gray-800 text-white shadow-md p-4 sm:px-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                    GarCodes
                </Link>
                <div className={handleResize()}>
                    {/* Mobile Menu Links */}
                    <Link href="/" className="mx-2 hover:text-green-300">
                        Home
                    </Link>
                    <Link href="/about" className="mx-2 hover:text-green-300">
                        About
                    </Link>
                    <Link href="/contact" className="mx-2 hover:text-green-300">
                        Contact
                    </Link>
                <Link href="/projects" className="mx-2 hover:text-green-300">
                    Projects
                </Link>
            </div>
            {/* Hamburger Menu */}
           <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isOpen ? (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>
           </div>
        </div>
    </nav>
  ) 
}

export default Navbar

