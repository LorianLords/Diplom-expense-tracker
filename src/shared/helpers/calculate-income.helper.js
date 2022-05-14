import { CategoryType } from "../types/category-type.types";

export const calculateIncome = (transactions) => {
  return transactions.reduce((acc, curr) => {
    if (curr.categoryType === CategoryType.INCOME) {
      return acc + curr.amount;
    }
    return acc;
  }, 0);
};
