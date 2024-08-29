import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from './components/cards'
import Header from './components/header'
import Pagination from './components/pagination'
import { fetchPokemons } from './store/slices/pokemonSlice'
import { AppDispatch, IRootState } from './store/store'
import Toast from './components/toast'

function App() {
  const { isThemeDark } = useSelector((state: IRootState) => state.theme)

  const { page } = useSelector((state: IRootState) => state.pokemon)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    window.scrollTo(0, 0)
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
      <Toast />
      <Cards />
      <Pagination />
    </div>
  )
}

export default App
