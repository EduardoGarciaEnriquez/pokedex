import { it, describe, vi, expect } from 'vitest'
import { screen } from '@testing-library/react'

import { renderWithProviders } from '../../../utils/test-utils'

import Search from '.'

const mockDispatch = vi.fn()

let initialState = { pokemonsList: [], loadingPokemonsList: false }

vi.mock('../../../store/redux-hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: vi.fn(() => initialState),
}))

const mountComponent = () => {
  renderWithProviders(<Search />)
}

describe('Search', () => {
  it('renders component', () => {
    mountComponent()

    expect(screen.getByRole('combobox')).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /home/i,
      })
    ).toBeInTheDocument()
  })

  describe('when component is rendered', () => {
    it('calls pokemons list dispatch', async () => {
      mountComponent()

      expect(mockDispatch).toHaveBeenCalled()
    })
  })

  describe('when loading is true', () => {
    it('disables selector', () => {
      initialState.loadingPokemonsList = true
      mountComponent()

      expect(screen.getByRole('combobox')).toHaveProperty('disabled', true)
    })

    it('renders loading icon on search button', () => {
      initialState.loadingPokemonsList = true
      mountComponent()

      expect(screen.getByRole('link', { name: 'Loading...' })).toHaveProperty(
        'href',
        expect.stringMatching('/')
      )
    })
  })
})
