import buisinessIcon from "../../assets/icons/categories/income/buisiness.svg";
import salaryIcon from "../../assets/icons/categories/income/salary.svg";

import charityIcon from "../../assets/icons/categories/expenses/charity.svg";
import foodIcon from "../../assets/icons/categories/expenses/food.svg";
import gamesIcon from "../../assets/icons/categories/expenses/games.svg";
import homeIcon from "../../assets/icons/categories/expenses/home.svg";
import imacIcon from "../../assets/icons/categories/expenses/imac.svg";
import internetIcon from "../../assets/icons/categories/expenses/internet.svg";
import leisureIcon from "../../assets/icons/categories/expenses/leisure.svg";
import medicineIcon from "../../assets/icons/categories/expenses/medicine.svg";
import photoIcon from "../../assets/icons/categories/expenses/photo-camera.svg";
import shoppingIcon from "../../assets/icons/categories/expenses/shopping.svg";

import { createCategoryIcon } from "../helpers/create-category-icon.helper";
import { CategoryType } from "../types/category-type.types";

export const initialCategoryIcons = [
  createCategoryIcon({
    iconPath: buisinessIcon,
    categoryType: CategoryType.INCOME,
  }),
  createCategoryIcon({
    iconPath: salaryIcon,
    categoryType: CategoryType.INCOME,
  }),

  createCategoryIcon({
    iconPath: charityIcon,
    categoryType: CategoryType.EXPENSES,
  }),
  createCategoryIcon({
    iconPath: foodIcon,
    categoryType: CategoryType.EXPENSES,
  }),
  createCategoryIcon({
    iconPath: gamesIcon,
    categoryType: CategoryType.EXPENSES,
  }),
  createCategoryIcon({
    iconPath: homeIcon,
    categoryType: CategoryType.EXPENSES,
  }),
  createCategoryIcon({
    iconPath: imacIcon,
    categoryType: CategoryType.EXPENSES,
  }),
  createCategoryIcon({
    iconPath: internetIcon,
    categoryType: CategoryType.EXPENSES,
  }),
  createCategoryIcon({
    iconPath: leisureIcon,
    categoryType: CategoryType.EXPENSES,
  }),
  createCategoryIcon({
    iconPath: medicineIcon,
    categoryType: CategoryType.EXPENSES,
  }),
  createCategoryIcon({
    iconPath: photoIcon,
    categoryType: CategoryType.EXPENSES,
  }),
  createCategoryIcon({
    iconPath: shoppingIcon,
    categoryType: CategoryType.EXPENSES,
  }),
];
