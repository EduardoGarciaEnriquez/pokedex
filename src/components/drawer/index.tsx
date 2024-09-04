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
      className={`flex flex-row fixed top-0 left-0 z-40 h-screen w-full transition-transform duration-500 ${
        !isDrawerVisible && '-translate-x-full'
      }`}
    >
      <div className="h-full w-full max-w-md relative overflow-auto p-4 bg-white dark:bg-gray-800">
        <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          PokeMenu
        </h5>
        <button
          onClick={handleOnClick}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <CloseIcon />
        </button>
        <div className="py-4 overflow-y-auto">
          <Menu />
        </div>
      </div>
      <div
        className="md:h-full md:w-full bg-white dark:bg-black opacity-80"
        onClick={handleOnClick}
      />
    </div>
  )
}

export default Drawer
