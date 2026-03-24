import { useLang }   from './hooks/useLang'
import { CONTENT }   from './constants/content'
import Navbar        from './components/layout/Navbar'
import Hero          from './components/sections/Hero'
import About         from './components/sections/About'
import Skills        from './components/sections/Skills'
import Projects      from './components/sections/Projects'
import Contact       from './components/sections/Contact'

export default function App() {
  const { lang, toggle } = useLang()
  const c = CONTENT[lang]

  return (
    <div className="page-in">
      <Navbar c={c} lang={lang} onToggleLang={toggle} />
      <Hero     c={c} />
      <About    c={c} />
      <Skills   c={c} />
      <Projects c={c} lang={lang} />
      <Contact  c={c} />
    </div>
  )
}
