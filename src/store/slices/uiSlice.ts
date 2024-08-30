import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isThemeDark: true,
  isDrawerVisible: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isThemeDark = !state.isThemeDark
    },
    toggleDrawer: (state) => {
      state.isDrawerVisible = !state.isDrawerVisible
    },
  },
})

export const { toggleTheme, toggleDrawer } = themeSlice.actions
export default themeSlice.reducer
