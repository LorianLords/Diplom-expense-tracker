import { v4 } from "uuid";

export const createCategoryIcon = ({ iconPath, categoryType }) => {
  if (typeof iconPath !== "string" || typeof categoryType !== "string")
    throw Error("createCategoryIcon wrong params");

  return {
    id: v4(),
    iconPath,
    categoryType,
  };
};
