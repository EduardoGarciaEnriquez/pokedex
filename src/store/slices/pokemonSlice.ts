import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProps } from '../../components/ui/card'
import {
  getPokemonByName,
  getPokemonsByPage,
  getPokemonsByType,
  getPokemonsList,
  getPokemonTypes,
} from '../../utils/pokemonAPI'

export enum Roles {
  warning = 'warning',
  error = 'error',
  success = 'success',
}

interface IState {
  total: number
  pokemons: IProps[]
  loadingPokemons: boolean
  page: number
  pokemonsList: []
  loadingPokemonsList: boolean
  pokemonTypes: []
  loadingPokemonTypes: boolean
  favorites: string
  toastMsg: null | string
  isToastVisible: boolean
  toastRole: Roles | null
}

const initialState: IState = {
  total: 0,
  pokemons: [],
  loadingPokemons: false,
  page: 0,
  pokemonsList: [],
  loadingPokemonsList: false,
  pokemonTypes: [],
  loadingPokemonTypes: false,
  favorites: localStorage.getItem('favorites') ?? '[]',
  toastMsg: null,
  isToastVisible: false,
  toastRole: null,
}

export const fetchPokemonByName = createAsyncThunk(
  'pokemon/fetchByName',
  async (name: string) => {
    const pokemonDetail = await getPokemonByName(name)
    return pokemonDetail
  }
)

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async ({ page = 0 }: { page?: number }) => {
    const pokemonsRes = await getPokemonsByPage({ page })
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.results.map(({ name }: { name: string }) =>
        getPokemonByName(name)
      )
    )

    return { pokemonsDetailed, total: pokemonsRes.count }
  }
)

export const fetchPokemonsByType = createAsyncThunk(
  'pokemon/fetchPokemonsByType',
  async (type: string) => {
    const pokemonsRes = await getPokemonsByType(type)
    const pokemonsDetailed = await Promise.all(
      pokemonsRes.map(({ pokemon }: { pokemon: { name: string } }) =>
        getPokemonByName(pokemon.name)
      )
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

export const fetchPokemonTypes = createAsyncThunk(
  'pokemon/fetchPokemonTypes',
  async () => {
    return await getPokemonTypes()
  }
)

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      let favorites = JSON.parse(state.favorites)

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
      state.favorites = JSON.stringify(favorites)

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
    setFavorites: (state) => {
      const favorites = JSON.parse(localStorage.getItem('favorites') as string)

      favorites.forEach((item: IProps) => {
        item.favorite = true
      })

      state.pokemons = favorites
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.loadingPokemons = true
    })
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload.pokemonsDetailed
      state.total = action.payload.total
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
      state.pokemons = [action.payload]
      state.loadingPokemons = false
    })
    builder.addCase(fetchPokemonByName.rejected, (state, action) => {
      state.loadingPokemons = false

      state.pokemons = []
      state.toastMsg = `Error: ${action.error.message}`
      state.toastRole = Roles.error
      state.isToastVisible = true
    })

    builder.addCase(fetchPokemonTypes.pending, (state) => {
      state.loadingPokemonTypes = true
    })
    builder.addCase(fetchPokemonTypes.fulfilled, (state, action) => {
      state.pokemonTypes = action.payload
      state.loadingPokemonTypes = false
    })
    builder.addCase(fetchPokemonTypes.rejected, (state, action) => {
      state.loadingPokemonTypes = false

      state.pokemonTypes = []
      state.toastMsg = `Error: ${action.error.message}`
      state.toastRole = Roles.error
      state.isToastVisible = true
    })

    builder.addCase(fetchPokemonsByType.pending, (state) => {
      state.loadingPokemons = true
    })
    builder.addCase(fetchPokemonsByType.fulfilled, (state, action) => {
      state.pokemons = action.payload
      state.loadingPokemons = false
    })
    builder.addCase(fetchPokemonsByType.rejected, (state, action) => {
      state.loadingPokemons = false

      state.pokemons = []
      state.toastMsg = `Error: ${action.error.message}`
      state.toastRole = Roles.error
      state.isToastVisible = true
    })
  },
})

export const { toggleFavorite, setPage, closeToast, setFavorites } =
  pokemonSlice.actions
export default pokemonSlice.reducer
