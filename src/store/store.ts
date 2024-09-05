import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/uiSlice'
import pokemonSlice from './slices/pokemonSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    pokemon: pokemonSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type IRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
