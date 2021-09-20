import React from 'react'
import { MoreText, WhiteCard } from '../../styledComponents/elements/Cards'

import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'
import {
  AboutText,
  ProfileCard,
  ProfilePage,
  ProfileText,
} from '../../styledComponents/pages/profile'
import {
  AvatarDiv,
  AvatarImage,
  ChangeAvatar,
  UserDescription,
  UserName,
} from '../../styledComponents/pages/settings/StyledSetting'
import useImg from '../../assets/images/Ellipse 1.png'
import content from '../../constant/en.json'
import { ArrowSVG } from '../../components/CustomSVG'
import ImageCard from '../Collection/ImageCard'

const Profile: React.FC = () => {
  const usertype = 'Creator'

  return (
    <PageContainter>
      <ProfilePage>
        <WhiteCard>
          <AvatarDiv>
            <ChangeAvatar>
              <AvatarImage src={useImg} alt="avatar_image" />
            </ChangeAvatar>
            <UserName>NameOfCollector</UserName>
            <UserDescription>{usertype}</UserDescription>
          </AvatarDiv>
          <AboutText>{content.about}</AboutText>
          <ProfileText>{content.profile_txt}</ProfileText>
        </WhiteCard>
        <WhiteCard>
          <AboutText>Creation</AboutText>
          <ProfileCard>
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </ProfileCard>
          <MoreText>
            More <ArrowSVG selected="#000" />
          </MoreText>
        </WhiteCard>
      </ProfilePage>
    </PageContainter>
  )
}

export default Profile
