export const filterByDate = ({ array, startDate, endDate }) => {
  if (!startDate || !endDate) {
    return array;
  }

  const startDateTime = new Date(startDate).getTime();
  const endDateTime = new Date(endDate).getTime();

  return array.filter(({ date }) => {
    const dateTime = new Date(date).getTime();
    return dateTime >= startDateTime && dateTime <= endDateTime;
  });
};
