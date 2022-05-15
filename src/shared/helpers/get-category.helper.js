export const getCategory = ({ categoryId, categories }) =>
  categories.find((value) => value.id === categoryId);
