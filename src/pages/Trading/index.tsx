import * as React from 'react'
import styled from 'styled-components'
import {
  HistoryTabledata,
  SecTabledata,
  BuyTabledata,
} from '../../constant/tabledata'
import { BuyColumn, HistoryColumn, SecColumn } from '../../constant/tablecolumn'
import Table from '../../components/CustomTable'
import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'
import { WhiteCard } from '../../styledComponents/elements/Cards'
import {
  TableDesc,
  TableDescDiv,
  DescTitle,
  DescContent,
  DescSubtitle,
} from '../../styledComponents/pages/activity/StyledTrading'
import {
  SearchDiv,
  SearchInput,
} from '../../styledComponents/layout/StyledHeader'
import { SearchIcon } from '../../components/CustomSVG'
import content from '../../constant/en.json'

const TableDiv = styled.div`
  margin-top: 50px;
  width: 100%;
`

export default function App() {
  return (
    <PageContainter>
      <WhiteCard>
        <TableDescDiv>
          <TableDesc>
            <DescTitle>Buy Shares</DescTitle>
            <DescContent>{content.table_description}</DescContent>
          </TableDesc>
          <SearchDiv>
            <SearchInput
              style={{ width: '200px' }}
              placeholder="Search Collectibles"
            />
            <SearchIcon />
          </SearchDiv>
        </TableDescDiv>
        <TableDiv>
          <Table columns={BuyColumn} data={BuyTabledata} />
        </TableDiv>
      </WhiteCard>

      <WhiteCard>
        <TableDescDiv>
          <TableDesc>
            <DescTitle>History of Direct Transactions</DescTitle>
          </TableDesc>
          <SearchDiv>
            <SearchInput
              style={{ width: '200px' }}
              placeholder="Search Collectibles"
            />
            <SearchIcon />
          </SearchDiv>
        </TableDescDiv>
        <TableDiv>
          <Table columns={HistoryColumn} data={HistoryTabledata} />
        </TableDiv>
      </WhiteCard>

      <WhiteCard>
        <TableDescDiv>
          <TableDesc>
            <DescTitle>SEC Filings</DescTitle>
            <DescContent>{content.table_sec_description}</DescContent>
          </TableDesc>
          <SearchDiv>
            <SearchInput
              style={{ width: '200px' }}
              placeholder="Search Collectibles"
            />
            <SearchIcon />
          </SearchDiv>
        </TableDescDiv>
        <TableDiv>
          <Table columns={SecColumn} data={SecTabledata} />
        </TableDiv>
      </WhiteCard>

      <WhiteCard>
        <TableDescDiv>
          <TableDesc>
            <DescTitle>Risk Of Investing</DescTitle>
            <DescSubtitle>{content.risk_description}</DescSubtitle>
          </TableDesc>
        </TableDescDiv>
      </WhiteCard>
    </PageContainter>
  )
}
