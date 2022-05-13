import React, { memo } from "react";
import { Box, Card } from "@mui/material";

const InfoCardComponent = ({ optionalStyles, children, icon }) => {
  return (
    <Card
      sx={{
        p: 1.5,
        maxWidth: 312,
        ...optionalStyles,
        color: "#fff",
        fontSize: 26,
        fontWeight: 500,
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            padding: "15px",
            borderRadius: "50%",
            bgcolor: "rgba(236, 236, 236, 0.3)",
          }}
        >
          <img
            style={{
              width: 30,
              height: 30,
              filter: "brightness(0) invert(1)",
            }}
            src={icon}
            alt="icon"
          />
        </Box>
        {children}
      </Box>
    </Card>
  );
};

export const InfoCard = memo(InfoCardComponent);
