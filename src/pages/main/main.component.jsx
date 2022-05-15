import React, { useContext } from "react";
import { UICard } from "../../components/cards/ui-card";
import { CardVariants } from "../../shared/constants/card-variants.constant";
import { Box, Button } from "@mui/material";
import incomeIcon from "../../assets/icons/cards/income.svg";
import outcomeIcon from "../../assets/icons/cards/outcome.svg";
import balanceIcon from "../../assets/icons/cards/income-icon.svg";
import { AddTransactionForm } from "../../components/forms/add-transaction-form/add-transaction-form.component";
import { ExpenseTrackerContext } from "../../shared/context/context";
import { MonthBudget } from "../../components/cards/month-budget";
import { RecentTransactions } from "../../components/cards/recent-transactions";
import * as Styled from "../../shared/styled/shared.styles";
import { PopularCategories } from "../../components/cards/popular-categories";
import { UserGreetings } from "../../components/user-greetings";
import { ChangePeriod } from "../../components/forms/change-period";

export const Main = () => {
  const { income, expenses, total, username } = useContext(
    ExpenseTrackerContext
  );

  return (
    <Styled.Flex sx={{ gap: 3 }}>
      <Styled.Flex sx={{ gap: 5, flexDirection: "row" }}>
        <UserGreetings username={username} />
        <Box sx={{ width: 200 }}>
          <ChangePeriod />
        </Box>
      </Styled.Flex>
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
        <Styled.Flex sx={{ gap: 3 }}>
          <MonthBudget title="Month budget" subtitle="Monthly payment limit" />
          <RecentTransactions title="Recent transactions" />
          <PopularCategories title="Popular Categories" />
        </Styled.Flex>
      </Box>
    </Styled.Flex>
  );
};
