import React, { memo, useContext, useMemo } from "react";
import { ExpenseTrackerContext } from "../../../shared/context/context";
import * as Styled from "../../../shared/styled/shared.styles";
import { parsePrice } from "../../../shared/helpers/parse-price.helper";
import { InfoCard } from "../../../shared/components/info-card";
import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { CardVariants } from "../../../shared/constants/card-variants.constant";
import { getAccount } from "../../../shared/helpers/get-account.helper";
import { SmallAccount } from "../small-account";

const AccountComponent = ({ openEdit, cardVariant = CardVariants.BLUE }) => {
  const {
    total,
    income,
    expenses,
    paymentAccounts,
    currentPaymentAccount,
    monthBudget,
    monthExpenses,
  } = useContext(ExpenseTrackerContext);

  const account = useMemo(
    () =>
      getAccount({
        accounts: paymentAccounts,
        currentAccount: currentPaymentAccount,
      }),
    [currentPaymentAccount, paymentAccounts]
  );

  const progress = (monthExpenses / monthBudget) * 100;

  const linearProgress = progress >= 100 ? 100 : progress;

  const color = linearProgress === 100 ? "error" : "primary";
  return (
    <InfoCard width={700}>
      <Styled.Flex sx={{ flexDirection: "row", gap: 2 }}>
        <Styled.Flex sx={{ m: 1, gap: 2, width: 400 }}>
          <Styled.Flex sx={{ mb: 2, borderRight: "2px solid #eee" }}>
            <SmallAccount
              name={account.name}
              cardVariant={cardVariant}
              initialBalance={account.monthBudget}
              title="Month Budget"
            />
          </Styled.Flex>
          <Styled.Flex sx={{ gap: 0.5 }}>
            <LinearProgress
              color={color}
              variant="determinate"
              value={linearProgress}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Styled.CardCaption>Month payment limit</Styled.CardCaption>
              <Styled.CardCurrencyCaption>
                {parsePrice(monthBudget, 0)} / {parsePrice(monthExpenses, 0)}
              </Styled.CardCurrencyCaption>
            </Box>
          </Styled.Flex>
        </Styled.Flex>
        <Styled.Flex sx={{ width: 220, gap: 2 }}>
          <Styled.Flex sx={{ alignItems: "flex-end" }}>
            <Styled.Flex sx={{ alignItems: "flex-end", color: "#2c86ef" }}>
              <Styled.Currency sx={{ lineHeight: 1 }}>
                {parsePrice(total)}
              </Styled.Currency>
              <Typography sx={{ fontWeight: 400, color: "#c0cdd7" }}>
                Current balance
              </Typography>
            </Styled.Flex>
          </Styled.Flex>
          <Styled.Flex sx={{ alignItems: "flex-end" }}>
            <Styled.Flex sx={{ alignItems: "flex-end", color: "#39b270" }}>
              <Styled.Currency sx={{ lineHeight: 1, fontSize: "28px" }}>
                {parsePrice(income)}
              </Styled.Currency>
              <Typography sx={{ fontWeight: 400, color: "#c0cdd7" }}>
                Income
              </Typography>
            </Styled.Flex>
          </Styled.Flex>
          <Styled.Flex sx={{ alignItems: "flex-end" }}>
            <Styled.Flex sx={{ alignItems: "flex-end", color: "#af1212" }}>
              <Styled.Currency sx={{ lineHeight: 1, fontSize: "28px" }}>
                {parsePrice(expenses)}
              </Styled.Currency>
              <Typography sx={{ fontWeight: 400, color: "#c0cdd7" }}>
                Expenses
              </Typography>
            </Styled.Flex>
          </Styled.Flex>
          <Box sx={{ alignSelf: "flex-end" }}>
            <Button variant="outlined" color="primary" onClick={openEdit}>
              Edit account
            </Button>
          </Box>
        </Styled.Flex>
      </Styled.Flex>
    </InfoCard>
  );
};

export const AccountCard = memo(AccountComponent);
