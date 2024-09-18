import { useDispatch, useSelector } from 'react-redux'
import Cards from '../components/cards'
import Pagination from '../components/pagination'
import { AppDispatch, IRootState } from '../store/store'
import { useEffect } from 'react'
import { fetchPokemons, setPage } from '../store/slices/pokemonSlice'
import { MetaDecorator } from '../utils/meta-decorator'

function Home() {
  const { page } = useSelector((state: IRootState) => state.pokemon)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(fetchPokemons({ page }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  useEffect(() => {
    dispatch(setPage(0))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <MetaDecorator
        title="Pokedex | Home"
        description="Record of Pokémon that a trainer has seen or caught, and a source of information about Pokémon species and their evolutions" link={''}      />
      <Cards />
      <Pagination />
    </>
  )
}

export default Home
