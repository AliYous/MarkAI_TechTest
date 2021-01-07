import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useState, useEffect } from 'react';
import './allStoresTable.css';

function AllStoresTable({storesArray, setSelectedStore}) {
  const handleRowClick = (store) => {
    console.log("store")
    setSelectedStore(store)
  }

  return (
    <div className="AllStoresTable">
        <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Store Name</TableCell>
                  <TableCell align="left">CMS</TableCell>
                  <TableCell align="center">Total Ad Spend <br/> (Yearly)</TableCell>
                  <TableCell align="left">Profitable</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {storesArray.map((store) => (
                  <AllStoresTableRow key={store.name} store={store} handleClick={setSelectedStore} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </div>
  )
}

const AllStoresTableRow = ({store, handleClick}) => {
  return (
      <TableRow key={store.name} className="AllStoresTableRow" onClick={() => handleClick(store)} >
        <TableCell component="th" scope="row">
          {store.name}
        </TableCell>
        <TableCell align="left">{store.cms}</TableCell>
        <TableCell align="center">${store.totalYearlyAdSpend}</TableCell>
        <TableCell align="center">{store.isProfitable ? 'YES' : 'NO'}</TableCell>
      </TableRow>
  )
}

export default AllStoresTable
