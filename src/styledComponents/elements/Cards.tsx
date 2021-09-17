import styled from 'styled-components'

export const WhiteCard = styled.div`
  padding: 31px;
  border-radius: 17px;
  background-color: #fdfdfe;
  width: 100%;
  margin: 30px 0;
`

export const NoColorCard = styled.div`
  width: 100%;
  margin: 30px 0;
`

export const GridRowCard = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
`

export const CardTitle = styled.div`
  font-size: 17px;
  font-family: 'Poppins';
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
`

export const CardImageSlider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const MoreText = styled.div`
  cursor: pointer;
  svg {
    margin-left: 5px;
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-gap: 2%;
`

export const ChildCard = styled.div`
  border-radius: 23px;
  width: 100%;
  height: 125px;
  position: relative;
`
