import { useDispatch } from 'react-redux'
import { IProps } from '../card'
import { toggleFavorite } from '../../../store/slices/pokemonSlice'
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
