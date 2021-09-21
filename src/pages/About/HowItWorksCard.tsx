import React, { useEffect, useState } from 'react'
import {
  ArrowImg,
  DownArrow,
  HowCardGroup,
  HowImg,
  HowImgDiv,
  LeftHowCard,
  LeftTextBoard,
  RightHowCard,
  RightHowImgDiv,
  RightTextBoard,
  Text,
  TextTitle,
  Title,
  UpArrow,
} from '../../styledComponents/pages/about/StyledAbout'
import content from '../../constant/en.json'
import HowImg1 from '../../assets/images/Group 164.png'
import HowImg2 from '../../assets/images/Group 165.png'
import HowImg3 from '../../assets/images/Group 166.png'
import HowImg4 from '../../assets/images/Group 169.png'
import HowImg5 from '../../assets/images/Group 170.png'
import RightArrowImg from '../../assets/images/rightArrow.png'
import DownArrowImg from '../../assets/images/downArrow.png'
import UpArrowImg from '../../assets/images/upArrow.png'

import { WhiteCard } from '../../styledComponents/elements/Cards'

const HowItWorksCard: React.FC = () => {
  const [state, setState] = useState({ mobileView: false })
  const { mobileView } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 800
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }
    setResponsiveness()
    window.addEventListener('resize', () => setResponsiveness())
  }, [])
  return (
    <WhiteCard>
      <TextTitle>{content.how_it_works}</TextTitle>
      {/* <img src={HowitworkImg} width="100%" alt="card" /> */}
      <HowCardGroup>
        <RightHowCard style={{ height: 0 }} />
        <RightHowCard style={{ height: 0 }} />
        <RightHowCard>
          <RightTextBoard>
            <Title>{content.we_find_best_artists}</Title>
            <Text>{content.we_find_best_artists_text}</Text>
          </RightTextBoard>
          <RightHowImgDiv>
            <HowImg src={HowImg5} />
          </RightHowImgDiv>
        </RightHowCard>
        <LeftHowCard>
          <LeftTextBoard style={{ marginRight: '0' }}>
            <Title>{content.we_find_best_artists}</Title>
            <Text>{content.we_find_best_artists_text}</Text>
          </LeftTextBoard>
          <HowImgDiv>
            <HowImg src={HowImg1} />
          </HowImgDiv>
          {!mobileView && <ArrowImg src={RightArrowImg} />}
        </LeftHowCard>
        <LeftHowCard>
          <LeftTextBoard style={{ marginRight: '0' }}>
            <Title>{content.we_find_best_artists}</Title>
            <Text>{content.we_find_best_artists_text}</Text>
          </LeftTextBoard>
          <HowImgDiv>
            <HowImg src={HowImg2} />
          </HowImgDiv>
          {!mobileView && <ArrowImg src={RightArrowImg} />}
        </LeftHowCard>
        <LeftHowCard>
          {!mobileView && <UpArrow src={UpArrowImg} />}
          <LeftTextBoard>
            <Title>{content.we_find_best_artists}</Title>
            <Text>{content.we_find_best_artists_text}</Text>
          </LeftTextBoard>
          <HowImgDiv>
            <HowImg src={HowImg3} />
          </HowImgDiv>
          {!mobileView && <DownArrow src={DownArrowImg} />}
        </LeftHowCard>
        <RightHowCard style={{ height: 0 }} />
        <RightHowCard style={{ height: 0 }} />
        <RightHowCard>
          <RightTextBoard>
            <Title>{content.we_find_best_artists}</Title>
            <Text>{content.we_find_best_artists_text}</Text>
          </RightTextBoard>
          <RightHowImgDiv>
            <HowImg src={HowImg4} />
          </RightHowImgDiv>
        </RightHowCard>
      </HowCardGroup>
    </WhiteCard>
  )
}

export default HowItWorksCard
