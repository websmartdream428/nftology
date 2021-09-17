import styled from 'styled-components'

type DiscoverProps = {
  selected: boolean
}

export const DiscoverDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardBoard = styled.div`
  padding: 20px 0px;
  border-radius: 17px;
  background-color: #fdfdfe;
  width: 100%;
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 30px;
`

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  width: 190px;
`

export const Tab = styled.a<DiscoverProps>`
  cursor: pointer;
  padding: 8px 25px;
  margin-bottom: 10px;
  font-size: 17px;
  ${({ selected }) =>
    selected
      ? 'color: #111026; border-left: 2px solid #902FFF'
      : 'color: #B9B9D1'}
`

export const FeaturedContent = styled.div`
  padding-right: 20px;
  width: 90%;
  display: grid;
  grid-template-columns: 49% 49%;
  grid-column-gap: 2%;
`

export const PopularContent = styled.div`
  padding-right: 20px;
  width: 90%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-gap: 2%;
`
