import React from 'react'
import styled from 'styled-components'
import { FilterUp, FilterDown } from '../CustomSVG'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  svg {
    margin-left: 7px;
  }
`
export const FilterIcon = styled.div`
  display: flex;
  flex-direction: column;
  svg {
    margin-bottom: 2px;
  }
`
export const TitleStyle = styled.div`
  font-size: 15px;
  font-family: Poppins;
`
type CustomHeadrProps = {
  title: string
}
const CustomHeader = ({ title }: CustomHeadrProps) => {
  return (
    <Header>
      <TitleStyle>{title}</TitleStyle>
      <FilterIcon>
        <FilterUp />
        <FilterDown />
      </FilterIcon>
    </Header>
  )
}
export default CustomHeader
