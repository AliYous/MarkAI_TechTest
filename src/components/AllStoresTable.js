import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import {formatMoneyAmount} from '../utils/formatMoneyAmount';
import './allStoresTable.css';

function AllStoresTable({storesArray, selectedStore, setSelectedStore}) {
  return (
    <div className="AllStoresTable">
        <TableContainer component={Paper} >
            <Table style={{tableLayout: 'fixed', minWidth: '650'}} >
              <TableHead style={{backgroundColor: '#E4E6EB' }} >
                <TableRow>
                  <TableCell>Store Name</TableCell>
                  <TableCell align="left">CMS</TableCell>
                  <TableCell align="center">Total Ad Spend <br/> (Yearly)</TableCell>
                  <TableCell align="center">Profitable</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {storesArray.map((store) => (
                  <AllStoresTableRow 
                  key={store.name} 
                  store={store} 
                  selectedStore={selectedStore}
                  handleClick={setSelectedStore} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
    </div>
  )
}

const AllStoresTableRow = ({store, selectedStore, handleClick}) => {
  return (
      <TableRow 
      key={store.name} 
      className="AllStoresTableRow" 
      onClick={() => handleClick(store)} 
      style={{backgroundColor: selectedStore && selectedStore.name === store.name ? '#D0E9FF' : ''}}
      >
        <TableCell component="th" scope="row">
          {store.name}
        </TableCell>
        <TableCell align="left">{store.cms}</TableCell>
        <TableCell align="center">{formatMoneyAmount(store.totalYearlyAdSpend, "$")}</TableCell>
        <TableCell 
          align="center"
        >
          <p className={`${store.isProfitable ? "textColor_green" : "textColor_red"}`}>
            {store.isProfitable ? 'YES' : 'NO'}
          </p>
        </TableCell>
      </TableRow>
  ) 
}

export default AllStoresTable
