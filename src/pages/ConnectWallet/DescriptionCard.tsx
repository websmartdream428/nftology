import React from 'react'
import { WhiteCard } from '../../styledComponents/elements/Cards'
import {
  DescParagraph,
  DescriptionContent,
  DescriptionTitle,
} from '../../styledComponents/pages/connectWallet/StyledConnectWallet'
import content from '../../constant/en.json'
import { Arrow2SVG } from '../../components/CustomSVG'

const DescriptionCard: React.FC = () => {
  return (
    <WhiteCard style={{ padding: '60px 100px' }}>
      <DescParagraph>
        <DescriptionTitle>
          <Arrow2SVG />
          {content.skip_the_waitlist}
        </DescriptionTitle>
        <DescriptionContent>
          {content.skip_the_waitlist_content}
        </DescriptionContent>
      </DescParagraph>
      <DescParagraph>
        <DescriptionTitle>
          <Arrow2SVG />
          {content.exceptional_historical}
        </DescriptionTitle>
        <DescriptionContent>
          {content.exceptional_historical_content}
        </DescriptionContent>
      </DescParagraph>
      <DescParagraph>
        <DescriptionTitle>
          <Arrow2SVG />
          {content.revolutionary_platform}
        </DescriptionTitle>
        <DescriptionContent>
          {content.revolutionary_platform_content}
        </DescriptionContent>
      </DescParagraph>
    </WhiteCard>
  )
}

export default DescriptionCard
