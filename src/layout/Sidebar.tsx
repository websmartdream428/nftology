import React from 'react'
import logo from '../assets/images/Logo.png'
import Button from '../components/CustomButton'
import SidebarTab from '../components/SidebarTab'

import * as Styled from '../styledComponents/layout/StyledSideBar'

const Sidebar: React.FC = () => {
  return (
    <Styled.SideBarDiv>
      <Styled.SibeBarLogo>
        <Styled.LogoImg src={logo} alt="logo" />
      </Styled.SibeBarLogo>
      <Styled.SideBarTab>
        <SidebarTab />
      </Styled.SideBarTab>
      <Styled.SideBarButton>
        <Button
          border="none"
          color="#E5E9FA"
          height="54px"
          onClick={() => console.log('You clicked on the pink circle!')}
          radius="12px"
          width="219px"
          value="Connect Wallet"
        />
      </Styled.SideBarButton>
    </Styled.SideBarDiv>
  )
}

export default Sidebar
