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
import FeesImg from '../../assets/images/fees.png'

const FeesCard: React.FC = () => {
  return (
    <AboutCard>
      <TextImage>
        <TextDiv dir="rtl">
          <TextTitle>{content.fees_title}</TextTitle>
          <TextContent>{content.fees_content}</TextContent>
        </TextDiv>
        <Image src={FeesImg} alt="about" />
      </TextImage>
    </AboutCard>
  )
}

export default FeesCard
