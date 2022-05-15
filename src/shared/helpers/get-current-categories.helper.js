import { CategoryType } from "../types/category-type.types";

export const getCurrentCategories = (categories) => {
  return {
    [CategoryType.INCOME]: categories.filter(
      (value) => value.categoryType === CategoryType.INCOME
    ),
    [CategoryType.EXPENSES]: categories.filter(
      (value) => value.categoryType === CategoryType.EXPENSES
    ),
  };
};
