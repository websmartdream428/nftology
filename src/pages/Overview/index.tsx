import React from 'react'

import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'
import { WelcomeInfo } from '../../styledComponents/pages/overview/StyledOverView'
import News from './News'
import Statistics from './Statistics'
import WelcomeCard from './WelcomeCard'
import YourCourse from './YourCourse'

const Overview: React.FC = () => {
  return (
    <PageContainter>
      <WelcomeCard />
      <WelcomeInfo>
        <News />
        <Statistics />
      </WelcomeInfo>
      <YourCourse />
    </PageContainter>
  )
}

export default Overview
