export const editAccount = ({
  id,
  accounts,
  initialBalance,
  monthBudget,
  name,
}) => {
  console.log(
    accounts.map((value) => {
      if (value.id !== id) {
        return value;
      }
      return {
        ...value,
        initialBalance,
        monthBudget,
        name,
      };
    })
  );
  return accounts.map((value) => {
    if (value.id !== id) {
      return value;
    }
    return {
      ...value,
      initialBalance,
      monthBudget,
      name,
    };
  });
};
