import React from 'react'
import Button from '../components/CustomButton'
import CustomHeader from '../components/CustomHeader'

type CellProps = {
  cell: any
}

export const BuyColumn = [
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
      <Button onClick={() => console.log(cell)} value="Buy/Counter" />
    ),
  },
]

export const HistoryColumn = [
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
      <Button onClick={() => console.log(cell)} value="Buy/Counter" />
    ),
  },
]

export const SecColumn = [
  {
    Header: <CustomHeader title="Collectible" />,
    accessor: 'collect',
  },
  {
    Header: <CustomHeader title="SEC Filings" />,
    accessor: 'sec',
  },
]
