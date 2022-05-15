import React, { memo, useContext, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { ExpenseTrackerContext } from "../../context/context";
import { getCategory } from "../../helpers/get-category.helper";
import { getIcon } from "../../helpers/get-icon.helper";
import { parseDate } from "../../helpers/parse-date.helper";
import { parsePrice } from "../../helpers/parse-price.helper";
import { CategoryType } from "../../types/category-type.types";

const InfoCardElementComponent = ({
  transaction: { categoryId, amount, categoryType, date },
}) => {
  const { categories, categoryIcons } = useContext(ExpenseTrackerContext);

  const { iconId, color, name } = useMemo(
    () => getCategory({ categories, categoryId }),
    [categories, categoryId]
  );

  const icon = useMemo(
    () => getIcon({ iconId, icons: categoryIcons }),
    [categoryIcons, iconId]
  );

  const symbol = categoryType === CategoryType.EXPENSES ? "-" : "+";

  return (
    <Box
      sx={{
        bgcolor: "#E4E4E4",
        padding: "20px",
        width: "100%",
        borderRadius: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            bgcolor: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ width: 24, height: 24 }} src={icon} alt="icon" />
        </Box>
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>{name}</Typography>
          <Typography sx={{ fontSize: 14 }}>
            {parseDate(new Date(date))}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>
          {symbol}
          {parsePrice(amount)}
        </Typography>
      </Box>
    </Box>
  );
};

export const InfoCardElement = memo(InfoCardElementComponent);
