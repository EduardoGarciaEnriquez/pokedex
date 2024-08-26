import { useToggleTheme } from '../../../hooks/useToggleTheme'

import moonIcon from '@assets/moon.svg'
import sunIcon from '@assets/sun.svg'

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useToggleTheme()

  return (
    <img
      onClick={toggleTheme}
      className="w-10 cursor-pointer hover:ease-in-out hover:drop-shadow-md"
      src={theme === 'dark' ? sunIcon : moonIcon}
      alt="toggle theme"
    />
  )
}

export default ThemeSwitch
