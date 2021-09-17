import React from 'react'
import {
  AboutCard,
  Image,
  TextContent,
  TextDiv,
  TextImage,
  TextTitle,
} from '../../styledComponents/pages/about/StyledAbout'
import content from '../../constant/en.json'
import Img4 from '../../assets/images/img4.png'

const OwnableCard: React.FC = () => {
  return (
    <AboutCard>
      <TextImage>
        <TextDiv dir="rtl">
          <TextTitle>Ownable</TextTitle>
          <TextContent>{content.about_Text_ownable}</TextContent>
        </TextDiv>
        <Image src={Img4} alt="about" />
      </TextImage>
    </AboutCard>
  )
}

export default OwnableCard
