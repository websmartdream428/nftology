import React from 'react'

import styled from 'styled-components'
import detail from '../../assets/images/detailinfo.png'

const CardDiv = styled.div`
  width: 100%;
  height: 397px;
  box-shadow: 0px 30px 60px #0000000f;
  background-color: #fff;
  border-radius: 52px;
  background-image: url(${detail});
  background-size: 100%;
`

const ShowCard: React.FC = () => {
  return <CardDiv> </CardDiv>
}

export default ShowCard
