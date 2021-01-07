// Formats dollar amounts with commas and currency.
// parameters : value (number), currency (string : "$", "€", ....)
export const formatMoneyAmount = (value, currency) => {
  const currencySymbol = currency ? currency : "$";
  const amount = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const concatAmount = currencySymbol + amount;
  return (concatAmount)
}