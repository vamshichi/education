'use client'


import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md text-black">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ASC College
        </Link>
        <button
          className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <nav
          className={`absolute md:static md:flex md:space-x-6 md:bg-transparent bg-white top-16 md:top-auto left-0 w-full md:w-auto shadow-md md:shadow-none ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <Link
            href="/arts"
            className="block px-4 py-2 md:py-0 md:px-0 hover:text-blue-600 transition-colors"
          >
            Arts
          </Link>
          <Link
            href="/science"
            className="block px-4 py-2 md:py-0 md:px-0 hover:text-blue-600 transition-colors"
          >
            Science
          </Link>
          <Link
            href="/commerce"
            className="block px-4 py-2 md:py-0 md:px-0 hover:text-blue-600 transition-colors"
          >
            Commerce
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 md:py-0 md:px-0 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 md:py-0 md:px-0 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
