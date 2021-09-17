import * as React from 'react'
import styled from 'styled-components'
import { tabledata } from '../../constant/tabledata'
import Button from '../../components/CustomButton'
import CustomHeader from '../../components/CustomHeader'
import Table from '../../components/CustomTable'
import { PageContainter } from '../../styledComponents/layout/StyledMainLayout'
import { WhiteCard } from '../../styledComponents/elements/Cards'
import {
  TableDesc,
  TableDescDiv,
  DescTitle,
  DescContent,
} from '../../styledComponents/pages/activity/StyledTrading'
import {
  SearchDiv,
  SearchInput,
} from '../../styledComponents/layout/StyledHeader'
import { SearchIcon } from '../../components/CustomSVG'
import content from '../../constant/en.json'

const TableDiv = styled.div`
  width: 100%;
`

type CellProps = {
  cell: any
}

export default function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: <CustomHeader title="Collectible" />,
        accessor: 'collect',
      },
      {
        Header: <CustomHeader title="ASK(USD)" />,
        accessor: 'ask',
      },
      {
        Header: <CustomHeader title="Shares" />,
        accessor: 'shares',
      },
      {
        Header: <CustomHeader title="Total(USD)" />,
        accessor: 'total',
      },
      {
        Header: '',
        accessor: 'name',
        Cell: ({ cell }: CellProps) => (
          <Button
            border="none"
            color="#E5E9FA"
            height="54px"
            onClick={() => console.log(cell)}
            radius="12px"
            width="219px"
            value="Buy/Counter"
          />
        ),
      },
    ],
    []
  )

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
          <Table columns={columns} data={tabledata} />
        </TableDiv>
      </WhiteCard>
    </PageContainter>
  )
}
