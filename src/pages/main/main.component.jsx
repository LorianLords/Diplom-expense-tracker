import React, { useContext } from "react";
import { UICard } from "../../components/cards/ui-card";
import { CardVariants } from "../../shared/constants/card-variants.constant";
import { Box } from "@mui/material";
import incomeIcon from "../../assets/icons/cards/income.svg";
import outcomeIcon from "../../assets/icons/cards/outcome.svg";
import balanceIcon from "../../assets/icons/cards/income-icon.svg";
import { AddTransactionForm } from "../../components/forms/add-transaction-form/add-transaction-form.component";
import { ExpenseTrackerContext } from "../../shared/context/context";

export const Main = () => {
  const { income, expenses, total } = useContext(ExpenseTrackerContext);

  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <UICard
          icon={incomeIcon}
          cardVariant={CardVariants.LIGHT_BLUE}
          title="Income"
          total={income}
        />
        <UICard
          icon={outcomeIcon}
          cardVariant={CardVariants.ORANGE}
          title="Expenses"
          total={expenses}
        />
        <UICard
          cardVariant={CardVariants.BLUE}
          icon={balanceIcon}
          title="Total balance"
          total={total}
        />
      </Box>
      <Box>
        <AddTransactionForm title="Add new Transaction" />
      </Box>
      <Box></Box>
    </Box>
  );
};
