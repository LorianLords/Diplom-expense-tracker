import React, { memo, useContext } from "react";
import { ExpenseTrackerContext } from "../../../shared/context/context";
import * as Styled from "../../../shared/styled/shared.styles";
import { parsePrice } from "../../../shared/helpers/parse-price.helper";
import { InfoCard } from "../../../shared/components/info-card";
import { Box, LinearProgress } from "@mui/material";

const MonthBudgetComponent = ({
  title,
  subtitle,
  width = 400,
  variant = "standart",
}) => {
  const { monthBudget, monthExpenses } = useContext(ExpenseTrackerContext);

  const progress = (monthExpenses / monthBudget) * 100;

  const linearProgress = progress >= 100 ? 100 : progress;

  const color = linearProgress === 100 ? "error" : "primary";

  const Container =
    variant === "standart"
      ? ({ children }) => <InfoCard width={width}>{children}</InfoCard>
      : ({ children }) => <>{children}</>;

  return (
    <Container>
      <Styled.Flex sx={{ m: 1, gap: 2 }}>
        <Styled.Flex>
          <Styled.Currency>{parsePrice(monthBudget)}</Styled.Currency>
          <Styled.CardSmallTitle>{title}</Styled.CardSmallTitle>
        </Styled.Flex>
        <Styled.Flex sx={{ gap: 0.5 }}>
          <LinearProgress
            color={color}
            variant="determinate"
            value={linearProgress}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Styled.CardCaption>{subtitle}</Styled.CardCaption>
            <Styled.CardCurrencyCaption>
              {parsePrice(monthBudget, 0)} / {parsePrice(monthExpenses, 0)}
            </Styled.CardCurrencyCaption>
          </Box>
        </Styled.Flex>
      </Styled.Flex>
    </Container>
  );
};

export const MonthBudget = memo(MonthBudgetComponent);
