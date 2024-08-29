import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../../store/store'
import { setPage } from '../../store/slices/pokemonSlice'

function Pagination() {
  const dispatch = useDispatch<AppDispatch>()

  const { page, pokemonsList, pokemons, loadingPokemonsList } = useSelector(
    (state: IRootState) => state.pokemon
  )

  const currentPage = page + 1
  const totalPages = pokemonsList.length / 10

  const handlePrev = () => {
    if (page > 0) dispatch(setPage(page - 1))
  }

  const handleNext = () => {
    if (page < totalPages) dispatch(setPage(page + 1))
  }

  if (pokemons.length <= 1 || loadingPokemonsList) return null

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          {currentPage * 10 - 9}
        </span>{' '}
        to{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          {currentPage * 10}
        </span>{' '}
        of{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          {pokemonsList.length}
        </span>{' '}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Prev
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Pagination
