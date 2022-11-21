import Detail from '@components/Detail'
import { render, screen } from '@testing-library/react'

describe('Detail component', () => {
  describe('Render content', () => {
    test('Detail => render component', () => {
      render(
        <Detail
          imageUrl="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          title="Rick"
          subTitle="Rick and Morty"
          sections={[
            { label: 'Location', text: 'United States' }
          ]}/>)
      screen.getByAltText('detail-image')
      screen.getByText('Rick')
      screen.getByText('Rick and Morty')
    })
  })
})
