import React, { useContext, useState } from "react";
import { Box, MenuItem, Select } from "@mui/material";
import { categoryTypes } from "../../shared/constants/category-types.constant";
import { FormContainer } from "../../components/form-container";

import { CategoryType } from "../../shared/types/category-type.types";
import { Pie } from "react-chartjs-2";
import { ExpenseTrackerContext } from "../../shared/context/context";
export const chartColors = [
  "#336699",
  "#99CCFF",
  "#999933",
  "#666699",
  "#CC9933",
  "#006666",
  "#3399FF",
  "#993300",
  "#CCCC99",
  "#666666",
  "#FFCC66",
  "#6699CC",
  "#663366",
  "#9999CC",
  "#CCCCCC",
  "#669999",
  "#CCCC66",
  "#CC6600",
  "#9999FF",
  "#0066CC",
  "#99CCCC",
  "#999999",
  "#FFCC00",
  "#009999",
  "#99CC33",
  "#FF9900",
  "#999966",
  "#66CCCC",
  "#339966",
  "#CCCC33",
  "#003f5c",
  "#665191",
  "#a05195",
  "#d45087",
  "#2f4b7c",
  "#f95d6a",
  "#ff7c43",
  "#ffa600",
  "#EF6F6C",
  "#465775",
  "#56E39F",
  "#59C9A5",
  "#5B6C5D",
  "#0A2342",
  "#2CA58D",
  "#84BC9C",
  "#CBA328",
  "#F46197",
  "#DBCFB0",
  "#545775",
];

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

const pieOptions = {
  legend: {
    display: false,
    position: "right",
    legendCallback: function (chart) {
      // Return the HTML string here.
      console.log(chart);
      return [
        <ul>
          <li>z</li>
          <li>zzzz</li>
          <li>ppp</li>
          <li>adasda</li>
        </ul>,
      ];
    },
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
};

const data = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["a", "b", "c", "d"],
  datasets: [
    {
      data: [300, 50, 100, 50],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors,
    },
  ],
};

const pieData = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["usa", "europe", "africa"],
  datasets: [
    {
      data: [200, 150, 20, 10],
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors,
    },
  ],
};
export const Categories = () => {
  const [categoryType, setCategoryType] = useState(CategoryType.EXPENSES);
  const handleChangeCategoryType = (e) => {
    setCategoryType(e.target.value);
  };

  return (
    <Box>
      <Box sx={{ width: 200 }}>
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
      <Box>
        <Pie data={data} options={pieOptions} />
      </Box>
    </Box>
  );
};

const styles = {
  pieContainer: {
    width: "40%",
    height: "40%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
  relative: {
    position: "relative",
  },
};
