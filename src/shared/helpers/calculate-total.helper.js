import { CategoryType } from "../types/category-type.types";

export const calculateTotal = ({
  transactions,
  accounts,
  paymentAccountId,
}) => {
  let initialBalance;
  if (!paymentAccountId) {
    initialBalance = accounts.reduce((acc, curr) => {
      return acc + curr.initialBalance;
    }, 0);
  } else {
    initialBalance = accounts.find(
      ({ id }) => id === paymentAccountId
    ).initialBalance;
  }

  const transactionTotal = transactions.reduce((acc, curr) => {
    if (curr.categoryType === CategoryType.EXPENSES) {
      return acc - curr.amount;
    }
    return acc + curr.amount;
  }, 0);
  return initialBalance + transactionTotal;
};
