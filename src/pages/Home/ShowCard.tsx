import React from 'react'

import styled from 'styled-components'
import detail from '../../assets/images/detailinfo.png'

const CardDiv = styled.div`
  width: 100%;
  border-radius: 52px;
  display: flex;
  align-items: center;
`

const Img = styled.img`
  box-shadow: 0px 20px 10px #0000000f;
  border-radius: 10%;
`

const ShowCard: React.FC = () => {
  return (
    <CardDiv>
      <Img src={detail} width="100%" alt="group" />
    </CardDiv>
  )
}

export default ShowCard
