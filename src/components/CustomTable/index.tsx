import * as React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

const StyledTable = styled.table`
  width: 100%;
  tbody {
    td {
      width: 100%;
      border-collapse: collapse;
      border-bottom: 1px solid #000000;
      padding-bottom: 10px;
      padding-top: 20px;
      text-align: center;
    }
  }
`

type TableProps = {
  columns: any
  data: any
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
    <StyledTable {...getTableProps()}>
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
    </StyledTable>
  )
}
export default Table
