import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  CssBaseline,
  Drawer,
} from "@mui/material";
import { NavBarLinks, logo } from "./page-wrapper.data";
import { useNavigate } from "react-router";

const drawerWidth = 246;

export const PageWrapper = ({ window, children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

  const drawer = (
    <div>
      <IconButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        sx={{
          mx: 1,
          mt: 2,
          mb: 3,
        }}
        onClick={() => navigate(logo.link)}
      >
        <img src={logo.icon} alt="logo" />
      </IconButton>
      <List>
        {NavBarLinks.map(({ title, icon, link }) => (
          <ListItem key={title} disablePadding sx={{ my: 3 }}>
            <ListItemButton onClick={() => navigate(link)}>
              <ListItemIcon sx={{ ml: 1 }}>
                <img src={icon} alt="icon" />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={title}
                sx={{ fontWeight: "bold" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
      <CssBaseline />
      <IconButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          mt: 2,
          mx: 2,
          display: { sm: "none" },
          width: "36px",
          height: "36px",
        }}
      >
        <img src={logo.icon} alt="logo" />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
