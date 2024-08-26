import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

export const useToggleTheme = () => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.body.setAttribute('class', theme)
    } else {
      document.body.removeAttribute('class')
    }
  }, [theme])

  return { theme, toggleTheme }
}
