import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['about', 'journey', 'skills', 'certifications', 'projects', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const isActive = (href: string) => {
    const id = href.replace('#', '')
    return activeSection === id
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 0 0 rgba(255,255,255,0.04)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          PC
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm transition-colors duration-200"
              style={{
                color: isActive(link.href) ? 'oklch(1 0 0)' : 'oklch(0.72 0.005 270)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-xs px-4 py-2 border transition-all duration-200 hover:bg-white hover:text-black"
            style={{
              borderColor: 'rgba(255,255,255,0.2)',
              color: 'oklch(1 0 0)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: 'oklch(0.72 0.005 270)' }}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className="block h-px bg-current transition-all duration-300"
              style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : '' }}
            />
            <span
              className="block h-px bg-current transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-px bg-current transition-all duration-300"
              style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : '' }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(10,10,10,0.96)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm py-2 border-b"
              style={{
                color: isActive(link.href) ? 'oklch(1 0 0)' : 'oklch(0.72 0.005 270)',
                borderColor: 'rgba(255,255,255,0.06)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  )
}
