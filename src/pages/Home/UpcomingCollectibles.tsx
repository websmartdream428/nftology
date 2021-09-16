import React from 'react'
import ImageCard from '../../components/ImageCard'
import content from '../../constant/en.json'

const UpcomingCollectibles: React.FC = () => {
  return (
    <div className="cards_group">
      <div className="card_title">{content.upcom_collectible}</div>
      <ImageCard />
    </div>
  )
}

export default UpcomingCollectibles
