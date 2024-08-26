import pokeballDark from '@assets/pokeball-dark.svg'
import pokeball from '@assets/pokeball.svg'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../store/store'

function Logo() {
  const { isThemeDark } = useSelector((state: IRootState) => state.theme)

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
