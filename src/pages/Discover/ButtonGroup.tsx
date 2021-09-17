import React from 'react'
import CheckButton from '../../components/CheckButton'
import { ButtonGroupDiv } from '../../styledComponents/pages/discover/StyledButtonGroup'

const ButtonGroup: React.FC = () => {
  return (
    <ButtonGroupDiv>
      <CheckButton text="Creator" />
      <CheckButton text="Collection" />
      <CheckButton text="Seller" />
      <CheckButton text="Collection" />
    </ButtonGroupDiv>
  )
}

export default ButtonGroup
