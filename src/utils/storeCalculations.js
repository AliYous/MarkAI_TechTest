
 // Updates the storesArray state so that each store contains all the needed attributes
export const updateFetchedStores = (fetchedStores) => {
  const updatedStoresArray = []
  fetchedStores.map((store, i) => {
    store.isProfitable = isProfitable(store);
    store.monthlyProfits = getMonthlyProfits(store);
    store.totalYearlyAdSpend = getTotalYearlyAdSpend(store);
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