import React from 'react'
import styled from 'styled-components'
import CardImage from '../../assets/images/common.png'

import AvatarCard from '../AvatarCard'

type CustomProps = { timeFlag: boolean; isBell: boolean }

const ImageCardDiv = styled.div`
  border-radius: 23px;
  width: 32%;
  height: 350px;
  position: relative;
  background-size: cover;
`

const TimePlayer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Time = styled.div`
  padding: 5px;
  background-color: white;
  width: 138px;
  font-size: 18px;
  text-align: center;
  border-radius: 51px;
  margin-right: 16px;
  margin-top: 20px;
  color: #330b7e;
`

const ImageCard = ({ timeFlag, isBell }: CustomProps) => {
  return (
    <ImageCardDiv style={{ backgroundImage: `url(${CardImage})` }}>
      {timeFlag ? (
        <TimePlayer>
          <Time>25h 25m 30s</Time>
        </TimePlayer>
      ) : null}

      <AvatarCard isBell={isBell} />
    </ImageCardDiv>
  )
}

export default ImageCard
