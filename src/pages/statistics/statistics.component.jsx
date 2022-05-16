import React from "react";
import { LineChart } from "../../components/charts";
import { Box, Typography } from "@mui/material";
import { ChangePeriod } from "../../components/forms/change-period";
import { MonthBudget } from "../../components/cards/month-budget";
import { MostPopularCategory } from "../../components/cards/most-popular-category";
import { MostExpensiveTransaction } from "../../components/cards/most-expensive-transaction";

export const Statistics = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Statistics
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Typography sx={{ fontSize: 18 }}>show period</Typography>
          <ChangePeriod />
        </Box>
      </Box>
      <Box sx={{ mb: 5, mt: 2 }}>
        <LineChart />
      </Box>
      <Box sx={{ display: "flex", gap: 3 }}>
        <MostPopularCategory title="Most popular category" />
        <MostExpensiveTransaction title="Most Expensive Transaction" />
        <MonthBudget
          width={360}
          title="Month budget"
          subtitle="Monthly payment limit"
        />
      </Box>
    </Box>
  );
};
