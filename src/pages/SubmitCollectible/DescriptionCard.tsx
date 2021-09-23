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
    <WhiteCard style={{ padding: '5% 10%' }}>
      <DescParagraph>
        <DescriptionTitle>
          <Arrow2SVG />
          {content.what_nftology}
        </DescriptionTitle>
        <DescriptionContent>{content.what_nftology_content}</DescriptionContent>
      </DescParagraph>
      <DescParagraph>
        <DescriptionTitle>
          <Arrow2SVG />
          {content.what_selling}
        </DescriptionTitle>
        <DescriptionContent>{content.what_selling_content}</DescriptionContent>
      </DescParagraph>
      <DescParagraph>
        <DescriptionTitle>
          <Arrow2SVG />
          {content.who_owns_creations}
        </DescriptionTitle>
        <DescriptionContent>
          {content.who_owns_creations_content}
        </DescriptionContent>
      </DescParagraph>
      <DescParagraph>
        <DescriptionTitle>
          <Arrow2SVG />
          {content.if_sell_using_nftology}
        </DescriptionTitle>
        <DescriptionContent>
          {content.if_sell_using_nftology_content}
        </DescriptionContent>
      </DescParagraph>
      <DescParagraph>
        <DescriptionTitle>
          <Arrow2SVG />
          {content.how_receive_payment}
        </DescriptionTitle>
        <DescriptionContent>
          {content.how_receive_payment_content}
        </DescriptionContent>
      </DescParagraph>
      <DescParagraph>
        <DescriptionTitle>
          <Arrow2SVG />
          {content.how_get_started}
        </DescriptionTitle>
        <DescriptionContent>
          {content.how_get_started_content}
        </DescriptionContent>
      </DescParagraph>
    </WhiteCard>
  )
}

export default DescriptionCard
