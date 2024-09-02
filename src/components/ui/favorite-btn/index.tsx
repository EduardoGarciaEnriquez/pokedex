import { useDispatch } from 'react-redux'
import {
  IPropsPokemon,
  toggleFavorite,
} from '../../../store/slices/pokemonSlice'
import { FavoriteIcon } from '../icons'

function FavoriteButton({ pokemon }: { pokemon: IPropsPokemon }) {
  const dispatch = useDispatch()
  const handleOnClick = () => {
    dispatch(toggleFavorite(pokemon))
  }
  return (
    <div className="cursor-pointer" onClick={handleOnClick}>
      <FavoriteIcon status={pokemon.favorite} />
    </div>
  )
}

export default FavoriteButton
