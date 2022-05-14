import { createCategory } from "../helpers/create-category.helper";
import { CategoryType } from "../types/category-type.types";
import { expenseColors, incomeColors } from "../constants/categories.constant";
import { initialCategoryIcons as categoryIcons } from "./initial-category-icons.data";

export const initialCategories = [
  createCategory({
    name: "Business",
    color: incomeColors[0],
    categoryType: CategoryType.INCOME,
    iconId: categoryIcons[0].id,
  }),
  createCategory({
    name: "Salary",
    color: incomeColors[1],
    categoryType: CategoryType.INCOME,
    iconId: categoryIcons[1].id,
  }),

  createCategory({
    name: "Charity",
    color: expenseColors[0],
    categoryType: CategoryType.EXPENSES,
    iconId: categoryIcons[2].id,
  }),
  createCategory({
    name: "Food",
    color: expenseColors[1],
    categoryType: CategoryType.EXPENSES,
    iconId: categoryIcons[3].id,
  }),
  createCategory({
    name: "Games",
    color: expenseColors[2],
    categoryType: CategoryType.EXPENSES,
    iconId: categoryIcons[4].id,
  }),
  createCategory({
    name: "Home",
    color: expenseColors[3],
    categoryType: CategoryType.EXPENSES,
    iconId: categoryIcons[5].id,
  }),
  createCategory({
    name: "Electronic",
    color: expenseColors[4],
    categoryType: CategoryType.EXPENSES,
    iconId: categoryIcons[6].id,
  }),
  createCategory({
    name: "Internet",
    color: expenseColors[5],
    categoryType: CategoryType.EXPENSES,
    iconId: categoryIcons[7].id,
  }),
  createCategory({
    name: "Leisure",
    color: expenseColors[6],
    categoryType: CategoryType.EXPENSES,
    iconId: categoryIcons[8].id,
  }),
  createCategory({
    name: "Medicine",
    color: expenseColors[7],
    categoryType: CategoryType.EXPENSES,
    iconId: categoryIcons[9].id,
  }),
  createCategory({
    name: "Photo",
    color: expenseColors[8],
    categoryType: CategoryType.EXPENSES,
    iconId: categoryIcons[10].id,
  }),
  createCategory({
    name: "Shopping",
    color: expenseColors[9],
    categoryType: CategoryType.EXPENSES,
    iconId: categoryIcons[11].id,
  }),
];
