const formattedPrice = new Intl.NumberFormat("it-IT", {
  currency: "EUR",
  style: "currency",
  maximumFractionDigits: 2,
});

export default formattedPrice;
