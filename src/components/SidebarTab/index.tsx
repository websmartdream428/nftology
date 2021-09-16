import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import "../assets/scss/page/userbar.scss"
import {
  HomeSVG,
  DiscoverSVG,
  ActivitySVG,
  TradingSVG,
  AboutSVG,
} from '../CustomSVG'

const SidebarTab: React.FC = () => {
  const [selected, setSelected] = useState('discover')
  return (
    <div>
      <Link
        to="/home"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          setSelected('home')
        }}
      >
        <HomeSVG selected={selected} />
      </Link>
      <Link
        to="/discover"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          setSelected('discover')
        }}
      >
        <DiscoverSVG selected={selected} />
      </Link>
      <Link
        to="/home"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          setSelected('activity')
        }}
      >
        <ActivitySVG selected={selected} />
      </Link>
      <Link
        to="/discover"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          setSelected('trading')
        }}
      >
        <TradingSVG selected={selected} />
      </Link>
      <Link
        to="/discover"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          setSelected('about')
        }}
      >
        <AboutSVG selected={selected} />
      </Link>
    </div>
  )
}

export default SidebarTab
