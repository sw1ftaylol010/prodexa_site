'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-prodexa-blue/90 backdrop-blur-md py-2 shadow-lg' : 'bg-prodexa-blue py-4'}
    `}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold text-white hover:opacity-90 transition-opacity"
            aria-label="Prodexa Home"
          >
            PRODEXA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/why-us">Why Us</NavLink>
            <NavLink href="/base-oil">Base Oil</NavLink>
            <NavLink href="/paraffin-wax">Paraffin Wax</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-blue-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden bg-prodexa-blue text-white overflow-hidden
        transition-all duration-300 ease-in-out
        ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavLink href="/why-us">Why Us</MobileNavLink>
          <MobileNavLink href="/base-oil">Base Oil</MobileNavLink>
          <MobileNavLink href="/paraffin-wax">Paraffin Wax</MobileNavLink>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-opacity-80 transition-opacity px-3 py-2 font-medium"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block py-2 text-white hover:text-opacity-80 transition-opacity font-medium"
    >
      {children}
    </Link>
  )
}