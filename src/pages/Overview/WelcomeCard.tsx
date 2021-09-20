import React from 'react'

import {
  WelcomeDesc,
  WelcomeDiv,
  WelcomeImage,
  WelcomeTitle,
} from '../../styledComponents/pages/overview/StyledOverView'

import content from '../../constant/en.json'
import WelcomeImg from '../../assets/images/OBJECT 1.png'

const WelcomeCard: React.FC = () => {
  return (
    <WelcomeDiv>
      <WelcomeTitle>{content.welcome}</WelcomeTitle>
      <WelcomeDesc>{content.welcome_content}</WelcomeDesc>
      <WelcomeImage src={WelcomeImg} />
    </WelcomeDiv>
  )
}

export default WelcomeCard
