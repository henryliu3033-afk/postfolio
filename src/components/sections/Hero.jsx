import { motion } from 'motion/react'

export default function Hero({ c }) {
  const lines = c.hero.sub.split('\n')

  return (
    <section id="top" className="relative overflow-hidden" style={{ minHeight: '100svh' }}>
      <div className="absolute inset-0">
        <img src="/images/concert.jpg" alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.08 }} />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(12,12,12,1) 0%, rgba(12,12,12,0.85) 55%, rgba(12,12,12,0.92) 100%)' }} />
      </div>

      <div className="relative wrap flex flex-col lg:grid lg:grid-cols-2 items-center min-h-[100svh] gap-10 pt-24 pb-16 lg:pb-0">

        {/* Left: text */}
        <div className="lg:py-24">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl font-medium tracking-widest uppercase mb-5"
            style={{ color: 'var(--gold)' }}>
            {c.hero.role}
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-light leading-tight mb-4 text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: 'var(--serif)', color: 'var(--text)' }}>
            {c.hero.name}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl md:text-4xl font-light mb-6"
            style={{ color: 'var(--muted)', fontStyle: 'italic', fontFamily: 'var(--serif)' }}>
            {c.hero.tagline}
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mb-10">
            {lines.map((l, i) => (
              <p key={i} className="text-3xl" style={{ color: 'var(--muted)', lineHeight: 1.9 }}>{l}</p>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-gold">{c.hero.cta1} →</a>
            <a href="https://github.com/henryliu3033" target="_blank" rel="noreferrer" className="btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              {c.hero.cta2}
            </a>
          </motion.div>
        </div>

        {/* Right: photo — same approach as old site: max-w, natural height, object-cover */}
        <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end">
          <img src="/images/hero.jpg" alt="Henry Liu"
            className="w-full max-w-sm md:max-w-md object-cover grayscale hover:grayscale-0 transition duration-500"
            style={{ borderRadius: '8px' }} />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          style={{ width: '1px', height: '36px', background: 'var(--border2)' }} />
      </motion.div>
    </section>
  )
}
