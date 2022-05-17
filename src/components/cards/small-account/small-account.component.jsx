import React, { memo, useMemo } from "react";
import { Box } from "@mui/material";
import * as Styled from "../../../shared/styled/shared.styles";
import { parsePrice } from "../../../shared/helpers/parse-price.helper";
import { MediumCard } from "../../../shared/components/medium-card";
import { CardVariants } from "../../../shared/constants/card-variants.constant";

const SmallAccountComponent = ({
  cardVariant = CardVariants.BLUE,
  name,
  initialBalance,
  title,
}) => {
  const styles = useMemo(() => {
    if (cardVariant === CardVariants.LIGHT_BLUE) {
      return {
        background:
          "linear-gradient(202deg, rgba(26,211,165,1) 0%, rgba(52,123,222,1) 100%)",
      };
    }
    if (cardVariant === CardVariants.ORANGE) {
      return {
        background:
          "linear-gradient(212deg, rgba(248,188,107,1) 0%, rgba(239,109,94,1) 100%);",
      };
    }
    if (cardVariant === CardVariants.BLUE) {
      return {
        background: "#4169E1",
      };
    }
  }, [cardVariant]);
  return (
    <MediumCard optionalStyles={styles}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Styled.CardBigTitle>{name}</Styled.CardBigTitle>

          <Styled.Currency>{parsePrice(initialBalance)}</Styled.Currency>
          <Styled.CardSmallTitle>{title}</Styled.CardSmallTitle>
        </Box>
      </Box>
    </MediumCard>
  );
};

export const SmallAccount = memo(SmallAccountComponent);
