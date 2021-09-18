import React from 'react'

const SubmitCollectibleBtn = () => {
  return (
    <div
      style={{
        cursor: 'pointer',
        backgroundColor:
          localStorage.getItem('currentRouter') === 'submitcollectible'
            ? '#902fff'
            : '#E5E9FA',
        border: 'none',
        borderRadius: '12px',
        height: '54px',
        width: '219px',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:
          localStorage.getItem('currentRouter') === 'submitcollectible'
            ? '#fff'
            : '#000',
      }}
    >
      Submit Collectible
    </div>
  )
}

export default SubmitCollectibleBtn
