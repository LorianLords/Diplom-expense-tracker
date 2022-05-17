import React, { useContext } from "react";
import { UICard } from "../../components/cards/ui-card";
import { CardVariants } from "../../shared/constants/card-variants.constant";
import { Box, Drawer } from "@mui/material";
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

export const Main = () => {
  const { income, expenses, total, username } = useContext(
    ExpenseTrackerContext
  );

  return (
    <Styled.Flex sx={{ gap: 3, mr: "450px", overflow: "auto" }}>
      <Styled.Flex
        sx={{ gap: 5, flexDirection: "row", mr: 4, alignItems: "center" }}
      >
        <UserGreetings username={username} />
      </Styled.Flex>
      <Box sx={{ overflow: "auto" }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <UICard
              width={400}
              icon={incomeIcon}
              cardVariant={CardVariants.LIGHT_BLUE}
              title="Income"
              total={income}
            />
            <UICard
              width={400}
              icon={outcomeIcon}
              cardVariant={CardVariants.ORANGE}
              title="Expenses"
              total={expenses}
            />
            <Box sx={{ mb: 2 }}>
              <PopularCategories title="Popular Categories" />
            </Box>
          </Box>
          <Box>
            <AddTransactionForm title="Add new Transaction" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ overflow: "auto" }}>
        <Drawer
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          variant="permanent"
          open
          anchor="right"
        >
          <Styled.Flex sx={{ gap: 3, p: 3 }}>
            <UICard
              width={400}
              cardVariant={CardVariants.BLUE}
              icon={balanceIcon}
              title="Total balance"
              total={total}
            />
            <MonthBudget
              variant="secondary"
              title="Month budget"
              subtitle="Monthly payment limit"
            />
            <RecentTransactions title="Recent transactions" />
          </Styled.Flex>
        </Drawer>
      </Box>
    </Styled.Flex>
  );
};
