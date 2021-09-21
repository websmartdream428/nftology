import styled from 'styled-components'

export const TableDescDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const TableDesc = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 50px;
`

export const DescTitle = styled.div`
  font-style: bold;
  font-weight: 600;
  color: #111026;
  font-size: 17px;
  margin-bottom: 20px;
`

export const DescSubtitle = styled.div`
  font-style: bold;
  font-weight: 300;
  color: #111026;
  font-size: 15px;
`

export const DescContent = styled.div`
  color: #a2a2c2;
  font-size: 15px;
`
