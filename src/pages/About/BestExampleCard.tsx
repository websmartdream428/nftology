import React from 'react'
import {
  AboutCard,
  BestExampleImageCard,
  BestExampleImg,
  BestExampleImgGroup,
  TextContent,
  TextDiv,
  TextImage,
  TextTitle,
} from '../../styledComponents/pages/about/StyledAbout'
import content from '../../constant/en.json'
import E1 from '../../assets/images/e1.png'
import E2 from '../../assets/images/e2.png'
import E3 from '../../assets/images/e3.png'
import E4 from '../../assets/images/e4.png'
import E5 from '../../assets/images/e5.png'
import E6 from '../../assets/images/e6.png'

const BestExampleCard: React.FC = () => {
  return (
    <AboutCard>
      <TextImage>
        <TextDiv dir="rtl">
          <TextTitle>{content.best_examples}</TextTitle>
          <TextContent>{content.best_examples_content}</TextContent>
        </TextDiv>
        <BestExampleImageCard>
          <BestExampleImgGroup>
            <BestExampleImg src={E1} alt="about" />
            <BestExampleImg src={E2} alt="about" />
            <BestExampleImg src={E3} alt="about" />
          </BestExampleImgGroup>
          <BestExampleImgGroup>
            <BestExampleImg src={E4} alt="about" />
            <BestExampleImg src={E5} alt="about" />
            <BestExampleImg src={E6} alt="about" />
          </BestExampleImgGroup>
        </BestExampleImageCard>
      </TextImage>
    </AboutCard>
  )
}

export default BestExampleCard
