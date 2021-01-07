
 // Updates the storesArray state so that each store contains all the needed attributes
export const updateFetchedStores = (fetchedStores) => {
  const updatedStoresArray = []
  fetchedStores.map((store) => {
    store.isProfitable = isProfitable(store);
    store.monthlyProfits = getMonthlyProfits(store);
    store.totalYearlyAdSpend = getTotalYearlyAdSpend(store);
    store.totalRoas = getTotalROAS(store);
    console.log(store.totalRoas)
    updatedStoresArray.push(store);
  })
  return (updatedStoresArray);
}

const getTotalYearlyAdSpend = (store) => {
  return (store.adSpend.facebook.year + store.adSpend.google.year);
};

const isProfitable = (store) => {
  const totalYearlyAdSpend = getTotalYearlyAdSpend(store);
  return ((store.sales.year - totalYearlyAdSpend) > 0 ? true : false);
};

const getMonthlyProfits = (store) => {
  const totalYearlyAdSpend = getTotalYearlyAdSpend(store);
  const yearlyProfits = store.sales.year - totalYearlyAdSpend;
  return (yearlyProfits / 12);
};


const getTotalROAS = (store) => {
  const totalYearlyAdSpend = getTotalYearlyAdSpend(store);
  return ((store.sales.year/totalYearlyAdSpend).toFixed(2))
};