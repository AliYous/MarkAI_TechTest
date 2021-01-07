import './storeDetails.css';
import { useEffect } from 'react';

function StoreDetails({selectedStore}) {
  return (
    <div>
       <h1>{selectedStore.adSpend.facebook.year}</h1>
    </div>
  )
}

export default StoreDetails
