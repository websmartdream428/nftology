import React from 'react'
import styled from 'styled-components'
import {
  TextContent,
  TextDiv,
  TextImage,
  TextTitle,
} from '../../styledComponents/pages/about/StyledAbout'
import content from '../../constant/en.json'
import SellImg from '../../assets/images/sell.png'
import { NoColorCard } from '../../styledComponents/elements/Cards'

const SellShareCard = styled.div`
  background-color: #330b7e;
  width: 80%;
  border-radius: 28px;
`

const SellImage = styled.img`
  width: 90%;
  margin-top: 20px;
`

const SellTitle = styled.div`
  margin: 20px;
  color: white;
  font-weight: 600;
  font-size: 19px;
`

const SellDetails = styled.div`
  width: 100%;
  border-radius: 18px;
  background-color: #fff;
  padding: 5px 10px;
  color: #002f6c;
  font-size: 14px;
  display: flex;
  flex-direction: column;
`

const SellDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
  font-weight: 500;
`

const SellConfirm = styled.div`
  text-align: center;
  padding: 15px 0 15px 0;
  color: #fff;
  font-size: 19px;
`

const BuySellCard: React.FC = () => {
  return (
    <NoColorCard>
      <TextImage style={{ padding: '30px' }}>
        <SellShareCard>
          <div style={{ textAlign: 'center' }}>
            <SellImage src={SellImg} alt="img" />
          </div>
          <SellTitle>Sell Shares</SellTitle>
          <SellDetails>
            <SellDetail>
              <div>Available shares</div>
              <div>500</div>
            </SellDetail>
            <SellDetail>
              <div>Ask Price</div>
              <div>$24.75</div>
            </SellDetail>
            <SellDetail>
              <div>Quantity</div>
              <div>25</div>
            </SellDetail>
            <SellDetail>
              <div>Transaction Fees</div>
              <div>$0.00</div>
            </SellDetail>
            <SellDetail>
              <div>Total</div>
              <div>$618.75</div>
            </SellDetail>
          </SellDetails>
          <SellConfirm>CONFIRM</SellConfirm>
        </SellShareCard>
        <TextDiv>
          <TextTitle>{content.buy_and_sell}</TextTitle>
          <TextContent>{content.buy_and_sell_content}</TextContent>
        </TextDiv>
      </TextImage>
    </NoColorCard>
  )
}

export default BuySellCard
