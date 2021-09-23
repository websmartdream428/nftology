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
        }}
      >
        <OverviewSVG />
      </Link>
      <Link
        to="/creation"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'creation')
        }}
      >
        <CreationSVG />
      </Link>
      <Link
        to="/collection"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'collection')
        }}
      >
        <CollectionSVG />
      </Link>
      <Link
        to="/settings"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'settings')
        }}
      >
        <SettingSVG />
      </Link>
    </UserTabBarDiv>
  )
}

export default UserTabBar
