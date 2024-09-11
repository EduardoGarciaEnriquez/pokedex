import { useAppDispatch, useAppSelector } from '../../../store/redux-hooks'
import {
  IPropsPokemon,
  toggleFavorite,
} from '../../../store/slices/pokemonSlice'
import { FavoriteIcon } from '../icons'
import { AppDispatch, IRootState } from '../../../store/store'

function FavoriteButton({ pokemon }: { pokemon: IPropsPokemon }) {
  const dispatch = useAppDispatch<AppDispatch>()
  const { favorites } = useAppSelector((state: IRootState) => state.pokemon)

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
