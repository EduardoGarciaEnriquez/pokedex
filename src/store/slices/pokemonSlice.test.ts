import { describe, expect, test } from 'vitest'
import pokemonSlice, { initialState } from './pokemonSlice'

describe('tests for pokemonSlice', () => {
  test('initialize slice with initialValue', () => {
    const pokemonSliceInit = pokemonSlice(initialState, { type: 'unknown' })
    expect(pokemonSliceInit).toBe(initialState)
  })
})
