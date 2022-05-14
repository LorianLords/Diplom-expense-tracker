import { CategoryType } from "../types/category-type.types";

export const calculateMostExpensiveTransactions = ({
  transactions,
  number = 3,
}) => {
  return transactions
    .filter(({ categoryType }) => categoryType === CategoryType.EXPENSES)
    .sort((leftValue, rightValue) => {
      if (leftValue.amount < rightValue.amount) {
        return 1;
      }
      if (leftValue.amount > rightValue.amount) {
        return -1;
      }
      return 0;
    })
    .slice(0, number);
};
