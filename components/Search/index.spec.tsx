import Search from '@components/Search'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Search component', () => {
  describe('Render content', () => {
    test('Search => render onEnter prop', () => {
      const mockHandler = jest.fn()
      render(
        <Search onEnter={mockHandler} defaultValue="rick" />)
      const inputElement = screen.getByDisplayValue('rick')
      fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 })
      expect(mockHandler).toHaveBeenCalledTimes(1)
    })
  })
})
