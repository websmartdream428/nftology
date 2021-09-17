import * as React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'
import { tabledata } from '../../constant/tabledata'
import Button from '../../components/CustomButton'
import CustomHeader from '../../components/CustomHeader'

const StyledTable = styled.div``

type TableProps = {
  columns: any
  data: any
}
type CellProps = {
  cell: any
}
function Table({ columns, data }: TableProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
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
    <StyledTable>
      <Table columns={columns} data={tabledata} />
    </StyledTable>
  )
}
