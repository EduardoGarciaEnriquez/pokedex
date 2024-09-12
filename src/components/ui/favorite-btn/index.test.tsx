import { fireEvent, screen } from '@testing-library/react'

import { describe, expect, it, vi } from 'vitest'
import { IPropsPokemon } from '../../../store/slices/pokemonSlice'

import FavoriteButton from '.'
import { renderWithProviders } from '../../../utils/test-utils'

const mockDispatch = vi.fn()
let initialState = { favorites: '[]' }

vi.mock('../../../store/redux-hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: vi.fn(() => initialState),
}))

const props: IPropsPokemon = {
  id: 1,
  name: 'poke test',
  sprites: {
    back_default: null,
    back_female: null,
    back_shiny: null,
    back_shiny_female: null,
    front_default: 'img/src/pokemon',
    front_female: null,
    front_shiny: null,
    front_shiny_female: null,
  },

  types: [{ type: { name: 'test', url: 'test-url.com' } }],
  base_experience: 0,
  height: 0,
  weight: 0,
  order: 0,
  abilities: [{ ability: { name: 'test ability' } }],
  stats: [{ base_stat: 0, stat: { name: 'test stat' } }],
}

const mountComponent = () => {
  renderWithProviders(<FavoriteButton pokemon={props} />)
}

describe('FavoriteButton', () => {
  it('renders component', () => {
    mountComponent()

    expect(screen.getByText('favorite')).toBeInTheDocument()
  })

  describe('when clicked', () => {
    it('calls toggle favorite dispatch', () => {
      mountComponent()

      fireEvent.click(screen.getByText('favorite'))

      expect(mockDispatch).toBeCalledWith({
        type: 'pokemon/toggleFavorite',
        payload: props,
      })
    })
  })

  describe('when pokemon is already favorited', () => {
    it('renders diferent icon', () => {
      initialState = { favorites: JSON.stringify([props]) }
      mountComponent()

      expect(screen.getByText('unfavorite')).toBeInTheDocument()
    })
  })
})
