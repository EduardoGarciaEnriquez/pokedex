import { useDispatch, useSelector } from 'react-redux'
import {
  IPropsPokemon,
  toggleFavorite,
} from '../../../store/slices/pokemonSlice'
import { FavoriteIcon } from '../icons'
import { IRootState } from '../../../store/store'

function FavoriteButton({ pokemon }: { pokemon: IPropsPokemon }) {
  const dispatch = useDispatch()
  const { favorites } = useSelector((state: IRootState) => state.pokemon)
  const handleOnClick = () => {
    dispatch(toggleFavorite(pokemon))
  }

  let favorite: boolean = false

  JSON.parse(favorites).forEach((item: { id: number }) => {
    if (item.id === pokemon.id) favorite = true
  })

  return (
    <div className="cursor-pointer" onClick={handleOnClick}>
      <FavoriteIcon status={favorite} />
    </div>
  )
}

export default FavoriteButton
