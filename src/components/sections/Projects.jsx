import { motion } from 'motion/react'
import { PROJECTS } from '../../constants/content'

function ProjectCard({ proj, lang, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px' }} transition={{ delay: index * 0.06 }}
      className="proj-card overflow-hidden group">

      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <img src={proj.img} alt={proj.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.7) 0%, transparent 60%)' }} />

        {/* Number */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="text-xl font-medium tracking-widest"
            style={{ color: 'rgba(255,255,255,0.5)', fontVariantNumeric: 'tabular-nums' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Tags overlay */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
          {proj.tags.map(t => (
            <span key={t} className="text-[10px] font-medium tracking-wider px-2 py-0.5"
              style={{ background: 'rgba(12,12,12,0.8)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        {/* Color dot + name */}
        <div className="flex items-center gap-2.5 mb-1.5">
          <span className="w-2 h-2 flex-shrink-0" style={{ background: proj.color }} />
          <h3 className="text-3xl font-semibold" style={{ color: 'var(--text)' }}>
            {lang === 'zh' ? proj.nameZh : `${proj.name}`}
          </h3>
        </div>

        <p className="text-2xl leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
          {lang === 'zh' ? proj.descZh : proj.descEn}
        </p>

        {/* Links */}
        <div className="flex items-center gap-2">
          <a href={proj.demo} target="_blank" rel="noreferrer"
            className="btn btn-gold text-2xl px-6 py-3">
            Live Demo ↗
          </a>
          <a href={proj.github} target="_blank" rel="noreferrer"
            className="btn text-2xl px-6 py-3">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects({ c, lang }) {
  return (
    <section id="projects" className="py-20 md:py-32 section-rule">
      {/* Background accent: faint concert */}
      <div className="relative">
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px' }} className="mb-12 md:mb-16">
            <p className="text-xl font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--gold)' }}>
              {c.projects.label}
            </p>
            <h2 className="font-light mb-2"
              style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px,4vw,48px)', color: 'var(--text)' }}>
              {c.projects.title}
            </h2>
            <p className="text-2xl" style={{ color: 'var(--muted)' }}>{c.projects.sub}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((proj, i) => (
              <ProjectCard key={proj.id} proj={proj} lang={lang} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
