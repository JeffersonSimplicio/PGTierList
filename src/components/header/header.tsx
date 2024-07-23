"use client";
import Link from "next/link";
import { useState } from "react";
import "./header.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="big-screen">
        <Link href="/" className="title-website">
          Pokemon Go Tier List
        </Link>
        <nav className="nav-pages">
          {/* <Link href="/" className="internal-link">Home</Link> */}
          <Link href="/about" className="internal-link">Sobre</Link>
          <Link href="/contact" className="internal-link">Contato</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="button-hamburger">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="nav-hamburger">
          {/* <Link href="/" className="block internal-link">Home</Link> */}
          <Link href="/about" className="block internal-link">Sobre</Link>
          <Link href="/contact" className="block internal-link">Contato</Link>
        </nav>
      )}
    </header>
  );
}
