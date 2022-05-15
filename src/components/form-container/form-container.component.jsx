import React, { memo } from "react";
import { Box, Typography } from "@mui/material";

const FormContainerComponent = ({ children, title }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export const FormContainer = memo(FormContainerComponent);
