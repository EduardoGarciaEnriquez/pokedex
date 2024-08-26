import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isThemeDark: true,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.isThemeDark = action.payload
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
