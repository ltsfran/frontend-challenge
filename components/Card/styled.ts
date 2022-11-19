import styled from 'styled-components'

export const CardBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  width: 100%;
  cursor: pointer;
`

export const CardDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.25rem;
`

export const CardTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.5rem;
  width: 100%;
`

export const CardSubTitle = styled.div`
  font-size: 1rem;
  width: 100%;
  color: #707070;
`

export const CardImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  span {
    border-radius: 1.5rem;
}
`
