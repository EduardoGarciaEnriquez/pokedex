import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/themeSlice'
import pokemonSlice from './slices/pokemonSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    pokemon: pokemonSlice,
  },
})

export type IRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
