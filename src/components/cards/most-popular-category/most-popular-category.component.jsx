import React, { memo, useContext, useMemo } from "react";
import { ExpenseTrackerContext } from "../../../shared/context/context";
import * as Styled from "../../../shared/styled/shared.styles";
import { CategoryType } from "../../../shared/types/category-type.types";
import { getIcon } from "../../../shared/helpers/get-icon.helper";
import { MediumCard } from "../../../shared/components/medium-card";

const MostPopularCategoryComponent = ({ title }) => {
  const { popularCategories, categoryIcons } = useContext(
    ExpenseTrackerContext
  );

  const popularCategory = useMemo(
    () => popularCategories[CategoryType.EXPENSES][0],
    [popularCategories]
  );

  const icon = useMemo(
    () => getIcon({ iconId: popularCategory.iconId, icons: categoryIcons }),
    [categoryIcons, popularCategory.iconId]
  );

  return (
    <MediumCard
      width={360}
      icon={icon}
      filter="none"
      color="#000"
      bgcolor="#eee"
    >
      <Styled.Flex sx={{ m: 1, gap: 2, flex: 1, height: "100%" }}>
        <Styled.Flex sx={{ justifyContent: "center", flex: 1, mt: 4 }}>
          <Styled.Currency>{popularCategory.name}</Styled.Currency>
          <Styled.CardSmallTitle>{title}</Styled.CardSmallTitle>
        </Styled.Flex>
      </Styled.Flex>
    </MediumCard>
  );
};

export const MostPopularCategory = memo(MostPopularCategoryComponent);
