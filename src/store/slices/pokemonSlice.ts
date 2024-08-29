import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProps } from '../../components/ui/card'
import {
  getPokemonDetails,
  getPokemonsByPage,
  getPokemonsList,
} from '../../utils/pokemonAPI'

export enum Roles {
  warning = 'warning',
  error = 'error',
  success = 'success',
}

interface IState {
  pokemons: IProps[]
  loadingPokemons: boolean
  page: number
  pokemonsList: []
  loadingPokemonsList: boolean
  favorites: string
  toastMsg: null | string
  isToastVisible: boolean
  toastRole: Roles | null
}

const initialState: IState = {
  pokemons: [],
  loadingPokemons: false,
  page: 0,
  pokemonsList: [],
  loadingPokemonsList: false,
  favorites: localStorage.getItem('favorites') ?? '[]',
  toastMsg: null,
  isToastVisible: false,
  toastRole: null,
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

        state.toastMsg = `Pokemon added to favorites`
        state.toastRole = Roles.success
        state.isToastVisible = true
      } else {
        favorites = favorites.filter(
          (item: { id: number }) => item.id !== action.payload.id
        )
        state.toastMsg = `Pokemon removed from favorites`
        state.toastRole = Roles.success
        state.isToastVisible = true
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
    closeToast: (state) => {
      state.toastMsg = null
      state.toastRole = null
      state.isToastVisible = false
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
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.loadingPokemons = false

      state.pokemons = []
      state.toastMsg = `Error: ${action.error.message}`
      state.toastRole = Roles.error
      state.isToastVisible = true
    })

    builder.addCase(fetchPokemonsList.pending, (state) => {
      state.loadingPokemonsList = true
    })
    builder.addCase(fetchPokemonsList.fulfilled, (state, action) => {
      state.pokemonsList = action.payload
      state.loadingPokemonsList = false
    })
    builder.addCase(fetchPokemonsList.rejected, (state, action) => {
      state.loadingPokemonsList = false

      state.pokemonsList = []
      state.toastMsg = `Error: ${action.error.message}`
      state.toastRole = Roles.error
      state.isToastVisible = true
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
    builder.addCase(fetchPokemonByName.rejected, (state, action) => {
      state.loadingPokemons = false

      state.pokemons = []
      state.toastMsg = `Error: ${action.error.message}`
      state.toastRole = Roles.error
      state.isToastVisible = true
    })
  },
})

export const { toggleFavorite, setPage, closeToast } = pokemonSlice.actions
export default pokemonSlice.reducer
