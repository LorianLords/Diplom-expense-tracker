import { CategoryType } from "../types/category-type.types";

export const calculateExpenses = (transactions) => {
  return transactions.reduce((acc, curr) => {
    if (curr.categoryType === CategoryType.EXPENSES) {
      return acc + curr.amount;
    }
    return acc;
  }, 0);
};
