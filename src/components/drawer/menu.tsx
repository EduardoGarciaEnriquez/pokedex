import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleDrawer } from '../../store/slices/uiSlice'
import { AppDispatch, IRootState } from '../../store/store'
import { FavoriteIcon, LoadingIcon } from '../ui/icons'
import { useEffect } from 'react'
import { fetchPokemonTypes } from '../../store/slices/pokemonSlice'
import pokeballIcon from '../../assets/pokeball.svg'

function Item({
  href,
  icon,
  text,
}: {
  href: string
  icon?: React.ReactElement
  text: string
}) {
  return (
    <li>
      <Link
        to={href}
        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white 
        group w-full hover:bg-gray-100 dark:hover:bg-gray-700`}
      >
        {icon ?? (
          <img
            src={pokeballIcon}
            alt="pokeball menu item icon"
            className="h-6"
          />
        )}
        <span className="ms-3">{text}</span>
      </Link>
    </li>
  )
}

function Menu() {
  const dispatch = useDispatch<AppDispatch>()
  const { pokemonTypes, loadingPokemonTypes } = useSelector(
    (state: IRootState) => state.pokemon
  )

  useEffect(() => {
    dispatch(fetchPokemonTypes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      {loadingPokemonTypes ? (
        <LoadingIcon />
      ) : (
        pokemonTypes.map(({ name }) => (
          <Item href={`/type/${name}`} text={name} key={name} />
        ))
      )}
    </ul>
  )
}

export default Menu
