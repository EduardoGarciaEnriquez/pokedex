import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import CardSkeleton from './loading'

const mountComponent = () => {
  render(<CardSkeleton />)
}

describe('CardSkeleton', () => {
  it('renders component', () => {
    mountComponent()

    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('has accesible text', () => {
    mountComponent()

    expect(screen.getByText('Loading...')).toHaveClass('sr-only')
  })
})
