import styled from 'styled-components'

export const ActivityDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const FeaturedContent = styled.div`
  padding-right: 20px;
  width: 90%;
  display: grid;
  grid-template-columns: 49% 49%;
  grid-row-gap: 20px;
  grid-column-gap: 2%;
  @media screen and (max-width: 800px) {
    grid-template-columns: 48% 48%;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`

export const PopularContent = styled.div`
  padding-right: 20px;
  width: 90%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-column-gap: 2%;
  grid-row-gap: 20px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 48% 48%;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`
