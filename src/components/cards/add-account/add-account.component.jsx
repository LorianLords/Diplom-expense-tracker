import React, { memo } from "react";
import { Box, Button } from "@mui/material";
import { MediumCard } from "../../../shared/components/medium-card";

const AddAccountComponent = ({ title, onClick = () => {} }) => {
  return (
    <MediumCard>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          p: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            height: 120,
          }}
        >
          <Button onClick={onClick} sx={{ fontSize: "20px" }}>
            {title}
          </Button>
        </Box>
      </Box>
    </MediumCard>
  );
};

export const AddAccount = memo(AddAccountComponent);
