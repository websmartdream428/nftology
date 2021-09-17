import React from 'react'
import styled from 'styled-components'
import { TextArrowSVG } from '../../components/CustomSVG'
import content from '../../constant/en.json'
import ChartCard from './ChartCard'
import { NoColorCard, GridRowCard } from '../../styledComponents/elements/Cards'

const TextDiv = styled.div`
  widt: 100%;
`

const TextTitle = styled.div`
  font-size: 38.4px;
  font-family: 'Poppins';
  color: #330b7e;
  font-weight: 600;
`

const TextContent = styled.div`
  svg {
    margin-right: 6px;
  }
  font-size: 20px;
`

const TextCard: React.FC = () => {
  return (
    <NoColorCard>
      <GridRowCard>
        <TextDiv>
          <TextTitle>{content.lorem_description}</TextTitle>
          <TextContent>
            <TextArrowSVG />
            {content.lorem_description}
          </TextContent>
          <TextContent>
            <TextArrowSVG />
            {content.lorem_description}
          </TextContent>
          <TextContent>
            <TextArrowSVG />
            {content.lorem_description}
          </TextContent>
          <TextContent>
            <TextArrowSVG />
            {content.lorem_description}
          </TextContent>
          <TextContent>
            <TextArrowSVG />
            {content.lorem_description}
          </TextContent>
        </TextDiv>
        <ChartCard />
      </GridRowCard>
    </NoColorCard>
  )
}

export default TextCard
