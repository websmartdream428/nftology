import React from 'react'
import styled from 'styled-components'
import graph from '../../assets/images/graph.png'

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

const ChartCard: React.FC = () => {
  return (
    <CardDiv>
      <Img src={graph} width="100%" alt="group" />
    </CardDiv>
  )
}

export default ChartCard
