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
        color: '#000',
        padding: '10px 30px',
      }}
    >
      {/* Hello */}
      {value}
    </button>
  )
}

export default Button
