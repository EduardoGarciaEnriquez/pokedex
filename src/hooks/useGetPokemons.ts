import { useState } from 'react'

export const useGetPokemons = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const getPokemons = async (page: number = 0) => {
    setLoading(true)

    await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response.results)
        setError(null)
      })
      .catch((error) => {
        console.error(error)
        setError('Error')
        setData([])
      })

    setLoading(false)
  }

  return { data, error, loading, getPokemons }
}
