import React from 'react'
import { WhiteCard } from '../../styledComponents/elements/Cards'
import {
  ThankParagraph,
  ThankRequired,
  ThankTitle,
} from '../../styledComponents/pages/connectWallet/StyledConnectWallet'
import content from '../../constant/en.json'

const ThankYou: React.FC = () => {
  return (
    <WhiteCard style={{ padding: '5% 10%' }}>
      <ThankTitle>{content.thank_title}</ThankTitle>
      {content.thank_text.map((item) => (
        <ThankParagraph>{item}</ThankParagraph>
      ))}
      <ThankRequired>{content.required}</ThankRequired>
    </WhiteCard>
  )
}

export default ThankYou
