import pokeballDark from '@assets/pokeball-dark.svg'
import pokeball from '@assets/pokeball.svg'
import { useToggleTheme } from '../../../hooks/useToggleTheme'

function Logo() {
  const { theme } = useToggleTheme()

  return (
    <img
      onClick={() => {
        console.log('menu open')
      }}
      className="w-10 cursor-pointer"
      src={theme === 'dark' ? pokeballDark : pokeball}
      alt="pokeball logo"
    />
  )
}

export default Logo
