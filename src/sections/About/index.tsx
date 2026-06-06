import { motion } from 'framer-motion'
import AnimatedHeading from '@/components/animations/AnimatedHeading'

const stats = [
  { value: '9.17', label: 'CGPA' },
  { value: '2028', label: 'B.Tech' },
  { value: '4+', label: 'Core CS Subjects' },
  { value: '3+', label: 'Languages' },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase"
            style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-mono)' }}
          >
            01 / About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Heading + Text */}
          <div>
            <AnimatedHeading
              className="font-display font-semibold mb-8 leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              } as React.CSSProperties}
            >
              A student engineer focused on clean, performant software.
            </AnimatedHeading>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <p
                className="font-sans leading-relaxed"
                style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-sans)' }}
              >
                I'm Parth, a Computer Technology undergraduate at Priyadarshini College of
                Engineering, Nagpur. My work centers on the fundamentals: data structures, object-
                oriented design, systems thinking, and the craft of shipping real interfaces.
              </p>
              <p
                className="font-sans leading-relaxed"
                style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-sans)' }}
              >
                I'm currently going deep on C++ and DSA, and branching into the MERN stack.
                Every project I take on is self-initiated and owned end to end — from architecture to
                deployment.
              </p>
              <p
                className="font-sans leading-relaxed"
                style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-sans)' }}
              >
                My goal is simple: become the kind of software engineer who builds things people remember.
              </p>
            </motion.div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="p-8"
                style={{
                  background: 'oklch(0.175 0 0)',
                  border: '1px solid oklch(0.25 0 0)',
                }}
              >
                <div
                  className="font-display font-bold mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    color: 'oklch(1 0 0)',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-mono)' }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
