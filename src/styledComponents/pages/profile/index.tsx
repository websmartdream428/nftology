import styled from 'styled-components'

export const ProfilePage = styled.div`
  display: grid;
  grid-template-columns: 30% 67%;
  grid-column-gap: 3%;
  @media screen and (max-width: 800px) {
    grid-template-columns: 100%;
  }
`

export const ProfileText = styled.div`
  font-size: 14px;
  color: #a2a2c2;
`

export const AboutText = styled.div`
  font-size: 17px;
  margin 10px 0;
`
export const ProfileCard = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-column-gap: 1%;
  grid-row-gap: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 49% 49%;
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 100%;
  }
`
