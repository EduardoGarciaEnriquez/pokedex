import moonIcon from '../../../assets/moon.svg'
import sunIcon from '../../../assets/sun.svg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../../store/slices/uiSlice'
import { IRootState } from '../../../store/store'

const ThemeSwitch = () => {
  const { isThemeDark } = useSelector((state: IRootState) => state.theme)
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(toggleTheme())
  }

  return (
    <img
      onClick={handleOnClick}
      className="w-10 cursor-pointer hover:ease-in-out hover:drop-shadow-md"
      src={isThemeDark ? sunIcon : moonIcon}
      alt="toggle theme"
    />
  )
}

export default ThemeSwitch
