import React from 'react'
import { WhiteCard } from '../../styledComponents/elements/Cards'

import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'

import { CreationCard } from '../../styledComponents/pages/Collection/StyledActivity'
import ImageCard from '../Collection/ImageCard'

const Creation: React.FC = () => {
  return (
    <PageContainter>
      <WhiteCard>
        <CreationCard>
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </CreationCard>
      </WhiteCard>
    </PageContainter>
  )
}

export default Creation
