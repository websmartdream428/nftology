import styled from 'styled-components'

export const CustomSelect = styled.select`
  background-color: #e5e9fa;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  &:focus {
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  outline: none;
`

export const CustomOption = styled.option`
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
`
