import React from 'react'
import '../../assets/scss/page/home.scss'
import Header from '../../layout/Header'
import TitleCard from './TitleCard'
import CounterCard from './CounterCard'
import TextCard from './TextCard'
import CardText from './CardText'
import UpcomingCollectibles from './UpcomingCollectibles'

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <Header />
      <TitleCard />
      <TextCard />
      <CardText />
      <CounterCard />
      <UpcomingCollectibles />
    </div>
  )
}

export default Home
