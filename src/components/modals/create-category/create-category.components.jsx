import React, { memo, useContext, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { InfoCard } from "../../../shared/components/info-card";
import { ExpenseTrackerContext } from "../../../shared/context/context";
import { CategoryType } from "../../../shared/types/category-type.types";
import { FormContainer } from "../../form-container";
import { categoryTypes } from "../../../shared/constants/category-types.constant";
import { ColorPicker } from "mui-color";

const CreateCategoryModalComponent = ({ open, handleClose }) => {
  const { categoryIcons, handleAddCategories } = useContext(
    ExpenseTrackerContext
  );

  const [categoryType, setCategoryType] = useState(CategoryType.EXPENSES);

  const [categoryIcon, setCategoryIcon] = useState("");

  const [categoryName, setCategoryName] = useState("");

  const [color, setColor] = useState("transparent");

  const handleCategoryIconChange = (e) => {
    console.log(e);
    setCategoryIcon(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.css.backgroundColor);
  };

  const handleAdd = () => {
    handleAddCategories({
      name: categoryName,
      categoryType,
      iconId: categoryIcon,
      color,
    });
    handleClose();
  };

  const handleCategoryChange = (e) => setCategoryName(e.target.value);

  const handleChangeCategoryType = (e) => {
    setCategoryType(e.target.value);
  };

  const disabled =
    color === "transparent" || categoryName === "" || categoryIcon === "";

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        boxShadow: 24,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <InfoCard width={400}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            Add Category
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <FormContainer title="Category name">
              <TextField
                fullWidth
                placeholder="Category name"
                variant="outlined"
                multiline
                value={categoryName}
                onChange={handleCategoryChange}
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

            <FormContainer title="Icon">
              <Select
                id="demo-simple-select2"
                value={categoryIcon}
                onChange={handleCategoryIconChange}
              >
                {categoryIcons.map(({ iconPath, id }) => (
                  <MenuItem value={id} key={id}>
                    <img
                      style={{ width: 30, height: 30 }}
                      src={iconPath}
                      alt="icon"
                    />
                  </MenuItem>
                ))}
              </Select>
            </FormContainer>

            <FormContainer title="Color">
              <Box
                sx={{
                  display: "flex",
                  "& > div": { alignItems: "center", gap: 2 },
                }}
              >
                <ColorPicker value={color} onChange={handleColorChange} />
              </Box>
            </FormContainer>

            <Button variant="outlined" disabled={disabled} onClick={handleAdd}>
              Add
            </Button>
          </Box>
        </InfoCard>
      </Box>
    </Modal>
  );
};

export const CreateCategoryModal = memo(CreateCategoryModalComponent);
