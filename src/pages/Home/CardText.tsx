import React from 'react'
import styled from 'styled-components'
import content from '../../constant/en.json'
import Button from '../../components/CustomButton'
import ShowCard from './ShowCard'
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

const TextFooter = styled.div`
  margin-top: 14px;
`

const TextCard: React.FC = () => {
  return (
    <NoColorCard>
      <GridRowCard>
        <ShowCard />
        <TextDiv dir="rtl">
          <TextTitle>{content.consectetur}</TextTitle>
          <TextContent>{content.consect_sub_text}</TextContent>
          <TextFooter>
            <Button
              onClick={() => console.log('You clicked on the pink circle!')}
              value={content.secondary}
            />
          </TextFooter>
        </TextDiv>
      </GridRowCard>
    </NoColorCard>
  )
}

export default TextCard
