export const getPokemonsByPage = async ({ page = 0 }: { page?: number }) => {
  return await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
  )
    .then((response) => response.json())
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getPokemonsList = async () => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    .then((response) => response.json())
    .then((response) => {
      return response.results
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getPokemonDetails = async (name: string) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((response) => {
      const favorites = JSON.parse(localStorage.getItem('favorites') as string)

      favorites.forEach((pokemon: { id: number }) => {
        if (pokemon.id === response.id) {
          response.favorite = true
        }
      })

      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getPokemonTypes = async () => {
  return await fetch(
    `https://pokeapi.co/api/v2/type`
  )
    .then((response) => response.json())
    .then((response) => {
      return response.results
    })
    .catch((error) => {
      console.error(error)
    })
}
