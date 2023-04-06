import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import './Table.style.scss'
import {BiFilter} from 'react-icons/bi'
export type prop_columnsType ={Header:string,accessor?:string,Cell?:any,id?:any}

type Prop ={
  COLUMNS:prop_columnsType[],

  rest_data:any[]
}
 const Table = ({COLUMNS,rest_data}:Prop) => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => rest_data, [])
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      // @ts-ignore
      page,
      // @ts-ignore
      nextPage,
      // @ts-ignore
      previousPage,

      // @ts-ignore
      canPreviousPage,

      // @ts-ignore
      canNextPage,
      // @ts-ignore
      pageOptions,
      state,
      // @ts-ignore
      gotoPage,
      // @ts-ignore
      pageCount,
      // @ts-ignore
      setPageSize,
      prepareRow
    } = useTable(
      {
        columns,
        data,
        // initialState: { pageIndex: 1 }
      },
      usePagination
    )
      // @ts-ignore

    const { pageIndex, pageSize } = state
  
    return (
      <div className='table_container'>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}<BiFilter style={{'fontSize':'1.2rem'}}/></th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {/* @ts-ignore*/}     
            {page.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
            {/* @ts-ignore*/}     
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div>

         <div className="table_pagination_container">
         <div className='table_showing_container'>
              <p>showing</p>
              <select
              value={pageSize}
              onChange={e => setPageSize(Number(e.target.value))}>
              {[10, 25, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
              {pageSize}
              </option>
              ))}
              </select>
              <p> out of {pageOptions.length}</p>
            </div>

             
          <div className="table_next_btn">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {'<<'}
            </button>{' '}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </button>{' '}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>{' '}
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
              {'>>'}
            </button>{' '}
          </div>
         </div>

          
        </div>
      </div>
    )
  }
  

  export default Table