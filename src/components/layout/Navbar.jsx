import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function Navbar({ c, lang, onToggleLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '#about',    label: c.nav.about    },
    { href: '#projects', label: c.nav.projects  },
    { href: '#skills',   label: c.nav.skills    },
    { href: '#contact',  label: c.nav.contact   },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
        style={{
          background:    scrolled || open ? 'rgba(12,12,12,0.96)' : 'transparent',
          borderBottom:  scrolled || open ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: scrolled || open ? 'blur(12px)' : 'none',
        }}>
        <div className="wrap flex items-center justify-between" style={{ height: '60px' }}>

          {/* Logo */}
          <a href="#top" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(20px, 5vw, 36px)', color: 'var(--text)', letterSpacing: '0.05em' }}>
              Henry Liu
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {links.map(({ href, label }) => (
              <a key={href} href={href}
                className="text-2xl font-medium tracking-wider transition-colors"
                style={{ color: 'var(--muted)', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                {label}
              </a>
            ))}
          </nav>

          {/* Right: lang toggle + hamburger */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button onClick={onToggleLang}
              className="btn text-base md:text-xl px-3 md:px-5 py-1.5 md:py-2 cursor-pointer flex-shrink-0"
              style={{ color: 'var(--muted)', borderColor: 'var(--border)' }}>
              {lang === 'zh' ? 'EN' : '中'}
            </button>

            <button className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer"
              onClick={() => setOpen(v => !v)}>
              {[0, 1, 2].map(i => (
                <span key={i} className="block transition-all duration-200 origin-center"
                  style={{
                    width: '20px', height: '1px', background: 'var(--muted)',
                    opacity: i === 1 && open ? 0 : 1,
                    transform: i === 0 && open ? 'rotate(45deg) translate(3.5px,3.5px)' : i === 2 && open ? 'rotate(-45deg) translate(3.5px,-3.5px)' : 'none',
                  }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 right-0 z-40 md:hidden overflow-hidden"
            style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
            <div className="wrap py-5 flex flex-col gap-0">
              {links.map(({ href, label }) => (
                <a key={href} href={href} onClick={() => setOpen(false)}
                  className="py-4 text-3xl font-medium tracking-wide transition-colors"
                  style={{ color: 'var(--muted)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
