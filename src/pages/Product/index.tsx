import React from 'react'
import { FaShareAlt, FaUndo, FaEllipsisV } from 'react-icons/fa'
import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'
import {
  CustomFilterSelect,
  CustomTable,
  DetailInfo,
  FlexDiv,
  ImageView,
  ProductCardTitle,
  ProductName,
  ProductPage,
  ProductText,
  ProductType,
  ProductWhiteCard,
  ReviewDiv,
  ToolButton,
  ToolButtonGroup,
} from '../../styledComponents/pages/product/StyledProduct'
import ViewImg from '../../assets/images/pexels-dids-3754600.png'
import {
  CurrentHistorySVG,
  CurrentPriceSVG,
  DescriptionSVG,
  Details1SVG,
  Details2SVG,
  EyeSVG,
  PriceHistorySVG,
  PropertiesSVG,
  TradingHistorySVG,
} from '../../components/CustomSVG'
import content from '../../constant/en.json'
import Button from '../../components/CustomButton'
import ChartImg from '../../assets/images/Group 580.png'

const Home: React.FC = () => {
  return (
    <PageContainter>
      <ProductPage>
        <div>
          <ImageView>
            <img src={ViewImg} alt="imgview" width="100%" height="100%" />
            <ToolButtonGroup>
              <ToolButton>
                <FaUndo />
              </ToolButton>
              <ToolButton>
                <FaShareAlt />
              </ToolButton>
              <ToolButton>
                <FaEllipsisV />
              </ToolButton>
            </ToolButtonGroup>
          </ImageView>
          <ProductWhiteCard>
            <ProductCardTitle>
              <DescriptionSVG /> {content.description}
            </ProductCardTitle>
            <ProductText>{content.description_txt}</ProductText>
          </ProductWhiteCard>
          <ProductWhiteCard>
            <ProductCardTitle>
              <PropertiesSVG /> {content.properties}
            </ProductCardTitle>
            <ProductText>{content.properties_txt1}</ProductText>
            <ProductText>{content.properties_txt2}</ProductText>
            <ProductText>{content.properties_txt3}</ProductText>
          </ProductWhiteCard>
          <ProductWhiteCard>
            <ProductCardTitle>
              <Details2SVG /> {content.details}
            </ProductCardTitle>
            <DetailInfo>
              {content.contract_address}
              <span>0x495f...7b5e</span>
            </DetailInfo>
            <DetailInfo>
              {content.token_id}
              <span>33271220540992826225097820539128178</span>
            </DetailInfo>
            <DetailInfo>
              {content.blockchain}
              <span>Ethereum</span>
            </DetailInfo>
            <DetailInfo>
              {content.metadata}
              <span>Editable</span>
            </DetailInfo>
          </ProductWhiteCard>
          <ProductWhiteCard>
            <ProductCardTitle>
              <TradingHistorySVG /> {content.trading_history}
            </ProductCardTitle>
            <CustomFilterSelect>
              <option>adsf</option>
            </CustomFilterSelect>
            <CustomTable>
              <thead>
                <tr>
                  <th>{content.event}</th>
                  <th>{content.price}</th>
                  <th>{content.from}</th>
                  <th>{content.to}</th>
                  <th>{content.date}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Listed</td>
                  <td>
                    <ProductText>
                      <CurrentHistorySVG /> 0.1
                    </ProductText>
                  </td>
                  <td>NameOfUser</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Created</td>
                  <td />
                  <td>NameOfUser</td>
                  <td>NameOfUser</td>
                  <td>3 Months Ago</td>
                </tr>
              </tbody>
            </CustomTable>
          </ProductWhiteCard>
        </div>
        <div>
          <ProductWhiteCard>
            <ProductName>Collectible Name</ProductName>
            <ProductType>Owned by</ProductType>
            <ProductText>NFTology</ProductText>
            <ReviewDiv>
              <EyeSVG /> 25 views
            </ReviewDiv>
          </ProductWhiteCard>
          <ProductWhiteCard>
            <FlexDiv>
              <div>
                <ProductCardTitle>{content.current_price}</ProductCardTitle>
                <ProductText>
                  <CurrentHistorySVG />
                  NFTology
                </ProductText>
              </div>
              <Button
                value={content.buy_now}
                onClick={() => console.log('Buy now clicked')}
              />
            </FlexDiv>
          </ProductWhiteCard>
          <ProductWhiteCard>
            <ProductCardTitle>
              <PriceHistorySVG />
              {content.price_history}
            </ProductCardTitle>
            <img src={ChartImg} alt="chart" width="100%" />
          </ProductWhiteCard>
          <ProductWhiteCard>
            <ProductCardTitle>
              <Details1SVG />
              {content.details}
            </ProductCardTitle>
            <CustomTable>
              <thead>
                <tr>
                  <th>{content.unit_price}</th>
                  <th>{content.quantity}</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ProductText>
                      <CurrentHistorySVG />
                      0.1 ($264.8 9)
                    </ProductText>
                  </td>
                  <td>15</td>
                  <td>
                    <Button
                      value={content.buy_now}
                      onClick={() => console.log('Buy now clicked')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <ProductText>
                      <CurrentHistorySVG />
                      0.1 ($264.89)
                    </ProductText>
                  </td>
                  <td>1</td>
                  <td>
                    <Button
                      value={content.buy_now}
                      onClick={() => console.log('Buy now clicked')}
                    />
                  </td>
                </tr>
              </tbody>
            </CustomTable>
          </ProductWhiteCard>

          <ProductWhiteCard>
            <FlexDiv>
              <ProductCardTitle>
                <CurrentPriceSVG />
                {content.current_price}
              </ProductCardTitle>
              <Button
                value={content.make_an_offer}
                onClick={() => console.log('Make an offer clicked')}
              />
            </FlexDiv>
          </ProductWhiteCard>
        </div>
      </ProductPage>
    </PageContainter>
  )
}

export default Home
