import styled from 'styled-components'

export const HeaderBar = styled.div`
  position: fixed;
  text-align: right;
  padding-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 48px;
  justify-content: flex-end;
  right: 30px;
  z-index: 1;
`

export const SearchDiv = styled.div`
  margin-right: 20px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #e5e9fa;
  border-radius: 10px;
`

export const SearchInput = styled.input`
  border: none;
  padding: 14px 15px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;
  background-color: #e5e9fa;
  outline: none;
`

export const SignInDiv = styled.div`
  cursor: pointer;
`
