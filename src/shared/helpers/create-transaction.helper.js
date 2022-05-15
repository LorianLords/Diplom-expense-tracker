import { v4 } from "uuid";

export const createTransaction = ({
  amount,
  date,
  categoryId,
  paymentAccountId,
  categoryType,
  comment,
}) => {
  if (
    typeof amount !== "number" ||
    typeof date !== "string" ||
    typeof categoryId !== "string" ||
    typeof categoryType !== "string" ||
    typeof paymentAccountId !== "string"
  )
    throw Error("createTransaction wrong params");
  return {
    id: v4(),
    amount,
    date,
    categoryId,
    paymentAccountId,
    categoryType,
    comment: comment || "",
  };
};
