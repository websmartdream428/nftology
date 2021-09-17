import React, { useState } from 'react'

type CustomSVGProps = {
  text: string
}
const CheckButton = ({ text }: CustomSVGProps) => {
  const [clicked, setClicked] = useState(true)

  return (
    <button
      type="button"
      onClick={() => setClicked(!clicked)}
      style={{
        border: 'none',
        marginRight: '5px',
        cursor: 'pointer',
        backgroundColor: clicked ? '#A2A2C2' : '#fff',
        borderRadius: '17px',
        height: '56px',
        width: '190px',
        color: clicked ? '#FDFDFE' : '#000000',
        fontSize: '17px',
      }}
    >
      {text}
    </button>
  )
}

export default CheckButton
