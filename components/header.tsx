"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 card-shadow"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
              {/* Changed from yellow to beige */}
              <div className="w-8 h-8 bg-amber-100 border border-amber-200 rounded-full flex items-center justify-center">
                <span className="text-amber-800 font-semibold text-sm">AD</span>
              </div>
              <span className="text-lg font-medium text-slate-900">Aryan Desai</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`text-sm font-medium transition-colors duration-200 py-2 ${
                    pathname === item.href
                      ? "text-slate-900 border-b-2 border-slate-900"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-slate-900 hover:bg-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-slate-200"
          >
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left py-3 text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-slate-900 bg-slate-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  } rounded-lg px-3`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
