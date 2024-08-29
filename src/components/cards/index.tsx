import { useSelector } from 'react-redux'
import { IRootState } from '../../store/store'
import Card, { IProps } from '../ui/card'
import CardSkeleton from '../ui/card/loading'

function Cards() {
  const { pokemons, loadingPokemons } = useSelector(
    (state: IRootState) => state.pokemon
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
        pokemons?.map((pokemon: IProps) => {
          return <Card pokemon={pokemon} key={pokemon.name} />
        })
      )}
    </div>
  )
}

export default Cards
