import React from 'react'
import content from '../../constant/en.json'
import { NoColorCard } from '../../styledComponents/elements/Cards'
import {
  CounterCardGroup,
  CounterCardDiv,
  CounterNumber,
  CounterDesc,
} from '../../styledComponents/pages/home/StyledCountCard'

const CounterCard: React.FC = () => {
  return (
    <NoColorCard>
      <CounterCardGroup>
        <CounterCardDiv>
          <CounterNumber>50+</CounterNumber>
          <CounterDesc>{content.total_origin}</CounterDesc>
        </CounterCardDiv>
        <CounterCardDiv>
          <CounterNumber>140K+</CounterNumber>
          <CounterDesc>{content.register_number}</CounterDesc>
        </CounterCardDiv>
        <CounterCardDiv>
          <CounterNumber>$150M+</CounterNumber>
          <CounterDesc>{content.securitized}</CounterDesc>
        </CounterCardDiv>
      </CounterCardGroup>
    </NoColorCard>
  )
}

export default CounterCard
