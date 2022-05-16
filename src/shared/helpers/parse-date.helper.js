const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const parseDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${year} ${months[month]} ${day}`;
};

export const parseDateStandard = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${year} ${months[month]} ${day}`;
};
