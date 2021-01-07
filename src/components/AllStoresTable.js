import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import {formatMoneyAmount} from '../utils/formatMoneyAmount';
import './allStoresTable.css';

function AllStoresTable({storesArray, setSelectedStore}) {
  return (
    <div className="AllStoresTable">
        <TableContainer component={Paper}>
            <Table>
              <TableHead style={{backgroundColor: '#E4E6EB' }} >
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
