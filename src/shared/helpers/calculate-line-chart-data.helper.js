import { PeriodTypes } from "../types/period.types";
import { parseDate } from "./parse-date.helper";

const getLabel = (date, number = 0) => {
  const startDateTime = date.getTime() - number * 8.64e7;
  const startDate = new Date(startDateTime);
  const startDateMonth = startDate.getMonth() + 1;
  const startDateYear = startDate.getFullYear();
  const startDateDay = startDate.getDate();

  const dateMonth = startDateMonth < 10 ? `0${startDateMonth}` : startDateMonth;
  const dateDay = startDateDay < 10 ? `0${startDateDay}` : startDateDay;
  return `${startDateYear}-${dateMonth}-${dateDay}`;
};

export const calculateLineChartData = ({ transactions, period }) => {
  const today = new Date();
  const dateLabels = [];
  const days = period === PeriodTypes.WEEK ? 7 : 30;
  for (let i = days - 1; i >= 0; i--) {
    dateLabels.push(getLabel(today, i));
  }
  const values = transactions.reduce((acc, curr) => {
    const correctDate = getLabel(new Date(curr.date));
    if (acc[correctDate]) {
      return {
        ...acc,
        [correctDate]: acc[correctDate] + curr.amount,
      };
    }
    return {
      ...acc,
      [correctDate]: curr.amount,
    };
  }, {});

  const labelValues = dateLabels.map((date) => {
    return values?.[date] || 0;
  });
  return {
    values: labelValues,
    labels: dateLabels.map((date) => parseDate(new Date(date))),
  };
};
