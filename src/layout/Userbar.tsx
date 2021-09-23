import React from 'react'
import { Link } from 'react-router-dom'
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
      {localStorage.getItem('usermenu') === 'on' && (
        <Link
          to={`/${
            window.location.toString().split('/')[
              window.location.toString().split('/').length - 1
            ]
          }`}
          onClick={() => localStorage.setItem('usermenu', 'off')}
        >
          <div
            style={{
              width: 'calc(100vw - 331px)',
              position: 'fixed',
              height: '100vh',
              left: 0,
            }}
          />
        </Link>
      )}
    </UserbarDiv>
  )
}

export default Userbar
