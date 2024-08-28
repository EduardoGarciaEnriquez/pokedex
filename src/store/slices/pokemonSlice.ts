import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProps } from '../../components/ui/card'
import {
  getPokemonDetails,
  getPokemonsByPage,
  getPokemonsList,
} from '../../utils/pokemonAPI'

interface IState {
  pokemons: IProps[]
  loadingPokemons: boolean
  page: number
  pokemonsList: []
  loadingPokemonsList: boolean
  favorites: string
  error: null | string
}

const initialState: IState = {
  pokemons: [],
  loadingPokemons: false,
  page: 0,
  pokemonsList: [],
  loadingPokemonsList: false,
  favorites: localStorage.getItem('favorites') ?? '[]',
  error: null,
}

export const fetchPokemonByName = createAsyncThunk(
  'pokemon/fetchByName',
  async (name: string) => {
    const pokemonDetail = await getPokemonDetails(name)
    return pokemonDetail
  }
)

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async ({ page = 0 }: { page?: number }) => {
    const pokemonsRes = await getPokemonsByPage({ page })
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map(({ name }: { name: string }) => getPokemonDetails(name))
    )

    return pokemonsDetailed
  }
)

export const fetchPokemonsList = createAsyncThunk(
  'pokemon/fetchPokemonsList',
  async () => {
    return await getPokemonsList()
  }
)

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      let favorites = JSON.parse(localStorage.getItem('favorites') as string)

      const index = favorites.findIndex(
        (item: { id: number }) => item.id === action.payload.id
      )

      if (index === -1) {
        favorites.push(action.payload)
      } else {
        favorites = favorites.filter(
          (item: { id: number }) => item.id !== action.payload.id
        )
      }

      localStorage.setItem('favorites', JSON.stringify(favorites))

      state.pokemons.forEach((pokemon) => {
        if (pokemon.id === action.payload.id) {
          pokemon.favorite = pokemon.favorite ? !pokemon.favorite : true
        }
      })
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.loadingPokemons = true
    })
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      const pokemons = action.payload
      const favorites = JSON.parse(localStorage.getItem('favorites') as string)

      favorites.forEach((item: IProps) => {
        pokemons.forEach((pokemon: IProps) => {
          if (item.id === pokemon.id) pokemon.favorite = true
        })
      })

      state.pokemons = pokemons
      state.loadingPokemons = false
    })

    builder.addCase(fetchPokemonsList.pending, (state) => {
      state.loadingPokemonsList = true
    })
    builder.addCase(fetchPokemonsList.fulfilled, (state, action) => {
      state.pokemonsList = action.payload
      state.loadingPokemonsList = false
    })
    builder.addCase(fetchPokemonsList.rejected, (state, action) => {
      console.log(state, action)
    })

    builder.addCase(fetchPokemonByName.pending, (state) => {
      state.loadingPokemons = true
    })
    builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
      const pokemons = [action.payload]
      const favorites = JSON.parse(localStorage.getItem('favorites') as string)

      favorites.forEach((item: IProps) => {
        pokemons.forEach((pokemon: IProps) => {
          if (item.id === pokemon.id) pokemon.favorite = true
        })
      })

      state.pokemons = pokemons
      state.loadingPokemons = false
    })
  },
})

export const { toggleFavorite, setPage } = pokemonSlice.actions
export default pokemonSlice.reducer
