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
  UserInfo,
} from '../../styledComponents/pages/settings/StyledSetting'
import { PencilSVG } from '../../components/CustomSVG'

import content from '../../constant/en.json'
import FormControl from './FormControl'

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
      <WhiteCard>
        <UserInfo>
          <div>
            <FormControl label={content.username} type="text" value="User" />
            <FormControl
              label={content.email}
              type="email"
              value="user@gmail.com"
            />
          </div>
          <div>
            <FormControl
              label={content.password}
              type="password"
              value="password"
            />
          </div>
        </UserInfo>
      </WhiteCard>
      <CardDiv>
        <WhiteCard>
          <div>
            <FormControl label={content.currency} type="text" value="USD" />
            <FormControl
              label={content.cryptocurrency}
              type="text"
              value="Ethereum"
            />
          </div>
        </WhiteCard>
        <WhiteCard>
          <UserInfo>
            <div>
              <FormControl
                label={content.card_number}
                type="text"
                value="1234 5678 1234 5678"
              />
              <FormControl
                label={content.expiration_date}
                type="type"
                value="01/21"
              />
            </div>
            <div>
              <FormControl label={content.cvc} type="password" value="cvc" />
            </div>
          </UserInfo>
        </WhiteCard>
      </CardDiv>
    </PageContainter>
  )
}

export default Settings
