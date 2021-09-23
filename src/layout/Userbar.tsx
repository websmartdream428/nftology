import React from 'react'
import { UserbarDiv } from '../styledComponents/layout/StyledUserbar'
import Logout from './Logout'
import UserAvatar from './UserAvatar'
import UserTabBar from './UserTabBar'

const Userbar: React.FC = () => {
  return (
    <UserbarDiv>
      <UserAvatar />

      <UserTabBar />
      <Logout />
    </UserbarDiv>
  )
}

export default Userbar
