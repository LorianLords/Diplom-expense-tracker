export const getCurrentDate = (date) => {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};
