import React from 'react'
import { TextTitle } from '../../styledComponents/pages/about/StyledAbout'
import content from '../../constant/en.json'
import HowitworkImg from '../../assets/images/howitwork.png'

import { WhiteCard } from '../../styledComponents/elements/Cards'

const HowItWorksCard: React.FC = () => {
  return (
    <WhiteCard>
      <TextTitle>{content.how_it_works}</TextTitle>
      <img src={HowitworkImg} width="100%" alt="card" />
    </WhiteCard>
  )
}

export default HowItWorksCard
