import styled from 'styled-components'

type HeaderProps = {
  isAuthenticate: string
  mobileView: boolean
}
export const HeaderBar = styled.div<HeaderProps>`
  position: fixed;
  text-align: right;
  padding: 40px 5% 48px 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  ${({ mobileView, isAuthenticate }) =>
    mobileView
      ? 'width: 100%;justify-content: space-between;'
      : `${
          isAuthenticate === 'true'
            ? 'width: calc(100% - 662px);'
            : 'width: calc(100% - 331px);'
        }`}
  z-index: 1;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
  }
`

export const SearchDiv = styled.div`
  // margin-right: 20px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #e5e9fa;
  border-radius: 10px;
  height: 50px;
  right: 0;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const SearchInput = styled.input`
  border: none;
  padding: 15px 15px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;
  background-color: #e5e9fa;
  outline: none;
  width: 100%;
`

export const SignInDiv = styled.div`
  margin-left: 20px;
  cursor: pointer;
  color: #000;
`

export const MenuButtonGroup = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    justify-content: space-between;
    width: 100%;
  }
`

export const MenuShow = styled.button`
  // padding-top: 40px;
  display: flex;

  align-items: center;
  // padding-bottom: 48px;
  font-size: 30px;
  // z-index: 1;
  border: none;
  background: none;
  cursor: pointer;
  color: #000;
`

export const RightDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
  }
`

export const UserMenuShow = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`
