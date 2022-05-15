import React, { memo, useContext, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { ExpenseTrackerContext } from "../../context/context";
import { getIcon } from "../../helpers/get-icon.helper";
import { parsePrice } from "../../helpers/parse-price.helper";

const InfoCardElementCategoryComponent = ({
  category: { name, amount, iconId, color },
}) => {
  const { categoryIcons } = useContext(ExpenseTrackerContext);
  const icon = useMemo(
    () => getIcon({ iconId, icons: categoryIcons }),
    [categoryIcons, iconId]
  );

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
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>
          {parsePrice(amount)}
        </Typography>
      </Box>
    </Box>
  );
};

export const InfoCardElementCategory = memo(InfoCardElementCategoryComponent);
