import styled from 'styled-components'

export const ProductPage = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
  @media screen and (max-width: 800px) {
    grid-template-columns: 100%;
  }
`

export const ProductWhiteCard = styled.div`
  margin: 15px 0;
  padding: 15px;
  border-radius: 17px;
  background-color: #fdfdfe;
  width: 100%;
  position: relative;
  overflow: auto;
`

export const ImageView = styled.div`
  position: relative;
  width: 100%;
  margin: 15px 0;
`

export const ToolButtonGroup = styled.div`
  position: absolute;
  right: 14px;
  top: 14px;
`

export const ToolButton = styled.button`
  width: 54px;
  height: 54px;
  font-size: 30px;
  text-align: center;
`

export const ProductName = styled.div`
  font-size: 25px;
  margin: 5px 0 15px 0;
`

export const ProductType = styled.div`
  font-size: 17px;
  margin-bottom: 10px;
`

export const ProductText = styled.div`
  font-size: 14px;
  color: #a2a2c2;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`

export const ReviewDiv = styled.div`
  font-size: 14px;
  color: #a2a2c2;
  position: absolute;
  right: 15px;
  bottom: 15px;
`

export const ProductCardTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 17px;
  svg {
    margin-right: 10px;
  }
`

export const DetailInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #a2a2c2;
  margin: 20px 0;
`

export const CustomFilterSelect = styled.select`
  padding: 15px;
  font-size: 16px;
  background-color: #f5f5fb;
  border: none;
  width: 100%;
  margin-top: 20px;
`

export const TableDiv = styled.div`
  overflow: auto;
`

export const CustomTable = styled.table`
  tr {
    th {
      font-size: 17px;
      font-weight: 350;
      text-align: left;
      padding: 10px;
    }
    td {
      font-size: 14px;
      color: #a2a2c2;
      padding: 5px;
    }
  }
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`

export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
