import React, { memo, useContext, useMemo } from "react";
import { InfoCard } from "../../../shared/components/info-card";
import { ExpenseTrackerContext } from "../../../shared/context/context";
import * as Styled from "../../../shared/styled/shared.styles";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { ROUTES_NAMES } from "../../../shared/router/routing.data";
import { InfoCardElementCategory } from "../../../shared/components/info-card-element-category";
import { CategoryType } from "../../../shared/types/category-type.types";

const PopularCategoriesComponent = ({ title }) => {
  const { popularCategories } = useContext(ExpenseTrackerContext);

  const lastThreeCategories = useMemo(
    () => popularCategories[CategoryType.EXPENSES].slice(0, 3),
    [popularCategories]
  );

  const navigate = useNavigate();

  const handleNavigate = () => navigate(ROUTES_NAMES.CATEGORIES);

  return (
    <InfoCard width={400}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {title}
        <Button variant="outlined" onClick={handleNavigate}>
          See more
        </Button>
      </Box>

      <Styled.Flex sx={{ gap: 2, mt: 2 }}>
        {lastThreeCategories.map((category) => (
          <InfoCardElementCategory key={category.id} category={category} />
        ))}
      </Styled.Flex>
    </InfoCard>
  );
};

export const PopularCategories = memo(PopularCategoriesComponent);
