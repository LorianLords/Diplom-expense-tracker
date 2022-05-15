import React, { memo, useContext, useMemo } from "react";
import { InfoCard } from "../../../shared/components/info-card";
import { ExpenseTrackerContext } from "../../../shared/context/context";
import * as Styled from "../../../shared/styled/shared.styles";
import { InfoCardElement } from "../../../shared/components/info-card-element";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { ROUTES_NAMES } from "../../../shared/router/routing.data";

const RecentTransactionsComponent = ({ title }) => {
  const { recentTransactions } = useContext(ExpenseTrackerContext);

  const lastFourTransaction = useMemo(
    () => recentTransactions.slice(0, 4),
    [recentTransactions]
  );

  const navigate = useNavigate();

  const handleNavigate = () => navigate(ROUTES_NAMES.REPORT);

  return (
    <InfoCard width={400}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {title}
        <Button variant="outlined" onClick={handleNavigate}>
          See more
        </Button>
      </Box>

      <Styled.Flex sx={{ gap: 2, mt: 2 }}>
        {lastFourTransaction.map((transaction) => (
          <InfoCardElement key={transaction.id} transaction={transaction} />
        ))}
      </Styled.Flex>
    </InfoCard>
  );
};

export const RecentTransactions = memo(RecentTransactionsComponent);
