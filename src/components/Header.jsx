"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const links = [
  { href: "/", title: "Home" },
  { href: "/users", title: "users" },
  { href: "/posts", title: "posts" },
  { href: "/recipes", title: "recipes" },
];
function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const path = usePathname();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RED
      </Typography>
      <Divider />
      <List>
        {links.map((item) => (
          <Link key={item.title} href={item.href}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", marginBottom: "50px", textAlign: "center" }}>
      <AppBar component="nav" position="relative" sx={{ alignItems: "center" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            RED
          </Typography> */}
          <Box
            sx={{ display: { xs: "none", sm: "block" }, textAlign: "center" }}
          >
            {links.map((item) => {
              const activeStyle = {
                color: path === item.href ? "black" : "#fff",
              };
              return (
                <Button
                  key={item}
                  sx={{ backgroundColor: "violet", mx: "5px" }}
                >
                  <Link
                    href={item.href}
                    style={{ ...activeStyle, textDecoration: "none" }}
                  >
                    {item.title}
                  </Link>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
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
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}

export default Header;
