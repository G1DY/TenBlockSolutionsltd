"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SI</span>
          </div>
          <span className="font-bold text-lg text-primary">Simple Innovations</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-700 hover:text-primary transition">
            Home
          </Link>
          <Link href="#" className="text-gray-700 hover:text-primary transition">
            About Us
          </Link>
          <Link href="#" className="text-gray-700 hover:text-primary transition">
            Our Services
          </Link>
          <Link href="#" className="text-gray-700 hover:text-primary transition">
            Contact Us
          </Link>
        </div>

        {/* CTA Button */}
        <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white rounded-full px-6">
          TALK TO US
        </Button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4">
          <Link href="#" className="block text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link href="#" className="block text-gray-700 hover:text-primary">
            About Us
          </Link>
          <Link href="#" className="block text-gray-700 hover:text-primary">
            Our Services
          </Link>
          <Link href="#" className="block text-gray-700 hover:text-primary">
            Contact Us
          </Link>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">TALK TO US</Button>
        </div>
      )}
    </header>
  )
}
