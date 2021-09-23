import React, { useState } from 'react'
import { FaInfoCircle, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AvatarImg from '../assets/images/Ellipse 1.png'
import BellImg from '../assets/images/on_bell.png'

const RootDiv = styled.div`
  padding: 30px 20px;
  width: 331px;
  display: flex;
  position: fixed;
`

const AvatarDiv = styled.div`
  display: flex;
  width: calc(331px - 25px - 40px);
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
  @media screen and (max-width: 1280px) {
    color: #fff;
  }
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
  position: relative;
`

const DropDownBoard = styled.div`
  top: 90px;
  position: absolute;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 0 10px 30px #0000003f;
  z-index: 1;
  width: 330px;
  text-align: left;
  color: #000;
`

const Title = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin: 15px 0;
`

const Row = styled.div`
  margin: 15px 0px;
  display: flex;
  align-items: center;
`

const WarningIcon = styled.div`
  border-radius: 10px;
  padding: 15px;
  background-color: #fef2f3;
  display: flex;
  align-items: center;
  color: #ff606d;
  font-size: 12px;
`

const MessageIcon = styled.div`
  border-radius: 10px;
  padding: 15px;
  background-color: #eef2fd;
  display: flex;
  align-items: center;
  color: #6083f4;
  font-size: 12px;
`

const NotifyTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
`

const Notify = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`

const NotifyDate = styled.div`
  font-size: 14px;
  color: #a2a2c2;
`

const UserAvatar: React.FC = () => {
  const [flag, setFlag] = useState(false)

  return (
    <RootDiv>
      <Link
        to="/profile"
        style={{ textDecoration: 'none' }}
        onClick={() => {
          localStorage.setItem('currentRouter', 'profile')
          localStorage.setItem('usermenu', 'off')
        }}
      >
        <AvatarDiv>
          <Avatar src={AvatarImg} />
          <AvatarDesc>
            <UserName>User</UserName>
            <EmailAddress>New User</EmailAddress>
          </AvatarDesc>
        </AvatarDiv>
      </Link>
      <BellDiv
        onMouseEnter={() => setFlag(true)}
        onMouseLeave={() => setFlag(false)}
      >
        <BellIco src={BellImg} alt="bell" />
        {flag && (
          <DropDownBoard
            onMouseEnter={() => setFlag(true)}
            onMouseLeave={() => setFlag(false)}
          >
            <Title>Notifications</Title>
            <Row>
              <WarningIcon>
                <FaInfoCircle />
              </WarningIcon>
              <Notify>
                <NotifyTitle>Collectible is now LIVE</NotifyTitle>
                <NotifyDate>30 June 2021, Friday</NotifyDate>
              </Notify>
            </Row>
            <Row>
              <MessageIcon>
                <FaEnvelope />
              </MessageIcon>
              <Notify>
                <NotifyTitle>Your request has been accepted</NotifyTitle>
                <NotifyDate>30 June 2021, Friday</NotifyDate>
              </Notify>
            </Row>
            <Row>
              <MessageIcon>
                <FaEnvelope />
              </MessageIcon>
              <Notify>
                <NotifyTitle>Take a tour</NotifyTitle>
                <NotifyDate>30 June 2021, Friday</NotifyDate>
              </Notify>
            </Row>
          </DropDownBoard>
        )}
      </BellDiv>
    </RootDiv>
  )
}

export default UserAvatar
