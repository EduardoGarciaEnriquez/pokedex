import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Cards from '../components/cards'
import { fetchPokemonsByType } from '../store/slices/pokemonSlice'
import { AppDispatch } from '../store/store'
import { MetaDecorator } from '../utils/meta-decorator'

function Types() {
  const dispatch = useDispatch<AppDispatch>()
  const { type } = useParams<string>()

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchPokemonsByType(type ?? 'undefined'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])

  return (
    <>
      <MetaDecorator
        title={`Pokedex | ${type} pokemons`}
        description={`All the ${type} pokemons.`}
        link={`#/type/${type}`}
      />
      <Cards />
    </>
  )
}

export default Types
