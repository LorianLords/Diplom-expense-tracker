import React, { memo } from "react";
import { MediumCard } from "../../../shared/components/medium-card";
import { Box } from "@mui/material";
import * as Styled from "../../../shared/styled/shared.styles";
import { parsePrice } from "../../../shared/helpers/parse-price.helper";

const CurrencyCardComponent = ({ total, title }) => {
  return (
    <MediumCard optionalStyles={{ background: "#4169E1" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          mb: 2,
        }}
      >
        <Styled.CardBigTitle>{title}</Styled.CardBigTitle>
        <Styled.Currency>{parsePrice(total)}</Styled.Currency>
      </Box>
    </MediumCard>
  );
};

export const CurrencyCard = memo(CurrencyCardComponent);
