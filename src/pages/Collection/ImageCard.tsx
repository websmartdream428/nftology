import React from 'react'
import { Link } from 'react-router-dom'
import {
  AvatarTitle,
  Bell,
  CardFooter,
  CardFooterDiv,
  ImageCardDiv,
} from '../../styledComponents/pages/Collection/StyledActivity'
import CardImage from '../../assets/images/common.png'
import { ArrowSVG } from '../../components/CustomSVG'

const ImageCard: React.FC = () => {
  return (
    <ImageCardDiv style={{ backgroundImage: `url(${CardImage})` }}>
      <CardFooterDiv>
        <CardFooter>
          <AvatarTitle>Collectible</AvatarTitle>
          <Link
            to="/product"
            style={{ textDecoration: 'none' }}
            onClick={() => localStorage.setItem('currentRouter', 'product')}
          >
            <Bell>
              View
              <ArrowSVG selected="#000" />
            </Bell>
          </Link>
        </CardFooter>
      </CardFooterDiv>
    </ImageCardDiv>
  )
}

export default ImageCard
