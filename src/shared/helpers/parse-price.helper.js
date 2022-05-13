export const parsePrice = (price = 0, maximumFractionDigits = 2) =>
  price.toLocaleString("en-En", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits,
  });
