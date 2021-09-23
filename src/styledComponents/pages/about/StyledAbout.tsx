import styled from 'styled-components'

export const ImageText = styled.div`
  display: grid;
  grid-template-columns: 45% 52%;
  grid-gap: 3%;
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`

export const TextImage = styled.div`
  display: grid;
  grid-template-columns: 52% 45%;
  grid-gap: 3%;
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
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
  @media screen and (max-width: 600px) {
    text-align: left;
  }
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
  @media screen and (max-width: 800px) {
    grid-template-columns: 49% 49%;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
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

export const ArtistsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:not(:first-child) {
    margin-left: -10%;
  }
  overflow: auto;
  height: 100%;
  min-height: 105px;
`

export const ArtistImg = styled.img`
  border-radius: 100%;
  width: 25%;
  border: 1px solid #fdfdfd;
`

export const BestExampleImageCard = styled.div`
  & > *:not(:first-child) {
    margin-top: -50px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const BestExampleImgGroup = styled.div`
  display: flex;
  justify-content: center;
  & > *:not(:first-child) {
    margin-left: -100px;
  }
`

export const BestExampleImg = styled.img`
  width: 50%;
`

export const HowCardGroup = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  @media screen and (max-width: 800px) {
    grid-template-columns: 49% 49%;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`

export const LeftHowCard = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const RightHowCard = styled.div`
  position: relative;
  height: 80px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 100px;
  }
`

export const RightTextBoard = styled.div`
  background-color: #330b7e;
  border-radius: 24px;
  height: 80px;
  width: calc(100% - 40px);
  padding: 8px 60px 8px 8px;
  color: #fff;
  overflow: auto;
  text-align: right;
  margin-left: 10px;
`

export const LeftTextBoard = styled.div`
  background-color: #330b7e;
  border-radius: 24px;
  height: 80px;
  width: calc(100% - 40px);
  padding: 8px 8px 8px 60px;
  color: #fff;
  overflow: auto;
  margin-right: 10px;
`

export const HowImgDiv = styled.div`
  width: 80px;
  height: 80px;
  top: 10;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #ffac45;
`
export const RightHowImgDiv = styled.div`
  width: 80px;
  height: 80px;
  top: 10;
  right: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #ffac45;
`

export const HowImg = styled.img``

export const Title = styled.div`
  font-size: 11px;
  font-weight: 500;
`

export const Text = styled.div`
  font-size: 9px;
`

export const ArrowImg = styled.img`
  width: 10px;
  height: 10px;
`

export const DownArrow = styled.img`
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: 0;
  left: 50%;
`

export const UpArrow = styled.img`
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  left: 50%;
`

export const FeeCardGroup = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  text-align: center;
`

export const FeePerYear = styled.div`
  border-radius: 20px;
  padding: 3%;
  background-color: #330b7e;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 890px) {
    width: 55%;
    aspect-ratio: 1;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
  }
  @media screen and (max-width: 890px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const FutureProfits = styled.div`
  padding: 3%;
  border-radius: 20px;
  background-color: #ffac45;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 890px) {
    width: 55%;
    aspect-ratio: 1;
    position: absolute;
    bottom: 0;
    right: 0;
    overflow: auto;
  }
  @media screen and (max-width: 890px) {
    width: 100%;
    margin-top: 10px;
  }
`

export const FeeTitle = styled.div`
  font-size: 40px;
`

export const FeeSubTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`

export const FeeDescription = styled.div`
  font-size: 8px;
  margin: 10px;
`
