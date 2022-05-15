import { SortValue } from "../types/sort-value.types";

export const sortByDate = ({ array, sortValue }) => {
  return array.sort((leftValue, rightValue) => {
    const leftValueDate = new Date(leftValue.date).getTime();
    const rightValueDate = new Date(rightValue.date).getTime();

    if (leftValueDate < rightValueDate) {
      return sortValue === SortValue.ASC ? 1 : -1;
    }
    if (leftValueDate > rightValueDate) {
      return sortValue === SortValue.ASC ? -1 : 1;
    }
    return 0;
  });
};
