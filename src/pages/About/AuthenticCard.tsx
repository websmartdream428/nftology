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
import Img2 from '../../assets/images/img2.png'

const AuthenticCard: React.FC = () => {
  return (
    <AboutCard>
      <TextImage>
        <TextDiv dir="rtl">
          <TextTitle>Authentic</TextTitle>
          <TextContent>{content.about_Text_authentic}</TextContent>
        </TextDiv>
        <Image src={Img2} alt="about" />
      </TextImage>
    </AboutCard>
  )
}

export default AuthenticCard
