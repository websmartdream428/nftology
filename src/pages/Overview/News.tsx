import React from 'react'
import { CardTitle, WhiteCard } from '../../styledComponents/elements/Cards'
import { NewsContent } from '../../styledComponents/pages/overview/StyledOverView'
import content from '../../constant/en.json'

const News: React.FC = () => {
  return (
    <WhiteCard style={{ marginBottom: '30px' }}>
      <CardTitle>{content.latest_news}</CardTitle>
      <NewsContent>Lorem Ipsum</NewsContent>
      <NewsContent>Lorem Ipsum</NewsContent>
      <NewsContent>Lorem Ipsum</NewsContent>
      <NewsContent>Lorem Ipsum</NewsContent>
    </WhiteCard>
  )
}

export default News
