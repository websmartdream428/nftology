import React from 'react'
import '../assets/scss/page/headerbar.scss'
import { ArrowSVG, SearchIcon } from '../components/CustomSVG'
import content from '../constant/en.json'

const Header: React.FC = () => {
  return (
    <div className="header_bar">
      <div className="search_input_div">
        <div>
          <input
            className="search_input"
            placeholder={content.search_placeholder}
          />
        </div>
        <div>
          <SearchIcon />
        </div>
      </div>
      <div className="sign_in">
        Sign in <ArrowSVG selected="#000" />
      </div>
    </div>
  )
}

export default Header
