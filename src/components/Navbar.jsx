import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-gradient-to-b from-black via-gray-900 to-transparent sticky top-0 z-50">
            <div className="flex justify-between items-center px-6 lg:px-12 py-4">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="./logo.png" alt="Logo" className="w-10 h-10" />
                    <span className="text-2xl font-bold text-red-600">FilmHub</span>
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex gap-8 items-center">
                    <a href="#" className="text-white hover:text-red-600 transition-colors duration-200 font-medium">
                        Home
                    </a>
                    <a href="#" className="text-white hover:text-red-600 transition-colors duration-200 font-medium">
                        Movies
                    </a>
                    <a href="#" className="text-white hover:text-red-600 transition-colors duration-200 font-medium">
                        TV Shows
                    </a>
                    <a href="#" className="text-white hover:text-red-600 transition-colors duration-200 font-medium">
                        Trending
                    </a>
                </div>

                {/* Search & Auth */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Sign In Button */}
                    <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors duration-200">
                        Sign In
                    </button>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-2xl text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile links */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800 flex flex-col gap-4 px-6 py-4">
                    <a href="#" className="text-white hover:text-red-600 transition-colors font-medium">
                        Home
                    </a>
                    <a href="#" className="text-white hover:text-red-600 transition-colors font-medium">
                        Movies
                    </a>
                    <a href="#" className="text-white hover:text-red-600 transition-colors font-medium">
                        TV Shows
                    </a>
                    <a href="#" className="text-white hover:text-red-600 transition-colors font-medium">
                        Trending
                    </a>

                    {/* Mobile search */}

                    {/* Mobile sign in */}
                    <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors w-full">
                        Sign In
                    </button>
                </div>
            )}
        </nav>
    )
}

export default Navbar