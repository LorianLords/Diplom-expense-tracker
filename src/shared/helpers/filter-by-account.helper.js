export const filterByAccount = ({ transactions, paymentAccountId }) => {
  if (!paymentAccountId) return transactions;
  return transactions.filter(
    (value) => value.paymentAccountId === paymentAccountId
  );
};
