import styled from 'styled-components'

export const UserbarDiv = styled.div`
  background-color: #fff;
  width: 331px;
  height: 100;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 1;
  @media screen and (max-width: 1280px) {
    background-color: #000;
    position: fixed;
    right: 0;
  }
`
