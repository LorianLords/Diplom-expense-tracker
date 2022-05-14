import { CategoryType } from "../types/category-type.types";

export const calculateMostPopularCategories = ({
  transactions,
  categories,
  number = 3,
}) => {
  const store = transactions.reduce((acc, curr) => {
    if (curr.categoryType === CategoryType.INCOME) {
      return acc;
    }
    if (!acc[curr.categoryId]) {
      return {
        ...acc,
        [curr.categoryId]: curr.amount,
      };
    }
    return {
      ...acc,
      [curr.categoryId]: acc[curr.categoryId] + curr.amount,
    };
  }, {});

  return Object.keys(store)
    .reduce((acc, categoryId) => {
      return [
        ...acc,
        {
          amount: store[categoryId],
          categoryId,
        },
      ];
    }, [])
    .sort((leftValue, rightValue) => {
      if (leftValue.amount < rightValue.amount) {
        return 1;
      }
      if (leftValue.amount > rightValue.amount) {
        return -1;
      }
      return 0;
    })
    .slice(0, number)
    .reduce((acc, curr) => {
      return [
        ...acc,
        {
          ...categories.find((item) => item.id === curr.categoryId),
          amount: curr.amount,
        },
      ];
    }, []);
};
