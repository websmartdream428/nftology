import React from 'react'
import { Link } from 'react-router-dom'
import { UserbarDiv } from '../styledComponents/layout/StyledUserbar'
import Logout from './Logout'
import UserAvatar from './UserAvatar'
import UserTabBar from './UserTabBar'

const Userbar: React.FC = () => {
  return (
    <UserbarDiv>
      <Link
        to="/profile"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'profile')
        }}
      >
        <UserAvatar />
      </Link>
      <UserTabBar />
      <Logout />
    </UserbarDiv>
  )
}

export default Userbar
