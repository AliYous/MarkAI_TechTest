import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useState, useEffect } from 'react';
import './allStoresTable.css';

// const StoresTableRow = (store) => {
//   
// }

function AllStoresTable({storesArray, setSelectedStore}) {
  const [tableRows, setTableRows] = useState();

  const createTableRow = (storeName, cms, totalYearlyAdSpend, isProfitable) => {
    return { storeName, cms, totalYearlyAdSpend, isProfitable };
  }

  useEffect(() => {
    const tempTableRows = [];
    storesArray.map((store) => {
      const row = createTableRow(store.name, store.cms, store.totalYearlyAdSpend, store.isProfitable)
      tempTableRows.push(row);
    })
    console.log(tempTableRows)
    setTableRows(tempTableRows);    
  }, [])

  return (
    <Paper>
     
    </Paper>
  )
}

export default AllStoresTable
