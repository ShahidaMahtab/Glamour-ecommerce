import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BookmarkAddedRoundedIcon from "@mui/icons-material/BookmarkAddedRounded";
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AddTaskIcon from "@mui/icons-material/AddTask";
import useAuth from "../../../hooks/useAuth";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
const drawerWidth = 280;
const clientNavigation = [
  { key: 12, name: "Home", to: "/", icons: <HomeRoundedIcon /> },
  {
    key: 13,
    name: "my Orders",
    to: "/dashboard/myOrders",
    icons: <BookmarkAddedRoundedIcon />,
  },
  {
    key: 14,
    name: "Add Reviews",
    to: "/dashboard/addReviews",
    icons: <RateReviewRoundedIcon />,
  },
  {
    key: 15,
    name: "Payment",
    to: "/dashboard/payment",
    icons: <PaymentRoundedIcon />,
  },
];
const adminNavigation = [
  { key: 19, name: "Home", to: "/", icons: <HomeRoundedIcon /> },
  {
    key: 16,
    name: "Make Admin",
    to: "/dashboard/makeAdmin",
    icons: <PersonAddAltIcon />,
  },

  {
    key: 18,
    name: "Add Products",
    to: "/dashboard/addProducts",
    icons: <AddTaskIcon />,
  },
  {
    key: 17,
    name: "Manage Orders",
    to: "/dashboard/manageOrders",
    icons: <ManageAccountsIcon />,
  },
];
const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, isAdmin } = useAuth();
  const navigation = !isAdmin ? clientNavigation : adminNavigation;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ background: "#202020", minHeight: "100vh" }}>
      <div className="flex items-center mt-12 ml-3">
        <Avatar
          sx={{ background: "purple" }}
          alt={user?.displayName ? user.displayName : "broken"}
          src="/static/images/avatar/2.jpg"
        />
        <div className="flex-shrink-0 h-10">
          <div className="mt-1 ml-2">
            <div className="text-left text-sm font-medium text-white">
              {user?.displayName}
            </div>
            <p className="text-xs text-white">{user?.email}</p>
          </div>
        </div>
      </div>
      <Toolbar />

      <List sx={{ background: "#202020" }}>
        <ListItem>
          <ListItemText>
            {/* clients */}
            {navigation.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                className="block text-white font-bold  hover:text-purple-800"
              >
                <Button color="inherit">
                  <span className="mr-4"> {item.icons}</span>
                  {item.name}
                </Button>
              </Link>
            ))}
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        background: "#202020",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
          },
          ml: { sm: `${drawerWidth}px` },
          background: "#1B1A1A",
        }}
      >
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
          <Typography variant="h6" noWrap component="div">
            My Account
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
          background: "#202020",
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
