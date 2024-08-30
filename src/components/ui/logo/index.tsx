import pokeballDark from '@assets/pokeball-dark.svg'
import pokeball from '@assets/pokeball.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../../../store/store'
import { toggleDrawer } from '../../../store/slices/uiSlice'

function Logo() {
  const { isThemeDark } = useSelector((state: IRootState) => state.theme)

  const dispatch = useDispatch<AppDispatch>()

  const handleOnClick = () => {
    dispatch(toggleDrawer())
  }

  return (
    <img
      onClick={handleOnClick}
      className="w-10 cursor-pointer drop-shadow-md"
      src={isThemeDark ? pokeballDark : pokeball}
      alt="pokeball logo"
    />
  )
}

export default Logo
