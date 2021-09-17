import React from 'react'
import {
  AboutCard,
  Image,
  ImageText,
  TextContent,
  TextDiv,
} from '../../styledComponents/pages/about/StyledAbout'
import content from '../../constant/en.json'
import Img1 from '../../assets/images/img1.png'

const TopCard: React.FC = () => {
  return (
    <AboutCard>
      <ImageText>
        <Image src={Img1} alt="about" />
        <TextDiv>
          <TextContent>{content.about_Text_1}</TextContent>
        </TextDiv>
      </ImageText>
    </AboutCard>
  )
}

export default TopCard
