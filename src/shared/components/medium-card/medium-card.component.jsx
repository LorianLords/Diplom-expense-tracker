import React, { memo } from "react";
import { Box, Card } from "@mui/material";

const MediumCardComponent = ({
  optionalStyles,
  children,
  icon,
  filter = "brightness(0) invert(1)",
  color = "#fff",
  bgcolor = "rgba(236, 236, 236, 0.3)",
}) => {
  return (
    <Card
      sx={{
        p: 1.5,
        width: 312,
        ...optionalStyles,
        color,
        fontSize: 26,
        fontWeight: 500,
        borderRadius: 4,
      }}
    >
      {icon && (
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
              bgcolor,
            }}
          >
            <img
              style={{
                width: 30,
                height: 30,
                filter,
              }}
              src={icon}
              alt="icon"
            />
          </Box>
          {children}
        </Box>
      )}
      {!icon && children}
    </Card>
  );
};

export const MediumCard = memo(MediumCardComponent);
