import React, { useContext, useMemo, useState } from "react";
import { Box, MenuItem, Select } from "@mui/material";
import { categoryTypes } from "../../shared/constants/category-types.constant";

import { CategoryType } from "../../shared/types/category-type.types";
import { Pie } from "react-chartjs-2";
import { chartColors } from "./categories.data";
import { ExpenseTrackerContext } from "../../shared/context/context";
import { ChangePeriod } from "../../components/forms/change-period";
import { CategoriesCard } from "../../components/cards/categories-card";
export { chartColors } from "./categories.data";

const options = {
  legend: {
    display: false,
    position: "right",
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

export const Categories = () => {
  const { popularCategories } = useContext(ExpenseTrackerContext);
  const [categoryType, setCategoryType] = useState(CategoryType.EXPENSES);
  const handleChangeCategoryType = (e) => {
    setCategoryType(e.target.value);
  };

  const data = useMemo(() => {
    const categories = popularCategories[categoryType];
    return {
      maintainAspectRatio: false,
      responsive: false,
      labels: categories.map((value) => value.name),
      datasets: [
        {
          data: categories.map((value) => value.amount),
          backgroundColor: chartColors,
          hoverBackgroundColor: chartColors,
        },
      ],
    };
  }, [categoryType, popularCategories]);

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: 150 }}>
          <Select
            variant="standard"
            id="demo-simple-select1"
            value={categoryType}
            onChange={handleChangeCategoryType}
          >
            {categoryTypes.map((categoryType) => (
              <MenuItem value={categoryType} key={categoryType}>
                {categoryType}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <ChangePeriod />
      </Box>

      <Box sx={{ position: "relative", my: 2 }}>
        <Pie data={data} options={options} width={500} />
      </Box>
      <Box>
        <CategoriesCard
          title="Categories"
          categoryType={categoryType}
        ></CategoriesCard>
      </Box>
    </Box>
  );
};
