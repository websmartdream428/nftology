import React from 'react'
import { Link } from 'react-router-dom'
import {
  HomeSVG,
  DiscoverSVG,
  ActivitySVG,
  TradingSVG,
  AboutSVG,
} from '../CustomSVG'

const SidebarTab: React.FC = () => {
  return (
    <div>
      <Link
        to="/home"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'home')
          localStorage.setItem('rightmenu', 'off')
        }}
      >
        <HomeSVG />
      </Link>
      <Link
        to="/discover"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'discover')
          localStorage.setItem('rightmenu', 'off')
        }}
      >
        <DiscoverSVG />
      </Link>
      <Link
        to="/activity"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'activity')
          localStorage.setItem('rightmenu', 'off')
        }}
      >
        <ActivitySVG />
      </Link>
      <Link
        to="/trading"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'trading')
          localStorage.setItem('rightmenu', 'off')
        }}
      >
        <TradingSVG />
      </Link>
      <Link
        to="/about"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'about')
          localStorage.setItem('rightmenu', 'off')
        }}
      >
        <AboutSVG />
      </Link>
    </div>
  )
}

export default SidebarTab
