import pokeballDark from '../../../assets/pokeball-dark.svg'
import pokeball from '../../../assets/pokeball.svg'
import { useAppDispatch, useAppSelector } from '../../../store/redux-hooks'
import { AppDispatch, IRootState } from '../../../store/store'
import { toggleDrawer } from '../../../store/slices/uiSlice'

function Logo() {
  const { isThemeDark } = useAppSelector((state: IRootState) => state.theme)

  const dispatch = useAppDispatch<AppDispatch>()

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
