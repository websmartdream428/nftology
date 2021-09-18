import React from 'react'
import '../../assets/scss/customRadio.scss'

type CustomRadioProps = {
  text: string
  name: string
}
const CustomRadio = ({ text, name }: CustomRadioProps) => {
  return (
    <label className="radio_container">
      {text}
      <input type="radio" className="radio_input" name={name} />
      <span className="radio_checkmark" />
    </label>
  )
}
export default CustomRadio
