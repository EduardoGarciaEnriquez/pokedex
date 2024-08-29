import { useDispatch, useSelector } from 'react-redux'
import { closeToast, Roles } from '../../store/slices/pokemonSlice'
import { AppDispatch, IRootState } from '../../store/store'
import { CloseIcon, ErrorIcon, SuccessIcon, WarningIcon } from '../ui/icons'

function Toast() {
  const { toastRole, toastMsg, isToastVisible } = useSelector(
    (state: IRootState) => state.pokemon
  )

  const dispatch = useDispatch<AppDispatch>()

  const borderColor =
    toastRole === Roles.success
      ? 'green'
      : toastRole === Roles.warning
      ? 'orange'
      : 'red'

  const ToastIcon = () => {
    if (toastRole === Roles.success) return <SuccessIcon />
    else if (toastRole === Roles.warning) return <WarningIcon />
    else if (toastRole === Roles.error) return <ErrorIcon />
  }

  const onClose = () => {
    dispatch(closeToast())
  }

  if (!isToastVisible) return <></>

  return (
    <div className="fixed top-20 z-10 w-full flex justify-center">
      <div
        id="toast"
        className={`flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg dark:text-gray-400 dark:bg-gray-700 shadow-md border border-${borderColor}-100`}
        role="alert"
      >
        <ToastIcon />
        <div className="ms-3 text-sm font-normal">{toastMsg}</div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast"
          aria-label="Close"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}

export default Toast
