export const getIcon = ({ iconId, icons }) => {
  return icons.find((value) => value.id === iconId)?.iconPath;
};
