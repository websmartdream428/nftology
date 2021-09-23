import styled from 'styled-components'

export const CounterCardGroup = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  text-align: center;
  justify-content: center;
  & > *:not(:first-child) {
    margin-left: -20px;
  }
`

export const CounterCardDiv = styled.div`
  padding: 2% 5%;
  border-radius: 138px;
  background-color: #e5e9fa;
  box-shadow: 0px 30px 30px #00000073;
`

export const CounterNumber = styled.div`
  font-size: 50px;
  font-weight: 700;
  font-family: 'Poppins';
  color: #350098;
  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
  @media screen and (max-width: 320px) {
    font-size: 25px;
  }
`

export const CounterDesc = styled.div`
  font-size: 15px;
  font-family: 'Poppins';
  color: #350098;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
  @media screen and (max-width: 600px) {
    font-size: 9px;
  }
  @media screen and (max-width: 320px) {
    font-size: 8px;
  }
`

export const CounterDiv = styled.div`
  overflow: auto;
`
