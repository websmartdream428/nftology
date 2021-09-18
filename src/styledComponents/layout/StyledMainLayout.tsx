import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f5f5fb;
  display: flex;
`
type MainContentProps = {
  isAuthenticate: string
  mobileView: boolean
}
export const MainContent = styled.div<MainContentProps>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: auto;

  ${({ mobileView, isAuthenticate }) =>
    mobileView
      ? 'width: 100%'
      : `${
          isAuthenticate === 'true'
            ? 'width: calc(100vw - (331px * 2));'
            : 'width: calc(100vw - 331px);'
        }`}
`

export const PageContainter = styled.div`
  margin: auto;
  width: 90%;
  margin-top: 136px;
`
