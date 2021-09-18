import React from 'react'
import { WhiteCard } from '../../styledComponents/elements/Cards'

import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'
import CardImage from '../../assets/images/common.png'
import { ArrowSVG } from '../../components/CustomSVG'

import {
  ImageCardDiv,
  CardFooterDiv,
  CardFooter,
  AvatarTitle,
  Bell,
  CreationCard,
} from '../../styledComponents/pages/Collection/StyledActivity'

const Collection: React.FC = () => {
  const ImageCard = (
    <ImageCardDiv style={{ backgroundImage: `url(${CardImage})` }}>
      <CardFooterDiv>
        <CardFooter>
          <AvatarTitle>NameOfCollectible</AvatarTitle>
          <Bell>
            View
            <ArrowSVG selected="#000" />
          </Bell>
        </CardFooter>
      </CardFooterDiv>
    </ImageCardDiv>
  )
  return (
    <PageContainter>
      <WhiteCard>
        <CreationCard>
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
          {ImageCard}
        </CreationCard>
      </WhiteCard>
    </PageContainter>
  )
}

export default Collection
