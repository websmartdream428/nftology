import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowSVG, SearchIcon } from '../components/CustomSVG'
import content from '../constant/en.json'

import * as Styled from '../styledComponents/layout/StyledHeader'

const Header: React.FC = () => {
  const [state, setState] = useState({ mobileView: false })
  const { mobileView } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1024
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }
    setResponsiveness()
    window.addEventListener('resize', () => setResponsiveness())
  }, [])
  return (
    <Styled.HeaderBar
      isAuthenticate={
        localStorage.getItem('isAuth') === null ||
        localStorage.getItem('isAuth') === 'false'
          ? 'false'
          : 'true'
      }
      mobileView={mobileView}
    >
      <Styled.SearchDiv>
        <div>
          <Styled.SearchInput placeholder={content.search_placeholder} />
        </div>
        <div>
          <SearchIcon />
        </div>
      </Styled.SearchDiv>
      {(localStorage.getItem('isAuth') === 'false' ||
        localStorage.getItem('isAuth') === null) && (
        <Link
          to="/signin"
          style={{ textDecoration: 'none' }}
          onClick={() => {
            localStorage.setItem('currentRouter', 'signin')
          }}
        >
          <Styled.SignInDiv>
            Sign in <ArrowSVG selected="#000" />
          </Styled.SignInDiv>
        </Link>
      )}
    </Styled.HeaderBar>
  )
}

export default Header
