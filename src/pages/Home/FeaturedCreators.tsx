import React from 'react'
import AvatarCard from '../../components/AvatarCard'
import { ArrowSVG } from '../../components/CustomSVG'
import content from '../../constant/en.json'
import {
  CardContainer,
  CardTitle,
  ChildCard,
  MoreText,
  WhiteCard,
} from '../../styledComponents/elements/Cards'

const FeaturedCreators: React.FC = () => {
  return (
    <WhiteCard>
      <CardTitle>
        <div>{content.featured}</div>
        <MoreText>
          More
          <ArrowSVG selected="#000" />
        </MoreText>
      </CardTitle>
      <CardContainer>
        <ChildCard>
          <AvatarCard isBell={false} />
        </ChildCard>
        <ChildCard>
          <AvatarCard isBell={false} />
        </ChildCard>
        <ChildCard>
          <AvatarCard isBell={false} />
        </ChildCard>
        <ChildCard>
          <AvatarCard isBell={false} />
        </ChildCard>
        <ChildCard>
          <AvatarCard isBell={false} />
        </ChildCard>
        <ChildCard>
          <AvatarCard isBell={false} />
        </ChildCard>
        <ChildCard>
          <AvatarCard isBell={false} />
        </ChildCard>
        <ChildCard>
          <AvatarCard isBell={false} />
        </ChildCard>
        <ChildCard>
          <AvatarCard isBell={false} />
        </ChildCard>
      </CardContainer>
    </WhiteCard>
  )
}

export default FeaturedCreators
