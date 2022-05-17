export const getAccount = ({ accounts, currentAccount }) => {
  return accounts.find((value) => value.id === currentAccount);
};
