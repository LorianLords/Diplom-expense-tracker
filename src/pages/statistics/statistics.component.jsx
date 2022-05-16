import React, { useContext, useMemo } from "react";
import { Line } from "react-chartjs-2";
import { ExpenseTrackerContext } from "../../shared/context/context";

export const Statistics = () => {
  const { incomeChartData, expensesChartData } = useContext(
    ExpenseTrackerContext
  );

  console.log({ incomeChartData, expensesChartData });
  const data = useMemo(
    () => ({
      labels: incomeChartData.labels,
      datasets: [
        {
          label: "Income",
          data: incomeChartData.values,
          fill: true,
          backgroundColor: "rgba(227,121,125,0.2)",
          borderColor: "rgb(175,18,18)",
        },
        {
          label: "Expenses",
          data: expensesChartData.values,
          fill: true,
          backgroundColor: "rgba(111,150,227,0.2)",
          borderColor: "rgb(34,124,225)",
        },
      ],
    }),
    [expensesChartData.labels, incomeChartData.labels, incomeChartData.values]
  );
  return <Line data={data} />;
};
