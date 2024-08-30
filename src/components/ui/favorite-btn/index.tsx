import { useDispatch } from 'react-redux'
import {
  toggleFavorite
} from '../../../store/slices/pokemonSlice'
import { IProps } from '../card'
import { FavoriteIcon } from '../icons'

function FavoriteButton({ pokemon }: { pokemon: IProps }) {
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
