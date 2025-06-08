import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md p-4 sm:px-6 md:flex md:justify-between md:items-center">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
                GarCodes
            </Link>
            <div className="hidden md:flex space-x-4">
                {/* Navigation Links */}
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
        </div>
    </nav>
  ) 
}

export default Navbar

