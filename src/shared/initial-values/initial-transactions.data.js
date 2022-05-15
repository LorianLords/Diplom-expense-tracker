import { createTransaction } from "../helpers/create-transaction.helper";
import { initialAccount as paymentAccounts } from "./initial-account.data";
import { initialCategories as categories } from "./initial-categories.data";
import { CategoryType } from "../types/category-type.types";

export const initialTransactions = [
  createTransaction({
    amount: 300,
    comment: "Comment1",
    categoryId: categories[0].id,
    paymentAccountId: paymentAccounts[0].id,
    categoryType: CategoryType.INCOME,
    date: "2022-05-13",
  }),
  createTransaction({
    amount: 400,
    comment: "Comment2",
    categoryId: categories[1].id,
    paymentAccountId: paymentAccounts[0].id,
    categoryType: CategoryType.INCOME,
    date: "2022-05-12",
  }),
  createTransaction({
    amount: 500,
    comment: "Comment2",
    categoryId: categories[2].id,
    paymentAccountId: paymentAccounts[0].id,
    categoryType: CategoryType.EXPENSES,
    date: "2022-05-11",
  }),
  createTransaction({
    amount: 500,
    comment: "Comment2",
    categoryId: categories[2].id,
    paymentAccountId: paymentAccounts[0].id,
    categoryType: CategoryType.EXPENSES,
    date: "2022-05-10",
  }),
  createTransaction({
    amount: 500,
    categoryId: categories[2].id,
    paymentAccountId: paymentAccounts[0].id,
    categoryType: CategoryType.EXPENSES,
    date: "2022-05-09",
  }),
  createTransaction({
    amount: 500,
    categoryId: categories[2].id,
    paymentAccountId: paymentAccounts[0].id,
    categoryType: CategoryType.EXPENSES,
    date: "2022-05-08",
  }),
  createTransaction({
    amount: 500,
    comment: "Comment 212",
    categoryId: categories[2].id,
    paymentAccountId: paymentAccounts[0].id,
    categoryType: CategoryType.EXPENSES,
    date: "2022-05-07",
  }),
  createTransaction({
    amount: 3200,
    comment: "Comment1",
    categoryId: categories[0].id,
    paymentAccountId: paymentAccounts[1].id,
    categoryType: CategoryType.INCOME,
    date: "2022-05-06",
  }),
  createTransaction({
    amount: 420,
    comment: "Comment2",
    categoryId: categories[1].id,
    paymentAccountId: paymentAccounts[1].id,
    categoryType: CategoryType.INCOME,
    date: "2022-05-05",
  }),
  createTransaction({
    amount: 120,
    comment: "Comment2",
    categoryId: categories[3].id,
    paymentAccountId: paymentAccounts[1].id,
    categoryType: CategoryType.EXPENSES,
    date: "2021-05-12",
  }),
  createTransaction({
    amount: 212,
    comment: "Comment2",
    categoryId: categories[4].id,
    paymentAccountId: paymentAccounts[1].id,
    categoryType: CategoryType.EXPENSES,
    date: "2022-04-12",
  }),
  createTransaction({
    amount: 32,
    categoryId: categories[5].id,
    paymentAccountId: paymentAccounts[1].id,
    categoryType: CategoryType.EXPENSES,
    date: "2022-05-12",
  }),
  createTransaction({
    amount: 500,
    categoryId: categories[6].id,
    paymentAccountId: paymentAccounts[1].id,
    categoryType: CategoryType.EXPENSES,
    date: "2022-05-12",
  }),
  createTransaction({
    amount: 500,
    comment: "Comment 212",
    categoryId: categories[7].id,
    paymentAccountId: paymentAccounts[1].id,
    categoryType: CategoryType.EXPENSES,
    date: "2022-05-12",
  }),
];