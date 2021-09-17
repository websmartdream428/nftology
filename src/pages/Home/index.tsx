import React from 'react'
import styled from 'styled-components'
import TitleCard from './TitleCard'
import CounterCard from './CounterCard'
import TextCard from './TextCard'
import CardText from './CardText'
import UpcomingCollectibles from './UpcomingCollectibles'
import FeaturedCreators from './FeaturedCreators'
import TopCollectors from './TopCollectors'
import PopularCollectibles from './PopularCollectibles'
import FeaturedCollectibles from './FeaturedCollectibles'

const PageContainter = styled.div`
  margin: auto;
  width: 80%;
  margin-top: 136px;
`

const Home: React.FC = () => {
  return (
    <PageContainter>
      <TitleCard />
      <TextCard />
      <CardText />
      <CounterCard />
      <UpcomingCollectibles />
      <FeaturedCreators />
      <TopCollectors />
      <PopularCollectibles />
      <FeaturedCollectibles />
    </PageContainter>
  )
}

export default Home
