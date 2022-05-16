import React, { memo, useContext, useMemo } from "react";
import { InfoCard } from "../../../shared/components/info-card";
import { ExpenseTrackerContext } from "../../../shared/context/context";
import * as Styled from "../../../shared/styled/shared.styles";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { ROUTES_NAMES } from "../../../shared/router/routing.data";
import { InfoCardElementCategory } from "../../../shared/components/info-card-element-category";
import { CategoryType } from "../../../shared/types/category-type.types";

const CategoriesCardComponent = ({ title, categoryType }) => {
  const { popularCategories } = useContext(ExpenseTrackerContext);

  const lastCategories = useMemo(
    () => popularCategories[categoryType],
    [popularCategories, categoryType]
  );

  const navigate = useNavigate();

  const handleNavigate = () => navigate(ROUTES_NAMES.CATEGORIES);

  return (
    <InfoCard width="100%">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {title}
      </Box>

      <Styled.Flex sx={{ gap: 2, mt: 2, maxHeight: 250, overflow: "auto" }}>
        {lastCategories.map((category) => (
          <InfoCardElementCategory
            key={category.id}
            category={category}
            variant="small"
          />
        ))}
      </Styled.Flex>
      <Button sx={{ mt: 2 }} variant="outlined">
        Create category
      </Button>
    </InfoCard>
  );
};

export const CategoriesCard = memo(CategoriesCardComponent);
