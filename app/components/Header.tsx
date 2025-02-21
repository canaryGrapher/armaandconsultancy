"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  activePage: 'home' | 'services' | 'contact';
}

export default function Header({ activePage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo - Left corner */}
        <div className="flex items-center gap-2">
          <Image src="/images/brand/logo.png" alt="Armaand Consultancy" height={32} width={32} />
          <span className="text-xl font-medium">Armaand</span>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link
            href="/" 
            className={`${activePage === 'home' ? 'font-bold text-black' : 'text-gray-600'} hover:text-black`}
          >
            Home
          </Link>
          <Link
            href="/services" 
            className={`${activePage === 'services' ? 'font-bold text-black' : 'text-gray-600'} hover:text-black`}
          >
            Services
          </Link>
          <Link
            href="/contact" 
            className={`${activePage === 'contact' ? 'font-bold text-black' : 'text-gray-600'} hover:text-black`}
          >
            Contact us
          </Link>
        </nav>

        {/* CTA Button - Right corner */}
        <div className="hidden lg:block">
          <button className="px-4 py-2 rounded-full border border-black">
            Schedule a call
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`
          lg:hidden 
          overflow-hidden 
          transition-[max-height] duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-64' : 'max-h-0'}
        `}
      >
        <nav className="flex flex-col bg-white px-8 py-4 shadow-lg">
          <Link
            href="/" 
            className={`py-3 ${activePage === 'home' ? 'font-bold text-black' : 'text-gray-600'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services" 
            className={`py-3 ${activePage === 'services' ? 'font-bold text-black' : 'text-gray-600'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact" 
            className={`py-3 ${activePage === 'contact' ? 'font-bold text-black' : 'text-gray-600'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact us
          </Link>
          <button className="mt-3 px-4 py-2 rounded-full border border-black w-full">
            Schedule a call
          </button>
        </nav>
      </div>
    </header>
  );
} 