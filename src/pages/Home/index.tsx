import React from 'react'
import TitleCard from './TitleCard'
import CounterCard from './CounterCard'
import TextCard from './TextCard'
import CardText from './CardText'
import UpcomingCollectibles from './UpcomingCollectibles'
import FeaturedCreators from './FeaturedCreators'
import TopCollectors from './TopCollectors'
import PopularCollectibles from './PopularCollectibles'
import FeaturedCollectibles from './FeaturedCollectibles'
import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'

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
