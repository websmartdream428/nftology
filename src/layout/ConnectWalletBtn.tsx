import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  cursor: pointer;
  border: none;
  border-radius: 12px;
  height: 54px;
  width: 219px;
`

const ConnectWalletBtn = () => {
  return (
    <Div
      style={{
        backgroundColor:
          localStorage.getItem('currentRouter') === 'connectWallet'
            ? '#902fff'
            : '#E5E9FA',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color:
          localStorage.getItem('currentRouter') === 'connectWallet'
            ? '#fff'
            : '#000',
      }}
    >
      Connect Wallet
    </Div>
  )
}

export default ConnectWalletBtn
