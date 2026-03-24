import { motion } from 'motion/react'

export default function Contact({ c }) {
  return (
    <section id="contact" className="py-20 md:py-32 section-rule">
      <div className="wrap">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }}>
            <p className="text-xl font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
              {c.contact.label}
            </p>
            <h2 className="font-light mb-6"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,4vw,56px)', color: 'var(--text)' }}>
              {c.contact.title}
            </h2>

            <div className="flex flex-col gap-3">
              <a href={`mailto:${c.contact.email}`}
                className="flex items-center gap-3 transition-colors group"
                style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 'clamp(14px, 3vw, 30px)', wordBreak: 'break-all' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                <span className="text-xl tracking-widest uppercase flex-shrink-0" style={{ color: 'var(--faint)', minWidth: '60px' }}>
                  Email
                </span>
                {c.contact.email}
              </a>
              <a href="https://github.com/henryliu3033" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 transition-colors"
                style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 'clamp(14px, 3vw, 30px)', wordBreak: 'break-all' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                <span className="text-xl tracking-widest uppercase flex-shrink-0" style={{ color: 'var(--faint)', minWidth: '60px' }}>
                  GitHub
                </span>
                {c.contact.github}
              </a>
            </div>
          </motion.div>

          <motion.a initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '0px' }}
            href={`mailto:${c.contact.email}`}
            className="btn btn-gold px-8 py-4 flex-shrink-0 self-start md:self-auto"
            style={{ fontSize: 'clamp(14px, 3vw, 24px)' }}>
            {c.contact.label} →
          </motion.a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
          style={{ borderTop: '1px solid var(--border)' }}>
          <p className="text-xl" style={{ color: 'var(--faint)' }}>
            © {new Date().getFullYear()} Henry Liu. Built with React + Vite.
          </p>
          <p className="text-xl" style={{ color: 'var(--faint)' }}>
            Live Young Forever 🤘
          </p>
        </div>
      </div>
    </section>
  )
}
