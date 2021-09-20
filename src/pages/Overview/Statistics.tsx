import React from 'react'
import { CardTitle, WhiteCard } from '../../styledComponents/elements/Cards'
import content from '../../constant/en.json'
import {
  CustomOption,
  CustomSelect,
} from '../../styledComponents/elements/CustomSelect'

const Statistics: React.FC = () => {
  return (
    <WhiteCard style={{ marginBottom: '30px' }}>
      <CardTitle>
        <div>{content.viewer_statistics}</div>
        <CustomSelect>
          <CustomOption>yesterday</CustomOption>
          <CustomOption>Last week</CustomOption>
          <CustomOption>Last month</CustomOption>
        </CustomSelect>
      </CardTitle>
    </WhiteCard>
  )
}

export default Statistics
