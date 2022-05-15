import React, { memo, useContext } from "react";
import { MenuItem, Select } from "@mui/material";
import { periodValues } from "../../../shared/constants/period-values.constant";
import { ExpenseTrackerContext } from "../../../shared/context/context";

const ChangePeriodComponent = () => {
  const { handeChangePeriod, period } = useContext(ExpenseTrackerContext);

  const changePeriod = (e) => handeChangePeriod(e.target.value);

  return (
    <Select
      id="demo-simple-select1"
      variant="standard"
      value={period}
      onChange={changePeriod}
    >
      {periodValues.map((period) => (
        <MenuItem value={period} key={period}>
          {period}
        </MenuItem>
      ))}
    </Select>
  );
};

export const ChangePeriod = memo(ChangePeriodComponent);
