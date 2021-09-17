import React from 'react'

import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'

import TopCard from './TopCard'
import AuthenticCard from './AuthenticCard'
import UniqueCard from './UniqueCard'
import OwnableCard from './OwnableCard'
import StartYourOwnCard from './StartYourOwnCard'
import HowItWorksCard from './HowItWorksCard'
import ArtistsCard from './ArtistsCard'
import BestExampleCard from './BestExampleCard'
import FeesCard from './FeesCard'
import BuySellCard from './BuySellCard'

const Home: React.FC = () => {
  return (
    <PageContainter>
      <TopCard />
      <AuthenticCard />
      <UniqueCard />
      <OwnableCard />
      <StartYourOwnCard />
      <HowItWorksCard />
      <ArtistsCard />
      <BestExampleCard />
      <BuySellCard />
      <FeesCard />
    </PageContainter>
  )
}

export default Home
