export const deleteSelectedTransactions = ({ ids, transactions }) => {
  return transactions.filter((value) => !ids.includes(value.id));
};
