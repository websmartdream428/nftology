import React from 'react'
import {
  AboutCard,
  Image,
  ImageText,
  TextContent,
  TextDiv,
  TextTitle,
} from '../../styledComponents/pages/about/StyledAbout'
import content from '../../constant/en.json'
import ArtistsImg from '../../assets/images/artists.png'

const ArtistsCard: React.FC = () => {
  return (
    <AboutCard>
      <ImageText>
        <Image src={ArtistsImg} alt="about" />
        <TextDiv>
          <TextTitle>{content.artists_title}</TextTitle>
          <TextContent>{content.artists_content}</TextContent>
        </TextDiv>
      </ImageText>
    </AboutCard>
  )
}

export default ArtistsCard
