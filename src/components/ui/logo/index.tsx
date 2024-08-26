import pokeballDark from '@assets/pokeball-dark.svg'
import pokeball from '@assets/pokeball.svg'
import { useSelector } from 'react-redux'

function Logo() {
  const { isThemeDark } = useSelector((state) => state.theme)

  return (
    <img
      onClick={() => {
        console.log('menu open')
      }}
      className="w-10 cursor-pointer"
      src={isThemeDark ? pokeballDark : pokeball}
      alt="pokeball logo"
    />
  )
}

export default Logo
