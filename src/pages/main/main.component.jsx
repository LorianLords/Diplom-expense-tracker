import React from "react";
import { UICard } from "../../components/cards/ui-card";
import { CardVariants } from "../../shared/constants/card-variants.constant";
import { Box } from "@mui/material";
import incomeIcon from "../../assets/icons/cards/income.svg";
import outcomeIcon from "../../assets/icons/cards/outcome.svg";
import balanceIcon from "../../assets/icons/cards/income-icon.svg";

export const Main = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <UICard
          icon={incomeIcon}
          cardVariant={CardVariants.LIGHT_BLUE}
          title="Income"
          total={45090.99}
        />
        <UICard
          icon={outcomeIcon}
          cardVariant={CardVariants.ORANGE}
          title="Expenses"
          total={45090.99}
        />
        <UICard
          cardVariant={CardVariants.BLUE}
          icon={balanceIcon}
          title="Total balance"
          total={45090.99}
        />
      </Box>
    </Box>
  );
};
