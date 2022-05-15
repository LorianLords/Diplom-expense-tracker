import { PeriodTypes } from "../types/period.types";

export const getPeriod = (period) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.getDate();

  if (period === PeriodTypes.WEEK) {
    const startDateTime = date.getTime() - 7 * 8.64e7;
    const startDate = new Date(startDateTime);
    const startDateMonth = startDate.getMonth() + 1;
    const startDateYear = startDate.getFullYear();
    const startDateDay = startDate.getDate();
    return {
      startDate: `${startDateYear}-${startDateMonth}-${startDateDay}`,
      endDate: `${year}-${month}-${day}`,
    };
  }
  if (period === PeriodTypes.LAST_MONTH) {
    return {
      startDate: `${year}-${month}-${1}`,
      endDate: `${year}-${month}-${day}`,
    };
  }
  if (period === PeriodTypes.MONTH) {
    const startDateTime = date.getTime() - 30 * 8.64e7;
    const startDate = new Date(startDateTime);
    const startDateMonth = startDate.getMonth() + 1;
    const startDateYear = startDate.getFullYear();
    const startDateDay = startDate.getDate();
    return {
      startDate: `${startDateYear}-${startDateMonth}-${startDateDay}`,
      endDate: `${year}-${month}-${day}`,
    };
  }
  if (period === PeriodTypes.ALL_TIME) {
    return { startDate: null, endDate: null };
  }
};
