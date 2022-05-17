import React, { memo, useMemo } from "react";
import { Box } from "@mui/material";
import { CardVariants } from "../../../shared/constants/card-variants.constant";
import { parsePrice } from "../../../shared/helpers/parse-price.helper";
import { MediumCard } from "../../../shared/components/medium-card";
import * as Styled from "../../../shared/styled/shared.styles";

const UICardComponent = ({ cardVariant, title, icon, total, width }) => {
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
    <MediumCard width={width} optionalStyles={styles} icon={icon}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <Box
          sx={{
            my: 5,
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Styled.Currency>{parsePrice(total)}</Styled.Currency>
          <Styled.CardMediumTitle>{title}</Styled.CardMediumTitle>
        </Box>
      </Box>
    </MediumCard>
  );
};

export const UICard = memo(UICardComponent);
