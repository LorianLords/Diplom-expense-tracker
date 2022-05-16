import { parseDate } from "./parse-date.helper";

export const getTableData = ({ transactions, categories, accounts }) => {
  return transactions.map((value, index) => {
    return {
      index: index + 1,
      id: value.id,
      amount: value.amount,
      date: parseDate(new Date(value.date)),
      comment: value.comment,
      categoryType: value.categoryType,
      categoryName: categories.find(
        (category) => category.id === value.categoryId
      )?.name,
      paymentAccountName: accounts.find(
        (account) => account.id === value.paymentAccountId
      )?.name,
    };
  });
};
