import React from 'react'
import ImageCard from '../../components/ImageCard'
// import Slider from 'react-slick'
import content from '../../constant/en.json'
import {
  CardImageSlider,
  CardTitle,
  WhiteCard,
} from '../../styledComponents/elements/Cards'

const FeaturedCollectibles: React.FC = () => {
  return (
    <WhiteCard>
      <CardTitle>{content.feature_collectible}</CardTitle>
      <CardImageSlider>
        <ImageCard timeFlag={false} isBell={false} />
        <ImageCard timeFlag={false} isBell={false} />
        <ImageCard timeFlag={false} isBell={false} />
      </CardImageSlider>
    </WhiteCard>
  )
}

export default FeaturedCollectibles
