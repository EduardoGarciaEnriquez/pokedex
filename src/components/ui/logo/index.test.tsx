import { describe, expect, it, vi } from 'vitest'

import { fireEvent, screen } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/test-utils'

import Logo from '.'

const mockDispatch = vi.fn()

vi.mock('../../../store/redux-hooks', () => ({
  useAppDispatch: () => mockDispatch,
  useAppSelector: vi.fn(() => ({ isThemeDark: false })),
}))

const mountComponent = () => {
  renderWithProviders(<Logo />)
}

describe('Logo', () => {
  it('renders the component', () => {
    mountComponent()

    expect(screen.getByAltText(/pokeball/)).toBeInTheDocument()
  })

  describe('when clicked', () => {
    it('calls toggle drawer dispatch', () => {
      mountComponent()

      fireEvent.click(screen.getByRole('img', { name: /pokeball/ }))

      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'theme/toggleDrawer',
        payload: undefined,
      })
    })
  })
})
