import { useEffect, useState } from 'react';
import { fetchAllStoresList } from './API/StoresApi';
import { Alert } from '@material-ui/lab';
import Header from './sharedComponents/Header';
import AllStoresTable from './components/AllStoresTable';
import StoreDetails from './components/StoreDetails';
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
      console.log(res.data)
      setStoresArray(res.data)
      setIsLoading(false);
    })
    .catch(err => {
      setError(err)
      setIsLoading(false);
    })
  }, [])

  return (
    <div className="App">
      <Header />

      { !isLoading && error && 
        <Alert severity="error">{error.message}</Alert>      
      }  

      { !isLoading && storesArray && 
        <AllStoresTable storesArray={storesArray} setSelectedStore={setSelectedStore}/>      
      }

      { selectedStore &&
        <StoreDetails selectedStore={selectedStore} />
      }
    </div>
  );
}

export default App;
