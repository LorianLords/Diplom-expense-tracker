import React, { memo, useContext, useState } from "react";
import { InfoCard } from "../../../shared/components/info-card";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { ExpenseTrackerContext } from "../../../shared/context/context";
import { getIcon } from "../../../shared/helpers/get-icon.helper";
import { CategoryType } from "../../../shared/types/category-type.types";
import { categoryTypes } from "../../../shared/constants/category-types.constant";
import { FormContainer } from "../../form-container";
import { getCurrentDate } from "../../../shared/helpers/get-current-date.helper";

const AddTransactionFormComponent = ({ title }) => {
  const { currentCategories, categoryIcons, handleAddTransaction } = useContext(
    ExpenseTrackerContext
  );

  const [categoryType, setCategoryType] = useState(CategoryType.EXPENSES);
  const [categoryId, setCategoryId] = useState(null);
  const [number, setNumber] = useState(0);
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState("");

  const handleAdd = () => {
    handleAddTransaction({
      amount: +number,
      date: getCurrentDate(date),
      categoryId,
      categoryType,
      comment,
    });
  };

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleChangeCategoryType = (e) => {
    setCategoryType(e.target.value);
    setCategoryId(null);
  };

  const handleChangeCategory = (e) => {
    setCategoryId(e.target.value);
  };

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  const handleNumberChange = (e) => setNumber(e.target.value);

  const disabled = !categoryId || number === 0 || isNaN(+number);

  return (
    <InfoCard>
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        {title}
        <FormContainer title="Amount">
          <TextField
            fullWidth
            placeholder="0.00$"
            variant="standard"
            type="number"
            value={number}
            onChange={handleNumberChange}
          />
        </FormContainer>

        <FormContainer title="Category Type">
          <Select
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
        </FormContainer>
        <FormContainer title="Category">
          <Select
            id="demo-simple-select2"
            required
            value={categoryId}
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
                      style={{ width: 20, height: 20 }}
                    />
                  </Box>
                  {name}
                </MenuItem>
              )
            )}
          </Select>
        </FormContainer>
        <FormContainer title="Description">
          <TextField
            fullWidth
            placeholder="Add a comment"
            variant="outlined"
            multiline
            value={comment}
            onChange={handleCommentChange}
          />
        </FormContainer>
        <FormContainer title="Date">
          <DesktopDatePicker
            inputFormat="yyyy-MM-dd"
            value={date}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </FormContainer>
        <Button variant="outlined" disabled={disabled} onClick={handleAdd}>
          Add
        </Button>
      </Box>
    </InfoCard>
  );
};

export const AddTransactionForm = memo(AddTransactionFormComponent);
