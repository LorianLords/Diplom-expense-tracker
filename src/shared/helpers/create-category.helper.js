import { v4 } from "uuid";

export const createCategory = ({
  name,
  categoryType,
  iconId,
  color = "#eee",
}) => {
  if (
    typeof name !== "string" ||
    typeof categoryType !== "string" ||
    typeof iconId !== "string" ||
    typeof color !== "string"
  )
    throw Error("createCategory wrong params");
  return {
    id: v4(),
    name,
    categoryType,
    iconId,
    color,
  };
};
