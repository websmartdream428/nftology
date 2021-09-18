import React from 'react'

type CustomSVGProps = {
  value: string
  onClick: () => void
}
const Button = ({ value, onClick }: CustomSVGProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        cursor: 'pointer',
        backgroundColor: '#E5E9FA',
        border: 'none',
        borderRadius: '12px',
        height: '54px',
        width: '219px',
        color: '#000',
      }}
    >
      {/* Hello */}
      {value}
    </button>
  )
}

export default Button
