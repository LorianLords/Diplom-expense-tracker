import React, { memo, useContext, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { ExpenseTrackerContext } from "../../context/context";
import { getIcon } from "../../helpers/get-icon.helper";
import { parsePrice } from "../../helpers/parse-price.helper";

const InfoCardElementCategoryComponent = ({
  category: { name, amount, iconId, color },
  variant = "normal",
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
        padding: variant === "normal" ? "20px" : "10px",
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
            width: variant === "normal" ? 48 : 36,
            height: variant === "normal" ? 48 : 36,
            borderRadius: "50%",
            bgcolor: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: variant === "normal" ? 24 : 19,
              height: variant === "normal" ? 24 : 19,
            }}
            src={icon}
            alt="icon"
          />
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
