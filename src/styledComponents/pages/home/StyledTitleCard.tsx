import styled from 'styled-components'

export const TitleCardDiv = styled.div`
  background-color: #902fff;
  border-color: #707070;
  border-radius: 12px;
  padding: 27px 22px 17px 69px;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`

export const D3Title = styled.div`
  font-size: 59px;
  font-style: bold;
  font-family: 'Poppins';
  font-weight: 1000;
  @media screen and (max-width: 800px) {
    font-size: 49px;
  }
  @media screen and (max-width: 600px) {
    font-size: 39px;
  }
  @media screen and (max-width: 320px) {
    font-size: 35px;
  }
`

export const D3Subtitle = styled.div`
  font-size: 18px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
  @media screen and (max-width: 320px) {
    font-size: 11px;
  }
`

export const D3Link = styled.div`
  text-align: right;
  font-size: 17px;
  svg {
    margin-left: 9px;
  }
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
  @media screen and (max-width: 320px) {
    font-size: 11px;
  }
`

export const CursorSpan = styled.span`
  cursor: pointer;
`
