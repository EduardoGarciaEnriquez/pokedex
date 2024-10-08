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

export const getPokemonByName = async (name: string) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getPokemonDetails = async (name: string) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
    .then((response) => response.json())
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getEvolutionChain = async (url: string) => {
  return await fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response.chain
    })
    .catch((error) => {
      console.log(error)
    })
}

export const getPokemonTypes = async () => {
  return await fetch(`https://pokeapi.co/api/v2/type`)
    .then((response) => response.json())
    .then((response) => {
      return response.results
    })
    .catch((error) => {
      console.error(error)
    })
}

export const getPokemonsByType = async (type: string) => {
  return await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then((response) => response.json())
    .then((response) => {
      return response.pokemon
    })
    .catch((error) => {
      console.error(error)
    })
}
