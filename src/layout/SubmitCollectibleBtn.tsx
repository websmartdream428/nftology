import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  cursor: pointer;
  border: none;
  border-radius: 12px;
  height: 54px;
  width: 219px;
`
const SubmitCollectibleBtn = () => {
  return (
    <Div
      style={{
        backgroundColor:
          localStorage.getItem('currentRouter') === 'submitcollectible'
            ? '#902fff'
            : '#E5E9FA',
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
    </Div>
  )
}

export default SubmitCollectibleBtn
