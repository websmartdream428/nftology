import React from 'react'
import { CardTitle, NoColorCard } from '../../styledComponents/elements/Cards'
import {
  CardAvatar,
  CourseCard,
  CourseTitle,
} from '../../styledComponents/pages/overview/StyledOverView'
import content from '../../constant/en.json'
import { CardGroup } from '../../styledComponents/pages/about/StyledAbout'
import { ArrowSVG } from '../../components/CustomSVG'

const YourCourse: React.FC = () => {
  return (
    <NoColorCard>
      <CardTitle>{content.your_course}</CardTitle>
      <CardGroup>
        <CourseCard bgColor="#4D4CAC">
          <CardAvatar />
          <CourseTitle>Your Finances</CourseTitle>
          <ArrowSVG selected="#fff" />
        </CourseCard>
        <CourseCard bgColor="#9698D6">
          <CardAvatar />
          <CourseTitle>Lorem Ipsum</CourseTitle>
          <ArrowSVG selected="#fff" />
        </CourseCard>
        <CourseCard bgColor="#FF808B">
          <CardAvatar />
          <CourseTitle>Lorem Ipsum</CourseTitle>
          <ArrowSVG selected="#fff" />
        </CourseCard>
      </CardGroup>
    </NoColorCard>
  )
}

export default YourCourse
