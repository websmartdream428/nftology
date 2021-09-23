import React, { useEffect, useState } from 'react'

import Userbar from './Userbar'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

import {
  MainContainer,
  MainContent,
} from '../styledComponents/layout/StyledMainLayout'

type MainLayoutProps = { children: any }
const MainLayout = ({ children }: MainLayoutProps) => {
  const [state, setState] = useState({ mobileView: false })
  const { mobileView } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth <= 1280
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }
    setResponsiveness()
    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  return (
    <MainContainer>
      {!mobileView && <Sidebar />}
      {mobileView && localStorage.getItem('rightmenu') === 'on' && <Sidebar />}
      {!mobileView && (
        <MainContent
          mobileView={mobileView}
          isAuthenticate={
            localStorage.getItem('isAuth') === null ||
            localStorage.getItem('isAuth') === 'false'
              ? 'false'
              : 'true'
          }
        >
          <Header />
          {children}
          <Footer />
        </MainContent>
      )}
      {mobileView &&
        (localStorage.getItem('rightmenu') === 'off' ||
          localStorage.getItem('rightmenu') === null) &&
        (localStorage.getItem('usermenu') === 'off' ||
          localStorage.getItem('usermenu') === null) && (
          <MainContent
            mobileView={mobileView}
            isAuthenticate={
              localStorage.getItem('isAuth') === null ||
              localStorage.getItem('isAuth') === 'false'
                ? 'false'
                : 'true'
            }
          >
            <Header />
            {children}
            <Footer />
          </MainContent>
        )}
      {!mobileView && localStorage.getItem('isAuth') === 'true' && <Userbar />}
      {mobileView &&
        localStorage.getItem('isAuth') === 'true' &&
        localStorage.getItem('usermenu') === 'on' && <Userbar />}
    </MainContainer>
  )
}

export default MainLayout
