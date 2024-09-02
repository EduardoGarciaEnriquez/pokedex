import { useEffect } from 'react'
import Cards from '../components/cards'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store/store'
import { setFavorites } from '../store/slices/pokemonSlice'

function Favorites() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(setFavorites())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Cards />
}

export default Favorites
