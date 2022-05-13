import React, { memo, useState } from "react";
import { InfoCard } from "../../../shared/components/info-card";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import {
  categories,
  CategoriesTypes,
  categoriesTypes,
  CategoryValueTypes,
} from "../../../shared/constants/categories.constant";
import { DesktopDatePicker } from "@mui/x-date-pickers";

const AddTransactionFormComponent = ({ title }) => {
  const [categoryType, setCategoryType] = useState(CategoriesTypes.OUTCOME);
  const [category, setCategory] = useState(CategoryValueTypes.SHOPPING);

  const handleChange = (e) => {
    setCategoryType(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

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
          onChange={handleChange}
        >
          {categoriesTypes.map(({ categoryType, title }) => (
            <MenuItem value={categoryType} key={categoryType}>
              {title}
            </MenuItem>
          ))}
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChangeCategory}
        >
          {categories[categoryType].map(({ title, color, icon, type }) => (
            <MenuItem value={type} key={title}>
              {title}
            </MenuItem>
          ))}
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
          inputFormat="MM/dd/yyyy"
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
