import styled from 'styled-components'

export const ImageText = styled.div`
  display: grid;
  grid-template-columns: 45% 52%;
  grid-gap: 3%;
`

export const TextImage = styled.div`
  display: grid;
  grid-template-columns: 52% 45%;
  grid-gap: 3%;
`

export const Image = styled.img`
  width: 80%;
  margin: auto;
`

export const AboutCard = styled.div`
  padding: 40px;
  border-radius: 17px;
  background-color: #fdfdfe;
  width: 100%;
  margin: 30px 0;
`

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TextContent = styled.div`
  font-size: 17px;
  color: #111026;
`

export const TextTitle = styled.div`
  font-size: 30px;
  margin-bottom: 20px;
`

export const CardGroup = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-gap: 2%;
`

export const Card = styled.div`
  padding: 15px;
  border-radius: 20px;
  background-color: #330b7e;
  display: flex;
  flex-direction: row;
  color: #fff;
  align-items: center;
`

export const CardDesc = styled.div`
  padding: 10px;
`

export const CardDescTitle = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const CardDescSubTitle = styled.div`
  font-size: 14px;
  font-weight: 300;
`
