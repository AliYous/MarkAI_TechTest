import './storeDetails.css';
import { Paper } from '@material-ui/core';

function StoreDetails({selectedStore}) {
  return (
    <Paper className="StoreDetails">
      <h4 className="StoreDetails_name">{selectedStore.name}</h4>

      <div className="StoreDetails_numbers">
        <div className="StoreDetails_adSpend_div">
          <p>Yearly Google Ad Spend : {selectedStore.adSpend.google.year}</p>
          <p>Yearly Facebook Ad Spend : {selectedStore.adSpend.facebook.year}</p>
        </div>
        <div className="StoreDetails_adSpend_div">
          <p><b>Monthly profits: </b>{selectedStore.adSpend.google.year}</p>
          <p> ROAS: {selectedStore.totalRoas}</p>
        </div>
      </div>
     
      

    </Paper>
  )
}

export default StoreDetails
