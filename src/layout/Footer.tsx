import React from 'react'
import styled from 'styled-components'
import content from '../constant/en.json'

const FooterDiv = styled.div`
  margin: auto;
  width: 80%;
  text-align: right;
  font-size: 17px;
  color: #a2a2c2;
  margin-bottom: 20px;
`

const Footer: React.FC = () => {
  return (
    <FooterDiv>
      <h6>{content.foot_text}</h6>
    </FooterDiv>
  )
}

export default Footer
