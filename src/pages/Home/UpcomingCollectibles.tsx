import React from 'react'
import styled from 'styled-components'
import { ArrowSVG } from '../../components/CustomSVG'
import ImageCard from '../../components/ImageCard'
import content from '../../constant/en.json'
import {
  CardImageSlider,
  CardTitle,
  WhiteCard,
} from '../../styledComponents/elements/Cards'

const CardFooter = styled.div`
  margin-top: 18px;
  border-radius: 23px;
  background-color: #330b7e;
  padding: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MissMessage = styled.div`
  color: #fff;
  font-size: 21px;
`

const EmailInputDiv = styled.div`
  margin-left: 21px;
  padding-right: 24px;
  background-color: #f5f5fb;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const EmailInput = styled.input`
  background-color: #f5f5fb;
  border-radius: 20px;
  padding: 14px 24px;
  border: none;
  outline: none;
`

const UpcomingCollectibles: React.FC = () => {
  return (
    <WhiteCard>
      <CardTitle>{content.upcom_collectible}</CardTitle>
      <CardImageSlider>
        <ImageCard timeFlag isBell />
        <ImageCard timeFlag isBell />
        <ImageCard timeFlag isBell />
      </CardImageSlider>
      <CardFooter>
        <MissMessage>{content.miss_nessage}</MissMessage>
        <EmailInputDiv>
          <div>
            <EmailInput placeholder="email" />
          </div>
          <div>
            <ArrowSVG selected="#000" />
          </div>
        </EmailInputDiv>
      </CardFooter>
    </WhiteCard>
  )
}

export default UpcomingCollectibles
