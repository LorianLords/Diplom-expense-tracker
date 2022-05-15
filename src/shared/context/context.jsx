import React, { createContext, useCallback, useMemo, useState } from "react";

import { initialTransactions } from "../initial-values/initial-transactions.data";
import { initialAccount } from "../initial-values/initial-account.data";
import { initialCategories } from "../initial-values/initial-categories.data";
import { initialCategoryIcons } from "../initial-values/initial-category-icons.data";
import { calculateIncome } from "../helpers/calculate-income.helper";
import { filterByAccount } from "../helpers/filter-by-account.helper";
import { calculateExpenses } from "../helpers/calculate-expenses.helper";
import { calculateTotal } from "../helpers/calculate-total.helper";
import { calculateMostPopularCategories } from "../helpers/calculate-most-popular-categories.helper";
import { sortByDate } from "../helpers/sort-by-date.helper";
import { SortValue } from "../types/sort-value.types";
import { calculateMostExpensiveTransactions } from "../helpers/calculate-most-expensive-transactions.helper";
import { getPeriod } from "../helpers/get-period.helper";
import { PeriodTypes } from "../types/period.types";
import { filterByDate } from "../helpers/filter-by-date.helper";
import { createTransaction } from "../helpers/create-transaction.helper";
import { createPaymentAccount } from "../helpers/create-payment-account.helper";
import { createCategory } from "../helpers/create-category.helper";
import { getCurrentCategories } from "../helpers/get-current-categories.helper";

export const ExpenseTrackerContext = createContext({
  currentCategories: [],
  mostExpensiveTransactions: [],
  mostExpensiveTransaction: 0,
  recentTransactions: [],
  popularCategories: [],
  total: 0,
  expenses: 0,
  income: 0,
  filteredTransactions: [],
  monthBudget: 0,
  monthExpenses: 0,
  handeChangePeriod: () => {},
  handleAddPaymentAccount: () => {},
  handleAddTransaction: () => {},
  handleChangePaymentAccount: () => {},
  handleAddCategories: () => {},
  categoryIcons: [],
  username: "",
  categories: [],
});

export const Provider = ({ children }) => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [period, setPeriod] = useState(PeriodTypes.WEEK);
  const [paymentAccounts, setPaymentAccounts] = useState(initialAccount);
  const username = "User";
  const [currentPaymentAccount, setCurrentPaymentAccount] = useState(
    initialAccount[0].id
  );
  const [categories, setCategories] = useState(initialCategories);

  const currentCategories = useMemo(
    () => getCurrentCategories(categories),
    [categories]
  );

  const categoryIcons = useMemo(() => {
    return [...initialCategoryIcons];
  }, []);

  const handleAddCategories = useCallback(
    ({ name, categoryType, iconId, color }) =>
      setCategories((prev) => [
        ...prev,
        createCategory({ name, categoryType, iconId, color }),
      ]),
    []
  );

  const handleChangePaymentAccount = useCallback(
    (paymentAccountId) => setCurrentPaymentAccount(paymentAccountId),
    []
  );

  const handleAddTransaction = useCallback(
    ({ amount = 0, date, categoryId, categoryType, comment = "" }) =>
      setTransactions((prev) => [
        ...prev,
        createTransaction({
          amount,
          date,
          categoryId,
          categoryType,
          comment,
          paymentAccountId: currentPaymentAccount,
        }),
      ]),
    [currentPaymentAccount]
  );

  const handleAddPaymentAccount = useCallback(
    ({ name, monthBudget, initialBalance }) =>
      setPaymentAccounts((prev) => [
        ...prev,
        createPaymentAccount({ name, monthBudget, initialBalance }),
      ]),
    []
  );

  const handeChangePeriod = useCallback(
    (periodType) => setPeriod(periodType),
    []
  );

  const { monthBudget, monthExpenses } = useMemo(() => {
    const paymentAccount = paymentAccounts.find(
      (value) => value.id === currentPaymentAccount
    );
    return {
      monthBudget: paymentAccount.monthBudget,
      monthExpenses: calculateExpenses(
        filterByAccount({
          transactions: filterByDate({
            array: transactions,
            ...getPeriod(PeriodTypes.LAST_MONTH),
          }),
          paymentAccountId: currentPaymentAccount,
        })
      ),
    };
  }, [currentPaymentAccount, paymentAccounts, transactions]);

  const filteredTransactions = useMemo(
    () =>
      filterByAccount({
        transactions: filterByDate({
          array: transactions,
          ...getPeriod(period),
        }),
        paymentAccountId: currentPaymentAccount,
      }),
    [currentPaymentAccount, period, transactions]
  );

  const income = useMemo(
    () => calculateIncome(filteredTransactions),
    [filteredTransactions]
  );

  const expenses = useMemo(
    () => calculateExpenses(filteredTransactions),
    [filteredTransactions]
  );

  const total = useMemo(
    () =>
      calculateTotal({
        transactions: filterByAccount({
          transactions,
          paymentAccountId: currentPaymentAccount,
        }),
        accounts: paymentAccounts,
        paymentAccountId: currentPaymentAccount,
      }),
    [currentPaymentAccount, paymentAccounts, transactions]
  );

  const popularCategories = useMemo(
    () =>
      calculateMostPopularCategories({
        transactions: filteredTransactions,
        categories,
        number: transactions.length,
      }),
    [categories, filteredTransactions, transactions.length]
  );

  const recentTransactions = useMemo(() => {
    return sortByDate({
      array: filteredTransactions,
      sortValue: SortValue.ASC,
    });
  }, [filteredTransactions]);

  const { mostExpensiveTransactions, mostExpensiveTransaction } =
    useMemo(() => {
      const mostExpensiveTransactions = calculateMostExpensiveTransactions({
        transactions: filteredTransactions,
        number: filteredTransactions.length,
      });
      const mostExpensiveTransaction =
        mostExpensiveTransactions?.[0]?.amount || 0;

      return {
        mostExpensiveTransaction,
        mostExpensiveTransactions,
      };
    }, [filteredTransactions]);

  return (
    <ExpenseTrackerContext.Provider
      value={{
        mostExpensiveTransactions,
        mostExpensiveTransaction,
        recentTransactions,
        popularCategories,
        total,
        expenses,
        income,
        filteredTransactions,
        monthBudget,
        monthExpenses,
        handeChangePeriod,
        handleAddPaymentAccount,
        handleAddTransaction,
        handleChangePaymentAccount,
        handleAddCategories,
        categoryIcons,
        username,
        currentCategories,
        categories,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
