import styled from 'styled-components'

export const UserbarDiv = styled.div`
  background-color: #fff;
  width: 331px;
  height: 100;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: 1280px) {
    width: 0;
  }
  z-index: 1;
`
