import styled from 'styled-components'

export const DetailBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 1rem;
  max-width: 300px;
  margin: 0 auto;
`

export const DetailImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  max-width: 300px;

  span {
    border-radius: 1rem;
  }
`

export const DetailContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 300px;
  row-gap: 0.5rem;
`

export const DetailTitle = styled.h1`
  font-size: 2.5rem;
  width: 100%;
`

export const DetailText = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const DetailSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const DetailSectionLabel = styled(DetailText)`
  color: #858585;
  margin-bottom: 0.25rem;
`
