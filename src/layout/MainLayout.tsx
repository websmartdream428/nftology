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
      return window.innerWidth < 600
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }
    setResponsiveness()
    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  const isAuthenticate = false
  return (
    <MainContainer>
      {!mobileView && <Sidebar />}
      <MainContent isAuthenticate={isAuthenticate}>
        <Header />
        {children}
        <Footer />
      </MainContent>
      {isAuthenticate && <Userbar />}
    </MainContainer>
  )
}

export default MainLayout
