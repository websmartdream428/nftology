import React from 'react'

import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'
import DescriptionCard from './DescriptionCard'
import SubmitForm from './SubmitForm'

const SubmitCollectible: React.FC = () => {
  return (
    <PageContainter>
      <SubmitForm />
      <DescriptionCard />
    </PageContainter>
  )
}

export default SubmitCollectible
