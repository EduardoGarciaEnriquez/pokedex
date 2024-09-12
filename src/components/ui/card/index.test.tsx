import { screen } from '@testing-library/react'
import { describe, expect, it, test, vi } from 'vitest'

import { renderWithProviders } from '../../../utils/test-utils'
import { IPropsPokemon } from '../../../store/slices/pokemonSlice'

import Card from '.'

const mockRef = { current: vi.fn() }

vi.mock('../../../utils/hooks/useElementOnScreen', () => ({
  useElementOnScreen: () => ({
    show: true,
    ref: mockRef,
  }),
}))

const props: IPropsPokemon = {
  id: 1,
  name: 'pokename',
  sprites: {
    back_default: null,
    back_female: null,
    back_shiny: null,
    back_shiny_female: null,
    front_default: 'img/src/pokename',
    front_female: null,
    front_shiny: null,
    front_shiny_female: null,
  },

  types: [
    { type: { name: 'poketype-1', url: 'poketype1-test-url.com' } },
    { type: { name: 'poketype-2', url: 'poketype2-test-url.com' } },
  ],
  base_experience: 0,
  height: 0,
  weight: 0,
  order: 0,
  abilities: [{ ability: { name: 'test ability' } }],
  stats: [{ base_stat: 0, stat: { name: 'test stat' } }],
}

const mountComponent = () => {
  renderWithProviders(<Card pokemon={props} />)
}

describe('Card', () => {
  it('renders an image with a link', () => {
    mountComponent()

    expect(
      screen.getByRole('img', { name: /pokename/i }).parentElement
    ).toHaveProperty('href', expect.stringMatching(/.*\/detail\/pokename/))
  })

  it('renders favorite button', () => {
    mountComponent()

    expect(screen.getByRole('button', { name: 'favorite' })).toBeInTheDocument()
  })

  it('renders name with a link', () => {
    mountComponent()

    expect(
      screen.getByRole('heading', { level: 5, name: props.name }).parentElement
    ).toHaveProperty('href', expect.stringMatching(/\.*\/detail\/pokename/))
  })

  test.each(props.types)(
    'renders the correct href and text for type $type.name',
    ({ type }) => {
      mountComponent()

      // Expect the anchor element to have the correct href that matches the type URL pattern
      expect(screen.getByText(type.name).parentElement).toHaveProperty(
        'href',
        expect.stringMatching(new RegExp(`/type/${type.name}`))
      )
    }
  )
})
