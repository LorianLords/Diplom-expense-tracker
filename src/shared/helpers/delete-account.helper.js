export const deleteAccount = ({ id, accounts }) => {
  return accounts.filter((value) => id !== value.id);
};
