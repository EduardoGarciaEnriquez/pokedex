import { useSelector } from 'react-redux'
import { IRootState } from '../../store/store'
import Card from '../ui/card'
import CardSkeleton from '../ui/card/loading'
import { IPropsPokemon } from '../../store/slices/pokemonSlice'

function Cards() {
  const { pokemons, loadingPokemons } = useSelector(
    (state: IRootState) => state.pokemon
  )

  if (pokemons.length === 0 && !loadingPokemons)
    return (
      <div className="text-white text-lg pt-24 text-center">
        There were no results. Try with a different input.
      </div>
    )

  return (
    <div className="pt-24 pb-10 w-full max-w-2xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 justify-items-center px-4 md:px-0">
      {loadingPokemons ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        pokemons?.map((pokemon: IPropsPokemon) => {
          return <Card pokemon={pokemon} key={pokemon.name} />
        })
      )}
    </div>
  )
}

export default Cards
