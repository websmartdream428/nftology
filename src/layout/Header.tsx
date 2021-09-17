import React from 'react'
import { ArrowSVG, SearchIcon } from '../components/CustomSVG'
import content from '../constant/en.json'

import * as Styled from '../styledComponents/layout/StyledHeader'

const Header: React.FC = () => {
  return (
    <Styled.HeaderBar>
      <Styled.SearchDiv>
        <div>
          <Styled.SearchInput placeholder={content.search_placeholder} />
        </div>
        <div>
          <SearchIcon />
        </div>
      </Styled.SearchDiv>
      <Styled.SignInDiv>
        Sign in <ArrowSVG selected="#000" />
      </Styled.SignInDiv>
    </Styled.HeaderBar>
  )
}

export default Header
