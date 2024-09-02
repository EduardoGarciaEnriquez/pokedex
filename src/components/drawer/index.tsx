import { useDispatch, useSelector } from 'react-redux'
import { toggleDrawer } from '../../store/slices/uiSlice'
import { AppDispatch, IRootState } from '../../store/store'
import { CloseIcon } from '../ui/icons'
import Menu from './menu'

function Drawer() {
  const { isDrawerVisible } = useSelector((state: IRootState) => state.theme)
  const dispatch = useDispatch<AppDispatch>()

  const handleOnClick = () => {
    dispatch(toggleDrawer())
  }

  return (
    <div
      id="drawer-navigation"
      className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto bg-white w-full max-w-md dark:bg-gray-800 transition-transform duration-500 ${
        !isDrawerVisible && '-translate-x-full'
      }`}
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        PokeMenu
      </h5>
      <button
        onClick={handleOnClick}
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <CloseIcon />
      </button>
      <div className="py-4 overflow-y-auto">
        <Menu />
      </div>
    </div>
  )
}

export default Drawer
