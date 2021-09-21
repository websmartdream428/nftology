import React from 'react'
import {
  AboutCard,
  FeeCardGroup,
  FeeDescription,
  FeePerYear,
  FeeSubTitle,
  FeeTitle,
  FutureProfits,
  TextContent,
  TextDiv,
  TextImage,
  TextTitle,
} from '../../styledComponents/pages/about/StyledAbout'
import content from '../../constant/en.json'

const FeesCard: React.FC = () => {
  return (
    <AboutCard>
      <TextImage>
        <TextDiv dir="rtl">
          <TextTitle>{content.fees_title}</TextTitle>
          <TextContent>{content.fees_content}</TextContent>
        </TextDiv>
        <FeeCardGroup>
          <FeePerYear>
            <FeeTitle>1.5%</FeeTitle>
            <FeeSubTitle>{content.fee_per_year}</FeeSubTitle>
            <FeeDescription>{content.fee_per_year_text}</FeeDescription>
          </FeePerYear>
          <FutureProfits>
            <FeeTitle>20%</FeeTitle>
            <FeeSubTitle>{content.future_profits}</FeeSubTitle>
            <FeeDescription>{content.future_profits_txt}</FeeDescription>
          </FutureProfits>
        </FeeCardGroup>
      </TextImage>
    </AboutCard>
  )
}

export default FeesCard
