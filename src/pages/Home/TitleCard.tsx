import React from 'react'
import content from '../../constant/en.json'
import { ArrowSVG } from '../../components/CustomSVG'

import * as Styled from '../../styledComponents/pages/home/StyledTitleCard'

const TitleCard: React.FC = () => {
  return (
    <Styled.TitleCardDiv>
      <Styled.D3Title>{content.d3dText}</Styled.D3Title>
      <Styled.D3Subtitle>{content.lorem}</Styled.D3Subtitle>
      <Styled.D3Link>
        <Styled.CursorSpan>
          {content.discover}
          <ArrowSVG selected="#fff" />
        </Styled.CursorSpan>
      </Styled.D3Link>
    </Styled.TitleCardDiv>
  )
}

export default TitleCard
