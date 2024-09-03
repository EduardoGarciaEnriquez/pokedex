import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  fetchPokemons,
  fetchPokemonsList,
  setPage,
} from '../../../store/slices/pokemonSlice'
import { AppDispatch, IRootState } from '../../../store/store'
import { HomeIcon, LoadingIcon, SearchIcon } from '../icons'

function Search() {
  const [value, setValue] = useState<string>('')
  const dispatch = useDispatch<AppDispatch>()
  const { pokemonsList, loadingPokemonsList } = useSelector(
    (state: IRootState) => state.pokemon
  )

  useEffect(() => {
    dispatch(fetchPokemonsList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = () => {
    setValue('')
  }

  const goHome = () => {
    dispatch(setPage(0))
    dispatch(fetchPokemons({}))
  }

  const handleOnChange = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }

  return (
    <form className="max-w-md w-full">
      <div className="w-full flex items-middle">
        <select
          onChange={handleOnChange}
          className="p-2.5 w-[90%] z-20 text-sm text-gray-600 bg-gray-50  rounded-s-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 bg-transparent transition-all duration-1000 ease-in-out"
          required
          value={value}
          disabled={loadingPokemonsList}
        >
          <option value="" disabled>
            Select a Pokemon
          </option>
          {pokemonsList.map((item: { name: string }) => {
            return (
              <option value={item.name} key={item.name}>
                {item.name}
              </option>
            )
          })}
        </select>
        {value === '' ? (
          <Link
            to="/"
            className="p-2.5 text-sm font-medium h-auto text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={goHome}
          >
            {loadingPokemonsList ? <LoadingIcon /> : <HomeIcon />}
          </Link>
        ) : (
          <Link
            to={`/detail/${value}`}
            className="p-2.5 text-sm font-medium h-auto text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            {loadingPokemonsList ? <LoadingIcon /> : <SearchIcon />}
          </Link>
        )}
      </div>
    </form>
  )
}

export default Search
