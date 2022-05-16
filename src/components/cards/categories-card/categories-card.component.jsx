import React, { memo, useContext, useMemo } from "react";
import { InfoCard } from "../../../shared/components/info-card";
import { ExpenseTrackerContext } from "../../../shared/context/context";
import * as Styled from "../../../shared/styled/shared.styles";
import { Box, Button } from "@mui/material";
import { InfoCardElementCategory } from "../../../shared/components/info-card-element-category";

const CategoriesCardComponent = ({ title, categoryType, handleOpen }) => {
  const { popularCategories } = useContext(ExpenseTrackerContext);

  const lastCategories = useMemo(
    () => popularCategories[categoryType],
    [popularCategories, categoryType]
  );

  return (
    <>
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
        <Button sx={{ mt: 2 }} variant="outlined" onClick={handleOpen}>
          Create category
        </Button>
      </InfoCard>
    </>
  );
};

export const CategoriesCard = memo(CategoriesCardComponent);
