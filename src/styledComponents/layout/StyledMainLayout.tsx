import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f5f5fb;
  display: flex;
`
type MainContentProps = {
  isAuthenticate: boolean
}
export const MainContent = styled.div<MainContentProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: auto;
  ${({ isAuthenticate }) =>
    isAuthenticate
      ? 'width: calc(100vw - (331px * 2));'
      : 'width: calc(100vw - 331px);'}
`

export const PageContainter = styled.div`
  margin: auto;
  width: 80%;
  margin-top: 136px;
`
