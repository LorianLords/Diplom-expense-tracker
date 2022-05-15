import React, { memo, useContext, useState } from "react";
import { InfoCard } from "../../../shared/components/info-card";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { ExpenseTrackerContext } from "../../../shared/context/context";
import { getIcon } from "../../../shared/helpers/get-icon.helper";
import { CategoryType } from "../../../shared/types/category-type.types";
import { categoryTypes } from "../../../shared/constants/category-types.constant";

const AddTransactionFormComponent = ({ title }) => {
  const { currentCategories, categoryIcons } = useContext(
    ExpenseTrackerContext
  );
  const [categoryType, setCategoryType] = useState(CategoryType.EXPENSES);
  const [categoryId, setCategoryId] = useState("");

  const handleChangeCategoryType = (e) => {
    setCategoryType(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategoryId(e.target.value);
  };
  const [value, setValue] = useState(new Date());

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <InfoCard>
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        {title}
        <TextField
          fullWidth
          label="Amount"
          placeholder="0.00$"
          variant="outlined"
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryType}
          label="Category Type"
          onChange={handleChangeCategoryType}
        >
          {categoryTypes.map((categoryType) => (
            <MenuItem value={categoryType} key={categoryType}>
              {categoryType}
            </MenuItem>
          ))}
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categoryId}
          label="Category"
          onChange={handleChangeCategory}
        >
          {currentCategories[categoryType].map(
            ({ name, iconId, id, color }) => (
              <MenuItem
                value={id}
                key={name}
                sx={{ bgcolor: color, display: "flex", gap: 1 }}
              >
                <Box sx={{ width: 20, height: 20 }}>
                  <img
                    src={getIcon({ iconId, icons: categoryIcons })}
                    alt="icon"
                  />
                </Box>

                {name}
              </MenuItem>
            )
          )}
        </Select>
        <TextField
          fullWidth
          label="Description"
          placeholder="Add a comment"
          variant="outlined"
          multiline
        />
        <DesktopDatePicker
          label="Date"
          inputFormat="yyyy-mm-dd"
          value={value}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button variant="outlined">Add</Button>
      </Box>
    </InfoCard>
  );
};

export const AddTransactionForm = memo(AddTransactionFormComponent);
