import * as React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

const StyledTable = styled.table`
  width: 100%;
  thead {
    th {
      padding: 10px 20px 10px 20px;
      font-weight: 500;
    }
  }
  tbody {
    td {
      border-collapse: collapse;
      border-bottom: 1px solid #000000;
      text-align: center;
      padding-top: 20px;
      padding-bottom: 10px;
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
