import { useEffect, useState } from 'react';
import { fetchAllStoresList } from './API/StoresApi';
import { Alert } from '@material-ui/lab';
import { Box } from '@material-ui/core';
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
        { !isLoading && storesArray && 
          <AllStoresTable storesArray={storesArray} setSelectedStore={setSelectedStore}/>      
        }

        { selectedStore &&
          <StoreDetails selectedStore={selectedStore} />
        }
      </Box>
    </div>
  );
}

export default App;
