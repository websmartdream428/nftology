import React, { useState } from 'react'

import { PencilSVG } from '../../components/CustomSVG'
import {
  EditBtn,
  FormDiv,
  InfoInput,
  InfoLabel,
} from '../../styledComponents/pages/settings/StyledSetting'

type FormProps = {
  label: string
  value: string
  type: string
}

const FormControl = ({ label, value, type }: FormProps) => {
  const [editFlag, setEditFlag] = useState(false)
  const handleEdit = () => {
    setEditFlag(!editFlag)
  }

  //   const handleChange = () => {}

  return (
    <FormDiv>
      <InfoLabel>
        {label}
        <EditBtn type="button" onClick={handleEdit}>
          <PencilSVG />
        </EditBtn>
      </InfoLabel>
      <InfoInput
        editFlag={editFlag}
        readOnly={!editFlag}
        type={type}
        defaultValue={value}
      />
    </FormDiv>
  )
}

export default FormControl
