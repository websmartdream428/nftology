import React from 'react'

const ConnectWalletBtn = () => {
  return (
    <div
      style={{
        cursor: 'pointer',
        backgroundColor:
          localStorage.getItem('currentRouter') === 'connectWallet'
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
          localStorage.getItem('currentRouter') === 'connectWallet'
            ? '#fff'
            : '#000',
      }}
    >
      Connect Wallet
    </div>
  )
}

export default ConnectWalletBtn
