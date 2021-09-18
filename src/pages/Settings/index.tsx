import React from 'react'

import useImg from '../../assets/images/Ellipse 1.png'
import { WhiteCard } from '../../styledComponents/elements/Cards'
import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'
import {
  AvatarDiv,
  AvatarImage,
  UserName,
  UserDescription,
  CardDiv,
  AvatarBadge,
  ChangeAvatar,
  EditableInput,
} from '../../styledComponents/pages/settings/StyledSetting'
import { PencilSVG } from '../../components/CustomSVG'

const Settings: React.FC = () => {
  return (
    <PageContainter>
      <AvatarDiv>
        <ChangeAvatar>
          <AvatarImage src={useImg} alt="avatar_image" />
          <AvatarBadge>
            <PencilSVG />
          </AvatarBadge>
        </ChangeAvatar>
        <UserName>User</UserName>
        <UserDescription>New User</UserDescription>
      </AvatarDiv>
      <WhiteCard>asdfsadf</WhiteCard>
      <CardDiv>
        <WhiteCard>
          <EditableInput
            value="adsf"
            onChange={() => {
              console.log('asdfasdf')
            }}
          />
        </WhiteCard>
        <WhiteCard>
          <EditableInput
            value="adsf"
            onChange={() => {
              console.log('asdfasdf')
            }}
          />
        </WhiteCard>
      </CardDiv>
    </PageContainter>
  )
}

export default Settings
