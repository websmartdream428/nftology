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
    ${() =>
      localStorage.getItem('usermenu') === 'on'
        ? 'right: 0;transition: 0.7s ease;'
        : 'right: -331px;transition: 0.7s ease;'}
  }
`
