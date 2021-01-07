import './storeDetails.css';
import { Paper, Typography, Tooltip} from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function StoreDetails({selectedStore}) {
  return (
    <Paper className="StoreDetails">
      <h4 className="StoreDetails_name">{selectedStore.name}</h4>

      <div className="StoreDetails_numbers">
        <div className="StoreDetails_adSpend_div">
          <p>Yearly Google Ad Spend : ${selectedStore.adSpend.google.year}</p>
          <p>Yearly Facebook Ad Spend : ${selectedStore.adSpend.facebook.year}</p>
        </div>
        <div className="StoreDetails_adSpend_div">
          <p><b>Monthly profits: </b>
            <span className={`${selectedStore.isProfitable ? "textColor_green" : "textColor_red"}`}>
              ${selectedStore.monthlyProfits}
            </span></p>

          <Tooltip 
            title={
              <>
                <Typography>ROAS = Return On Ad Spend</Typography>
                <em>{"It is the multiplier you get on each dollar you spend on ads. if you have a 6 ROAS, you're getting $6 back for each dollar spent on ads"}</em>
              </>
            } 
          >
            <div className="StoreDetails_ROAS_div">
              <p> Total ROAS (year): {selectedStore.totalRoas}</p>
              <HelpOutlineIcon fontSize="small" />
            </div>
          </Tooltip>
        </div>
      </div>
      

    </Paper>
  )
}

export default StoreDetails
