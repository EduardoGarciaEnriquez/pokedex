import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPokemonByName,
  fetchPokemons,
  fetchPokemonsList,
  setPage,
} from '../../../store/slices/pokemonSlice'
import { AppDispatch, IRootState } from '../../../store/store'

function Search() {
  const [value, setValue] = useState<string>('')
  const dispatch = useDispatch<AppDispatch>()
  const { pokemonsList } = useSelector((state: IRootState) => state.pokemon)

  useEffect(() => {
    dispatch(fetchPokemonsList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (value !== '') {
      dispatch(fetchPokemonByName(value))
      setValue('')
    } else {
      dispatch(setPage(0))
      dispatch(fetchPokemons({}))
    }
  }

  const handleOnChange = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }

  return (
    <form className="max-w-md w-full">
      <div className="w-full flex items-middle">
        <select
          onChange={handleOnChange}
          className="p-2.5 w-[90%] z-20 text-sm text-gray-600 bg-gray-50  rounded-s-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 bg-transparent"
          required
          value={value}
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
        <button
          type="submit"
          className="p-2.5 text-sm font-medium h-auto text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSubmit}
        >
          {value === '' ? (
            <>
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              <span className="sr-only">Home</span>
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </>
          )}
        </button>
      </div>
    </form>
  )
}

export default Search
