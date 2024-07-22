"use client";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white p-4 md:p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-accent hover:text-secondary transition-colors">
          Pokemon Go Tier List
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-lg text-white hover:text-secondary transition-colors">Home</Link>
          <Link href="/about" className="text-lg text-white hover:text-secondary transition-colors">About</Link>
          <Link href="/contact" className="text-lg text-white hover:text-secondary transition-colors">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-primary text-white p-4 space-y-2">
          <Link href="/" className="block text-lg text-white hover:text-secondary transition-colors">Home</Link>
          <Link href="/about" className="block text-lg text-white hover:text-secondary transition-colors">About</Link>
          <Link href="/contact" className="block text-lg text-white hover:text-secondary transition-colors">Contact</Link>
        </nav>
      )}
    </header>
  );
}
