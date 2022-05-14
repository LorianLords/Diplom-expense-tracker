import { v4 } from "uuid";

export const createPaymentAccount = ({ name, monthBudget, initialBalance }) => {
  if (
    typeof name !== "string" ||
    typeof monthBudget !== "number" ||
    typeof initialBalance !== "number"
  )
    throw Error("createPaymentAccount wrong params");
  return {
    name,
    id: v4(),
    monthBudget,
    initialBalance,
  };
};
