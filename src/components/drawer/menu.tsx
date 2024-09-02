import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleDrawer } from '../../store/slices/uiSlice'
import { AppDispatch } from '../../store/store'
import { FavoriteIcon } from '../ui/icons'

function Item({
  href,
  icon,
  text,
}: {
  href: string
  icon: React.ReactElement
  text: string
}) {
  return (
    <li>
      <Link
        to={href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
      >
        {icon}
        <span className="ms-3">{text}</span>
      </Link>
    </li>
  )
}

function Menu() {
  const dispatch = useDispatch<AppDispatch>()

  const handleOnClick = () => {
    dispatch(toggleDrawer())
  }

  return (
    <ul className="space-y-2 font-medium" onClick={handleOnClick}>
      {/* <Item href="/" text="Home" icon={<HomeIcon />} /> */}
      <Item
        href="/favorites"
        text="Favorite Pokemons"
        icon={<FavoriteIcon status={true} />}
      />
    </ul>
  )
}

export default Menu
