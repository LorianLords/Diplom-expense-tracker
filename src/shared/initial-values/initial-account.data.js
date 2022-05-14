import { createPaymentAccount } from "../helpers/create-payment-account.helper";

export const initialAccount = [
  createPaymentAccount({
    name: "Account 1",
    monthBudget: 1000,
    initialBalance: 7000,
  }),
  createPaymentAccount({
    name: "Account 2",
    monthBudget: 500,
    initialBalance: 3000,
  }),
];
