import React from 'react'
import './imageCard.scss'
import CardImage from '../../assets/images/common.png'

import AvatarCard from '../AvatarCard'

const ImageCard: React.FC = () => {
  return (
    <div
      className="image-card"
      style={{ backgroundImage: `url(${CardImage})` }}
    >
      <div className="time_player">
        <div className="time">25h 25m 30s</div>
      </div>
      <AvatarCard isBell={false} />
    </div>
  )
}

export default ImageCard
