import Card from '@components/Card'
import { render, screen } from '@testing-library/react'

describe('Card component', () => {
  describe('Render content', () => {
    test('Card => render component', () => {
      render(
          <Card
            to="/items/2"
            index={0}
            imageUrl="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            title="Morty"
            subTitle="Alone Morty" />)
      screen.getByAltText('card-image-0')
      screen.getByText('Morty')
      screen.getByText('Alone Morty')
    })
  })
})
