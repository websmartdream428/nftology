import React from 'react'
import {
  Card,
  CardDesc,
  CardDescSubTitle,
  CardDescTitle,
  CardGroup,
  TextTitle,
} from '../../styledComponents/pages/about/StyledAbout'
import content from '../../constant/en.json'
import Img5 from '../../assets/images/img5.png'
import Img6 from '../../assets/images/img6.png'
import Img7 from '../../assets/images/img7.png'
import { NoColorCard } from '../../styledComponents/elements/Cards'

const StartYourOwnCard: React.FC = () => {
  return (
    <NoColorCard>
      <TextTitle>{content.start_your_own}</TextTitle>
      <CardGroup>
        <Card>
          <img src={Img5} width="80px" height="80px" alt="card" />
          <CardDesc>
            <CardDescTitle>Collect</CardDescTitle>
            <CardDescSubTitle>{content.collect_desc}</CardDescSubTitle>
          </CardDesc>
        </Card>
        <Card>
          <img src={Img6} width="80px" height="80px" alt="card" />
          <CardDesc>
            <CardDescTitle>Show Off</CardDescTitle>
            <CardDescSubTitle>{content.showoff_desc}</CardDescSubTitle>
          </CardDesc>
        </Card>
        <Card>
          <img src={Img7} width="80px" height="80px" alt="card" />
          <CardDesc>
            <CardDescTitle>Invest</CardDescTitle>
            <CardDescSubTitle>{content.invest_desc}</CardDescSubTitle>
          </CardDesc>
        </Card>
      </CardGroup>
    </NoColorCard>
  )
}

export default StartYourOwnCard
