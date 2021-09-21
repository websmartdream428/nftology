import styled from 'styled-components'

type CourseCardProps = {
  bgColor: string
}

export const WelcomeDiv = styled.div`
  position: relative;
  background-color: #ffe6c6;
  padding: 40px 50px;
  border-radius: 17px;
`

export const WelcomeTitle = styled.div`
  font-weight: 1000;
  font-size: 35px;
  color: #ffac45;
  margin-bottom: 20px;
`

export const WelcomeDesc = styled.div`
  font-size: 18px;
  color: #707070;
  width: 50%;
`

export const WelcomeImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 20%;
  width: 180px;
`

export const WelcomeInfo = styled.div`
  display: grid;
  grid-template-columns: 40% 57%;
  grid-gap: 3%;
  margin: 20px 0;
  @media screen and (max-width: 600px) {
    grid-template-columns: 100%;
  }
`

export const NewsContent = styled.div`
  padding: 20px 0;
  font-weight: 500;
  font-size: 16px;
  border-bottom: 1px solid #000;
`

export const CourseCard = styled.div<CourseCardProps>`
  border-radius: 20px;
  background-color: ${({ bgColor }) => bgColor};
  padding: 23px;
  display: flex;
  position: relative;
  align-items: center;
  svg {
    position: absolute;
    right: 23px;
    bottom: 30px;
    cursor: pointer;
  }
`

export const CardAvatar = styled.div`
  width: 59px;
  height: 59px;
  border-radius: 12px;
  background-color: #ffffff0f;
`

export const CourseTitle = styled.div`
  color: #fff;
  padding-left: 15px;
  font-size: 17px;
  font-weight: 500;
`
