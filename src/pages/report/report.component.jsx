import React, { useContext, useState } from "react";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { alpha, Box, Button, styled, Typography } from "@mui/material";
import { ExpenseTrackerContext } from "../../shared/context/context";

const columns = [
  {
    field: "index",
    headerName: "ID",
    width: 70,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 90,
    type: "number",
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "categoryName",
    headerName: "Category",
    width: 130,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "categoryType",
    headerName: "Category type",
    width: 160,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "date",
    headerName: "Date",
    width: 130,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "paymentAccountName",
    headerName: "Payment Account",
    width: 160,
    cellClassName: "super-app-theme--cell",
  },
  {
    field: "comment",
    headerName: "Comment",
    sortable: false,
    width: 160,
    cellClassName: "super-app-theme--cell",
  },
];
const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    "&:hover, &.Mui-hovered": {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));

export const Report = () => {
  const { tableData, deleteTransactions } = useContext(ExpenseTrackerContext);
  const [ids, setIds] = useState([]);

  const handleDelete = () => deleteTransactions(ids);

  const handleChangeIds = (e) => {
    setIds(e);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 5 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
          All Transactions
        </Typography>

        {!!ids.length && (
          <Box>
            <Button color="error" variant="outlined" onClick={handleDelete}>
              Delete selected transactions
            </Button>
          </Box>
        )}
      </Box>

      <Box
        sx={{
          height: 650,
          width: "100%",
          "& .MuiDataGrid-columnHeadersInner": {
            backgroundColor: "#4169E1",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "#fff",
            fontWeight: "bold",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#4169E1",
          },
          "& .super-app-theme--cell": {
            // backgroundColor: "rgba(224, 183, 60, 0.55)",
            color: "#1a3e72",
            fontWeight: "600",
            textAlign: "center",
          },
        }}
      >
        <StripedDataGrid
          rows={tableData}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          onSelectionModelChange={handleChangeIds}
        />
      </Box>
    </Box>
  );
};
