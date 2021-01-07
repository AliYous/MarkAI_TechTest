import { useEffect, useState } from 'react';
import { fetchAllStoresList } from './API/StoresApi';
import { Alert } from '@material-ui/lab';
import { Box, CircularProgress } from '@material-ui/core';
import Header from './sharedComponents/Header';
import AllStoresTable from './components/AllStoresTable';
import StoreDetails from './components/StoreDetails';
import { updateFetchedStores } from './utils/storeCalculations';

import './App.css';


function App() {
  const [storesArray, setStoresArray] = useState();
  const [selectedStore, setSelectedStore] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetchAllStoresList()
    .then(res => {
      setStoresArray(updateFetchedStores(res.data))
      setIsLoading(false);
    })
    .catch(err => {
      setError(err)
      console.log(err)
      setIsLoading(false);
    })
  }, [])

  return (
    <div className="App">
      <Header />
  
      { !isLoading && error && 
        <Alert severity="error">{error.message}</Alert>      
      } 

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
        className="App_pageBodyContainer"
      >
        <h2>Stores Overview</h2>

        { !isLoading && storesArray ? 
          <AllStoresTable storesArray={storesArray} setSelectedStore={setSelectedStore}/>    
          :
          <CircularProgress color="primary" style={{ marginTop: '1rem' }} />
        }

        <h2>Selected Store Details</h2>
        { selectedStore ?
          <StoreDetails selectedStore={selectedStore} />
          :
          <p>Select a store to see more data</p>
        }
      </Box>
    </div>
  );
}

export default App;
