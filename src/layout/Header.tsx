import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowSVG, SearchIcon } from '../components/CustomSVG'
import content from '../constant/en.json'
import AvatarImg from '../assets/images/Ellipse 1.png'

import * as Styled from '../styledComponents/layout/StyledHeader'
// import { PageContainter } from '../styledComponents/layout/StyledMainLayout'

const Header: React.FC = () => {
  const [state, setState] = useState({ mobileView: false })
  const { mobileView } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1280
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }
    setResponsiveness()
    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  return (
    // <PageContainter style={{ marginTop: '0' }}>
    <Styled.HeaderBar
      isAuthenticate={
        localStorage.getItem('isAuth') === null ||
        localStorage.getItem('isAuth') === 'false'
          ? 'false'
          : 'true'
      }
      mobileView={mobileView}
    >
      {mobileView && (
        <Styled.MenuButtonGroup>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Styled.MenuShow
              onClick={() => {
                localStorage.setItem('rightmenu', 'on')
                localStorage.setItem('usermenu', 'off')
              }}
            >
              ☰
            </Styled.MenuShow>
          </Link>
          {localStorage.getItem('isAuth') === 'true' && (
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <Styled.MenuShow
                onClick={() => {
                  localStorage.setItem('usermenu', 'on')
                  localStorage.setItem('rightmenu', 'off')
                }}
              >
                <Styled.UserMenuShow src={AvatarImg} />
              </Styled.MenuShow>
            </Link>
          )}
        </Styled.MenuButtonGroup>
      )}
      <Styled.RightDiv>
        <Styled.SearchDiv>
          <div style={{ width: '100%' }}>
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
      </Styled.RightDiv>
    </Styled.HeaderBar>
    // </PageContainter>
  )
}

export default Header
