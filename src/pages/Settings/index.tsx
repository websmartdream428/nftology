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
  EditableInput,
} from '../../styledComponents/pages/settings/StyledSetting'
import { PencilSVG } from '../../components/CustomSVG'

const Settings: React.FC = () => {
  return (
    <PageContainter>
      <AvatarDiv>
        <div>
          <AvatarImage src={useImg} alt="avatar_image" />
          <AvatarBadge>
            <PencilSVG />
          </AvatarBadge>
        </div>
        <UserName>User</UserName>
        <UserDescription>New User</UserDescription>
      </AvatarDiv>
      <WhiteCard>
        <EditableInput
          value="adsf"
          onChange={() => {
            console.log('asdfasdf')
          }}
        />
      </WhiteCard>
      <CardDiv>
        <WhiteCard>adsf</WhiteCard>
        <WhiteCard>adsf</WhiteCard>
      </CardDiv>
    </PageContainter>
  )
}

export default Settings
