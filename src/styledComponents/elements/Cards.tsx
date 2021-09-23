import styled from 'styled-components'

export const WhiteCard = styled.div`
  padding: 31px;
  border-radius: 17px;
  background-color: #fdfdfe;
  width: 100%;
  margin-bottom: 60px;
`

export const NoColorCard = styled.div`
  width: 100%;
  margin: 30px 0;
`

export const GridRowCard = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
  @media screen and (max-width: 800px) {
    grid-template-columns: 100%;
  }
`

export const CardTitle = styled.div`
  font-size: 17px;
  font-family: 'Poppins';
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
`

export const CardImageSlider = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-column-gap: 2%;
  grid-row-gap: 30px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 48% 48%;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`

export const MoreText = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  color: #000;
  svg {
    margin-left: 5px;
  }
`

export const CardContainer = styled.div`
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

export const ChildCard = styled.div`
  border-radius: 23px;
  width: 100%;
`

export const ChartCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
