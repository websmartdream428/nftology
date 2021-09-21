import React from 'react'
import {
  AboutCard,
  ArtistImg,
  ArtistsGroup,
  ImageText,
  TextContent,
  TextDiv,
  TextTitle,
} from '../../styledComponents/pages/about/StyledAbout'
import content from '../../constant/en.json'
// import ArtistsImg from '../../assets/images/Ellipse 1.png'

const ArtistsCard: React.FC = () => {
  return (
    <AboutCard>
      <ImageText>
        <ArtistsGroup>
          <ArtistImg
            src="https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/128/color/btc.png"
            alt="artist"
          />
          <ArtistImg
            src="https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/128/color/btc.png"
            alt="artist"
          />
          <ArtistImg
            src="https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/128/color/btc.png"
            alt="artist"
          />
          <ArtistImg
            src="https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/128/color/btc.png"
            alt="artist"
          />
          <ArtistImg
            src="https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/128/color/btc.png"
            alt="artist"
          />
        </ArtistsGroup>
        <TextDiv>
          <TextTitle>{content.artists_title}</TextTitle>
          <TextContent>{content.artists_content}</TextContent>
        </TextDiv>
      </ImageText>
    </AboutCard>
  )
}

export default ArtistsCard
