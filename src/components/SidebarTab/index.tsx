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
        }}
      >
        <HomeSVG />
      </Link>
      <Link
        to="/discover"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'discover')
        }}
      >
        <DiscoverSVG />
      </Link>
      <Link
        to="/activity"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'activity')
        }}
      >
        <ActivitySVG />
      </Link>
      <Link
        to="/trading"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'trading')
        }}
      >
        <TradingSVG />
      </Link>
      <Link
        to="/about"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'about')
        }}
      >
        <AboutSVG />
      </Link>
    </div>
  )
}

export default SidebarTab
