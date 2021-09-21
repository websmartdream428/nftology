import React from 'react'
import styled from 'styled-components'
import avatar from '../../assets/images/Ellipse 1.png'
import { ArrowSVG, BellSVG } from '../CustomSVG'

type CustomProps = { isBell: boolean; subTitle: string; isGallery: boolean }

const CardFooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f5f5fb;
  width: calc(100% - 2px);
  border-radius: 20px;
  padding: 25px;
  margin: 1px;
  position: relative;
`

const Avatar = styled.img`
  width: 55px;
`

const AvatarDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  word-break: break-all;
`

const AvatarTitle = styled.div`
  width: 100%;
  font-size: 17px;
  color: #1f0042;
`

const AvatarSubtitle = styled.div`
  color: #1f0042;
`

const Bell = styled.div`
  cursor: pointer;
  bottom: 15px;
  right: 15px;
  svg {
    margin-left: 5px;
  }
  position: absolute;
`

const AvatarCard = ({ isBell, subTitle, isGallery }: CustomProps) => {
  return (
    <CardFooterDiv>
      <CardFooter>
        <div>
          <Avatar src={avatar} alt="avatar" />
        </div>
        <AvatarDesc>
          <AvatarTitle>NameOfCollectible</AvatarTitle>
          <AvatarSubtitle>{subTitle}</AvatarSubtitle>
          {isBell ? (
            <Bell>
              <BellSVG />
            </Bell>
          ) : (
            <Bell>
              {isGallery ? 'View Gallery' : 'View'}
              <ArrowSVG selected="#000" />
            </Bell>
          )}
        </AvatarDesc>
      </CardFooter>
    </CardFooterDiv>
  )
}

export default AvatarCard
