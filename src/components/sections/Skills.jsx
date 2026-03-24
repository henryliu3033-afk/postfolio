import { motion } from 'motion/react'

const ICONS = {
  'HTML':                '🌐',
  'CSS':                 '🎨',
  'JavaScript (ES6)':    '⚡',
  'React':               '⚛',
  'React Router':        '🔀',
  'Context API':         '🔗',
  'Hooks':               '🪝',
  'Zustand':             '🐻',
  'Tailwind CSS':        '💨',
  'Component Design':    '🧩',
  'Motion':              '✨',
  'RWD':                 '📱',
  'Git / GitHub':        '🌿',
  'Vite':                '⚡',
  'REST API':            '🔌',
  'Vercel':              '▲',
  'ChatGPT':             '🤖',
  'Claude':              '🧠',
  'Gemini':              '💎',
}

export default function Skills({ c }) {
  return (
    <section id="skills" className="py-20 md:py-32 section-rule">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px' }} className="mb-12 md:mb-16">
          <p className="text-2xl font-medium tracking-widest uppercase mb-3"
            style={{ color: 'var(--gold)' }}>
            {c.skills.label}
          </p>
          <h2 className="font-light text-5xl md:text-6xl"
            style={{ fontFamily: 'var(--serif)', color: 'var(--text)' }}>
            {c.skills.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {c.skills.cats.map((cat, ci) => (
            <motion.div key={cat.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px' }} transition={{ delay: ci * 0.08 }}>
              <p className="text-2xl font-medium tracking-widest uppercase mb-4"
                style={{ color: 'var(--faint)', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
                {cat.name}
              </p>
              <div className="flex flex-col gap-2.5">
                {cat.items.map(item => (
                  <div key={item} className="skill-pill cursor-default">
                    <span>{ICONS[item] || '·'}</span>
                    <span className="text-2xl">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
