import React from 'react'
import {
  AboutCard,
  Image,
  ImageText,
  TextContent,
  TextDiv,
  TextTitle,
} from '../../styledComponents/pages/about/StyledAbout'
import content from '../../constant/en.json'
import Img3 from '../../assets/images/img3.png'

const UniqueCard: React.FC = () => {
  return (
    <AboutCard>
      <ImageText>
        <Image src={Img3} alt="about" />
        <TextDiv>
          <TextTitle>Unique</TextTitle>
          <TextContent>{content.about_Text_unique}</TextContent>
        </TextDiv>
      </ImageText>
    </AboutCard>
  )
}

export default UniqueCard
