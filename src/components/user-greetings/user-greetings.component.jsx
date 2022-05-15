import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import userIcon from "../../assets/icons/default/user.svg";

const UserGreetingsComponent = ({ username }) => {
  return (
    <Box sx={{ display: "flex", gap: 5, alignItems: "cente  r" }}>
      <Box>
        <Typography
          sx={{ color: "#1C1F3E", fontSize: "24px", fontWeight: "bold" }}
        >
          Welcome Back {username}!
        </Typography>
        <Typography sx={{ color: "#AEAEAE", fontSize: "14px" }}>
          Get summary of your online transactions here.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            width: 50,
            height: 50,
            bgcolor: "#eee",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
          }}
        >
          <img style={{ width: 30, height: 30 }} src={userIcon} alt="user" />
        </Box>
        <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
          {username}
        </Typography>
      </Box>
    </Box>
  );
};

export const UserGreetings = memo(UserGreetingsComponent);
