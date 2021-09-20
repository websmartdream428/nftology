import React from 'react'
import styled from 'styled-components'
import AvatarImg from '../assets/images/Ellipse 1.png'
import BellImg from '../assets/images/on_bell.png'

const AvatarDiv = styled.div`
  padding: 30px 20px;
  position: fixed;
  display: flex;
  width: 331px;
`

const Avatar = styled.img`
  width: 90px;
  height: 90px;
`

const AvatarDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  text-align: left;
  width: 100%;
`

const UserName = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #000;
`

const EmailAddress = styled.div`
  font-size: 16px;
  color: #a2a2c2;
`

const BellIco = styled.img`
  width: 25px;
  height: 32px;
  align-items: end;
`

const BellDiv = styled.div`
  display: flex;
  align-items: center;
  right: 0;
  width: 100%;
  justify-content: flex-end;
`

const UserAvatar: React.FC = () => {
  return (
    <AvatarDiv>
      <Avatar src={AvatarImg} />
      <AvatarDesc>
        <UserName>User</UserName>
        <EmailAddress>New User</EmailAddress>
      </AvatarDesc>
      <BellDiv>
        <BellIco src={BellImg} alt="bell" />
      </BellDiv>
    </AvatarDiv>
  )
}

export default UserAvatar
