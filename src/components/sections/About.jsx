import { motion } from 'motion/react'

export default function About({ c }) {
  const titleLines = c.about.title.split('\n')
  return (
    <section id="about" className="py-20 md:py-32 section-rule">
      <div className="wrap">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: beach photo */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px' }} transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden max-w-sm mx-auto lg:max-w-none"
              style={{ aspectRatio: '3/4' }}>
              <img src="/images/beach.jpg" alt="Henry at the beach"
                className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(200,146,74,0.15)' }} />
            </div>
            {/* Corner accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 pointer-events-none"
              style={{ border: '1px solid var(--gold)', opacity: 0.25 }} />
          </motion.div>

          {/* Right: text */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px' }} transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2">
            <p className="text-xl font-medium tracking-widest uppercase mb-4"
              style={{ color: 'var(--gold)' }}>
              {c.about.label}
            </p>
            <h2 className="font-light leading-tight mb-8"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,4vw,48px)', color: 'var(--text)' }}>
              {titleLines.map((l, i) => (
                <span key={i}>{l}{i < titleLines.length - 1 && <br />}</span>
              ))}
            </h2>

            <div className="flex flex-col gap-4 mb-8">
              {[c.about.body1, c.about.body2, c.about.body3].map((text, i) => (
                <p key={i} className="text-3xl leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {text}
                </p>
              ))}
            </div>

            {/* TikTok badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3"
              style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>
              <span style={{ fontSize: '40px' }}>🎵</span>
              <div>
                <p className="text-xl font-medium tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                  TikTok / 抖音
                </p>
                <p className="text-2xl mt-0.5" style={{ color: 'var(--muted)' }}>
                  {c.about.tiktok}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
