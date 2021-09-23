import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  OverviewSVG,
  CreationSVG,
  CollectionSVG,
  SettingSVG,
} from '../components/CustomSVG'

const UserTabBarDiv = styled.div`
  position: fixed;
  width: 331px;
  margin-top: 150px;
  z-index: -1;
`

const UserTabBar: React.FC = () => {
  return (
    <UserTabBarDiv>
      <Link
        to="/overview"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'overview')
          localStorage.setItem('usermenu', 'off')
        }}
      >
        <OverviewSVG />
      </Link>
      <Link
        to="/creation"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'creation')
          localStorage.setItem('usermenu', 'off')
        }}
      >
        <CreationSVG />
      </Link>
      <Link
        to="/collection"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'collection')
          localStorage.setItem('usermenu', 'off')
        }}
      >
        <CollectionSVG />
      </Link>
      <Link
        to="/settings"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'settings')
          localStorage.setItem('usermenu', 'off')
        }}
      >
        <SettingSVG />
      </Link>
    </UserTabBarDiv>
  )
}

export default UserTabBar
