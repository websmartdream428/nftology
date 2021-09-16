import React, { useEffect, useState } from 'react'

import Userbar from './Userbar'
import Sidebar from './Sidebar'

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
    <div className="main-container">
      {!mobileView && <Sidebar />}
      <div
        className={`main-content ${
          isAuthenticate ? 'login_width' : 'logout_width'
        }`}
      >
        {children}
      </div>
      {isAuthenticate && <Userbar />}
    </div>
  )
}

export default MainLayout
