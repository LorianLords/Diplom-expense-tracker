import React, { memo } from "react";
import { Card } from "@mui/material";

const InfoCardComponent = ({ children }) => {
  return (
    <Card
      sx={{
        p: 3,
        width: 320,
        color: "#000",
        fontSize: 22,
        fontWeight: 600,
        borderRadius: 4,
      }}
    >
      {children}
    </Card>
  );
};

export const InfoCard = memo(InfoCardComponent);
