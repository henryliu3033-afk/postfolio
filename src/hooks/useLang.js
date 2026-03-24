import { useState, useCallback } from 'react'

export function useLang() {
  const [lang, setLang] = useState('zh')
  const toggle = useCallback(() => setLang(l => l === 'zh' ? 'en' : 'zh'), [])
  return { lang, toggle }
}
