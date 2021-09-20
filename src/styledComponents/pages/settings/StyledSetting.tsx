import styled from 'styled-components'

export const AvatarDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`
export const ChangeAvatar = styled.div`
  position: relative;
`
export const AvatarBadge = styled.div`
  position: absolute;
  bottom: 13px;
  right: 18px;
  background-color: #fff;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  cursor: pointer;
`
export const AvatarImage = styled.img`
  width: 169px;
  height: 171px;
`
export const UserName = styled.span`
  margin-top: 22px;
  font-size: 20px;
  font-weight: bold;
`
export const UserDescription = styled.span`
  font-size: 16px;
  color: #a2a2c2;
`
export const CardDiv = styled.div`
  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 2%;
`
export const EditableInput = styled.input`
  border: none;
  padding: 15px 15px;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;
  background-color: #e5e9fa;
  outline: none;
  width: 100%;
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
