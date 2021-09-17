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
import BestExampleImg from '../../assets/images/testexample.png'

const BestExampleCard: React.FC = () => {
  return (
    <AboutCard>
      <TextImage>
        <TextDiv dir="rtl">
          <TextTitle>{content.best_examples}</TextTitle>
          <TextContent>{content.best_examples_content}</TextContent>
        </TextDiv>
        <Image src={BestExampleImg} alt="about" />
      </TextImage>
    </AboutCard>
  )
}

export default BestExampleCard
