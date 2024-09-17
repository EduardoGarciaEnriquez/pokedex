import { useEffect } from 'react'
import Cards from '../components/cards'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/store'
import { setFavorites } from '../store/slices/pokemonSlice'
import { MetaDecorator } from '../utils/meta-decorator'

function Favorites() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(setFavorites())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <MetaDecorator
        title="Pokedex | Your favorite pokemons"
        description="All your favorite pokemons from all types and generations."
      />
      <Cards />
    </>
  )
}

export default Favorites
