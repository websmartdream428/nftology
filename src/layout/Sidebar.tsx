import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'
import SidebarTab from '../components/SidebarTab'

import * as Styled from '../styledComponents/layout/StyledSideBar'
import ConnectWalletBtn from './ConnectWalletBtn'
import SubmitCollectibleBtn from './SubmitCollectibleBtn'

const Sidebar: React.FC = () => {
  return (
    <Styled.SideBarDiv>
      <Styled.SibeBarLogo>
        <Link
          to="/home"
          style={{ textDecoration: 'none' }}
          onClick={() => {
            localStorage.setItem('currentRouter', 'home')
            localStorage.setItem('rightmenu', 'off')
          }}
        >
          <Styled.LogoImg src={logo} alt="logo" />
        </Link>
      </Styled.SibeBarLogo>
      <Styled.SideBarTab>
        <SidebarTab />
      </Styled.SideBarTab>
      <Styled.SideBarButton>
        {(localStorage.getItem('isAuth') === 'false' ||
          localStorage.getItem('isAuth') === null) && (
          <Link
            to="/connectWallet"
            style={{ textDecoration: 'none' }}
            onClick={() => {
              localStorage.setItem('currentRouter', 'connectWallet')
              localStorage.setItem('rightmenu', 'off')
            }}
          >
            <ConnectWalletBtn />
          </Link>
        )}
        {localStorage.getItem('isAuth') === 'true' && (
          <Link
            to="/submitcollectible"
            style={{ textDecoration: 'none' }}
            onClick={() => {
              localStorage.setItem('currentRouter', 'submitcollectible')
              localStorage.setItem('rightmenu', 'off')
            }}
          >
            <SubmitCollectibleBtn />
          </Link>
        )}
      </Styled.SideBarButton>
    </Styled.SideBarDiv>
  )
}

export default Sidebar
