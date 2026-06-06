import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
    >
      {/* SVG Noise/Grain Texture Overlay */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.025, zIndex: 1 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Radial gradient pulse behind name */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <div
          className="radial-pulse rounded-full"
          style={{
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.09) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase"
            style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-mono)' }}
          >
            Computer Technology Student
          </span>
        </motion.div>

        {/* Main name */}
        <div className="mb-6">
          {['PARTH', 'CHITTALWAR'].map((line, lineIdx) => (
            <motion.h1
              key={line}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3 + lineIdx * 0.1,
              }}
              className="font-display font-bold leading-none block"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                letterSpacing: '-0.02em',
                color: lineIdx === 0 ? 'oklch(1 0 0)' : 'oklch(0.45 0 0)',
                cursor: 'default',
              }}
              whileHover={{
                letterSpacing: '0.04em',
                transition: { duration: 0.6, ease: 'easeInOut' },
              }}
            >
              {line}
            </motion.h1>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-sans text-lg max-w-md leading-relaxed mb-12"
          style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-sans)' }}
        >
          Building software through C++,<br />
          DSA, and modern web technologies.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="font-mono text-sm px-6 py-3 transition-all duration-200 hover:bg-white hover:text-black"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'oklch(1 0 0)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="font-mono text-sm px-6 py-3 transition-all duration-200"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'oklch(0.72 0.005 270)',
              fontFamily: 'var(--font-mono)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'
              ;(e.currentTarget as HTMLElement).style.color = 'oklch(1 0 0)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
              ;(e.currentTarget as HTMLElement).style.color = 'oklch(0.72 0.005 270)'
            }}
          >
            Contact
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10 left-6 flex items-center gap-3"
        >
          <div
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2))' }}
          />
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: 'oklch(0.45 0 0)', fontFamily: 'var(--font-mono)' }}
          >
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}
