import React, { memo, useContext } from "react";
import { ExpenseTrackerContext } from "../../../shared/context/context";
import * as Styled from "../../../shared/styled/shared.styles";
import { parsePrice } from "../../../shared/helpers/parse-price.helper";
import { InfoCard } from "../../../shared/components/info-card";

const MostExpensiveTransactionComponent = ({ title, subtitle }) => {
  const { mostExpensiveTransaction } = useContext(ExpenseTrackerContext);

  return (
    <InfoCard width={360}>
      <Styled.Flex sx={{ m: 1, gap: 2, flex: 1, height: "100%" }}>
        <Styled.Flex sx={{ justifyContent: "center", flex: 1, mb: 3 }}>
          <Styled.Currency>
            {parsePrice(mostExpensiveTransaction)}
          </Styled.Currency>
          <Styled.CardSmallTitle>{title}</Styled.CardSmallTitle>
        </Styled.Flex>
      </Styled.Flex>
    </InfoCard>
  );
};

export const MostExpensiveTransaction = memo(MostExpensiveTransactionComponent);
