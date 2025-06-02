'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      subItems: [
        { name: 'About Theoren', href: '/about' },
        { name: 'Insurance Services', href: '/insurance' }
      ]
    },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed w-full bg-black text-white backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/mmwt-logo.jpg"
              alt="Money Moves with T"
              width={40}
              height={40}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                      pathname === '/about' || pathname === '/insurance'
                        ? 'text-accent'
                        : 'text-gray-300 hover:text-accent'
                    }`}
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isAboutOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isAboutOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-white ring-opacity-10">
                      <div className="py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm ${pathname === subItem.href
                              ? 'text-white bg-accent font-semibold'
                              : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}
                            onClick={() => setIsAboutOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${pathname === item.href
                    ? 'text-white font-semibold border-b-2 border-accent'
                    : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-500'}`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link href="/contact" className="btn btn-primary">
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => {
              setIsOpen(!isOpen)
              setIsMobileAboutOpen(false)
            }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black text-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.subItems ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                      className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${pathname === item.href
                        ? 'text-white font-semibold border-b-2 border-accent'
                        : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-500'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <svg
                          className={`w-5 h-5 transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {isMobileAboutOpen && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === subItem.href
                              ? 'text-white bg-accent font-semibold'
                              : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}
                            onClick={() => {
                              setIsOpen(false)
                              setIsMobileAboutOpen(false)
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === item.href
                      ? 'text-white font-semibold border-b-2 border-accent'
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-gray-500'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link
                href="/contact"
                className="block w-full text-center btn btn-primary mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation