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

const incomeColors = [
  "#123123",
  "#154731",
  "#165f40",
  "#16784f",
  "#14915f",
  "#10ac6e",
  "#0bc77e",
  "#04e38d",
  "#00ff9d",
];
const expenseColors = [
  "#b50d12",
  "#bf2f1f",
  "#c9452c",
  "#d3583a",
  "#dc6a48",
  "#e57c58",
  "#ee8d68",
  "#f79d79",
  "#ffae8a",
  "#cc474b",
  "#f55b5f",
];

export const CategoriesTypes = {
  INCOME: "INCOME",
  OUTCOME: "OUTCOME",
};

export const CategoriesValues = {
  [CategoriesTypes.OUTCOME]: {
    categoryType: CategoriesTypes.OUTCOME,
    title: "Expenses",
  },
  [CategoriesTypes.INCOME]: {
    categoryType: CategoriesTypes.INCOME,
    title: "Income",
  },
};

export const categoriesTypes = [
  CategoriesValues[CategoriesTypes.OUTCOME],
  CategoriesValues[CategoriesTypes.INCOME],
];

export const CategoryValueTypes = {
  CHARITY: "CHARITY",
  FOOD: "FOOD",
  GAMES: "GAMES",
  HOME: "HOME",
  ELECTRONICS: "ELECTRONICS",
  INTERNET: "INTERNET",
  LEISURE: "LEISURE",
  MEDICINE: "MEDICINE",
  PHOTO: "PHOTO",
  SHOPPING: "SHOPPING",
  BUSINESS: "BUSINESS",
  INVESTMENTS: "INVESTMENTS",
};

export const CategoryValues = {
  [CategoryValueTypes.CHARITY]: {
    type: CategoryValueTypes.CHARITY,
    title: "Charity",
    amount: 0,
    color: expenseColors[0],
    icon: charityIcon,
  },
  [CategoryValueTypes.FOOD]: {
    type: CategoryValueTypes.FOOD,
    title: "Food",
    amount: 0,
    color: expenseColors[1],
    icon: foodIcon,
  },
  [CategoryValueTypes.GAMES]: {
    type: CategoryValueTypes.GAMES,
    title: "Games",
    amount: 0,
    color: expenseColors[2],
    icon: gamesIcon,
  },
  [CategoryValueTypes.HOME]: {
    type: CategoryValueTypes.HOME,
    title: "Home",
    amount: 0,
    color: expenseColors[3],
    icon: homeIcon,
  },
  [CategoryValueTypes.ELECTRONICS]: {
    type: CategoryValueTypes.ELECTRONICS,
    title: "Electronic",
    amount: 0,
    color: expenseColors[4],
    icon: imacIcon,
  },
  [CategoryValueTypes.INTERNET]: {
    type: CategoryValueTypes.INTERNET,
    title: "Internet",
    amount: 0,
    color: expenseColors[5],
    icon: internetIcon,
  },
  [CategoryValueTypes.LEISURE]: {
    type: CategoryValueTypes.LEISURE,
    title: "Leisure",
    amount: 0,
    color: expenseColors[6],
    icon: leisureIcon,
  },
  [CategoryValueTypes.MEDICINE]: {
    type: CategoryValueTypes.MEDICINE,
    title: "Medicine",
    amount: 0,
    color: expenseColors[7],
    icon: medicineIcon,
  },
  [CategoryValueTypes.PHOTO]: {
    type: CategoryValueTypes.PHOTO,
    title: "Photo",
    amount: 0,
    color: expenseColors[8],
    icon: photoIcon,
  },
  [CategoryValueTypes.SHOPPING]: {
    type: CategoryValueTypes.SHOPPING,
    title: "Shopping",
    amount: 0,
    color: expenseColors[9],
    icon: shoppingIcon,
  },
  [CategoryValueTypes.BUSINESS]: {
    type: CategoryValueTypes.BUSINESS,
    title: "Business",
    amount: 0,
    color: incomeColors[0],
    icon: buisinessIcon,
  },
  [CategoryValueTypes.INVESTMENTS]: {
    type: CategoryValueTypes.INVESTMENTS,
    title: "Investments",
    amount: 0,
    color: incomeColors[1],
    icon: salaryIcon,
  },
};

export const expenseCategories = [
  CategoryValues[CategoryValueTypes.CHARITY],
  CategoryValues[CategoryValueTypes.FOOD],
  CategoryValues[CategoryValueTypes.GAMES],
  CategoryValues[CategoryValueTypes.HOME],
  CategoryValues[CategoryValueTypes.ELECTRONICS],
  CategoryValues[CategoryValueTypes.INTERNET],
  CategoryValues[CategoryValueTypes.LEISURE],
  CategoryValues[CategoryValueTypes.MEDICINE],
  CategoryValues[CategoryValueTypes.PHOTO],
  CategoryValues[CategoryValueTypes.SHOPPING],
];

export const incomeCategories = [
  CategoryValues[CategoryValueTypes.BUSINESS],
  CategoryValues[CategoryValueTypes.INVESTMENTS],
];

export const categories = {
  [CategoriesTypes.INCOME]: expenseCategories,
  [CategoriesTypes.OUTCOME]: incomeCategories,
};

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0));
  expenseCategories.forEach((c) => (c.amount = 0));
};
