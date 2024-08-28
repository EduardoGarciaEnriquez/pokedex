import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/header'
import Card, { IProps } from './components/ui/card'
import { fetchPokemons } from './store/slices/pokemonSlice'
import { AppDispatch, IRootState } from './store/store'
import Pagination from './components/pagination'
import CardSkeleton from './components/ui/card/loading'

function App() {
  const { isThemeDark } = useSelector((state: IRootState) => state.theme)
  const { pokemons, loadingPokemons, error } = useSelector(
    (state: IRootState) => state.pokemon
  )

  const { page } = useSelector((state: IRootState) => state.pokemon)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchPokemons({ page }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  useEffect(() => {
    if (isThemeDark) {
      document.body.setAttribute('class', 'dark')
    } else {
      document.body.removeAttribute('class')
    }
  }, [isThemeDark])

  return (
    <div className="min-h-[100vh] dark:bg-slate-800 bg-slate-200 pb-10">
      <Header />
      {!loadingPokemons && !error && (
        <div className="pt-24 pb-10 w-full max-w-2xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 justify-items-center px-4 md:px-0">
          {pokemons?.map((pokemon: IProps) => {
            return <Card pokemon={pokemon} key={pokemon.name} />
          })}
        </div>
      )}
      {loadingPokemons && (
        <div className="pt-24 pb-10 w-full max-w-2xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 justify-items-center px-4 md:px-0">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      )}
      <Pagination />
    </div>
  )
}

export default App
