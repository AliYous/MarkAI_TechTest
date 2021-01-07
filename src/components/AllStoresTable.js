import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useState } from 'react';
// import {getTotalAdSpend} from '../utils/storeCalculations';
import './allStoresTable.css';

// const StoresTableRow = (store) => {
//   function createStore(storeName, CMS, TotalAdSpend, Profitable) {
//     return { storeName, CMS, TotalAdSpend, Profitable };
//   }
// }

function AllStoresTable({storesArray, setSelectedStore}) {
  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {/* {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))} */}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover role="checkbox">
              {/* {columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === 'number' ? column.format(value) : value}
                  </TableCell>
                );
              })} */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default AllStoresTable
